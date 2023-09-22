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
            />
          </div>

          <div class="m-3 cbtn cbtn-yellow mt-5">Login</div>
          <label>
            <input type="checkbox" checked="checked" name="remember" />
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
