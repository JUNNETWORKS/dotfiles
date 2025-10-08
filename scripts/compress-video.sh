#!/bin/bash

# Video compression script using ffmpeg
# Usage: ./compress-video.sh [options] <input_file> [input_file2 ...]

set -e

# Configuration
DEFAULT_CRF=18

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Parse command line arguments
DRY_RUN=false
CRF=$DEFAULT_CRF
OUTPUT_FILE=""
INPUT_FILES=()

show_help() {
    echo "Usage: $0 [options] <input_file> [input_file2 ...]"
    echo ""
    echo "Options:"
    echo "  --crf <value>      CRF value for compression (default: $DEFAULT_CRF)"
    echo "                     Lower = better quality, higher file size (0-51)"
    echo "  --output <file>    Output file name (only for single input)"
    echo "                     Default: compressed_<original_name>"
    echo "  --dry-run          Show ffmpeg command without executing"
    echo "  -h, --help         Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 video.mp4                    # Output: compressed_video.mp4"
    echo "  $0 --crf 23 video.mp4           # Use CRF 23"
    echo "  $0 --output out.mp4 video.mp4   # Output: out.mp4"
    echo "  $0 *.mp4                        # Compress all mp4 files"
    exit 0
}

while [[ $# -gt 0 ]]; do
    case $1 in
        --crf)
            if [[ -z "$2" ]] || ! [[ "$2" =~ ^[0-9]+$ ]]; then
                echo -e "${RED}Error: --crf requires a numeric value${NC}"
                exit 1
            fi
            CRF="$2"
            shift 2
            ;;
        --output)
            if [[ -z "$2" ]]; then
                echo -e "${RED}Error: --output requires a file name${NC}"
                exit 1
            fi
            OUTPUT_FILE="$2"
            shift 2
            ;;
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        -h|--help)
            show_help
            ;;
        -*)
            echo -e "${RED}Unknown option: $1${NC}"
            show_help
            ;;
        *)
            INPUT_FILES+=("$1")
            shift
            ;;
    esac
done

# Validate inputs
if [[ ${#INPUT_FILES[@]} -eq 0 ]]; then
    echo -e "${RED}Error: No input files specified${NC}"
    show_help
fi

if [[ -n "$OUTPUT_FILE" ]] && [[ ${#INPUT_FILES[@]} -gt 1 ]]; then
    echo -e "${RED}Error: --output can only be used with a single input file${NC}"
    exit 1
fi

# Validate CRF range
if [[ $CRF -lt 0 ]] || [[ $CRF -gt 51 ]]; then
    echo -e "${YELLOW}Warning: CRF value should be between 0 and 51. Using $CRF anyway.${NC}"
fi

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo -e "${RED}Error: ffmpeg is not installed${NC}"
    echo "Install it with: brew install ffmpeg"
    exit 1
fi

# Process each input file
for input_file in "${INPUT_FILES[@]}"; do
    # Check if input file exists
    if [[ ! -f "$input_file" ]]; then
        echo -e "${RED}Error: Input file not found: $input_file${NC}"
        continue
    fi

    # Generate output filename
    if [[ -n "$OUTPUT_FILE" ]]; then
        output_file="$OUTPUT_FILE"
    else
        # Get directory, basename, and extension
        dir=$(dirname "$input_file")
        basename=$(basename "$input_file")
        filename="${basename%.*}"
        extension="${basename##*.}"

        # Create output filename
        if [[ "$dir" == "." ]]; then
            output_file="compressed_${filename}.${extension}"
        else
            output_file="${dir}/compressed_${filename}.${extension}"
        fi
    fi

    # Check if output file already exists
    if [[ -f "$output_file" ]] && [[ "$DRY_RUN" == false ]]; then
        echo -e "${YELLOW}Warning: Output file already exists: $output_file${NC}"
        read -p "Overwrite? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${BLUE}Skipping: $input_file${NC}"
            continue
        fi
    fi

    # Build ffmpeg command
    ffmpeg_cmd="ffmpeg -i \"$input_file\" -crf $CRF \"$output_file\""

    echo -e "${BLUE}Processing: $input_file${NC}"
    echo -e "${BLUE}Output: $output_file${NC}"
    echo -e "${BLUE}CRF: $CRF${NC}"

    if [[ "$DRY_RUN" == true ]]; then
        echo -e "${YELLOW}[DRY RUN] Command:${NC}"
        echo "$ffmpeg_cmd"
    else
        # Get original file size
        original_size=$(du -h "$input_file" | cut -f1)

        # Execute ffmpeg
        echo -e "${GREEN}Compressing...${NC}"
        if ffmpeg -i "$input_file" -crf "$CRF" "$output_file" -y; then
            # Get compressed file size
            compressed_size=$(du -h "$output_file" | cut -f1)

            echo -e "${GREEN}✓ Compression complete${NC}"
            echo -e "  Original size:   $original_size"
            echo -e "  Compressed size: $compressed_size"
        else
            echo -e "${RED}✗ Compression failed${NC}"
            exit 1
        fi
    fi

    echo ""
done

if [[ "$DRY_RUN" == true ]]; then
    echo -e "${YELLOW}Dry run complete. No files were modified.${NC}"
else
    echo -e "${GREEN}All compressions complete!${NC}"
fi
