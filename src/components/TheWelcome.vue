<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <RouterLink to="/" class="text-2xl font-bold text-blue-600">AvatarFate</RouterLink>
              <!-- <a href="/" class="text-2xl font-bold text-pink-600"></a> -->
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <RouterLink to="/login"  class="font-bold text-blue-600 hover:text-blue-600">Login</RouterLink>
            <!-- <a href="/login" class="font-bold text-pink-600 hover:text-pink-600">Login</a> -->
            <RouterLink to="/signup"  class="font-bold text-blue-600 hover:text-blue-600">Signup</RouterLink>
            <!-- <a href="/signup" class="font-bold text-pink-600 hover:text-pink-600">Sign Up</a> -->

            <RouterLink to="/dashboard"  class="font-bold text-blue-600 hover:text-blue-600">Dashboard</RouterLink>

            <!-- <a href="/" class="font-bold text-pink-600 hover:text-pink-600">About Us</a> -->
          </div>
        </div>
      </div>
    </nav>

    <!-- Header Section -->
    <header class="bg-cover bg-center h-96" style="background-image: url('/1520232004103.jpeg');">
      <div class="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div class="text-center text-white">
          <h1 class="text-4xl font-bold mb-4">Submit Your Resume & Land Your Dream Job!</h1>
          <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 p-3">
            <input type="text" placeholder="Job Title" class="p-2 rounded-l-md text-black" />
            <input type="text" placeholder="City or remote" class="p-2 text-black" />
            <button class="bg-blue-600 p-2 rounded-r-md text-white font-bold">Find a Job</button>
          </div>
        </div>
      </div>
    </header>

   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#38bdf8" fill-opacity="1" d="M0,160L16,165.3C32,171,64,181,96,186.7C128,192,160,192,192,192C224,192,256,192,288,170.7C320,149,352,107,384,80C416,53,448,43,480,42.7C512,43,544,53,576,64C608,75,640,85,672,101.3C704,117,736,139,768,138.7C800,139,832,117,864,128C896,139,928,181,960,181.3C992,181,1024,139,1056,144C1088,149,1120,203,1152,234.7C1184,267,1216,277,1248,272C1280,267,1312,245,1344,208C1376,171,1408,117,1424,90.7L1440,64L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z">
  </path>
</svg>


    <!-- Categories Section -->
    <section class="py-12 flex-1 cursor-pointer p-2">
      <h2 class="text-center text-3xl font-bold mb-2">Choose Your Category</h2>
      <p class="text-center mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus error. Facilis nemo laborum exercitationem.</p>
      <p class="text-center mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <div   class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        <div  v-for="category in categories" :key="category.id" class="p-4 bg-white rounded text-center shadow-xl transition-transform transform hover:scale-105">
          <div class="text-pink-600 mb-2">{{ category.icon }}</div>
          <h3 class="font-bold">{{ category.name }}</h3>
          <p>{{ category.jobs }} open positions</p>
        </div>
      </div>
    </section>

    <JobList/>

    <!-- Jobs Section -->
    <section class="p-2 mb-10 mt-10">
      <h2 class="text-center text-3xl font-bold mb-4">⭐ Available to Premium  subscribers ⭐</h2>
      <p class="text-center mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus error. Facilis nemo laborum exercitationem.</p>
      <p class="text-center mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        <div  v-for="job in jobs" :key="job.id" class="p-4 bg-red-50 rounded shadow hover:shadow-lg transition-shadow">
          <div class="flex justify-between items-center mb-2">
            <h3 class="font-bold">{{ job.title }}</h3>
            <span class="text-sm border border-x-2 border-y-2 p-2 cursor-pointer bg-rose-50 hover:bg-white hover:text-pink-600 font-bold text-p-2 rounded">{{ job.type }}</span>
          </div>
          <p class="text-gray-600">{{ job.company }}</p>
          <p class="text-gray-600">{{ job.location }}</p>
        </div>
      </div>
    </section>
   

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
      <div class="text-center">
        <p>&copy; 2024 AvatarFate. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import JobList from '../components/JobList.vue'


export default {
  components: {
    JobList
  },
  
  data() {
    return {
      categories: [
        { id: 1, name: 'Accountancy', jobs: 305, icon: '💼' },
        { id: 2, name: 'Education', jobs: 220, icon: '📚' },
        { id: 3, name: 'Automotive Jobs', jobs: 118, icon: '🚗' },
        { id: 4, name: 'Business', jobs: 132, icon: '📈' },
        { id: 5, name: 'Health Care', jobs: 315, icon: '⚕️' },
        { id: 6, name: 'IT & Agency', jobs: 210, icon: '💻' },
        { id: 7, name: 'Engineering', jobs: 100, icon: '🛠️' },
        { id: 8, name: 'Legal', jobs: 305, icon: '⚖️' },
      ],
      jobs: [
        { id: 1, title: 'Post-Room Operate', company: 'Vo Search Design LTD', location: 'Albany, New York', type: 'Full-Time' },
        { id: 2, title: 'Data Entry', company: 'Varta Media', location: 'Albany, New York', type: 'Part-Time' },
        { id: 3, title: 'Graphic Designer', company: 'Uk Design Studio', location: 'Albany, New York', type: 'Freelance' },
        { id: 4, title: 'Web Developer', company: 'Net Solutions', location: 'Albany, New York', type: 'Freelance' },
        { id: 5, title: 'Digital Marketer', company: 'Ua Marker LTD', location: 'Albany, New York', type: 'Remote' },
        { id: 6, title: 'UI/UX Designer', company: 'Ux Studio', location: 'Albany, New York', type: 'Freelance' },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
