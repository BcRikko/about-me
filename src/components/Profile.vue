<template>
  <div class="profile">
    <h1 class="profile__name" v-text="profile.name"></h1>
    <h2 class="profile__screanname">
      <a href="https://twitter.com/bc_rikko">@<span v-text="profile.screanname"></span></a>
    </h2>
    <p class="profile__bio" v-text="profile.bio"></p>
    <div class="profile__url">
      <a :href="profile.url">{{profile.url | removeProtocol}}</a>
    </div>
    <div class="profile__birthday">
      <span>Icon</span>
      <span>{{profile.birth | birthDay}}</span>
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;

  margin-top: 37px;
  margin-bottom: 25px;

  width: 25%;
  min-width: 200px;
}

.profile__bio {
  word-break: break-all;
}
</style>

<script>
export default {
  props: ['profile'],
  filters: {
    removeProtocol: (url) => {
      return url.replace(/http(s)?:\/\//i, '')
    },
    birthDay: (day) => {
      const splitDay = day.split('/')
      return `誕生日 ${splitDay[0]}年${splitDay[1]}月${splitDay[2]}日`
    }
  }
}
</script>
