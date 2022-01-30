<template>
  <div class="Hero container">
    <div class="text-container">
      <div class="box">
        <img src="~assets/svg/fire.svg" alt="fire" class="image" />
        <h1 class="header">Survival Minigame</h1>
      </div>
      <p class="snippet">
        Faça as escolhas corretas para sobreviver. Use seu instinto de
        sobrevivência para chegar até o fim desta jornada.
      </p>
        <NuxtLink :to="`/play/1`"><button class="button btn">Começar!</button></Nuxtlink>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .Hero {
    display: flex;
    padding: 1rem 0;
    align-items: flex-start;
    justify-content: space-evenly;
    font-family: "Permanent Marker";
    margin-top: 7em;

  }

  .box {
    display: flex;
    align-items: center;
  }

  .text-container {
    padding: 0px 400px 0px 400px;
    margin-top: 2rem;
  }
  .header {
    font-weight: 900;
    font-size: 3.5rem;
    margin: 0%;
  }
  .snippet {
    color: grey;
    font-size: 1.5rem;
    margin-top: 0px;
    text-align: center;
  }
  .image {
    width: 9rem;
    border-radius: 50%;
    padding-bottom: 20px;
    padding-right: 20px;
  }
  .overlay {
    background: rgba(0, 0, 0, 0);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
  .button {
    font-size: 20px;
    font-family: "Itim";
    text-decoration:underline;
    height: 60px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.8s ease;
    position: relative;
    border: 2px solid #111;
    margin-left: 25%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .button:after {
    position: absolute;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    left: -100%;
    clip-path: polygon(10% 0, 70% 0, 90% 100%, 30% 100%);
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 300ms ease;
  }

  .button:hover:after {
    left: 100%;
  }

  @media (max-width: 500px) {
    .Hero {
      height: 40vh;
    }
  }
</style>