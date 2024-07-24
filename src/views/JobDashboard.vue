<template>
  <div class="dashboard-container flex flex-col md:flex-row min-h-screen bg-gray-100">
    <SideBar />
    <div class="main-content flex-1 p-4">
      <SearchBar />
      <div class="job-filters flex flex-wrap gap-2 mb-4">
        <button class="filter-btn" v-for="filter in filters" :key="filter">{{ filter }}</button>
      </div>
      <JobList />
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import SearchBar from '../components/SearchBar.vue';
import JobList from '../components/JobList.vue';

export default {
  components: {
    SideBar,
    SearchBar,
    JobList
  },
  data() {
    return {
      filters: ['Your Skill', 'Programmer', 'Software Engineer', 'Photographer', 'Digital Marketing']
    };
  }
};
</script>

<style scoped>
.filter-btn {
  padding: 10px 20px;
  background-color: #e0e0e0;
  border-radius: 20px;
  cursor: pointer;
}
.filter-btn:hover {
  background-color: #d0d0d0;
}
</style>
