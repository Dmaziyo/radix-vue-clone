<script setup lang="ts">
import { computed, provide, ref } from 'vue'

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
  },
  modelValue: {
    type: Boolean,
    required: false,
    default: null
  },
  id: {
    type: String,
    required: false,
  },
})

// 定义方法
const emits = defineEmits(['onCheckedChange', 'update:modelValue'])

const modelPlaceHolder = ref(props.checked)

// 提供双向绑定v-model api
const refChecked = computed({
  get() {
    if (props.modelValue !== null) {
      return props.modelValue
    }
    else {
      return modelPlaceHolder.value
    }
  },
  set(value) {
    if (props.modelValue !== null) {
      emits("update:modelValue", value)
    }
    else {
      modelPlaceHolder.value = value
    }

  }

})

provide('refChecked', refChecked)

function handleChange(e: Event) {
  emits('onCheckedChange', e)
}
</script>

<template>
  <div :value="props.value" role="checkbox" :aria-checked="refChecked" style="position:relative">
    <input :id="props.id" type="checkbox" v-model="refChecked" :checked="refChecked" :name="props.name"
      @change="handleChange" :disabled="props.disabled" :required="props.required"
      style="opacity: 0; position:absolute; inset: 0" />
    <slot />
  </div>
</template>
