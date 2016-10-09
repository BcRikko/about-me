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

<style scoped>
.header__back {
  background-color: #323232;
  height: 400px;
}

.header__container {
  height: 400px;
  width: 900px;
  margin: 0 auto;

  position: relative;
}

.header__avatar {
  height: 200px;
  width: 200px;

  position: absolute;
  left: 10px;
  bottom: -87px;

  background-color: #fff;
  border: 5px solid #fff;
  border-radius: 12px;
  box-shadow: 0 1px 1px rgba(136, 153, 166, 0.15);

}

.avatar__icon {
  height: 200px;
  width: 200px;

  border-radius: 8px;

}
</style>
