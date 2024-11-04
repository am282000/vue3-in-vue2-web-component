<template>
  <div>
    <h1>Vue3 to Vue2 Embedding</h1>
    <my-vue-component
      message="Prop from Vue2 in Vue3"
      @myEvent="handler"
    ></my-vue-component>
  </div>
</template>

<script>
// In a Vue 2 component
export default {
  name: "App",
  components: {},
  methods: {
    handler(a) {
      console.log("Event from Vue3 to Vue2", a);
    },
  },
};
</script>
