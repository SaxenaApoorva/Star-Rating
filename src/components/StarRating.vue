<template>
  <div class="rating">
    <div
      v-for = "index in 5"
      :key = index>
      <button
        :class = "[index <= currentRating? 'star-on' : 'star-off']"
        aria-live="polite"
        :aria-roledescription="'Star Rating '+index+' of 5'"
        tabindex="0"
        @click="currentRating = index"
        @keydown.enter="currentRating = index"><span></span></button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StarRating',
  props: {
    rating: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      // inorder to avoid mutation error
      currentRating: this.rating
    }
  }
}
</script>

<style scoped lang="scss">
.rating {
  display: flex;
  padding: 15px;
  float: right;
  align-items: baseline;

  p, button {
    padding: 2px;
    margin: 2px;
    border: none;
    background-color: inherit;
  }
}

button.star-on::after {
  content: '\2605';
  font-size: 16px;
  color: rgba(0, 0, 0, 0.774);
}

button.star-off::after {
  content: '\2606';
  font-size: 16px;
  color:#ddd;
}
</style>
