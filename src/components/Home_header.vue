<template>
  <div class="Home_header">
    <div class="container navbar">
      <ul class="navbar__links">
        <li class="navbar__link--register" v-on:click="authenClick('register')">註冊</li>
        <li class="navbar__link--separator"></li>
        <li class="navbar__link--account" v-on:click="authenClick('login')">登入</li>
      </ul>
    </div>
    <div class="container searchbar">
      <div class="searchbar__logo">
        <img src="logo.png" alt="">
      </div>
      <div class="searchbar__search--section">
        <input type="text" name="search_text" placeholder="搜尋商品">
        <button type="button" name="search_button">
          <i class="fas fa-search"></i>
        </button>
        <div class="hot-words__list">
          <a href="#" class="hot-words__item">puma 衣著</a>
          <a href="#" class="hot-words__item">gogoro 貼紙</a>
          <a href="#" class="hot-words__item">ol 套裝</a>
          <a href="#" class="hot-words__item">小 ck 長皮夾</a>
        </div>
      </div>
      <div class="searchbar__cart">
        <i class="fas fa-shopping-cart"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home_header",
  methods:{
    authenClick:function (status) {
      this.$store.dispatch('authenClick',status);
    }
  }
};
</script>

<style lang="scss" scoped>
.Home_header {
  background-color: #ff531d;
  color: white;
}
.navbar {
  display: flex;
  justify-content: flex-end;
  font-size: 0.8125rem;
  padding: 0.625rem 0;
  &__links {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  &__link--register {
    padding: 0 0.625rem;
    cursor: pointer;
  }
  &__link--account {
    padding: 0 0.625rem;
    cursor: pointer;
  }
  &__link--separator {
    width: 1px;
    height: 0.8125rem;
    background-color: white;
  }
}
.searchbar {
  display: flex;
  justify-content: flex-start;
  padding: 1rem 0 0.625rem;
  &__logo {
    margin-right: 40px;
  }
  &__search--section {
    width: 60%;
    position: relative;
    input {
      width: 100%;
      border-radius: 5px;
      padding: 0.8125rem 0 0.8125rem 0.8125rem;
      border: none;
      box-sizing: border-box;
      &::placeholder {
        font-weight: 300;
      }
    }
    button {
      position: absolute;
      right: 5px;
      top: 35%;
      transform: translateY(-50%);
      height: 34px;
      padding: 0 15px;
      min-width: 60px;
      background-color: #ff531d;
      color: white;
      border: none;
      cursor: pointer;
    }
  }
  &__cart {
    display: flex;
    justify-content: center;
    flex: 1;
    font-size: 1.5rem;
    padding-top: 10px;
  }
}
.hot-words__list {
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 0.875rem;
  margin-top: 5px;
  a {
    text-decoration: none;
    color: white;
    margin-right: 14px;
    font-size: 0.625rem;
  }
}
</style>
