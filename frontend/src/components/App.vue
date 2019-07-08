<template>
  <div class="app">
    <TheSpinner v-if="isLoading" />
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheSpinner from '@/components/TheSpinner'

export default {
  name: 'App',
  components: {
    TheSpinner
  },
  computed: {
    ...mapState([
      'isLoading'
    ])
  }
}
</script>

<style>
.app {
  max-width: 720px;
  padding: 0 15px;
  margin: 60px auto;
}
</style>
