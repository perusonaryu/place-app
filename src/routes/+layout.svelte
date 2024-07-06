<script lang="ts">
  import '../style/app.css'
</script>

<div class="min-h-screen relative pb-14">
  <header class="mb-5 sm:mb-16">
    <h1 class="text-center text-[#AFDEEC] text-4xl p-5">
      <a href="/">RyuBlog</a>
    </h1>
  </header>
  <div
    class="flex justify-center w-full md:max-w-[900px] lg:max-w-[1000px] box-border mx-auto mb-10 px-4 md:px-8 lg:px-0"
  >
    <slot></slot>
  </div>
  <footer class="bg-[#393C3C] p-5 absolute bottom-0 w-full">
    <p class="text-xs text-white text-center">&copy; 2024 RyuBlog Inc.</p>
  </footer>
</div>
