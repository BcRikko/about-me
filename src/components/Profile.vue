<template>
  <div class="profile">
    <h1 class="profile__name" v-text="profile.name"></h1>
    <h2 class="profile__screanname">
      <a :href="'https://twitter.com/' + profile.screanname" target="_blank">@<span v-text="profile.screanname"></span></a>
    </h2>
    <p class="profile__bio" v-text="profile.bio"></p>
    <div class="profile__url">
      <i class="fa fa-link"></i>
      <a :href="profile.url" target="_blank">{{profile.url | removeProtocol}}</a>
    </div>
    <div class="profile__birthday">
      <i class="fa fa-birthday-cake"></i>
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

  padding: 0 15px;

  width: 30%;
  min-width: 200px;
}

h1, h2 {
  margin: 0 0 5px 0;
}

i {
  color: #8899a6;
}

a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.profile__name {
  font-size: 24px;
}

.profile__screanname {
  font-size: 14px;
}
.profile__screanname > a {
  color: #8899a6;
}

.profile__bio {
  /*word-break: break-all;*/
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
