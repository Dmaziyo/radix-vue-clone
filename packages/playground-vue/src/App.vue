<script setup lang="ts">
import { CheckboxRoot } from 'radix-vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div>
    <CheckboxRoot
      class="bg-white shadow h-4 aspect-square rounded hover:bg-neutral-100 transition flex items-center justify-center focus-within:outline focus-within:outline-2 focus-within:outline-[#00000066]"
    >
      <div class="bg-black h-full w-full rounded flex items-center justify-center">
        <Icon icon="lucide:check" class="h-4 w-4 text-white" />
      </div>
    </CheckboxRoot>
  </div>
</template>


