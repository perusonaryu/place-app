<script lang="ts">
  import { onMount } from 'svelte'
  import type { PageData } from './$types'
  import dayjs from 'dayjs'
  import { load } from 'Cheerio'
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
  <div>{dayjs(data.updatedAt).format('YYYY-MM-DD')}</div>
  <h1 class="text-3xl font-bold mb-6">{data.title}</h1>
  <div class="content">
    {@html data.content}
  </div>
</div>
