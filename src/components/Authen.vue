<template lang="html">
  <div class="authen__container" v-on:click="authenClose">
    <Authen_register  v-if="authenStatus  === 'register'"/>
    <Authen_login   v-else/>
  </div>
</template>

<script>
import Authen_register from "@/components/Authen_register.vue";
import Authen_login from "@/components/Authen_login.vue";
export default {
  name: "authen",
  components: {
    Authen_register,
    Authen_login
  },
  computed: {
    authenStatus() {
      return this.$store.getters.authenStatus;
    }
  },
  methods: {
    authenClose: function() {
      this.$store.dispatch("authenClick");
    }
  }
};
</script>

<style lang="scss">
.authen__container {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.authen {
  min-width: 500px;
  background-color: white;
  border-radius: 5px;
  padding: 20px 30px;
  box-sizing: border-box;
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 30px 0;
    h1 {
      margin: 0;
      font-size: 1.6rem;
      font-weight: 400;
    }
    &--change {
      border: none;
      outline: none;
      cursor: pointer;
      color: #ff531d;
    }
  }
  &__error {
    color: red;
    margin-bottom: 5px;
    font-size: 0.875rem;
  }
}
.input__container {
  margin-bottom: 15px;
}
.input__status {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  outline: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
  &:focus {
    border: 1px solid rgba(0, 0, 0, 1);
  }
}
.input__error {
  color: red;
  span {
    font-size: 0.8125rem;
  }
  input {
    border: 1px solid rgba(255, 0, 0, 1);
    background-color: rgba(255, 0, 0, 0.1);
  }
}
.authen__form {
  &--footer {
    display: flex;
    justify-content: flex-end;
  }
}
.footer__status {
  border: none;
  outline: none;
  padding: 15px 0;
  width: 140px;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 5px;
  &--cancel {
    &:hover {
      background-color: #f8f8f8;
    }
  }
  &--submit {
    color: white;
    background-color: #ff531d;
    &:hover {
      background-color: #ff6635;
    }
  }
}
</style>
