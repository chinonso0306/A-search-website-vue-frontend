<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-6">
    <div class="bg-white p-6 rounded shadow-md w-full max-w-lg">
      <h2 class="text-2xl font-bold mb-4 text-center">Create a Job</h2>
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
          class="w-full bg-pink-300 text-white p-2 rounded hover:bg-pink-400 transition duration-200"
        >
          Create Job
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// import {  } from '../jobService';
import { getUser, createJob } from '../authService';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  data() {
    return {
      title: '',
      description: '',
      location: '',
      tags: '',
      salary: '',
      benefits: '',
      job_requirements: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const user = getUser();
        if (!user) {
          throw new Error('User is not authenticated');
        }

        const jobDetails = {
          title: this.title,
          description: this.description,
          location: this.location,
          tags: this.tags,
          salary: this.salary,
          benefits: this.benefits,
          job_requirements: this.job_requirements,
          user_id: user.id
        };

        const response = await createJob(jobDetails);
        console.log('Job created:', response);
        if (response) {
          toast("Job has been Uploaded successfully", {
            position: toast.POSITION.TOP_CENTER
          });
        }
      } catch (error) {
        console.error('Error creating job:', error.response || error.message);
      }
    }
  }
};
</script>
<style scoped>
/* Add any additional styles here */
</style>
