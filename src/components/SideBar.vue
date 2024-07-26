<!-- SideBar.vue -->

<template>
  <div class="sidebar bg-pink-600 text-white w-full md:w-64 p-4">
    <div class="logo text-3xl font-bold mb-6">Jhub</div>
    <nav>
      <ul>
        <li class="mb-4">
          <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink to="/upload" class="nav-link">Upload Job</RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink to="/user/jobs" class="nav-link">Your Jobs</RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink to="/applications" class="nav-link">Applications</RouterLink>
        </li>
        <li class="mb-4">
          <router-link to="/messages" class="nav-link">Messages</router-link>
        </li>
        <li class="mb-4">
          <router-link to="/statistics" class="nav-link">Statistics</router-link>
        </li>
        <li class="mb-4">
          <router-link to="/settings" class="nav-link">Settings</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {};
</script>

<style scoped>
.nav-link {
  display: block;
  padding: 10px 15px;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.nav-link:hover {
  background-color: #500832;
}
</style>
