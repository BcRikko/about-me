<template>
  <header>
    <div class="header__back">
      <div class="header__container">
        <div class="header__avatar">
          <img class="avatar__icon" src="../assets/profile.png">
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.header__back {
  background-color: #41B883;
  height: 460px;
}

.header__container {
  height: 460px;
  width: 980px;
  margin: 0 auto;

  position: relative;
}

.header__avatar {
  height: 200px;
  width: 200px;

  position: absolute;
  left: 10px;
  bottom: -87px;
}

.avatar__icon {
  height: 200px;
  width: 200px;
}
</style>
