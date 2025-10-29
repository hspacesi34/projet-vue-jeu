<template>
  HOMEPAGE
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import Pokemon from './models/Pokemon';

const player = ref(new Pokemon('Player', 'https://play.pokemonshowdown.com/sprites/ani/charizard.gif', 100));
const opponent = ref(new Pokemon('Adversaire', 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/pikachu-kantocap.gif', 100));
const actionCount = ref(0);
const atkSpecial = ref(true);

// // watch(actionCount, (newCount) => {
// //   if (newCount === 3) {
// //     atkSpecial.value = true;
// //     actionCount.value = 0;
// //   } else {
// //     atkSpecial.value = false;
// //   }
// // })

// function attack(type) {

// }
// function heal() {

// }
</script>