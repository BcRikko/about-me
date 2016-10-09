<template>
  <time-line :profile="data.profile" :timelines="data.timelines"></time-line>
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
