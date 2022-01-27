<template>
  <div class="container">
    <Hero />
    <FirstCardDisplay
      v-for="cardInfo in firstCardInfo"
      :key="cardInfo.id"
      :cardsSection="cardInfo" 
    />
  </div>
</template>

<script>
import { firstCardDisplay } from "@/assets/data.js"
import FirstCardDisplay from '../components/FirstCardDisplay.vue'
export default {
  components: { FirstCardDisplay },
  data() {
    return {
      firstCardInfo: firstCardDisplay
    }
  }
}
</script>
