<template>
  <div class="p-5 mt-2">
    <div v-if="loading" class="flex items-center justify-center">
      <pixel-spinner :animation-duration="2000" :size="70" color="#db2777" />
    </div>

    <div v-else class="">

    <h2 class="text-center text-3xl font-bold mb-8">Jobs You May Be Interested In</h2>
    <p class="text-center mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus error. Facilis nemo laborum exercitationem.</p>
    <p class="text-center mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
    <div class="job-list-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="job-card" v-for="job in jobs" :key="job.id">
        <div class="job-header flex justify-between items-center mb-2">
          <h3 class="text-xl font-bold">{{ job.title }}</h3>
          <p class="text-gray-500">{{ job.location }}</p>
        </div>
        <div class="job-body mb-2">
          <p>{{ job.description }}</p>
        </div>
        <div class="job-footer flex justify-between items-center">
          <p v-if="job.salary" class="text-pink-600 font-bold">Salary: ${{ job.salary }}</p>
          <router-link :to="`/jobs/${job.id}`" class="view-details-btn bg-pink-600 text-white px-4 py-2 rounded-md">View Details</router-link>
          <div v-if="job.user_id === user.id" class="flex space-x-2">
            <button @click="editJob(job.id)" class="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
            <button @click="deleteJob(job.id)" class="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axiosInstance from "@/views/axios-config";
import { PixelSpinner } from "epic-spinners";

export default {
  data() {
    return {
      jobs: [],
      loading: true,
      user: {},
    };
  },
  async created() {
    try {
      const response = await axiosInstance.get('/jobs');
      this.jobs = response.data;

      const userResponse = await axiosInstance.get('/user');
      this.user = userResponse.data;
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async deleteJob(jobId) {
      try {
        await axios.delete(`/jobs/${jobId}`);
        this.jobs = this.jobs.filter(job => job.id !== jobId);
      } catch (error) {
        console.error("Error deleting job:", error);
      }
    },
    editJob(jobId) {
      this.$router.push({ name: 'edit-job', params: { id: jobId } });
    },
  },
  components: {
    PixelSpinner,
  },
};
</script>

<style scoped>
.job-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.job-header h3 {
  font-size: 1.25rem;
}
.view-details-btn:hover {
  background-color: #500832;
}
</style>
