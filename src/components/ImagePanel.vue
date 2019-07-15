<template>
  <div class="wrapper" >
    <div>
      <h2 tabindex="0"> {{ imageCatalogue.title }} </h2>
    </div>
    <div class="imageDisplay">
      <img src = "../assets/images/vuejs.png" alt="VUE JS" tabindex="0"/>
      <div>
        <StarRating :rating="rating"/>
      </div>
    </div>
    <div class="description" tabindex="0">{{ imageCatalogue.description }}</div>
  </div>
</template>

<script>
import StarRating from '@/components/StarRating.vue'

export default {
  name: 'ImagePanel',
  components: {
    StarRating
  },
  data () {
    return {
      imageCatalogue:
      {
        title: 'VueJS Tutorials',
        description: 'Vue JS is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React! Many questions will be answered, including *What is VueJS and Why would you use it? *Setting up a Development Environment and Workflow *The Basics (including the basic Syntax, Understanding Templates and much more!) *Interacting with DOM (Rendering Lists, Conditionally attaching/ detaching Elements ...) *Using Components (and what Components are to begin with) *Binding to Form Inputs *All about Directives, Filters and Mixins *How to make your App more Beautiful with Animations and Transitions *How to create an awesome Single-Page-Application (SPA) with Routing *How to improve State Management by using Vuex *How to Deploy the App And much more ...'
      },
      rating: Math.floor(Math.random() * 6)// to create random values between 1 to 5
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 15px;
  height: auto;
}

.description {
  margin-top: 20px;
  padding: 5px;
}

img {
  -webkit-box-shadow: -1px -2px 14px 0px rgba(155, 155, 155, 1);
  -moz-box-shadow: -1px -2px 14px 0px rgba(155, 155, 155, 1);
  box-shadow: -1px -2px 14px 0px rgba(155, 155, 155, 1);
  width: 100%;
  height: auto;
  margin: 10px 0;
}

</style>
