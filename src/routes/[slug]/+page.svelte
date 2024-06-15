<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
  $: console.log(data.content)
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<h2>{data.title}</h2>
<div>
  {@html data.content}
</div>

<style>
    
</style>
