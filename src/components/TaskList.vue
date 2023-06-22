<template>
  <div>
    <h1>Список задач</h1>

    <form @submit.prevent="addTask">
      <input v-model="newTask" type="text" placeholder="Введите текст задачи" required />
      <button type="submit">Добавить задачу</button>
    </form>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span v-if="index !== editingIndex">{{ task }}</span>
        <input
            v-else
            v-model="editingTask"
            type="text"
            required
            @keydown.enter="updateTask(index)"
            @blur="updateTask(index)"
        />
        <button v-if="index !== editingIndex" @click="editTask(index)">Редактировать</button>
        <button v-else @click="updateTask(index)">Сохранить</button>
        <button @click="deleteTask(index)">Удалить</button>
      </li>
    </ul>

    <router-link to="/" class="button">На Главную</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'TaskList',
  setup() {
    const newTask = ref('');
    const editingIndex = ref(-1);
    const editingTask = ref('');
    const store = useStore();

    const tasks = store.state.tasks;

    const addTask = () => {
      if (newTask.value) {
        store.commit('addTask', newTask.value);
        newTask.value = '';
      }
    };

    const editTask = (index) => {
      editingIndex.value = index;
      editingTask.value = tasks[index];
    };

    const updateTask = (index) => {
      if (editingTask.value) {
        store.commit('updateTask', { index, task: editingTask.value });
        editingIndex.value = -1;
        editingTask.value = '';
      }
    };

    const deleteTask = (index) => {
      store.commit('deleteTask', index);
    };

    return {
      newTask,
      editingIndex,
      editingTask,
      tasks,
      addTask,
      editTask,
      updateTask,
      deleteTask,
    };
  },
};
</script>


<style>
h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  padding: 6px 10px;
  margin-left: 10px;
  font-size: 14px;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

li span {
  flex-grow: 1;
  padding: 6px 10px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

li input[type="text"] {
  flex-grow: 1;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
</style>
