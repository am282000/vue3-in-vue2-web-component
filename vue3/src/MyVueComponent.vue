<!-- src/MyVueComponent.vue -->
<template>
  <div>
    <h3>Hi there</h3>
    <p>{{ message }}</p>
    <button @click="incrementCounter">Counter: {{ counter }}</button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const counter = ref(0);
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["myEvent"]);

const incrementCounter = () => {
  counter.value += 1;
  emit("myEvent", counter.value); // Emit an event with the counter value
};
</script>

<style>
button {
  padding: 5px 10px;
  font-size: 16px;
}
</style>
