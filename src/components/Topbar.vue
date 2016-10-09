<template>
  <div class="topbar">
    <div class="global-navbar">
      <h1 class="title"><i class="fa fa-bold"></i><span class="hidden">bcrikko.github.io<span></h1>
      <ul>
        <li><a href="/"><i class="fa fa-home"></i><span>ホーム</span></a></li>
        <li><a href="https://twitter.com/bc_rikko" target="_blank"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
        <li><a href="http://kuroeveryday.blogspot.com" target="_blank"><i class="fa fa-rss"></i><span>ブログ</span></a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 1000;
}

.global-navbar {
  position: relative;
  width: 100%;
  height: 46px;

  background-color: #fff;
}

h1 {
  margin: 0;
}
.title {
  position: absolute;
  left: 50%;
  margin-left: -14px;

  line-height: 46px;
  color: #333333;
}

ul {
  margin: 0;
  list-style: none;
}
ul > li {
  display: inline-block;
}
ul > li a {
  display: block;
  height: 46px;

  padding: 0 14px 0 4px;
  text-decoration: none;
  color: #66757f;

  border-bottom: 5px solid transparent;
  transition: all .15s ease-in-out;
}
ul > li a:hover {
  height: 42px;
  color: #7708a3;
  border-bottom: 5px solid #7708a3;
}

ul > li a > i {
  margin: 11px 0 0 10px;
  width: 23px;
  height: 23px;
  font-size: 23px;
}
ul > li a > span {
  margin-left: 5px;
  color: inherit;
}
</style>
