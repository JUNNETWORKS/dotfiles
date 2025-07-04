# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a personal dotfiles repository for JUN_NETWORKS, containing configuration files and automated setup scripts for development environments across macOS and Debian-based systems.

## Setup Commands

**Initial Setup:**
```bash
cd ~
git clone <this_repository_url>
cd dotfiles
./env_setup.sh
```

**Platform-specific Commands:**
- macOS: `brew bundle --file ~/dotfiles/Brewfile` (installs applications from Brewfile)
- Debian: `./_env_setup.debian.sh` (installs packages via apt)
- Common: `./_env_setup.common.sh` (installs Node.js via mise)

## Architecture

**Core Setup Flow:**
1. `env_setup.sh` - Main entry point that creates symlinks and delegates to platform-specific scripts
2. Platform detection automatically runs appropriate setup script (_env_setup.osx.sh or _env_setup.debian.sh)
3. Common cross-platform setup runs via _env_setup.common.sh

**Configuration Management:**
- All config files are symlinked from ~/dotfiles to their respective locations
- Symlinks are created for zsh, vim, tmux, git, ranger, and Claude Code configurations
- PowerLevel10k theme is automatically cloned for zsh

**Key Components:**
- **Brewfile**: macOS package management via Homebrew Bundle
- **_env_setup.debian.sh**: Comprehensive Debian package installation with apt
- **scripts/ide.sh**: tmux window splitting for development workflow
- **git/**: Global git configurations including .gitignore_global

**Development Tools Managed:**
- Shell: zsh with PowerLevel10k theme
- Editor: vim with custom configuration
- Terminal multiplexer: tmux with powerline
- Version control: git with global ignore patterns
- File manager: ranger
- Development environment: Node.js via mise, various CLI tools

## Key Files Structure

```
dotfiles/
   env_setup.sh              # Main setup script
   _env_setup.*.sh          # Platform-specific setup
   Brewfile                 # macOS package definitions
   .{zshrc,vimrc,tmux.conf} # Shell and editor configs
   git/                     # Git-specific configurations
   scripts/ide.sh           # tmux development layout
   .claude/CLAUDE.md        # This file
```