<template>
  <div class="login d-flex justify-content-center">
    <div class="ccard cshadow w-50">
      <div class="ccard-header pt-5">
        <div><h4>easyepos</h4></div>
        <div><h2>Login</h2></div>
      </div>
      <div class="ccard-body">
        <div class="login-form">
          <div class="m-3 d-flex flex-column justify-content-start">
            <label for="username">Username</label>
            <input
              class="cborder-light border-round"
              type="text"
              placeholder=""
              name="username"
              required
              v-model="a"
            />
          </div>
          <div class="m-3 d-flex flex-column justify-content-start">
            <label for="psw">Password</label>
            <input
              class="cborder-light border-round"
              type="password"
              placeholder=""
              name="psw"
              required
              v-model="b"
            />
          </div>

          <div class="m-3 cbtn cbtn-yellow cbtn-shadow mt-5" @click="login()">
            Login
          </div>
          <label>
            <input
              type="checkbox"
              v-model="checked"
              name="remember"
              value="true"
            />
            Remember me
          </label>
        </div>
      </div>
      <div class="ccard-footer"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  components: {},
  mounted() {
    this.load();
  },
  data() {
    return {
      checked: false,
      a: "",
      b: "",
    };
  },
  methods: {
    load() {
      let helper = localStorage.getItem("eman");
      let helper2 = localStorage.getItem("ssapdrow");
      if (helper !== null && helper2 !== null) {
        this.a = helper;
        this.b = helper2;
        console.log("setup load");
      } else {
        return;
      }
    },
    login() {
      if (this.checked) {
        localStorage.setItem("eman", this.a);
        localStorage.setItem("ssapdrow", this.b);
        console.log("setup");
      } else {
        return;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.login {
  padding-top: 12%;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
input {
  text-align: center;
}
</style>
