<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
  import ArticleList from '../components/ArticleList.svelte'
</script>

<svelte:head>
  <title>Ryu Blog</title>
  <meta name="description" content="記事一覧です" />
</svelte:head>

<ArticleList blogs={data.contents} />
