import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

// Use Firestore and Hosting
// enter enter dist yes
// npm run build
// firebase deploy

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        // If a name exists, go to the chat
        if(to.params.name) {
          next()
        } else { // If it doesn't exist, make the next page they visit the Welcome page.
          next({name: 'Welcome'})
        }
      }
    }
  ]
})
