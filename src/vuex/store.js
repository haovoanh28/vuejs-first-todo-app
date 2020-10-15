import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [
      {
        id: 0,
        workName: "Làm bài tập",
        workDes: "Bài 5/91, 4/93, 2/95",
        startDate: "14/10/2020",
        dueDate: "",
        done: false,
      },
      {
        id: 1,
        workName: "Đi siêu thị",
        workDes: "Mua kéo, thớt, bột giặt",
        startDate: "18/10/2020",
        dueDate: "",
        done: false,
      },
    ],
  },
  mutations: {
    addTodoItem(state, item) {
      console.log(item);
      let newId = state.todoList[state.todoList.length - 1].id + 1;
      let { workName, workDes, startDate } = { ...item };
      state.todoList.push({
        id: newId,
        workName,
        workDes,
        startDate,
        done: false,
      });
    },
    markDone(state, payload) {
      let obj = state.todoList.find((i) => i.id === payload.id);
      obj.dueDate = payload.dueDate;
      obj.done = true;
    },
  },
  actions: {
    addTodoItem(context, item) {
      context.commit("addTodoItem", item);
    },
  },
  getters: {
    todoList(state) {
      return state.todoList.filter((i) => i.done === false);
    },
    doneList(state) {
      return state.todoList.filter((i) => i.done === true);
    },
  },
});

export default store;
