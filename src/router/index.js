import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/components/Contacts'
import Faq from '@/components/Faq'
import Duplicates from '@/components/Duplicates'
import Settings from '@/components/Settings'
import Help from '@/components/Help'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', redirect: '/contacts' },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/duplicates',
      name: 'duplicates',
      component: Duplicates
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    }
  ],
  mode: 'history'
})
