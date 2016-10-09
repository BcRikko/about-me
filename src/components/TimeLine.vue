<template>
  <div class="time-line">
    <ol>
      <card v-for="timeline in timelines" :profile="profile" :timeline="timeline"></card>
    </ol>
    <div class="time-line__end">
      <i class="fa fa-twitter"></i>
    </div>
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

  margin-bottom: 50px;
}

ol {
  padding: 0;
  margin: 0;
}

.time-line__end {
  height: 60px;
  text-align: center;
  line-height: 60px;

  border: 1px solid #e1e8ed;
}
.time-line__end > i {
  font-size: 24px;
  color: #66757f;
}
</style>


<script>
import Card from './Card'

export default {
  components: {
    Card
  },
  props: ['profile', 'timelines']
}
</script>
