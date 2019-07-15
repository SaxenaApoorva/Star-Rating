import Vue from 'vue'
import ImagePanel from '@/components/ImagePanel'

describe('ImagePanel.vue', () => {
  it('should render data items properly', () => {
    const Constructor = Vue.extend(ImagePanel)
    const vm = new Constructor().$mount()

    expect(vm.$el.textContent).to.contain('Vue JS is an awesome JavaScript Framework')
    expect(vm.$el.textContent).to.contain('VueJS Tutorials')
  })
})
