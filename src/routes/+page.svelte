<script lang="ts">
  import type { PageData } from './$types'
  import dayjs from 'dayjs'
  export let data: PageData
  import { getHeadDescription } from '$lib/html'
</script>

<svelte:head>
  <title>Ryu Blog</title>
  <meta name="description" content="記事一覧です" />
</svelte:head>
<div class="w-full m-auto px-3 sm:px-0">
  <ul class="grid grid-cols-1 gap-y-9">
    {#each data.contents as content}
      <li class="bg-white rounded-lg p-5">
        <div class="flex gap-x-3 flex-col sm:flex-row text-xs text-black/70 mb-2">
          <span>投稿日：{dayjs(content.createdAt).format('YYYY年MM月DD日')}</span>
          <span>最終更新日：{dayjs(content.updatedAt).format('YYYY年MM月DD日')}</span>
        </div>
        <div>
          {#if content.tags.length > 0}
            <div class="flex gap-x-3 text-sm text-black/70 mb-2">
              {#each content.tags as tag}
                <div
                  class="bg-[#AFDEEC]/50 hover:bg-[#AFDEEC] text-black/50 hover:text-white text-sm font-bold py-1 px-2 rounded-md cursor-pointer"
                >
                  {tag.name}
                </div>
              {/each}
            </div>
          {/if}
        </div>
        <h3 class="text-xl sm:text-2xl mb-2">
          {content.title}
        </h3>
        <a href={content.id} class="group">
          <div class="grid grid-cols-1 sm:grid-cols-4 sm:gap-x-2">
            <div class="w-full h-[150px]">
              <img class="w-full h-full object-contain" src={content.eyecatch?.url} width="1" height="1" alt="" />
            </div>
            <div
              class="col-span-3 break-words h-full line-clamp-6 leading-[1.55rem] group-hover:underline group-hover:underline-offset-4"
            >
              <!-- eslint-disable-next-line svelte/no-at-html-tags -->
              {@html getHeadDescription(content.content)}
            </div>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</div>
