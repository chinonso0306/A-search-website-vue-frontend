<template>
    <div class="dashboard-container flex flex-col md:flex-row min-h-screen bg-gray-100">
      <SideBar class="w-full md:w-1/4 lg:w-1/5" />
      <div class="main-content flex-1 p-4">
        <SearchBar class="mb-4" />
        <div class="job-form-container bg-white p-6 rounded shadow-md w-full max-w-3xl mx-auto mt-6">
          <h2 class="text-2xl font-bold mb-4 text-center text-gray-800">Create a Job</h2>
          <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="title" class="block text-gray-600 font-semibold mb-1">Job Title</label>
                <input
                  type="text"
                  id="title"
                  v-model="title"
                  class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>
              <div>
                <label for="location" class="block text-gray-600 font-semibold mb-1">Location</label>
                <input
                  type="text"
                  id="location"
                  v-model="location"
                  class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>
              <div>
                <label for="salary" class="block text-gray-600 font-semibold mb-1">Salary</label>
                <input
                  type="text"
                  id="salary"
                  v-model="salary"
                  class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>
              <div class="col-span-1 md:col-span-2">
                <label for="description" class="block text-gray-600 font-semibold mb-1">Description</label>
                <textarea
                  id="description"
                  v-model="description"
                  class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div class="col-span-1 md:col-span-2">
                <label for="benefits" class="block text-gray-600 font-semibold mb-1">Benefits</label>
                <textarea
                  id="benefits"
                  v-model="benefits"
                  class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div class="col-span-1 md:col-span-2">
                <label for="requirements" class="block text-gray-600 font-semibold mb-1">Job Requirements</label>
                <textarea
                  id="requirements"
                  v-model="job_requirements"
                  class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div class="col-span-1 md:col-span-2">
                <label for="tags" class="block text-gray-600 font-semibold mb-1">Tags</label>
                <input
                  type="text"
                  id="tags"
                  v-model="tags"
                  class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              class="w-full bg-pink-500 text-white p-3 rounded hover:bg-pink-600 transition duration-200"
            >
              Create Job
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/SideBar.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import { getUser, createJob } from "../authService";
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  
  export default {
    components: {
      SideBar,
      SearchBar,
    },
    data() {
      return {
        title: "",
        description: "",
        location: "",
        tags: "",
        salary: "",
        benefits: "",
        job_requirements: "",
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const user = getUser();
          if (!user) {
            throw new Error("User is not authenticated");
          }
  
          const jobDetails = {
            title: this.title,
            description: this.description,
            location: this.location,
            tags: this.tags,
            salary: this.salary,
            benefits: this.benefits,
            job_requirements: this.job_requirements,
            user_id: user.id,
          };
  
          const response = await createJob(jobDetails);
          console.log("Job created:", response);
          if (response) {
            toast("Job has been Uploaded successfully", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        } catch (error) {
          if (error.response.data.message) {
            toast.error("The given data was invalid!", {
              position: toast.POSITION.TOP_LEFT,
            });
          }
          console.error("Error creating job:", error.response || error.message);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f7fafc;
  }
  @media (min-width: 768px) {
    .dashboard-container {
      flex-direction: row;
    }
  }
  .main-content {
    flex: 1;
    padding: 1rem;
  }
  .job-form-container {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  }
  input, textarea {
    background-color: #f8f9fa;
    border-color: #dee2e6;
  }
  button {
    background-color: #ff4081;
  }
  button:hover {
    background-color: #e73370;
  }
  label {
    font-weight: 500;
  }
  </style>
  