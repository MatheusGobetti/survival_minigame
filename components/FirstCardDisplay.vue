<template>
  <div class="First Card Display container">
    <h4 class="header">{{ cardsSection.title }}</h4>
    <p class="snippet">{{ cardsSection.snippet }}</p>
    <div class="cards-container">
      <FirstCard
        v-for="card in cardsSection.cards"
        :key="card.id"
        :card="card"
      />
    </div>
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
  }

  @media (max-width: 500px) {
    .FirstCardDisplay {
      height: 40vh;
    }
  }
</style>