<template>
  <div class="add_item">
    <div class="formgroup">
      <label for="work_name">work name</label>
      <input type="text" v-model.trim="workName" id="work_name" required />
    </div>
    <div class="formgroup">
      <label for="work_des">work description</label>
      <textarea name="work_des" id="work_des" v-model.trim="workDes"></textarea>
    </div>
    <button @click="addWork">Add</button>
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
    };
  },
  methods: {
    addWork() {
      if (!this.workName || !this.workDes) return;
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
    },
    ...mapActions(["addTodoItem"]),
  },
};
</script>

<style scoped src="./AddItem.styles.css">
</style>