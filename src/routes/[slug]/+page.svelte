<script lang="ts">
  import { onMount } from 'svelte'
  import type { PageData } from './$types'
  import dayjs from 'dayjs'
  import { highlightCode, getHeadDescription } from '$lib/html'
  import Profile from '../../components/Profile.svelte'

  import '../../style/blog/detail.css'

  export let data: PageData
  let headDescription = ''

  onMount(() => {
    data.content = highlightCode(data.content)
    headDescription = getHeadDescription(data.content)
  })
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={headDescription} />
</svelte:head>
<div class="w-full flex justify-between">
  <div class="w-[70%] bg-white rounded-md p-4 sm:p-7 md:px-14">
    <div class="flex flex-col sm:flex-row gap-x-3 text-sm text-black/70 mb-2">
      <span>投稿日：{dayjs(data.createdAt).format('YYYY年MM月DD日')}</span>
      <span>最終更新日：{dayjs(data.updatedAt).format('YYYY年MM月DD日')}</span>
    </div>
    <h1 class="text-3xl font-bold mb-6">{data.title}</h1>
    <div class="content">
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html data.content}
    </div>
  </div>
  <div class="w-[25%]">
    <Profile />
  </div>
</div>
