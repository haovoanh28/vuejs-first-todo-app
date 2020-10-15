<template>
  <div class="dodone__done">
    <ListItem
      v-for="i in doneList"
      type="done"
      :item="i"
      :key="i.id"
    ></ListItem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListItem from '../list_item/ListItem.component';

export default {
  name: "Done",
  components: {
    ListItem
  },
  computed: {
    ...mapGetters(['doneList'])
  }
};
</script>

<style scoped src="./Done.styles.css">
</style>