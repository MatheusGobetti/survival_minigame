<template>
  <div class="Third Card Display container">
    <h4 class="header">{{ cardsSection.title }}</h4>
    <p class="snippet">{{ cardsSection.snippet }}</p>
    <div class="cards-container">
      <!-- Itera sobre os cards pra trazer os dados respectivos da terceira fase -->
      <ThirdCard
        v-for="card in cardsSection.cards"
        :key="card.id"
        :card="card"
      />
    </div>
    <!-- Botão para voltar na fase anterior -->
    <span class="spanButton"><NuxtLink :to="`/play/2`"><button class="button">Voltar</button></NuxtLink></span>
  </div>
</template>

<script>
export default {
  props: ["cardsSection"],
};
</script>

<style scoped>
  .container {
    margin-top: 4rem;
  }
  .header {
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    font-family: "Permanent Marker";
  }
  .snippet {
    color: grey;
    text-align: center;
    margin-bottom: 1.5rem;
    font-family: "Itim";
    letter-spacing: normal;
    padding: 0px 300px 0px 300px;
    font-size: 1.5rem;
  }

  .cards-container {
    display: block;
    padding-bottom: 30px;

  }

.spanButton {
  width: 40%;
  margin-left: 43.5%;
}

.button {
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

.button::before {
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

.button:hover::before {
  opacity: 1;
}

.button::after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #a0a0a0;
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
@media (max-width: 500px) {
  .FirstCardDisplay {
    height: 40vh;
  }
}

@media only screen and (min-width: 360px) {
  .snippet {
    margin: auto;
    display: block;
    justify-items: center;
    padding: 0 20% 0;
    text-align: center;
  }
}
</style>