<script lang="ts">
  import { page } from '$app/stores'
  import '../style/app.css'

  $: pathname = $page.url.pathname
</script>

<div>
  <header>
    <h1 class="text-center text-[#AFDEEC] text-4xl mb-[100px] p-5">
      <a href="/">RyuBlog</a>
    </h1>
  </header>
  <div class="max-w-[960px] m-auto">
    <slot></slot>
  </div>
</div>
