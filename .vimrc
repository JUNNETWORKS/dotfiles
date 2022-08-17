"-------------------------------------------------------------------------------
" Vimの設定ファイルの大元
"
" なるべく分野や対象ごとに設定ファイルを分けてそれをsourceで読み込む形が良いかも
"-------------------------------------------------------------------------------


" init autocmd. autocmd の重複を避ける用. https://maku77.github.io/vim/settings/autocmd.html
autocmd!
" set script encoding
scriptencoding utf-8
" stop loading config if it's on tiny or small
if !1 | finish | endif

let mapleader = "\<Space>"
set number
set nocompatible
set fileencodings=utf-8,sjis,euc-jp,latin
set encoding=utf-8
set title
set autoindent
set background=dark
set nobackup
set hlsearch
set showcmd
set cmdheight=1
set laststatus=2
set scrolloff=10
set expandtab
" normalモードでコマンド候補を表示する
set wildmenu
set wildmode=longest:full,full

" Don't redraw while executing macros (good performance config)
set lazyredraw

" Ignore case when searching
set ignorecase

" タブ文字などを見えるようにする
" https://blog.delphinus.dev/2011/08/display-invisible-characters-on-vim.html
set list
set listchars=tab:»-,trail:-

" 今いる行全体に下線が引かれる
set cursorline

" Be smart when using tabs ;)
set smarttab
" indents
filetype indent on
set shiftwidth=2
set tabstop=2
set ai "Auto indent
set si "Smart indent
set wrap "Wrap lines 行折返し
set backspace=start,eol,indent
" Finding files - Search down into subfolders
set path+=**
set wildignore+=*/node_modules/*


"-------------------------------------------------------------------------------
" ウィンドウ分割を最大化する関数
" https://qiita.com/grohiro/items/e3dbcc93510bc8c4c812
"-------------------------------------------------------------------------------
let g:toggle_window_size = 0
function! ToggleWindowSize()
  if g:toggle_window_size == 1
    exec "normal \<C-w>="
    let g:toggle_window_size = 0
  else
    :resize
    :vertical resize
    let g:toggle_window_size = 1
  endif
endfunction
" sm キーで最大化
nnoremap sm :call ToggleWindowSize()<CR>

"-------------------------------------------------------------------------------
" vim の標準ファイラの netrw の設定
" https://qiita.com/gorilla0513/items/bf2f78dfec67242f5bcf
"-------------------------------------------------------------------------------

filetype plugin on
" ファイルツリーの表示形式、1にするとls -laのような表示になります
let g:netrw_liststyle=1
" ヘッダを非表示にする
let g:netrw_banner=0
" サイズを(K,M,G)で表示する
let g:netrw_sizestyle="H"
" 日付フォーマットを yyyy/mm/dd(曜日) hh:mm:ss で表示する
let g:netrw_timefmt="%Y/%m/%d(%a) %H:%M:%S"
" プレビューウィンドウを垂直分割で表示する
let g:netrw_preview=1

"-------------------------------------------------------------------------------
" Colorscheme
"-------------------------------------------------------------------------------
syntax enable
let g:solarized_termcolors=256
colorscheme solarized

" status line
let g:airline#extensions#tabline#enabled = 1

"-------------------------------------------------------------------------------
" imports
"-------------------------------------------------------------------------------

" Key map
source ~/.vim/.vimrc.maps

" Plugin
source ~/.vim/plugins.vim
source ~/.vim/config/lsp.vim
source ~/.vim/config/vsnip.vim
