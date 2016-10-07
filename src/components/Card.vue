<template>
  <li>
    <div class="card">
      <div class="content">
        <div class="card__header">
          <img class="avatar" src="../assets/profile.png"></img>
          <strong class="username" v-text="profile.name"></strong>
          <span class="screanname"><s>@</s><b v-text="profile.screanname"></b></span>
          <small class="time" v-text="timeline.time"></small>
        </div>

        <div class="card__text-container">
          <p class="card-text" v-text="timeline.text"></p>
        </div>

        <div class="card__footer">
          <div class="action__replay">
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
  border: 1px solid rgb(225, 232, 237);
}

.content {
  padding: 9px 12px;
}

img.avatar {
  float:left;
  width: 48px;
  height: 48px;

  border-radius: 5px;
  margin-right: 10px;
}

.card__text-container {
  margin-left: 58px;
}

p.card-text {
  margin: 0;
}
</style>

<script>
export default {
  props: ['profile', 'timeline']
}
</script>
