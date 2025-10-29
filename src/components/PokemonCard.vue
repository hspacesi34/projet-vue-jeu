<script setup>

defineProps({
  pokemon: {name: String, img: String},
  opponent: false,
})
const getImgUrl = (fileName) => {
  return new URL(`../assets/images/${fileName}`, import.meta.url).href
}
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl p-4">
    <figure>
      <img
          :src="getImgUrl(pokemon.img)"
          :alt="pokemon.name"
          class="w-36 h-36"
      >
    </figure>
    <div
        class="flex"
        :class="opponent ? 'justify-start' : 'justify-end'">
      <h2 class="font-bold">{{ opponent ? 'Opponent' : 'Player' }} : {{ pokemon.name }}</h2>
    </div>
    <progress
        class="progress w-full h-4"
        :class="opponent ? 'progress-warning' : 'progress-success'"
        value="53"
        max="100"></progress>
  </div>

</template>

<style scoped>

</style>