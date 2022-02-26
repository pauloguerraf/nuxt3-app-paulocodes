.<template>
  <button class="p-10 bg-green-300">{{label}}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
</style>