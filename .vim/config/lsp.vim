let g:lsp_diagnostics_enabled = 1
let g:lsp_diagnostics_echo_cursor = 1
let g:lsp_signs_error = {'text': '✗'}
let g:lsp_signs_warning = {'text': '‼'}
let g:lsp_signs_information = {'text': 'i'}
let g:lsp_signs_hint = {'text': '?'}
let g:asyncomplete_auto_popup = 1
let g:asyncomplete_auto_completeopt = 0
let g:asyncomplete_popup_delay = 100
let g:lsp_text_edit_enabled = 1

" Tab completion
inoremap <expr> <Tab>   pumvisible() ? "\<C-n>" : "\<Tab>"
inoremap <expr> <S-Tab> pumvisible() ? "\<C-p>" : "\<S-Tab>"
inoremap <expr> <cr>    pumvisible() ? asyncomplete#close_popup() : "\<cr>"

" Jump
" 定義ジャンプ(デフォルトのctagsによるジャンプを上書きしているのでこのあたりは好みが別れます)
nnoremap gd :<C-u>LspDefinition<CR>
" 定義情報のホバー表示
nnoremap K :<C-u>LspHover<CR>
" 名前変更
nnoremap <Leader>rn :<C-u>LspRename<CR>
" 参照検索
nnoremap gr :<C-u>LspReferences<CR>
" Lint結果をQuickFixで表示
nnoremap <Leader>f :<C-u>LspDocumentDiagnostics<CR>
" テキスト整形
nnoremap <Leader>fm :<C-u>LspDocumentFormat<CR>
" オムニ補完を利用する場合、定義の追加
set omnifunc=lsp#complete
