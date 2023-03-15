<template>
  <div class="h-full w-full">
    <RemoteAppA></RemoteAppA>
  </div>
</template>

<script setup>
    const RemoteAppA = defineAsyncComponent(() => import("app-a/app.vue"));
</script>

<style lang="scss" scoped>

</style>