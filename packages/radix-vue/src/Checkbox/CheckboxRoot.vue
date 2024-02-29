<script setup lang="ts">
import { ref } from 'vue'

// 定义属性
const props = defineProps({
  checked: {
    type: Boolean,
    required: false
  },
  disabled: {
    type: Boolean,
    required: false
  },
  required: {
    type: Boolean,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  value: {
    type: Boolean,
    required: false,
    default: false
  }
})

// 定义方法
const emits = defineEmits(['onCheckedChange'])

const refChecked = ref(props.checked)

function handleChange(e: Event) {
  emits('onCheckedChange', e)
}
</script>

<template>
  <div :value="props.value" role="checkbox" :aria-checked="refChecked"  style="position:relative">
    <input
      type="checkbox"
      v-model="refChecked"
      :checked="refChecked"
      :name="props.name"
      @change="handleChange"
      :disabled="props.disabled"
      :required="props.required"
      style="opacity: 0; position:absolute; inset: 0"
    />
    <span v-if="refChecked">
      <slot />
    </span>
  </div>
</template>
