" vim-vsnip configuration
" https://github.com/hrsh7th/vim-vsnip

" スニペットのあるディレクトリを登録
if isdirectory("/mnt/c/Users/JUN/AppData/Roaming/Code/User/snippets")
  " WSL 用設定
  let g:vsnip_snippet_dir = "/mnt/c/Users/JUN/AppData/Roaming/Code/User/snippets/python.json"
endif
