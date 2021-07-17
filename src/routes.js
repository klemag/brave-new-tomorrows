import Home from './components/Home.vue';
import NotFound from './components/NotFound.vue';

const routes = [{
  path: '/home',
  alias: '/',
  component: Home,
},
{
  path: '/:pathMatch(.*)*',
  component: NotFound,
  name: '404',
},
];

export default routes;
