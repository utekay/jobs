<template lang="html" functional>
  <form
    v-on:submit.prevent="listeners['search']"
    class="search-bar"
  >
    <input v-bind:value="props.jobName"
      v-on:input="listeners['changeJobName']"
      type="text"
      placeholder="Type job title"
      class="input search-bar__input"
    />
    <button
      v-on:click="listeners['clear']"
      type="button"
      class="button button_secondary"
    >
      Clear
    </button>
    <button class="button button_primary">
      Search
    </button>
  </form>
</template>

<style lang="css" scoped>
.search-bar {
  text-align: right;
}
.search-bar__input {
  display: block;
  width: 100%;
  margin: 15px 0;
}
</style>
