#!/bin/bash

# AI-powered commit message generator using Anthropic API
# Usage: ./ai-commit.sh [--dry-run] [--interactive]

set -e

# Configuration
ANTHROPIC_API_URL="https://api.anthropic.com/v1/messages"
ANTHROPIC_MODEL="claude-3-5-sonnet-20241022"
MAX_DIFF_SIZE=8000  # Limit diff size to avoid API limits

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Parse command line arguments
DRY_RUN=false
INTERACTIVE=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        --interactive)
            INTERACTIVE=true
            shift
            ;;
        -h|--help)
            echo "Usage: $0 [--dry-run] [--interactive]"
            echo "  --dry-run      Show generated message without committing"
            echo "  --interactive  Allow editing the generated message"
            echo ""
            echo "Environment variables:"
            echo "  ANTHROPIC_API_KEY  Your Anthropic API key (required)"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}Error: Not in a git repository${NC}"
    exit 1
fi

# Check if Anthropic API key is set
if [[ -z "$ANTHROPIC_API_KEY" ]]; then
    echo -e "${RED}Error: ANTHROPIC_API_KEY environment variable is not set${NC}"
    echo "Please set your Anthropic API key:"
    echo "export ANTHROPIC_API_KEY='your-api-key-here'"
    exit 1
fi

# Check if there are staged changes
if git diff --cached --quiet; then
    echo -e "${YELLOW}No staged changes found. Staging all changes...${NC}"
    git add .
    
    # Check again if there are any changes to commit
    if git diff --cached --quiet; then
        echo -e "${RED}No changes to commit${NC}"
        exit 1
    fi
fi

echo -e "${BLUE}Analyzing staged changes...${NC}"

# Get the staged diff
STAGED_DIFF=$(git diff --cached)

# Check if diff is too large
if [[ ${#STAGED_DIFF} -gt $MAX_DIFF_SIZE ]]; then
    echo -e "${YELLOW}Warning: Diff is large (${#STAGED_DIFF} chars). Truncating to ${MAX_DIFF_SIZE} chars...${NC}"
    STAGED_DIFF=$(echo "$STAGED_DIFF" | head -c $MAX_DIFF_SIZE)
    STAGED_DIFF="${STAGED_DIFF}...\n[TRUNCATED]"
fi

# Get recent commit messages for context
RECENT_COMMITS=$(git log --oneline -10 --format="%s" 2>/dev/null || echo "")

# Create the prompt for the AI
PROMPT="You are an expert developer creating a concise, conventional commit message.

Analyze the following git diff and generate a commit message that follows the same style and conventions as the recent commits in this repository.

Guidelines:
1. Study the recent commit patterns and match their style (prefix, format, scope usage)
2. Use present tense, imperative mood (\"add feature\" not \"added feature\")
3. Keep the first line under 50 characters
4. Be specific about what changed
5. Follow the established patterns from recent commits

Recent commit messages for reference (match this style):
${RECENT_COMMITS}

Git diff to analyze:
\`\`\`diff
${STAGED_DIFF}
\`\`\`

Generate only the commit message that naturally fits with the recent commit history, no explanations or additional text."

# Make API call to Anthropic
echo -e "${BLUE}Generating commit message...${NC}"

RESPONSE=$(curl -s -X POST "$ANTHROPIC_API_URL" \
    -H "Content-Type: application/json" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -d "{
        \"model\": \"$ANTHROPIC_MODEL\",
        \"max_tokens\": 150,
        \"messages\": [
            {
                \"role\": \"user\",
                \"content\": $(echo "$PROMPT" | jq -R -s .)
            }
        ]
    }")

# Check if API call was successful
if [[ $? -ne 0 ]]; then
    echo -e "${RED}Error: Failed to call Anthropic API${NC}"
    exit 1
fi

# Extract the commit message from the response
COMMIT_MESSAGE=$(echo "$RESPONSE" | jq -r '.content[0].text' 2>/dev/null)

# Check if we got a valid response
if [[ -z "$COMMIT_MESSAGE" ]] || [[ "$COMMIT_MESSAGE" == "null" ]]; then
    echo -e "${RED}Error: Failed to generate commit message${NC}"
    echo "API Response: $RESPONSE"
    exit 1
fi

# Clean up the commit message (remove any quotes or extra whitespace)
COMMIT_MESSAGE=$(echo "$COMMIT_MESSAGE" | sed 's/^["'\'']*//g' | sed 's/["'\'']*$//g' | xargs)

echo -e "${GREEN}Generated commit message:${NC}"
echo -e "${YELLOW}$COMMIT_MESSAGE${NC}"

# Handle dry run
if [[ "$DRY_RUN" == true ]]; then
    echo -e "${BLUE}Dry run mode - no commit created${NC}"
    exit 0
fi

# Handle interactive mode
if [[ "$INTERACTIVE" == true ]]; then
    echo ""
    read -p "Do you want to edit this message? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        # Create a temporary file for editing
        TEMP_FILE=$(mktemp)
        echo "$COMMIT_MESSAGE" > "$TEMP_FILE"
        
        # Use the user's preferred editor or fall back to vim
        ${EDITOR:-vim} "$TEMP_FILE"
        
        # Read the edited message
        COMMIT_MESSAGE=$(cat "$TEMP_FILE")
        rm "$TEMP_FILE"
        
        echo -e "${GREEN}Using edited message:${NC}"
        echo -e "${YELLOW}$COMMIT_MESSAGE${NC}"
    fi
fi

# Final confirmation
echo ""
read -p "Proceed with commit? (Y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Nn]$ ]]; then
    echo -e "${YELLOW}Commit cancelled${NC}"
    exit 0
fi

# Create the commit
echo -e "${BLUE}Creating commit...${NC}"
git commit -m "$COMMIT_MESSAGE"

echo -e "${GREEN}Commit created successfully!${NC}"