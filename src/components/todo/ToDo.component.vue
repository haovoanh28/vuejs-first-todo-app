<template>
  <div class="dodone__todo">
    <transition-group name="fade" tag="div">
      <ListItem
        v-for="i in todoList"
        type="todo"
        :item="i"
        :key="i.id"
      ></ListItem>
    </transition-group>
  </div>
</template>

<script>
import ListItem from "../list_item/ListItem.component";
import { mapGetters } from "vuex";

export default {
  name: "ToDo",
  components: {
    ListItem: ListItem,
  },
  computed: {
    ...mapGetters(["todoList"]),
  },
};
</script>

<style scoped src="./ToDo.style.css">
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>