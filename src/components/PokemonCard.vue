<script setup>
defineProps({
  pokemon: {name: String, hp: String},
  opponent: false,
})
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl p-4">
    <figure>
      <img
          src="./../assets/images/dracaufeu.gif"
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
        :value="pokemon.hp"
        max="100"></progress>
  </div>

</template>

<style scoped>

</style>