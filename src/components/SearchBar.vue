<template>
   <div class="search-bar flex flex-col md:flex-row items-center bg-white p-4 rounded-md shadow-md mb-4">
    <input 
      type="text" 
      placeholder="Search something here..." 
      v-model="searchQuery" 
      class="w-full md:flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500 mb-2 md:mb-0 md:mr-2" 
    />
    <button 
      @click="filterJobs" 
      class="w-full md:w-auto bg-pink-600 text-white px-4 py-2 rounded-md">
      FIND
    </button>
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
  