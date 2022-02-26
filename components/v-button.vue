.<template>
  <button>{{label}}</button>
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