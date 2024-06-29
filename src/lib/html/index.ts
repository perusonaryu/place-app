import { load } from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css' //

export function highlightCode(stringHtml: string) {
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
  const $ = load(stringHtml)
  return $($('p')[0]).text()
}
