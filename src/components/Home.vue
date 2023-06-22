<template>
  <div>
    <h1>Добро пожаловать в Менеджер задач!</h1>
    <p>Это стартовая страница данного приложения</p>
    <p>Нажмите на кнопку ниже, чтобы перейти на страницу списка задач.</p>
    <router-link to="/tasks" class="button">Список задач</router-link>
  </div>
</template>

<style>
h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  color: #666;
  font-size: 16px;
  margin-bottom: 10px;
}

.button {
  display: inline-block;
  padding: 6px 10px;
  font-size: 14px;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
}
</style>
