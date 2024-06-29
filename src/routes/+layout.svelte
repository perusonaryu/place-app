<script lang="ts">
  import '../style/app.css'
</script>

<div class="min-h-screen relative pb-14">
  <header class="mb-5 sm:mb-16">
    <h1 class="text-center text-[#AFDEEC] text-4xl p-5">
      <a href="/">RyuBlog</a>
    </h1>
  </header>
  <div class="sm:max-w-[550px] md:max-w-[750px] lg:max-w-[960px] box-border mx-3 md:mx-auto mb-10">
    <slot></slot>
  </div>
  <footer class="bg-[#393C3C] p-5 absolute bottom-0 w-full">
    <p class="text-xs text-white text-center">&copy; 2024 RyuBlog Inc.</p>
  </footer>
</div>
