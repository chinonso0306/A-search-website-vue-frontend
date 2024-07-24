<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-6">
    <div v-if="loading" class="flex items-center justify-center">
      <pixel-spinner :animation-duration="2000" :size="70" color="#f2b1cc" />
    </div>
    <div v-else class="bg-white p-6 rounded shadow-md w-full max-w-lg">
      <h2 class="text-2xl font-bold mb-4 text-center">{{ job.title }}</h2>
      <p>{{ job.description }}</p>
      <p>{{ job.location }}</p>
      <p>{{ job.tags }}</p>
      <p v-if="job.salary">Salary: ${{ job.salary }}</p>
      <p v-if="job.benefits">Benefits: {{ job.benefits }}</p>
      <p v-if="job.job_requirements">Requirements: {{ job.job_requirements }}</p>
      <button class="bg-pink-400 p-2 rounded w-full font-bold">Apply</button>
    </div>
  </div>
</template>

<script>
import axios from "@/views/axios-config";
import { PixelSpinner } from "epic-spinners";

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
      this.loading = false;
    }
  },
  components: {
    PixelSpinner,
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
