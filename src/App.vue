<template>
  <div id="app">
    <my-header></my-header>
    <navbar></navbar>
    <div class="app-container">
      <div class="spacer"></div>
      <profile :profile="profile"></profile><!--
   --><time-line :profile="profile" :timelines="timelines"></time-line>
    </div>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;

  color: #292f33;
  background-color: #F5F8FA;
  font-size: 14px;
  line-height: 18px;

  font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", "Osaka", "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.app-container {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.spacer {
  height: 10px
}
</style>

<script>
import MyHeader from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import TimeLine from './components/TimeLine'

import data from '../static/data.json'

export default {
  components: {
    MyHeader,
    Navbar,
    Profile,
    TimeLine
  },
  data () {
    return {
      profile: data.profile,
      timelines: data.timelines
    }
  }
}
</script>
