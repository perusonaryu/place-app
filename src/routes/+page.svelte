<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
  import ArticleList from '../components/ArticleList.svelte'
  import Profile from '../components/Profile.svelte'
</script>

<svelte:head>
  <title>Ryu Blog</title>
  <meta name="description" content="記事一覧です" />
</svelte:head>
<div class="w-full flex justify-between">
  <div class="w-full lg:w-[70%] px-3 sm:px-0">
    <ul class="grid grid-cols-1 gap-y-9">
      {#each data.contents as content}
        <ArticleList blog={content} />
      {/each}
    </ul>
  </div>
  <div class="lg:block lg:w-[25%] hidden">
    <Profile />
  </div>
</div>
