<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-400 transition duration-200"
        >
          Login
        </button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-pink-300 hover:underline"
          >Forgot your password?</a
        >
        <p>
          Don't have an account yet?
          <a class="underline" href="/signup">sign up here</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { login, getUser } from "../authService";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  data() {
    return {
      email: "",
      password: "",
      user: null,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await login({ email: this.email, password: this.password });
        this.user = await getUser();
        if (this.user) {
          console.log("this user wants to login ");
          toast.success("Login Successful", {
            position: toast.POSITION.TOP_CENTER,
          });
          setTimeout(() => {
            this.$router.push('/dashboard'); // Redirect to the dashboard or another route
          }, 3000);
        }
      } catch (error) {
        if (error.response.status == 401) {
          toast.error("Unauthorized user", {
            position: toast.POSITION.TOP_LEFT,
          });
        }
        console.error("Login error:", error.response);
        console.error("Login error:", error.response.status);
      }
    },
  },
};

// export default {
//   data() {
//     return {
//       email: '',
//       password: '',
//     };
//   },
//   methods: {
//     handleSubmit() {
//       // Handle the login form submission
//       console.log('Email:', this.email);
//       console.log('Password:', this.password);
//       // Add your login logic here
//     },
//   },
// };
</script>

<style scoped>
/* Add any additional styles here */
</style>
