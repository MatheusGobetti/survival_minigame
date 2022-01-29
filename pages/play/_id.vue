<template>
  <div>
    <div v-if="$route.path.includes('/play/1')" class="container">
      <FirstCardDisplay
        v-for="cardInfo in firstCardInfo.slice(0, 1)"
        :key="cardInfo.id"
        :cardsSection="cardInfo"
      />
    </div>
    <div v-else-if="$route.path.includes('/play/2')">
      <SecondCardDisplay
        v-for="cardInfo in secondCardInfo.slice(0, 2)"
        :key="cardInfo.id"
        :cardsSection="cardInfo"
      />
    </div>
    <div v-else-if="$route.path.includes('/play/3')">
        <ThirdCardDisplay
          v-for="cardInfo in thirdCardInfo.slice(0, 3)"
          :key="cardInfo.id"
          :cardsSection="cardInfo"
        />
    </div>
  </div>
</template>

<script>
import { firstCardDisplay } from "@/assets/data.js";
import { secondCardDisplay } from "@/assets/data.js";
import { thirdCardDisplay } from "@/assets/data.js";
import FirstCardDisplay from '../../components/ThirdCardDisplay.vue';
import SecondCardDisplay from '../../components/ThirdCardDisplay.vue';
import ThirdCardDisplay from '../../components/ThirdCardDisplay.vue';
export default {
  components: { FirstCardDisplay, SecondCardDisplay, ThirdCardDisplay },
  data() {
    return {
      firstCardInfo: firstCardDisplay,
      secondCardInfo: secondCardDisplay,
      thirdCardInfo: thirdCardDisplay
    }
  }
};
</script>

<style scoped>
</style>