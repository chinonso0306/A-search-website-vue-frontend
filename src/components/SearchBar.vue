<template>
    <div class="search-bar flex items-center bg-white p-4 rounded-md shadow-md mb-4">
      <input type="text" placeholder="Search something here..." v-model="searchQuery" class="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500" />
      <button @click="filterJobs" class="bg-pink-600 text-white px-4 py-2 rounded-md ml-2">FIND</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      filterJobs() {
        // Add search functionality here
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  