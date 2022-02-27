.<template>
  <button px-10 py-5 bg-cyan-300 flex gap-2 cursor-pointer items-center justify-center rounded-full rounded border-0 hover:bg-blue-600 hover:text-white>
  <div i-carbon-sun></div>
  {{label}}
  </button>
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