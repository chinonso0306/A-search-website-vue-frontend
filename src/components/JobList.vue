<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-6">
    <div class="bg-white p-6 rounded shadow-md w-full max-w-lg">
      <h2 class="text-2xl font-bold mb-4 text-center">Jobs You May Be Interested In</h2>
      <div v-for="job in jobs" :key="job.id" class="mb-4 p-4 border rounded hover:bg-gray-50 cursor-pointer" @click="goToJobDetails(job.id)">
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
        <p>{{ job.description }}</p>
        <p>{{ job.location }}</p>
        <p>{{ job.tags }}</p>
        <p v-if="job.salary">Salary: ${{ job.salary }}</p>
        <p v-if="job.benefits">Benefits: {{ job.benefits }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axiosInstance from '@/views/axios-config';

export default {
  data() {
    return {
      jobs: []
    };
  },
  async mounted() {
    try {
      const response = await axiosInstance.get('/jobs');
      this.jobs = response.data;
      console.log(response);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  },
  methods: {
    goToJobDetails(id) {
      this.$router.push({ name: 'JobDetails', params: { id } });
    }
  }
};
</script>
