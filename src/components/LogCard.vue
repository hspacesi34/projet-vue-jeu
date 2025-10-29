<script setup>
defineProps({
  logs: Array
})
</script>

<template>
<div class="bg-base-100 shadow-xl h-64">
  <div class="bg-black w-full h-full p-4  overflow-y-scroll">
    <pre><code>Log :</code></pre>
    <pre v-for="(log, index) in logs" :data-prefix="index +1"><code>{{ log }}</code></pre>
  </div>
</div>
</template>

<style scoped>

</style>