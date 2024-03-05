<script lang="ts">
export interface CheckboxRootProps {
  modelValue?: boolean,
  disabled?: boolean,
  required?: boolean,
  name?: string,
  value?: string;
  id?: string
}
export type CheckboxProvideValue = {
  disabled: boolean,
  required: boolean,
  modelValue: Readonly<Ref<boolean>>,
  updateModelValue(): void
}
export const CHECKBOX_INJECTION_KEY = Symbol() as InjectionKey<CheckboxProvideValue>
</script>

<script setup lang="ts">
import { InjectionKey, Ref, provide, toRef } from 'vue'

// 定义属性
const props = withDefaults(defineProps<CheckboxRootProps>(), {
  modelValue: false
})

// 定义方法
const emits = defineEmits<{
  (e: "update:modelValue", value: boolean): void
}>()

provide<CheckboxProvideValue>(CHECKBOX_INJECTION_KEY, {
  required: props.required,
  disabled: props.disabled,
  modelValue: toRef(() => props.modelValue),
  updateModelValue: updateModelValue
})


function updateModelValue() {
  emits('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div :value="props.value" role="checkbox" :aria-checked="props.modelValue" style="position:relative">
    <input :id="props.id" type="checkbox" :value="props.value" :checked="props.modelValue" :name="props.name"
      @change="updateModelValue" :disabled="props.disabled" :required="props.required"
      style="opacity: 0; position:absolute; inset: 0" />
    <slot />
  </div>
</template>
