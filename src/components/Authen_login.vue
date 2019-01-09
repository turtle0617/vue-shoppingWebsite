<template lang="html">
  <div class="authen" v-on:click.stop>
    <div class="authen__title">
      <h1 class="authen__title--active">登入</h1>
      <button class="authen__title--change"  v-on:click="changeAuthenStatus">註冊</button>
    </div>
    <div class="authen__form">
      <div v-if="isUserMatch" class="authen__error">你的帳號或密碼不正確，請稍後再試</div>
      <div class="authen__form--detail">
        <div v-bind:class="{input__error:emptyError}" class="input__container">
          <input type="text"
          class="input__status status__account"
          v-model="authenLogin_userName"
          v-on:focusout="checkuserName"
          v-on:focus="resetError"
          name="authenLogin_userName" placeholder="使用者帳號">
          <span v-if="emptyError">格式錯誤</span>
        </div>
        <div class="input__container">
          <input type="password" class="input__status status__password" v-model="authenLogin_password" name="authenLogin_password" placeholder="密碼">
        </div>
      </div>
      <div class="authen__form--footer">
        <button  name="cancel" class="footer__status footer__status--cancel" v-on:click="authenClose">取消</button>
        <button  name="register" class="footer__status footer__status--submit" v-on:click="login">登入</button>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebaseInit.js";
export default {
  name: "authen_login",
  data() {
    return {
      authenLogin_userName: "",
      authenLogin_password: "",
      emptyError: false,
      isUserMatch: false
    };
  },
  methods: {
    changeAuthenStatus: function() {
      this.$store.dispatch("changeAuthenStatus", "register");
    },
    authenClose: function() {
      this.$store.dispatch("authenClick");
    },
    checkuserName: function() {
      console.log();
      if (this.authenLogin_userName.trim()) {
        this.emptyError = false;
      } else {
        this.emptyError = true;
      }
    },
    resetError: function(){
      this.emptyError = false;
      this.isUserMatch = false;
    },
    login: function() {
      if (!this.authenLogin_userName || !this.authenLogin_password) return;
      db.collection('user')
      .where('name','==',this.authenLogin_userName)
      .get()
      .then(snapshot=>{
        const isMatch = snapshot.docs.length
        if(!isMatch) {
          console.log("err");
          return;
        }
        const userDetail = snapshot.docs[0].data();
        if(userDetail.password === this.authenLogin_password){
          this.$store.dispatch('login',userDetail.name);
        }else{
          this.isUserMatch = true
        }
      })
    },
  }
};
</script>
