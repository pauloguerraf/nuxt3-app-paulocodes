<template>
  <Motion
    :animate="{ rotate: 180 }"
    :transition="transition"
  />
</template>

<script>
import { Motion } from "motion/vue";

export default {
  components: { Motion },
  setup() {
    return {
      transition: {
        delay: 3,
        duration: 2,
        repeat: Infinity
      },
    };
  },
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