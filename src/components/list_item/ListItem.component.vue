<template>
  <div
    :class="{
      todo_container: type === 'todo',
      done_container: type === 'done',
    }"
  >
    <div :class="{ todo__item: type === 'todo', done__item: type === 'done' }">
      <span> {{ item.workName }} </span>
      <span @click="moreDetails = moreDetails == false ? true : false">
        &#9868;
      </span>
    </div>
    <div
      class="dodone__details"
      :class="{
        todo__details: type === 'todo',
        done__details: type === 'done',
      }"
      v-show="moreDetails"
    >
      <ul>
        <li v-for="(value, key) in usefulProp" :key="key">
          {{ translateKey(key) + ": " + value }}
        </li>
      </ul>

      <button
        @click.exact="markDone({ id: item.id, dueDate: getDueDate() })"
        v-if="type === 'todo'"
      >
        Mark as done
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ToDoItem",
  props: ["item", "type"],
  data() {
    return {
      moreDetails: false,
    };
  },
  methods: {
    translateKey(key) {
      if (key === "workName") {
        return "Work";
      }
      if (key === "workDes") {
        return "Work Description";
      }
      if (key === "startDate") {
        return "Start Date";
      }
      if (key === "dueDate") {
        return "Due Date";
      }
    },
    getDueDate() {
      let date = new Date();
      return (
        date.getDate() +
        "/" +
        Number(Number(date.getMonth()) + 1) +
        "/" +
        date.getFullYear()
      );
    },
    ...mapMutations(["markDone"]),
  },
  computed: {
    usefulProp() {
      let { workName, workDes, startDate, dueDate } = this.item;
      return {
        workName,
        workDes,
        startDate,
        dueDate,
      };
    },
  },
};
</script>

<style scoped src="./ListItem.styles.css">
</style>