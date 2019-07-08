<template lang="html">
  <div v-if="job"
    class="about"
  >
    <h1>{{ job.title }}</h1>
    <p v-html="job.description"></p>
    <router-link :to="{ name: 'home' }">
      Go back
    </router-link>
  </div>
</template>

<script>
import store from '@/store'
import API from '@/api'

export default {
  name: 'Job',
  data () {
    return {
      job: null
    }
  },
  methods: {
    setJob ({ job }) {
      this.job = job
    }
  },

  beforeRouteEnter (to, from, next) {
    store.dispatch('setLoading', { value: true })
      .then(() => API.getJob({ jobId: to.params.id }))
      .then((job) => {
        next((vm) => vm.setJob({ job }))
      })
      .catch((e) => alert(e.message))
      .then(() => store.dispatch('setLoading', { value: false }))
  },

  beforeRouteUpdate (to, from, next) {
    this.job = null

    store.dispatch('setLoading', { value: true })
      .then(() => API.getJob({ jobId: to.params.id }))
      .then((job) => this.setJob({ job }))
      .catch((e) => alert(e.message))
      .then(() => store.dispatch('setLoading', { value: false }))
  }
}
</script>
