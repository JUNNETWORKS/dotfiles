# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a personal dotfiles repository for managing development environment configurations. It includes shell configurations, git settings, utility scripts, and macOS/Linux setup automation.

## Development Commands

### Setup and Installation
```bash
# Initial setup - creates symlinks and runs all setup scripts automatically
./env_setup.sh
```

### Package Management
```bash
# Install/update macOS packages via Homebrew
brew bundle --file=Brewfile

# Install/update Homebrew packages
brew bundle install
```

### Git Operations
```bash
# AI-powered commit message generation
./scripts/ai-commit.sh
./scripts/ai-commit.sh --dry-run
./scripts/ai-commit.sh --interactive

# Create temporary git worktree
./scripts/create-worktree.sh <branch-name>
./scripts/create-worktree.sh <branch-name> <directory>
./scripts/create-worktree.sh <branch-name> --init-command "npm install"
```

### Development Environment
```bash
# Launch tmux development layout
./scripts/ide.sh
```

## Architecture and Structure

### Core Components
- **env_setup.sh**: Main setup script that creates symlinks for all configuration files and automatically runs platform-specific setup
- **Brewfile**: Homebrew package definitions for macOS dependencies
- **scripts/**: Utility scripts for development workflow
- **.claude_global/**: Global Claude Code configuration (symlinked to ~/.claude/)

### Configuration Management
The repository uses a symlink-based approach where `env_setup.sh` creates symbolic links from the dotfiles directory to their expected locations in the home directory:

- Shell: `.zshrc`, `.p10k.zsh` (Powerlevel10k theme)
- Editor: `.vimrc`, `.vim/`
- Terminal: `.tmux.conf`, `.tmux.powerline.conf`
- Git: `.gitconfig`, `.gitignore_global`
- Tools: ranger config, commitizen config

### Script Architecture
- **ai-commit.sh**: Integrates with Anthropic API to generate conventional commit messages
- **create-worktree.sh**: Manages temporary git worktrees with automatic cleanup
- **ide.sh**: Simple tmux session management for development

### Platform Support
- **macOS**: Primary platform with Homebrew package management
- **Linux**: Debian-based systems support via `_env_setup.debian.sh`
- **Cross-platform**: Common setup shared via `_env_setup.common.sh`

## Key Features

### AI-Powered Git Workflow
The `ai-commit.sh` script provides intelligent commit message generation:
- Analyzes staged changes with `git diff --cached`
- Generates conventional commit format messages
- Supports dry-run and interactive modes
- Requires `ANTHROPIC_API_KEY` environment variable

### Temporary Worktree Management
The `create-worktree.sh` script enables isolated branch development:
- Creates temporary git worktrees for feature branches
- Automatic cleanup on shell exit
- Supports initialization commands
- Cross-platform path handling

### Development Environment Setup
- Powerlevel10k zsh theme integration
- Tmux configuration with powerline status
- Comprehensive tool installation via Brewfile
- Automated zsh completion setup

## Language Notes

This repository includes Japanese documentation and comments, reflecting the user's preference for Japanese in development contexts.