<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// import { Toaster,  toast } from 'sonner'




</script>

<template>

  <div>

 

    
            <div class="hidden">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/signup">Signup</RouterLink>
              <RouterLink to="/login">login</RouterLink>
              <!-- <RouterLink to="/test">login</RouterLink> -->
            </div>
            <RouterView />
     
          </div>
</template>

<style scoped>

</style>
