import Vue from 'vue'
import Router from 'vue-router'
import ImagePanel from '@/components/ImagePanel.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ImagePanel',
      component: ImagePanel
    }
  ]
})
