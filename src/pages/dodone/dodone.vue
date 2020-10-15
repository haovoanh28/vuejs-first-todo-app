<template>
  <div class="dodone">
    <div class="dodone__buttons">
      <button
        :class="[
          'dodone__buttons-todo',
          { 'dodone__buttons-todo--active active': currentTab === 'ToDo' },
        ]"
        @click="currentTab = 'ToDo'"
      >
        Todo List
      </button>
      <button
        :class="[
          'dodone__buttons-done',
          { 'dodone__buttons-done--active': currentTab === 'Done' },
        ]"
        @click="currentTab = 'Done'"
      >
        Done List
      </button>
    </div>
    <div class="dodone__body">
      <keep-alive>
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import ToDo from "../../components/todo/ToDo.component";
import Done from "../../components/done/Done.component";

export default {
  name: "DoDone",
  data() {
    return {
      currentTab: "ToDo",
    };
  },
  components: {
    ToDo,
    Done,
  },
};
</script>

<style scoped src="./dodone.styles.css">
</style>