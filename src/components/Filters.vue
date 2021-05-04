<template>
  <div id="filters" class="shadow" v-if="hasFilters">
    <div class="list">
      <div v-for="filter in filters" :key="filter" class="filter-tag">
        <span class="label">{{ filter }}</span>
        <span class="remove" @click="removeFilter(filter)"></span>
      </div>
    </div>
    <div class="clear">
      <a href="#" @click="clearFilters">Clear</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      filters: 'getFilters',
      hasFilters: 'hasFilters'
    })
  },
  methods: {
    ...mapActions(['removeFilter', 'clearFilters'])
  }
}
</script>
