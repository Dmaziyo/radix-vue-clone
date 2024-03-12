<script lang="ts">
export interface CheckboxIndicatorProps {
  asChild: false
}
</script>
<script setup lang="ts">
import { inject } from 'vue'
import { CHECKBOX_INJECTION_KEY, CheckboxProvideValue } from './CheckboxRoot.vue'
import { PrimitiveSpan } from '../Primitive';

const props = withDefaults(defineProps<CheckboxIndicatorProps>(), {
  asChild: false
})
const injectedValue = inject<CheckboxProvideValue>(CHECKBOX_INJECTION_KEY)
</script>

<template>
  <PrimitiveSpan :asChild="props.asChild" :data-disabled="injectedValue.disabled ? true : undefined"
    :data-state="injectedValue.modelValue.value ? 'checked' : 'unchecked'" v-if="injectedValue?.modelValue.value"
    style="pointer-events: none">
    <slot />
  </PrimitiveSpan>
</template>
