<template lang="html" functional>
  <div class="search-results">
    <ol v-if="props.jobs.length"
      class="search-results__list"
    >
      <li v-for="job in props.jobs"
        v-bind:id="job.id"
        class="search-results__item"
      >
        <router-link v-bind:to="{ name: 'job', params: { id: job.id } }"
          class="search-results__link"
        >
          {{ job.title }}
        </router-link>
      </li>
    </ol>
    <p v-else
      class="search-results__message"
    >
      No jobs to show
    </p>
  </div>
</template>

<style lang="css" scoped>
.search-results {
  margin-top: 55px;
}
.search-results__list {
  padding-left: 0;
  list-style: none;
}
.search-results__item {
  margin: 10px 0;
}
.search-results__message {
  text-align: center;
}
</style>
