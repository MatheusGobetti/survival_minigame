<template>
  <NuxtLink :to="`/play/1/outcome/${card.id}`" class="card">
    <img
      :src="require(`@/assets/images/${card.image || 'not-found.png'}`)"
      alt="op"
      class="image"
    />
    <h3 class="header">
      {{ card.title }}
    </h3>
    <p class="snippet">
      {{ card.snippet }}
    </p>

  </NuxtLink>
</template>

<script>

export default {
  props: ["card"],
};
</script>

<style scoped>
  .card {
    border: none;
    overflow: hidden;
    cursor: pointer;
    display: inline-block;
    width: 33.33333%;
    padding-top: 20px;
    padding-bottom: 20px;
    transition: transform 0.3s;
    text-decoration: none;
    color: black;
  }

  .card:hover {
    transform: scale(0.8);
  }
  .image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    border-radius: 0.5rem;
  }
  .header {
    font-size: 1.15rem;
    text-align: center;
    font-family: "Luckiest Guy";
    font-size: 30px;
  }
  .snippet {
    color: rgb(105, 105, 105);
    font-family: "Itim";
    text-align: center;
  }
  
</style>