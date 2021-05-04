<template>
  <div class="container">
    <header></header>
    <main>
      <Filters />
      <JobsList v-if="jobs" :jobs="jobs"/>
    </main>
  </div>
</template>

<script>
import JobsList from '@/components/JobsList.vue'
import Filters from '@/components/Filters.vue'
import { mapGetters } from 'vuex'

export default {
  
  components: {
    JobsList,
    Filters
  },
  computed: {
    ...mapGetters({
      jobs: 'getJobsFiltered'
    })
  },
  created() {
    this.$store.dispatch('loadJobs')
  }
}
</script>
