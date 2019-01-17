<template lang="html">
  <div class="authen" v-on:click.stop>
    <div class="authen__title">
      <h1 class="authen__title--active">註冊</h1>
      <button class="authen__title--change" v-on:click="changeAuthenStatus"> 登入</button>
    </div>
    <div class="authen__form">
      <div v-if="isUserMatch" class="authen__error">使用者帳號重複，請重新命名</div>
      <div class="authen__form--detail">
        <div class="input__container" v-bind:class="{input__error:emptyError}">
          <input type="text"
          class="input__status status__account"
          name="account"
          placeholder="使用者帳號"
          v-model="authenRegister_userName"
          v-on:focusout="checkuserNameIsEmpty"
          v-on:focus="resetError"
          >
          <span v-if="emptyError">格式錯誤</span>
        </div>
        <div class="input__container">
          <input type="password"
          class="input__status status__password"
          name="password"
          placeholder="密碼"
          v-model="authenRegister_password"
          >
        </div>
        <div class="input__container">
          <input type="password"
          class="input__status  status__password--confirm"
          name="password"
          placeholder="確認密碼"
          v-model="authenRegister_passwordConfirm"
          >
        </div>
      </div>
      <div class="authen__form--footer">
        <button  name="cancel" class="footer__status footer__status--cancel" v-on:click="authenClose">取消</button>
        <button  name="register" class="footer__status footer__status--submit" v-on:click="register">註冊</button>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebaseInit.js";
export default {
  name: "authen_register",
  data() {
    return {
      isUserMatch: false,
      emptyError: false,
      authenRegister_userName: "",
      authenRegister_password: "",
      authenRegister_passwordConfirm: ""
    };
  },
  methods: {
    changeAuthenStatus: function() {
      this.$store.dispatch("changeAuthenStatus", "login");
    },
    authenClose: function() {
      this.$store.dispatch("authenClick");
    },
    resetError: function() {
      this.emptyError = false;
      this.isUserMatch = false;
    },
    checkuserNameIsEmpty: function() {
      if (this.authenRegister_userName.trim()) {
        this.emptyError = false;
      } else {
        this.emptyError = true;
      }
    },
    checkuserNameDuplicate: function() {
      return db
        .collection("user")
        .where("name", "==", this.authenRegister_userName)
        .get()
        .then(snapshot => {
          const isMatch = snapshot.docs.length;
          console.log("checkuserNameDuplicate");
          if (!isMatch) {
            return false;
          }
          this.isUserMatch = true;
          return true;
        });
    },
    register: function() {
      this.checkuserNameDuplicate().then(userDuplicate => {
        if (userDuplicate) return;
        db.collection("user")
          .add({
            name: this.authenRegister_userName,
            password: this.authenRegister_password
          })
          .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            this.$store.dispatch("login", this.authenRegister_userName);
          })
          .catch(error => {
            console.error("Error adding document: ", error);
          });
      });
    }
  }
};
</script>
