import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            tasks: [],
        };
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);
        },
        updateTask(state, { index, task }) {
            state.tasks[index] = task;
        },
        deleteTask(state, index) {
            state.tasks.splice(index, 1);
        },
    },
});

export default store;
