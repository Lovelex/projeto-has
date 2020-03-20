import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../plugins/firebase'

// Main Components
import Main from '../components/main/Main.vue'
import Home from '../components/main/home/Home.vue'
import Contact from '../components/main/contact/Contact.vue'
import Projects from '../components/main/projects/Projects.vue'
import Musics from '../components/main/musics/Musics.vue'
import Videos from '../components/main/videos/Videos.vue'
import Photos from '../components/main/photos/Photos.vue'
import Events from '../components/main/events/Events.vue'

// Admin Components
import Login from '../components/admin/login/Login.vue'
import Admin from '../components/admin/Admin.vue'
import AdminEvents from '../components/admin/events/Events.vue'
import AdminImages from '../components/admin/images/Images.vue'
import AdminContact from '../components/admin/contact/Contact.vue'
import AdminSocials from '../components/admin/socials/Socials.vue'
import AdminMusics from '../components/admin/musics/Musics.vue'
import AdminVideos from '../components/admin/videos/Videos.vue'
import AdminMessages from '../components/admin/messages/Messages.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          name: 'Home',
          path: '',
          component: Home,
        },
        {
          name: 'Contact',
          path: 'contato',
          component: Contact,
        },
        {
          name: 'Musics',
          path: 'musicas',
          component: Musics
        },
        {
          name: 'Videos',
          path: 'videos',
          component: Videos
        },
        {
          name: 'Photos',
          path: '/fotos',
          component: Photos
        },
        {
          name: 'Events',
          path: 'eventos',
          component: Events
        },
        {
          name: 'Projects',
          path: 'projetos',
          component: Projects
        }
      ]
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
      beforeEnter(to, from, next) {
        auth.currentUser ? next({ path: '/admin' }) : next()
      }
    },
    {
      path: '/admin',
      component: Admin,
      beforeEnter(to, from, next) {
        auth.currentUser ? next() : next({ path: '/login' })
      },
      children: [
        {
          name: 'AdminEvents',
          component: AdminEvents,
          path: 'eventos',

        },
        {
          name: 'AdminImages',
          component: AdminImages,
          path: 'imagens'
        },
        {
          name: 'AdminContact',
          component: AdminContact,
          path: 'contato'
        },
        {
          name: 'AdminSocials',
          component: AdminSocials,
          path: 'midias'
        },
        {
          name: 'AdminMusics',
          component: AdminMusics,
          path: 'musicas'
        },
        {
          name: 'AdminVideos',
          component: AdminVideos,
          path: 'videos'
        },
        {
          name: 'AdminMessages',
          component: AdminMessages,
          path: 'mensagens'
        }
      ]
    }
  ]
})

export default router
