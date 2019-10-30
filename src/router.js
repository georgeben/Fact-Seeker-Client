import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SearchResults from './views/SearchResults.vue';
import Auth from './views/Auth.vue';
import VerifyEmail from './components/Auth/VerifyEmail.vue';
import Onboarding from './components/Onboarding.vue';
import storageUtil from './utils/localStorage';
import constants from './constants';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchResults,
    },
    {
      path: '/login',
      component: Auth,
    },
    {
      path: '/signup',
      component: Auth,
    },
    {
      path: '/verify-email/:token',
      component: VerifyEmail,
    },
    {
      path: '/onboarding/:pageID',
      component: Onboarding,
      meta: {
        unverified: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.unverified)) {
    const user = storageUtil.loadState(constants.currentUser);
    if (!user) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath },
      });
    } else if (user.verifiedEmail) {
      next({
        path: '/',
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
