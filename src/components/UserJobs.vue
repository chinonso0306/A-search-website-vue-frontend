<template>
    <div class="p-5 mt-2">
      <h2 class="text-center text-3xl font-bold mb-8">Your Uploaded Jobs</h2>
      <div v-if="jobs.length === 0" class="flex justify-center items-center">
        <PixelSpinner v-if="loading" :animation-duration="2000" :size="70" color="#db2777" class="mt-4" />
      </div>
      <div class="job-list-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" v-else>
        <div class="job-card" v-for="job in jobs" :key="job.id">
          <div class="job-header flex justify-between items-center mb-2">
            <h3 class="text-xl font-bold">{{ job.title }}</h3>
            <p class="text-gray-500">{{ job.location }}</p>
          </div>
          <div class="job-body mb-2">
            <p>{{ job.description }}</p>
          </div>
          <div class="job-footer flex justify-between items-center">
            <p v-if="job.salary" class="text-pink-600 font-bold">Salary: ${{ job.salary }}</p>
            <div class="action-buttons">
              <button :disabled="isButtonClicked" @click="openEditModal(job)" class="edit-btn bg-blue-600 text-white px-4 py-2 rounded-md">
                {{ isButtonClicked ? "Editing..." : "Edit" }}
              </button>
              <button @click="confirmDelete(job.id)" class="bg-red-600 text-white px-4 py-2 rounded-md">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <edit-job-modal 
        v-if="isModalVisible" 
        :visible="isModalVisible" 
        :job="selectedJob" 
        @close="closeModal" 
        @update-job="updateJob" 
      />
    </div>
  </template>
  
  <script>
  import axios from "@/views/axios-config";
  import EditJobModal from "./EditJobModal.vue";
  import { PixelSpinner } from "epic-spinners";
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  
  export default {
    data() {
      return {
        jobs: [],
        loading: true,
        isModalVisible: false,
        isButtonClicked: false,
        selectedJob: null
      };
    },
    async created() {
      try {
        const response = await axios.get('/user/jobs');
        this.jobs = response.data;
      } catch (error) {
        console.error("Error fetching user jobs:", error);
      } finally {
        this.loading = false;
      }
    },
    methods: {
      openEditModal(job) {
        this.selectedJob = { ...job };
        this.isModalVisible = true;
        this.isButtonClicked = true;
      },
      closeModal() {
        this.isModalVisible = false;
        this.isButtonClicked = false;
      },
      async updateJob(updatedJob) {
        try {
          const response = await axios.put(`/jobs/${updatedJob.id}`, updatedJob);
          const index = this.jobs.findIndex(job => job.id === updatedJob.id);
          if (index !== -1) {
            this.jobs.splice(index, 1, response.data);
            console.log("Job updated successfully:", response.data);
            toast.success("Job updated successfully", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
          this.closeModal();
        } catch (error) {
          console.error("Error updating job:", error);
          if (error.response && error.response.status === 422) {
            toast.error("Validation error: " + (error.response.data.message || "Please check your input."), {
              position: toast.POSITION.TOP_CENTER,
            });
          } else {
            toast.error("Error updating job. Please try again.", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        }
      },
      async deleteJob(id) {
        try {
          await axios.delete(`/jobs/${id}`);
          this.jobs = this.jobs.filter(job => job.id !== id);
        } catch (error) {
          console.error("Error deleting job:", error);
        }
      },
      confirmDelete(id) {
        if (confirm('Are you sure you want to delete this job?')) {
          this.deleteJob(id);
        }
      }
    },
    components: {
      PixelSpinner,
      EditJobModal
    }
  };
  </script>
  
  <style scoped>
  .job-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .job-header h3 {
    font-size: 1.25rem;
  }
  .action-buttons button:hover {
    opacity: 0.8;
  }
  </style>
  