<script lang="ts">
  import { type Blog } from '../types'
  import dayjs from 'dayjs'
  import { getHeadDescription } from '$lib/html'
  export let blog: Blog
</script>

<li class="bg-white rounded-lg p-5">
  <div class="flex gap-x-3 flex-col sm:flex-row text-xs text-black/70 mb-2">
    <span>投稿日：{dayjs(blog.createdAt).format('YYYY年MM月DD日')}</span>
    <span>最終更新日：{dayjs(blog.updatedAt).format('YYYY年MM月DD日')}</span>
  </div>
  <h3 class="text-xl sm:text-2xl mb-2">
    {blog.title}
  </h3>
  <div>
    {#if blog.tags.length > 0}
      <div class="flex gap-x-3 text-sm text-black/70 mb-2">
        {#each blog.tags as tag}
          <a href={'/tag/' + tag.id}>
            <div class=" hover:bg-[#AFDEEC]/20 text-sm py-1 px-2 border rounded-md cursor-pointer">
              {tag.name}
            </div>
          </a>
        {/each}
      </div>
    {/if}
  </div>
  <a href={blog.id} class="group">
    <div class="grid grid-cols-1 sm:grid-cols-4 sm:gap-x-2">
      <div class="w-full h-[120px]">
        <img class="w-full h-full object-contain" src={blog.eyecatch?.url} width="1" height="1" alt="" />
      </div>
      <div
        class="col-span-3 break-words h-full line-clamp-6 leading-[1.55rem] group-hover:underline group-hover:underline-offset-4"
      >
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html getHeadDescription(blog.content)}
      </div>
    </div>
  </a>
</li>
