<template>
  <div class="home">
    <SearchBar v-bind:jobName="jobName"
      v-on:search="handleSearch"
      v-on:clear="handleClear"
      v-on:changeJobName="handleChangeJobName"
    />
    <SearchResults v-bind:jobs="jobs" />
    <SearchMore v-if="searchMoreIsAvailable"
      v-on:searchMore="handleSearchMore"
    >
      Load page #{{ currentPage + 1 }}
    </SearchMore>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import API from '@/api'

import SearchBar from '@/components/SearchBar'
import SearchResults from '@/components/SearchResults'
import SearchMore from '@/components/SearchMore'

export default {
  name: 'Home',
  components: {
    SearchBar,
    SearchResults,
    SearchMore
  },
  data () {
    return {
      localJobName: this.jobName
    }
  },
  computed: {
    ...mapState([
      'jobName',
      'jobs',
      'lastPageCount'
    ]),
    currentPage () {
      return Math.floor(this.jobs.length / API.JOBS_PER_PAGE)
    },
    searchMoreIsAvailable () {
      return this.jobs.length && this.lastPageCount === API.JOBS_PER_PAGE
    }
  },
  methods: {
    ...mapActions([
      'setJobName',
      'setLoading',
      'setJobs',
      'addJobs'
    ]),

    async handleSearch () {
      if (!this.localJobName) {
        return
      }

      await this.setLoading({ value: true })
      await this.setJobName({ value: this.localJobName })
      await this.setJobs({ jobs: [] })

      try {
        const jobs = await API.getJobs({
          jobName: this.jobName
        })
        await this.setJobs({ jobs })

      } catch (e) {
        alert(e.message)
      }

      this.setLoading({ value: false })
    },

    async handleSearchMore () {
      await this.setLoading({ value: true })

      try {
        const jobs = await API.getJobs({
          jobName: this.jobName,
          page: this.currentPage
        })
        await this.addJobs({ jobs })

      } catch (e) {
        alert(e.message)
      }

      this.setLoading({ value: false })
    },

    handleChangeJobName (ev) {
      this.localJobName = ev.target.value
    },

    handleClear () {
      this.setJobName({ value: '' })
      this.setJobs({ jobs: [] })
    }
  }
}
</script>
