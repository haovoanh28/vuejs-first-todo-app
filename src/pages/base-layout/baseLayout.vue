<template>
  <div class="container">
    <div class="header_container">
      <slot name="header"></slot>
    </div>
    <div class="body_container">
      <slot name="body"> </slot>
    </div>
    <div class="footer_container">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
};
</script>

<style src="./baseLayout.styles.css">
</style>