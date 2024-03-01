
<script setup lang="ts">
import { inject } from 'vue'

const checked = inject('refChecked')
</script>

<template>
  <span v-if="checked">
    <slot />
  </span>
</template>
