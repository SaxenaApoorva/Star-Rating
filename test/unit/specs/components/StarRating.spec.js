import Vue from 'vue'
import StarRating from '@/components/StarRating'

describe('StarRating.vue', () => {
  it('should render prop value', () => {
    // Extend the component to get the constructor, which we can then initialize directly.
    const Constructor = Vue.extend(StarRating)

    const vm = new Constructor({
      propsData: {
        // Props are passed in "propsData".
        rating: 2
      }
    }).$mount()

    expect(vm.currentRating).to.equal(2)
  })

  it('should alter rating on click', () => {
    // build component
    const Constructor = Vue.extend(StarRating)
    const vm = new Constructor().$mount()

    // before click event
    vm.currentRating = 3
    expect(vm.currentRating).to.equal(3)

    // simulate click event
    const button = vm.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm._watcher.run()// triggering click event

    // after click event
    expect(vm.currentRating).to.equal(1)// click event will alter the first element of teh list.
  })
})
