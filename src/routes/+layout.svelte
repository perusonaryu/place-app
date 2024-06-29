<script lang="ts">
  import '../style/app.css'
</script>

<div>
  <header class="mb-16">
    <h1 class="text-center text-[#AFDEEC] text-4xl p-5">
      <a href="/">RyuBlog</a>
    </h1>
  </header>
  <div class="max-w-[960px] m-auto mb-10">
    <slot></slot>
  </div>
  <footer class="bg-[#393C3C] p-5 absolute bottom-0 w-full">
    <p class="text-xs text-white text-center">&copy; 2024 RyuBlog Inc.</p>
  </footer>
</div>
