<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">Pokemon Battle</h1>
    <PokemonCard :pokemon="opponent" :opponent="true"/>
    <PokemonCard :pokemon="player" />
    <div class="divider"></div>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
      <ActionCard v-if="!endOfGame" @attack="attack" @attack-special="specialAttack" @heal="heal" :hasSpecialAtk="hasSpecialAtk" />
      <div v-else>Fin de la partie</div>
      <LogCard :logs="logs"/>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import PokemonCard from "./components/PokemonCard.vue";
import ActionCard from "./components/ActionCard.vue";
import LogCard from "./components/LogCard.vue";
import Pokemon from "./models/Pokemon";

const player = ref(new Pokemon('Player', 'https://play.pokemonshowdown.com/sprites/ani/charizard.gif', 100));
const opponent = ref(new Pokemon('Opponent', 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/pikachu-kantocap.gif', 100));

const logs = ref([])
const actionCount = ref(0);
const hasSpecialAtk = ref(true);

watch(actionCount, (newCount) => {
  if (newCount === 4) {
    hasSpecialAtk.value = true;
    actionCount.value = 0;
  }
})
const endOfGame = ref(false);
watch(() => player.value.hp, (newHp) => {
  if (newHp <= 0) {
    endOfGame.value = true;
  }
})
watch(() => opponent.value.hp, (newHp) => {
  if (newHp <= 0) {
      endOfGame.value = true;
    }
})

function attack() {
  logs.value.push(player.value.attack(opponent.value));
  actionCount.value++;
  setTimeout(() => {
    logs.value.push(opponent.value.attack(player.value));
  }, 1000);
}

function specialAttack() {
  if (hasSpecialAtk.value) {
    logs.value.push(player.value.specialAttack(opponent.value));
    actionCount.value++;
    setTimeout(() => {
      logs.value.push(opponent.value.attack(player.value));
    }, 1000);
    hasSpecialAtk.value = false;
  } else {
    console.log("pas de spécial attack dispo");
    
  }
}
function heal() {
  logs.value.push(player.value.heal());
  actionCount.value++;
  setTimeout(() => {
    logs.value.push(opponent.value.attack(player.value));
  }, 1000);
}

</script>