<!--
<template>
  <div class="h-full w-full">
    <RemoteAppB></RemoteAppB>
  </div>
</template>

<script setup>
   const RemoteAppB = defineAsyncComponent(() => import("app-b/app.vue"));
</script>

<style lang="scss" scoped>

</style>-->

<template>
  <div class="h-full w-full">
    <RemoteAppB v-if="RemoteAppB" />
  </div>
</template>

<script setup>
import styleLoader from 'style-loader'

const loadRemoteAppB = async () => {
  // Load the remote app...
  const remoteApp = await import('app-b/app')

  // Load the remote app's styles
  const remoteAppStyles = await import('app-b/styles')
  styleLoader(remoteAppStyles.default)

  return remoteApp.default
}

const RemoteAppB = ref(null)

onMounted(async () => {
  RemoteAppB.value = await loadRemoteAppB()
})
</script>

<style lang="scss" scoped>
</style>

