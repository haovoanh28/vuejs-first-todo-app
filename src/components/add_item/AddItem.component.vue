<template>
  <div class="add_item">
    <div class="formgroup">
      <label for="work_name">work name</label>
      <input
        type="text"
        v-model.trim="workName"
        id="work_name"
        @keypress.enter="addWork"
        required
      />
    </div>
    <div class="formgroup">
      <label for="work_des">work description</label>
      <textarea
        name="work_des"
        id="work_des"
        v-model.trim="workDes"
        @keypress.enter="addWork"
      ></textarea>
    </div>
    <button @click="addWork">Add</button>

    <ul class="errors" v-if="errors">
      <li
        class="errors__item"
        v-for="(error, index) in errors"
        :key="`error-${index}`"
      >
        {{ error }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppItem",
  data() {
    return {
      workName: "",
      workDes: "",
      errors: [],
    };
  },
  methods: {
    addWork() {
      this.errors = [];
      if (!this.workName) {
        this.errors.push("Please enter work name !!!");
        return;
      }

      if (!this.workDes) {
        this.errors.push("Please enter work description !!!");
        return;
      }

      let date = new Date();

      this.addTodoItem({
        workName: this.workName,
        workDes: this.workDes,
        startDate:
          date.getDate() +
          "/" +
          Number(Number(date.getMonth()) + 1) +
          "/" +
          date.getFullYear(),
      });

      this.workName = "";
      this.workDes = "";
      this.errors = [];
    },
    ...mapActions(["addTodoItem"]),
  },
};
</script>

<style scoped src="./AddItem.styles.css">
</style>