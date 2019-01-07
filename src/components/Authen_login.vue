<template lang="html">
  <div class="authen">
    <div class="authen__title">
      <h1 class="authen__title--active">登入</h1>
      <button class="authen__title--change"  v-on:click="changeAuthenStatus">註冊</button>
    </div>
    <div class="authen__form">
      <div class="authen__form--detail">
        <div class="input__container">
          <input type="text" class="input__status status__account" name="account" value="" placeholder="使用者帳號">
        </div>
        <div class="input__container">
          <input type="password" class="input__status status__password" name="password" value="" placeholder="密碼">
        </div>
      </div>
      <div class="authen__form--footer">
        <button  name="cancel" class="footer__status footer__status--cancel" v-on:click="authenClick">取消</button>
        <button  name="register" class="footer__status footer__status--submit">登入</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "authen_login",
  methods:{
    changeAuthenStatus: function () {
      this.$store.dispatch('changeAuthenStatus',"register");
    },
    authenClick:function (status) {
      this.$store.dispatch('authenClick',status);
    }
  }
};
</script>
