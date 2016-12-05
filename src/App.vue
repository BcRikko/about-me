<template>
  <div id="app">
    <topbar></topbar>
    <my-header></my-header>
    <navbar></navbar>
    <div class="app-container">
      <div class="spacer"></div>
      <profile :profile="data.profile"></profile><!--
   --><router-view :data="data"></router-view>
    </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import MyHeader from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

export default {
  components: {
    Topbar,
    MyHeader,
    Navbar,
    Profile
  },
  data () {
    return {
      data: window.profileData
    }
  }
}
</script>
