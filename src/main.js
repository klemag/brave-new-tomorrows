import { createApp } from 'vue'
// import VueRouter from 'vue-router';
import { createWebHistory, createRouter } from 'vue-router';
import routes from './routes';
import App from './App.vue'

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)

app.mount('#app');
