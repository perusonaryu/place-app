<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
  import ArticleList from '../../../components/ArticleList.svelte'
  console.log('tag', data)
</script>

<svelte:head>
  <title>Ryu Blog</title>
  <meta name="description" content="記事一覧です" />
</svelte:head>
<div class="w-full m-auto px-3 sm:px-0">
  <ul class="grid grid-cols-1 gap-y-9">
    {#each data.contents as content}
      <ArticleList blog={content} />
    {/each}
  </ul>
</div>
