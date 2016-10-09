<template>
  <time-line :profile="data.profile" :timelines="data.products"></time-line>
</template>

<script>
import TimeLine from '../components/TimeLine'

export default {
  components: {
    TimeLine
  },
  props: ['data']
}
</script>
