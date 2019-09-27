import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SearchResults from './views/SearchResults.vue';
import Auth from './views/Auth.vue';
import VerifyEmail from './components/VerifyEmail.vue';
import Onboarding from './components/Onboarding.vue';

Vue.use(Router);

export default new Router({
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
    }
  ],
});
