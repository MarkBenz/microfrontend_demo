<template>
  <div class="h-screen">
    <div class="header h-[10%] bg-black text-white px-4">
      <ul class="h-full flex flex-row items-center">
        <NuxtLink class="h-full hover:bg-sky-700" to="/"><li class="px-4 h-full flex items-center text-2xl">MICROFRONTEND DEMO</li></NuxtLink>
        <NuxtLink class="h-full hover:bg-sky-700" to="/appA"><li class="px-4 h-full flex items-center">App A</li></NuxtLink>
        <NuxtLink class="h-full hover:bg-sky-700" to="/appB"><li class="px-4 h-full flex items-center">App B</li></NuxtLink>
      </ul>
    </div>
    <div class="container h-[80%] w-screen max-w-none">
      <NuxtPage></NuxtPage>
    </div>
    <div class="footer h-[10%] bg-black text-white flex flex-row items-center px-4">
      <h1>FOOTER</h1>
    </div>
  </div>
</template>

<script setup>
</script>