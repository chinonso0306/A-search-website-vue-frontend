<template>
  <div>
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <RouterLink to="/" class="text-2xl font-bold text-pink-600">AvatarFate</RouterLink>
              <!-- <a href="/" class="text-2xl font-bold text-pink-600"></a> -->
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <RouterLink to="/login"  class="font-bold text-pink-600 hover:text-pink-600">Login</RouterLink>
            <!-- <a href="/login" class="font-bold text-pink-600 hover:text-pink-600">Login</a> -->
            <RouterLink to="/signup"  class="font-bold text-pink-600 hover:text-pink-600">Signup</RouterLink>
            <!-- <a href="/signup" class="font-bold text-pink-600 hover:text-pink-600">Sign Up</a> -->

            <RouterLink to="/dashboard"  class="font-bold text-pink-600 hover:text-pink-600">Dashboard</RouterLink>

            <!-- <a href="/" class="font-bold text-pink-600 hover:text-pink-600">About Us</a> -->
          </div>
        </div>
      </div>
    </nav>
  <div class="min-h-screen bg-gray-100 py-6">
    <div v-if="loading" class="flex items-center justify-center">
      <pixel-spinner :animation-duration="2000" :size="70" color="#db2777" />
    </div>
    <div v-else class="container mx-auto px-4">
      <div class="bg-white p-6 rounded shadow-md">
        <RouterLink to="/" class="text-pink-600 mb-4 inline-block">Back To Listings</RouterLink>
        <div class="border-b border-gray-200 pb-4 mb-4">
          <h2 class="text-3xl font-bold">{{ job.title }}</h2>
          <p class="text-gray-700 mt-2">About the Job</p>
          <div class="bg-gray-100 p-4 rounded mt-4">
            <p class="font-bold text-pink-600">Salary: ${{ job.salary || 0 }}</p>
            <p class="font-bold text-gray-700">Location: {{ job.location }}</p>
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-2">Job Details</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-pink-600">Job Requirements</h4>
            <p>{{ job.job_requirements }}</p>
          </div>
          <div>
            <h4 class="font-bold text-pink-600">Benefits</h4>
            <p>{{ job.benefits }}</p>
          </div>
        </div>
        <div class="bg-gray-100 p-4 rounded mt-4">
          <p>Put "Job Application" as the subject of your email and attach your resume.</p>
        </div>
        <button class="bg-pink-600 text-white p-2 rounded w-full mt-4">Apply Now</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "@/views/axios-config";
import { PixelSpinner } from "epic-spinners";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      job: {},
      loading: true,
    };
  },
  async created() {
    try {
      const id = this.$route.params.id;
      const response = await axios.get(`/jobs/${id}`);
      console.log(response);
      this.job = response.data;
    } catch (error) {
      console.error("Error fetching job details:", error);
    } finally {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  },
  components: {
    PixelSpinner,
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
button:hover {
  opacity: 0.9;
}
</style>
