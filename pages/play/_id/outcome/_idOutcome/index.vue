<template>
  <div>
    <div v-if="$route.path.includes('/play/1/outcome/2')" class="answer">
      {{ outcomeA.answer }}
      <NuxtLink :to="`/play/2`"><button class="btnC">Avançar!</button></Nuxtlink>
    </div>

    <div v-if="$route.path.includes('/play/2/outcome/3')" class="answer">
      {{ outcomeB.answer }}
      <NuxtLink :to="`/play/3`"><button class="btnC">Avançar!</button></Nuxtlink>
    </div>

    <div v-if="$route.path.includes('/play/3/outcome/1')" class="answer">
      {{ outcomeC.answer }}
      <NuxtLink :to="`/`"><button class="btnC">Ganhou!</button></Nuxtlink>
    </div>

     <!-- ----------------------------------------------------- -->

    <div v-else>
      <div v-if="$route.path.includes('/play/1/outcome/1') || $route.path.includes('/play/1/outcome/3')" class="answer">
        {{ outcomeA.answer }}
        <NuxtLink :to="`/`"><button class="btnW">Você perdeu!</button></Nuxtlink>
      </div>
      <div v-if="$route.path.includes('/play/2/outcome/1') || $route.path.includes('/play/2/outcome/2')" class="answer">
        {{ outcomeB.answer }}
        <NuxtLink :to="`/`"><button class="btnW">Você perdeu!</button></Nuxtlink>
      </div>
      <div v-if="$route.path.includes('/play/3/outcome/2') || $route.path.includes('/play/3/outcome/3')" class="answer">
        {{ outcomeC.answer }}
        <NuxtLink :to="`/`"><button class="btnW">Você perdeu!</button></Nuxtlink>
      </div>
    </div>
   
   
  </div>
 
</template>

<script>
  export default {
    computed: {
     outcomeA() {
       return this.$store.getters.getOutcomeByIdA(this.$route.params.idOutcome);
     },

     outcomeB() {
       return this.$store.getters.getOutcomeByIdB(this.$route.params.idOutcome);
     },

     outcomeC() {
       return this.$store.getters.getOutcomeByIdC(this.$route.params.idOutcome);
     }
    }
  }
</script>

<style scoped>

  .answer {
    color: black;
    text-align: center;
    margin-bottom: 1.5rem;
    font-family: "Itim";
    padding: 0px 300px 0px 300px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25em;
  }

.btnW {
  font-family: "Itim";
  width: 200px;
  font-size: 20px;
  height: 60px;
  border: none;
  outline: none;
  background: #c38b8b;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 0;
}

.btnW::before {
  position: absolute;
  content: "";
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  left: -2px;
  top: -2px;
  background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  animation: move 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.btnW:hover::before {
  opacity: 1;
}

.btnW::after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ce4343;
  left: 0;
  top: 0;
}

.btnC {
  font-family: "Itim";
  width: 200px;
  font-size: 20px;
  height: 60px;
  border: none;
  outline: none;
  background: #c38b8b;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 0;
}

.btnC::before {
  position: absolute;
  content: "";
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  left: -2px;
  top: -2px;
  background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  animation: move 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.btnC:hover::before {
  opacity: 1;
}

.btnC::after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #26b413;
  left: 0;
  top: 0;
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

</style>