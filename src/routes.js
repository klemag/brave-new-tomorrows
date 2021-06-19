import HelloWorld from './components/HelloWorld.vue';
import NotFound from './components/NotFound.vue';

const routes = [
  {
    path: '/home',
    alias: '/',
    component: HelloWorld,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: '404',
  },
];

export default routes;
