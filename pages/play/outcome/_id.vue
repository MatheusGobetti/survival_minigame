<template>
  <div>
    <div v-if="$route.path.includes('/play') && outcome.id == 2">
      {{ outcome }}
      <NuxtLink :to="`/play/2`"><button class="button btn">Avançar</button></Nuxtlink>
    </div>
    <div v-if="$route.path.includes('/play/2') && outcome.id == 6">
      {{ outcome }}
      <NuxtLink :to="`/play/3`"><button class="button btn">Avançar</button></Nuxtlink>
    </div>
    <div v-if="$route.path.includes('/play/3') && outcome.id == 7">
      {{ outcome }}
      <NuxtLink :to="`/play/3`"><button class="button btn">Ganhou!</button></Nuxtlink>
    </div>
    <div v-else>
      {{ outcome }}
      <NuxtLink :to="`/`"><button class="button btn">Você perdeu! Voltar</button></Nuxtlink>
    </div>
  </div>
 
</template>

<script>
  export default {
    computed: {
     outcome() {
       return this.$store.getters.getOutcomeById(this.$route.params.id);
     }
    }
  }
</script>

<style scoped>

</style>