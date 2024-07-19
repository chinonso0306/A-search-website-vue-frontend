<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4 text-center">Create Your Account</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3 flex flex-wrap -mx-2">
            <div class="w-full md:w-1/2 px-2 mb-3 md:mb-0">
              <label for="firstName" class="block text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                v-model="firstName"
                class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
                required
              />
            </div>
            <div class="w-full md:w-1/2 px-2">
              <label for="lastName" class="block text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                v-model="lastName"
                class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="email" class="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
              required
            />
          </div>
          <div class="mb-3">
            <label for="securityQuestion" class="block text-gray-700">Security Question</label>
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
          <div class="mb-4">
            <label for="securityAnswer" class="block text-gray-700">Answer</label>
            <input
              type="text"
              id="securityAnswer"
              v-model="securityAnswer"
              class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
              required
            />
          </div>
          <div class="mb-4">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                v-model="agreeToTerms"
                class="form-checkbox h-5 w-5 text-pink-300"
                required
              />
              <span class="ml-2 text-gray-700">I agree to the <a href="#" class="text-pink-300 hover:underline">terms and conditions</a></span>
            </label>
          </div>
          <button
            type="submit"
            class="w-full bg-pink-300 text-white p-2 rounded hover:bg-pink-400 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        securityQuestion: '',
        securityAnswer: '',
        agreeToTerms: false,
      };
    },
    methods: {
      handleSubmit() {
        // Handle the sign-up form submission
        console.log('First Name:', this.firstName);
        console.log('Last Name:', this.lastName);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        console.log('Security Question:', this.securityQuestion);
        console.log('Security Answer:', this.securityAnswer);
        console.log('Agree to Terms:', this.agreeToTerms);
        // Add your sign-up logic here
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  