<template>
  <div class="navbar">
    <div class="app-container">
      <div class="mini-profile">
      </div><!--
   --><div class="profile-navbar">
        <ul>
          <router-link tag="li" to="/" exact><a><span>経歴</span></a></router-link>
          <router-link tag="li" to="/products"><a><span>作ったもの{{active}}</span></a></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  height: 50px;
  background-color: #fff;
}

.mini-profile {
  display: inline-block;
  width: 30%;
  min-width: 200px;
  box-sizing: border-box;
}
.profile-navbar {
  display: inline-block;
  width: 70%;
  min-width: 500px;
  box-sizing: border-box;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul > li {
  display: inline-block;
  width: 85px;
  padding: 0 15px;

  border-bottom: 5px solid transparent;
  transition: all .15s ease-in-out;
}
li > a {
  display: block;
  text-decoration: none;
  height: 50px;
  text-align: center;
  line-height: 40px;
  color: #66757f;
  font-size: 1.2em;
}
li:hover,
li > a:hover,
.router-link-active {
  height: 46px;
  color: #7708a3;
  border-bottom: 5px solid #7708a3;
}
</style>
