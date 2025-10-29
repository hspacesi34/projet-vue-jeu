<script setup>
defineProps({
  logs: Array,
  hasSpecialAtk: Boolean
})
</script>

<template>
  <div class="w-full p-16">
    <div class="grid grid-cols-2 gap-4">
      <div class="flex justify-center">
        <button @click="$emit('attack')" class="btn btn-primary w-full">
          Attack
        </button>
      </div>
      <div class="flex justify-center">
        <button @click="$emit('attackSpecial')" class="btn btn-accent w-full" :style="{backgroundColor : hasSpecialAtk ? '' : 'gray'}">
          Special Attack
        </button>
      </div>
      <div class="flex justify-center">
        <button @click="$emit('heal')" class="btn btn-secondary w-full">
          Heal
        </button>
      </div>
      <div class="flex justify-center">
        <button @click="$emit('abandon')" class="btn btn-neutral w-full">
          Give up
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>