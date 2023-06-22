import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../components/TaskList.vue';
import Home from '../components/Home.vue';

const routes = [
  { path: '/tasks', component: TaskList },
  { path: '/', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

