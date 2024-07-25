import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginForm from '../views/LoginForm.vue'
import SignupForm from '../views/SignupForm.vue'
import Dashboard from '../views/JobDashboard.vue'
import JobDetails from '../components/JobDetails.vue'
import JobUpload from '../components/JobUpload.vue'
import EditJob from '../components/UserJobs.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home', 
      component: HomeView
    },

    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },

    {
      path: '/signup',
      name: 'sign_up',
      component: SignupForm
    },

    {
      path: '/jobs/:id',
      name: 'JobDetails',
      component: JobDetails
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },

    {
      path: '/upload',
      name: 'job_upload',
      component: JobUpload
    },

    {
      path: '/user/jobs',
      name: 'Edit',
      component: EditJob
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
