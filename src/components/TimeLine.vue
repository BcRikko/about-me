<template>
  <div class="time-line">
    <ol>
      <card v-for="experience in timeline" :profile="profile" :experience="experience"></card>
    </ol>
  </div>
</template>

<style scoped>
.time-line {
  display: inline-block;
  box-sizing: border-box;
  border-radius: 4px;

  vertical-align: top;

  width: 70%;
  min-width: 500px;

  background-color: #fff;
}

ol {
  padding: 0;
  margin: 0;
}
</style>


<script>
import Card from './Card'

export default {
  components: {
    Card
  },
  props: ['profile', 'timeline']
}
</script>
