<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-6">
    <div class="bg-white p-6 rounded shadow-md w-full max-w-lg">
      <h2 class="text-2xl font-bold mb-4 text-center">Create Your Account</h2>
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="name" class="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              v-model="name"
              class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
              required
            />
          </div>
          <div>
            <label for="phone" class="block text-gray-700">Phone</label>
            <input
              type="text"
              id="phone"
              v-model="phone"
              class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
              required
            />
          </div>
          <div>
            <label for="address" class="block text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              v-model="address"
              class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
              required
            />
          </div>
          <div>
            <label for="city" class="block text-gray-700">City</label>
            <input
              type="text"
              id="city"
              v-model="city"
              class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
              required
            />
          </div>
          <div>
            <label for="country" class="block text-gray-700">Country</label>
            <input
              type="text"
              id="country"
              v-model="country"
              class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
              required
            />
          </div>
          <div class="col-span-1 md:col-span-2">
            <label for="password" class="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
              required
            />
          </div>
          <div class="col-span-1 md:col-span-2">
            <label for="securityQuestion" class="block text-gray-700"
              >Security Question</label
            >
            <select
              id="securityQuestion"
              v-model="securityQuestion"
              class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
              required
            >
              <option disabled value="">Select a question</option>
              <option>What was the name of your first pet?</option>
              <option>What is your mother's maiden name?</option>
              <option>What was the name of your elementary school?</option>
            </select>
          </div>
          <div class="col-span-1 md:col-span-2">
            <label for="securityAnswer" class="block text-gray-700"
              >Answer</label
            >
            <input
              type="text"
              id="securityAnswer"
              v-model="securityAnswer"
              class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
              required
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              v-model="agreeToTerms"
              class="form-checkbox h-5 w-5 text-pink-300"
              required
            />
            <span class="ml-2 text-gray-700"
              >I agree to the
              <a href="#" class="text-pink-300 hover:underline"
                >terms and conditions</a
              ></span
            >
          </label>
        </div>
        <button
          type="submit"
          class="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-400 transition duration-200"
        >
          Sign Up
        </button>

        <p>
        Already have  an account?
          <RouterLink class="underline" to="/login">Login Here</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      password: "",
      securityQuestion: "",
      securityAnswer: "",
      agreeToTerms: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/users", {
          name: this.name,
          email: this.email,
          password: this.password,
          phone: this.phone,
          address: this.address,
          city: this.city,
          country: this.country,
          security_question: this.securityQuestion,
          security_answer: this.securityAnswer,
        });
        console.log("User registered:", response.data);
        if (response.data) {
          toast.success("Signup Successful !", {
            position: toast.POSITION.TOP_CENTER,
          });
          setTimeout(() => {
            this.$router.push('/login');
          }, 3000);
        }
      } catch (error) {
        if (error.response.status == 401) {
          toast.error("Unauthorized user", {
            position: toast.POSITION.TOP_LEFT,
          });
        }else if(error.response.status == 500){
          toast.error("Email Already Exist !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        console.error("Error registering user:", error.response);
      }
    },
  },
};
</script>

<style scoped>
.foo-bar {
  color: #f00;
}
</style>
