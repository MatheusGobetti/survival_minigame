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
    props: ['cardsSection']
  }
</script>

<style scoped>

    .container {
    margin-top: 2rem;
    
    }
    .header {
        font-weight: 700;
        font-size: 1.5rem;
        margin-left: 45%;
        font-family: "Permanent Marker";
    }
    .snippet {
        color: grey;
        margin-bottom: 1.5rem;
        font-family: "Permanent Marker";
        padding: 50px;
        width: 40%;
        align-items:center;
        margin-left: 25%
     
    }
    .cards-container {
        display: flex;
        justify-content: space-between;
        padding: 50px;
        width: 50%;
        align-items:center;
        margin-left: 20%
    }

    @media (max-width: 500px) {
        .FirstCardDisplay {
            height: 40vh;
        }
    }
</style>