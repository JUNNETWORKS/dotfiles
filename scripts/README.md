# Scripts

Collection of utility scripts for development workflow.

## ai-commit.sh

AI-powered commit message generator using Anthropic's Claude API.

### Setup

1. Get your Anthropic API key from https://console.anthropic.com/
2. Set the environment variable:
   ```bash
   export ANTHROPIC_API_KEY='your-api-key-here'
   ```
3. Add to your shell profile (`.zshrc`, `.bashrc`) to persist across sessions

### Usage

```bash
# Basic usage - generates and commits automatically
./scripts/ai-commit.sh

# Dry run - see the generated message without committing
./scripts/ai-commit.sh --dry-run

# Interactive mode - allows editing the generated message
./scripts/ai-commit.sh --interactive

# Combine flags
./scripts/ai-commit.sh --dry-run --interactive
```

### Features

- Analyzes staged git changes using `git diff --cached`
- Generates conventional commit messages (feat, fix, docs, etc.)
- Uses recent commit history for context
- Handles large diffs by truncating if needed
- Interactive editing support
- Comprehensive error handling
- Colorized output for better UX

### Requirements

- Git repository
- `curl` and `jq` commands
- Valid Anthropic API key
- Internet connection

## ide.sh

Simple tmux layout script for development workflow - creates a split window layout for coding.