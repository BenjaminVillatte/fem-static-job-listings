<template>
  <article class="job-item shadow" :class="{featured:job.featured}">
    
    <div class="logo">

      <img :src="job.logo" alt="">

    </div>
    
    <div class="infos">
      
      <div class="head">
        <span class="company">{{ job.company }}</span>
        <span class="badges">
          <span v-if="job.new" class="badge badge-new">NEW!</span>
          <span v-if="job.featured" class="badge badge-featured">FEATURED</span>
        </span>
      </div>
      <p class="position">
        <a href="#">{{ job.position }}</a>
      </p>
      <p class="metas">
        <span>{{ job.postedAt }}</span>
        <span>{{ job.contract }}</span>
        <span>{{ job.location }}</span>
      </p>
    
    </div>
    
    <div class="tags">

      <span class="tag" @click="filter(job.role)">{{ job.role }}</span>
      <span class="tag" @click="filter(job.level)">{{ job.level }}</span>
      <span v-for="tool in job.tools" :key="tool+job.id" class="tag" @click="filter(tool)">{{ tool }}</span>
      <span v-for="lang in job.languages" :key="lang+job.id" class="tag" @click="filter(lang)">{{ lang }}</span>
    
    </div>

  </article>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  job: Object
})
</script>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({ filter: 'addFilter'})
  }
}
</script>