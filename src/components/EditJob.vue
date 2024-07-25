<template>
    <div class="dashboard-container flex flex-col md:flex-row min-h-screen bg-gray-100">
      <SideBar />
      <div class="main-content flex-1 p-4">
        <SearchBar />
        <div class="job-form-container bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto mt-6">
          <h2 class="text-2xl font-bold mb-4 text-center">Edit Job</h2>
          <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label for="title" class="block text-gray-700">Job Title</label>
                <input
                  type="text"
                  id="title"
                  v-model="title"
                  class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
                  required
                />
              </div>
              <div>
                <label for="location" class="block text-gray-700">Location</label>
                <input
                  type="text"
                  id="location"
                  v-model="location"
                  class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
                  required
                />
              </div>
              <div>
                <label for="salary" class="block text-gray-700">Salary</label>
                <input
                  type="text"
                  id="salary"
                  v-model="salary"
                  class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
                  required
                />
              </div>
              <div class="col-span-1 md:col-span-2">
                <label for="description" class="block text-gray-700">Description</label>
                <textarea
                  id="description"
                  v-model="description"
                  class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
                  required
                ></textarea>
              </div>
              <div class="col-span-1 md:col-span-2">
                <label for="benefits" class="block text-gray-700">Benefits</label>
                <textarea
                  id="benefits"
                  v-model="benefits"
                  class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
                  required
                ></textarea>
              </div>
              <div class="col-span-1 md:col-span-2">
                <label for="requirements" class="block text-gray-700">Job Requirements</label>
                <textarea
                  id="requirements"
                  v-model="job_requirements"
                  class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
                  required
                ></textarea>
              </div>
              <div class="col-span-1 md:col-span-2">
                <label for="tags" class="block text-gray-700">Tags</label>
                <input
                  type="text"
                  id="tags"
                  v-model="tags"
                  class="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-pink-300"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              class="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700 transition duration-200"
            >
              Update Job
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from '../components/SideBar.vue';
  import SearchBar from '../components/SearchBar.vue';
  import axios from "@/views/axios-config";
  
  export default {
    components: {
      SideBar,
      SearchBar,
    },
    data() {
      return {
        title: '',
        location: '',
        salary: '',
        description: '',
        benefits: '',
        job_requirements: '',
        tags: '',
      };
    },
    async created() {
      const jobId = this.$route.params.id;
      try {
        const response = await axios.get(`/jobs/${jobId}`);
        const job = response.data;
        this.title = job.title;
        this.location = job.location;
        this.salary = job.salary;
        this.description = job.description;
        this.benefits = job.benefits;
        this.job_requirements = job.job_requirements;
        this.tags = job.tags;
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    },
    methods: {
      async handleSubmit() {
        const jobId = this.$route.params.id;
        try {
          await axios.put(`/jobs/${jobId}`, {
            title: this.title,
            location: this.location,
            salary: this.salary,
            description: this.description,
            benefits: this.benefits,
            job_requirements: this.job_requirements,
            tags: this.tags,
          });
          this.$router.push('/');
        } catch (error) {
          console.error("Error updating job:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .job-form-container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  