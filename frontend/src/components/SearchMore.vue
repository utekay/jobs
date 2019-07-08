<template lang="html" functional>
  <button v-on:click="listeners['searchMore']"
    class="search-more button button_primary"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<style lang="css" scoped>
.search-more {
  margin: 15px 0;
}
</style>
