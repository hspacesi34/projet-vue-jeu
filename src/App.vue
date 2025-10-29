<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">Pokemon Battle</h1>
    <PokemonCard :pokemon="{name: 'Charmander'}" :opponent="true"/>
    <PokemonCard :pokemon="{name: 'Bulbasaur'}" />
    <div class="divider"></div>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
      <ActionCard />
      <LogCard :logs="logs"/>
    </div>
  </div>
</template>

<script setup>
import PokemonCard from "./components/PokemonCard.vue";
import ActionCard from "./components/ActionCard.vue";
import LogCard from "./components/LogCard.vue";

const logs = [
  "player attack",
  "Opponent attack",
  "Player special attack",
  "Opponent attack",
  "Player heal",
]

</script>