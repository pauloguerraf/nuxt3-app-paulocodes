<template>
  <Motion
    :animate="{ rotate: 180 }"
    :transition="transition"
  />
</template>

<script setup lang="ts">
import { Motion } from "motion/vue";

const transition = {
    delay: 1,
    duration: 2,
    repeat: Infinity
};
</script>

<style scoped>
div {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: springgreen;
}
</style>