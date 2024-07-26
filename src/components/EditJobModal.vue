<!-- EditJobModal.vue -->
<template>
    <div v-if="visible" class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="modal-content bg-white p-6 rounded-lg shadow-lg relative">
        <button @click="close" class="absolute top-2 right-2">X</button>
        <h2 class="text-2xl font-bold mb-4">Edit Job</h2>
        <form class="gird grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2" @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block mb-1" for="title">Title</label>
            <input type="text" id="title" v-model="job.title" class="w-full p-2 border border-gray-300 rounded-md">
          </div>
          <div class="mb-4">
            <label class="block mb-1" for="description">Description</label>
            <textarea id="description" v-model="job.description" class="w-full p-2 border border-gray-300 rounded-md"></textarea>
          </div>

          <div class="mb-4">
            <label class="block mb-1" for="description">Salary</label>
            <textarea id="description" v-model="job.salary" class="w-full p-2 border border-gray-300 rounded-md"></textarea>
          </div>

          <div class="mb-4">
            <label class="block mb-1" for="description">Tags</label>
            <textarea id="description" v-model="job.tags" class="w-full p-2 border border-gray-300 rounded-md"></textarea>
          </div>

          <div class="mb-4">
            <label class="block mb-1" for="description">Location</label>
            <textarea id="description" v-model="job.location" class="w-full p-2 border border-gray-300 rounded-md"></textarea>
          </div>

          <button type="submit" class="bg-pink-600 text-white px-4 py-2 rounded-md">Save</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true
      },
      job: {
        type: Object,
        required: true
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      submitForm() {
        // Emit an event to the parent component with the updated job details
        this.$emit('update-job', this.job);
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    width: 100%;
    max-width: 500px;
  }
  </style>
  