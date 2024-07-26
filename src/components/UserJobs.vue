<template>
    <div class="p-5 mt-2">
      <h2 class="text-center text-3xl font-bold mb-8">Your Uploaded Jobs</h2>
      <div v-if="jobs.length === 0" class="text-center">You haven't uploaded any jobs yet.</div>
      <div class="job-list-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" v-else>
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
            <div class="action-buttons">
              <button @click="editJob(job.id)" class="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Edit</button>
              <button @click="confirmDelete(job.id)" class="bg-red-600 text-white px-4 py-2 rounded-md">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <PixelSpinner v-if="loading" :animation-duration="2000" :size="70" color="#f2b1cc" class="mt-4" />
    </div>
  </template>
  
  <script>
  import axios from "@/views/axios-config";
  import { PixelSpinner } from "epic-spinners";
  
  export default {
    data() {
      return {
        jobs: [],
        loading: true,
      };
    },
    async created() {
      try {
        const response = await axios.get('/user/jobs');
        this.jobs = response.data;
      } catch (error) {
        console.error("Error fetching user jobs:", error);
      } finally {
        this.loading = false;
      }
    },
    methods: {
      async deleteJob(id) {
        try {
          await axios.delete(`/jobs/${id}`);
          this.jobs = this.jobs.filter(job => job.id !== id);
        } catch (error) {
          console.error("Error deleting job:", error);
        }
      },
      editJob(id) {
        this.$router.push({ name: 'edit-job', params: { id } });
      },
      confirmDelete(id) {
        if (confirm('Are you sure you want to delete this job?')) {
          this.deleteJob(id);
        }
      }
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
  .action-buttons button:hover {
    opacity: 0.8;
  }
  </style>
  