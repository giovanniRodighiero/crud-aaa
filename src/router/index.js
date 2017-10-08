import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';

// CONTAINERS
import SideMenu from '@/containers/SideMenu';
import Login from '@/containers/Login';
import Dashboard from '@/containers/Dashboard';
import SinglePageEdit from '@/containers/SinglePageEdit';

// GUARDS
import { beforeEach } from './guards';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      components: {
        default: Login
      }
    },
    {
      path: '/',
      name: 'dashboard',
      components: {
        default: Dashboard,
        SideMenu
      }
    },
    {
      path: '/single-pages/:pageName',
      name: 'single-page-edit',
      components: {
        default: SinglePageEdit,
        SideMenu
      }
    }
  ]
});

// GUARDS BINDING
router.beforeEach((to, from, next) => beforeEach({ store, to, from, next }));

export default router;
