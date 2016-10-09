<template>
  <li>
    <div class="card">
      <div class="content">
        <div class="header">
          <img class="header__avatar" src="../assets/profile.png"></img>
          <strong class="header__username" v-text="profile.name"></strong>
          <span class="header__screanname"><s>@</s><b v-text="profile.screanname"></b></span>
          <small class="header__time" v-text="timeline.time"></small>
        </div>

        <div class="text">
          <p class="text__content">{{timeline.text}}</p>
        </div>

        <div class="footer">
          <div class="footer__action--replay">
            <button></button>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped>
li {
  list-style-type: none;
  border: 1px solid #e1e8ed;
}

.card:hover {
  background-color: #f5f8fa;
}

.content {
  padding: 9px 12px;
}

img.header__avatar {
  float:left;
  width: 48px;
  height: 48px;

  border-radius: 5px;
  margin-right: 10px;
}

.header__screanname, .header__time {
  font-size: 13px;
  color: #8899a6;
}
.header__screanname > s{
  text-decoration: none;
}
.header__time::before {
  content: "\00b7";
}

.text {
  margin-left: 58px;
}
.text__content {
  margin: 0;
  white-space: pre;
}
</style>

<script>
export default {
  props: ['profile', 'timeline']
}
</script>
