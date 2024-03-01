
<script setup lang="ts">
import { inject } from 'vue'

const checked = inject('refChecked')
</script>

<template>
  <span v-if="checked" style="pointer-events: none">
    <slot />
  </span>
</template>
