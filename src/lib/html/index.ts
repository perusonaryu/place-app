import { load } from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css' //

// メソッド使用時は下記highlight用のcssの読み込みも必要
// import 'highlight.js/styles/default.css'
export function highlightCode(stringHtml: string) {
  if (!stringHtml) return 'not stringHtml'
  const $ = load(stringHtml)
  $('code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  return $.html()
}

// ページのヘッダーに記載するためのディスクリプションを取得する
export function getHeadDescription(stringHtml: string) {
  if (!stringHtml) return 'not description'
  const $ = load(stringHtml)
  return $($('p')[0]).text()
}
