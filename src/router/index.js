import Vue from 'vue';
import Router from 'vue-router';
import Quiz from '@/components/Quiz';
import Question from '@/components/Question';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quiz',
      component: Quiz,
    },
    {
      path: '/question',
      component: Question,
      name: 'Question',
    },
  ],
});
