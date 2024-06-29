<script lang="ts">
  import { onMount } from 'svelte'
  import type { PageData } from './$types'
  import dayjs from 'dayjs'
  import { load } from 'cheerio'
  import hljs from 'highlight.js'

  import '../../style/blog/detail.css'
  import 'highlight.js/styles/default.css' // Highlight.jsのスタイルをインポート

  export let data: PageData

  function highlightCode() {
    const $ = load(data.content)
    $('code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })

    return (data.content = $.html())
  }

  onMount(() => {
    highlightCode()
  })
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<div>
  <div class="flex gap-x-3 text-sm text-black/70 mb-2">
    <span>投稿日：{dayjs(data.createdAt).format('YYYY年MM月DD日')}</span>
    <span>最終更新日：{dayjs(data.updatedAt).format('YYYY年MM月DD日')}</span>
  </div>
  <h1 class="text-3xl font-bold mb-6">{data.title}</h1>
  <div class="content">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html data.content}
  </div>
</div>
