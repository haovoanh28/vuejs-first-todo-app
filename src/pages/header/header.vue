<template>
  <div class="header">
    <div class="header__nav">
      <router-link
        @click.native="selectedLink = 'add'"
        to="/add"
        :class="{ 'header__nav--active': selectedLink == 'add' }"
        >Add Work</router-link
      >
      <router-link
        @click.native="selectedLink = 'todo'"
        to="/dodone"
        :class="{ 'header__nav--active': selectedLink == 'todo' }"
        >Todo and Done</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      selectedLink: "todo",
    };
  },
};
</script>

<style scoped src="./header.styles.css">
</style>