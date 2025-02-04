<template>
  <div>
    <form class="form-signin" @submit.prevent="onSignIn">
      <img
        class="mb-4"
        src="../assets/logo.png"
        alt=""
        width="100"
        height="100"
      />
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <p>johnd</p>
      <p>m38rmF$</p>
      <input
        type="text"
        id="username"
        class="form-control mb-4"
        placeholder="Username"
        v-model="username"
        v-validate="'required'"
        name="username"
        @input="validateForm"
      />
      <span v-if="errors.has('username')" class="error">{{
        errors.first("username")
      }}</span>
      <input
        type="password"
        id="inputPassword"
        class="form-control mb-4"
        placeholder="Password"
        v-model="password"
        v-validate="'required|min:6'"
        name="password"
        @input="validateForm"
      />
      <p v-if="errors.has('password')" class="error">
        {{ errors.first("password") }}
      </p>

      <button
        :disabled="isButtonDisabled"
        class="btn btn-lg btn-outline-dark btn-block"
        type="submit"
      >
        <span>Sign in</span>
        <!-- Loader -->
        <span
          v-if="loading"
          class="spinner-border spinner-border-sm mx-2"
          role="status"
          aria-hidden="false"
        ></span>
      </button>
    </form>
  </div>
</template>

<script>
import authService from "@/services/auth/authService";

export default {
  data() {
    return {
      name: "Login",
      username: "",
      password: "",
      loading: "",
      isButtonDisabled: true,
    };
  },

  methods: {
    validateForm() {
      this.$validator.validateAll().then((isValid) => {
        this.isButtonDisabled = !isValid;
      });
    },
    async onSignIn() {
      this.$validator.validateAll().then(async (isValid) => {
        if (isValid) {
          this.loading = true;
          try {
            await authService.userLogin(this.username, this.password);
            this.$toast.top("You have successfully logged in");
            this.$router.push("/");
          } catch (error) {
            this.$toast.top(error.response.data);
            console.error("Login error:", error);
          } finally {
            this.loading = false;
          }
        }
      });
      // AUTHENTICATION
      //alert('Ooops! Nothing happened!')
    },
  },
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.error {
  color: red;
  font-size: 14px;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
