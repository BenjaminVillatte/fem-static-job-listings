<template>
  <div class="job-list">
    <JobItem  v-for="job in jobs" :key="job.id" :job="job"/>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  jobs: Array
})
</script>

<script>
import JobItem from '@/components/JobItem.vue'

export default {
  components: {
    JobItem
  }
}
</script>
