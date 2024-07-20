<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'




</script>

<template>

 
            <div class="hidden">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/signup">Signup</RouterLink>
              <RouterLink to="/login">login</RouterLink>

            </div>
     

  <RouterView />
</template>

<style scoped>

</style>
