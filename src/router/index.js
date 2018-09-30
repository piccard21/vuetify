import Vue from 'vue'
import Router from 'vue-router' 
import HelloWorld from '@/components/HelloWorld'
import TestMe from '@/components/TestMe'
import TestMe2 from '@/components/TestMe2'
import TestMe3 from '@/components/TestMe3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/testme',
      name: 'testme',
      component: TestMe
    },
    {
      path: '/testme2',
      name: 'testme2',
      component: TestMe2
    },
    {
      path: '/testme3',
      name: 'testme3',
      component: TestMe3
    }
  ],
  mode: 'history'
})
