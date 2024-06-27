<script lang="ts">
  import type { PageData } from './$types'
  import dayjs from 'dayjs'
  export let data: PageData
  import { load } from 'Cheerio'

  function getContentByText(content: string): string {
    const $ = load(content)
    let text = ''
    $('p').each((_, elm) => {
      text += `${$(elm).text()}`
    })
    return text
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="max-w-[960px] m-auto">
  <ul class="grid grid-cols-1 gap-y-9">
    {#each data.contents as content}
      <li>
        <div class="text-xs">{dayjs(content.updatedAt).format('YYYY-MM-DD')}</div>
        <a href={content.id}>
          <h3 class="text-2xl mb-2">
            {content.title}
          </h3>
          <div class="grid grid-cols-4 gap-x-2">
            <div class="w-full h-[150px]">
              <img class="w-full h-full object-cover" src={content.eyecatch?.url} width="1" height="1" alt="" />
            </div>
            <div class="col-span-3 break-words h-full line-clamp-6 leading-[1.55rem]">
              <!-- eslint-disable-next-line svelte/no-at-html-tags -->
              {@html getContentByText(content.content)}
            </div>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</div>
