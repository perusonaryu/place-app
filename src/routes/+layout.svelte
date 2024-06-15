<script lang="ts">
  import { page } from '$app/stores'
  import '../app.css'

  $: pathname = $page.url.pathname
</script>

<div>
  <nav>
    <ul class="flex gap-2">
      <li><a href="/" class:active={pathname === '/'}>Top</a></li>
      <li><a href="/about" class:active={pathname === '/about'}>About</a></li>
      <li><a href="/user" class:active={pathname === '/user'}>User List</a></li>
    </ul>
  </nav>
  <slot></slot>
</div>


<style>
  .active {
    color: red;
    font-weight: 900;
  }
</style>
