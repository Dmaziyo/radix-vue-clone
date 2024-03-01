<template>
  <form class="flex flex-col gap-3">
    <label class="flex flex-row gap-3 items-center">
      <CheckboxRoot class="bg-white shadow h-6 aspect-square rounded flex items-center justify-center ">
        <CheckboxIndicator class="bg-black w-full h-full rounded flex items-center justify-center">
          <Icon class="h-4 w-4 text-white" icon="lucide:check"></Icon>
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none">Checkbox</span>
    </label>
    <label class="flex flex-row gap-3 items-center">
      <CheckboxRoot :disabled="true" class="bg-white shadow h-6 aspect-square rounded flex items-center justify-center ">
        <CheckboxIndicator class="bg-black w-full h-full rounded flex items-center justify-center">
          <Icon class="h-4 w-4 text-white" icon="lucide:check"></Icon>
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none">Disabled Checkbox</span>
    </label>
    <label class="flex flex-row gap-3 items-center">
      <CheckboxRoot required class="bg-white shadow h-6 aspect-square rounded flex items-center justify-center ">
        <CheckboxIndicator class="bg-black w-full h-full rounded flex items-center justify-center">
          <Icon class="h-4 w-4 text-white" icon="lucide:check"></Icon>
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none">required</span>
    </label>
    <button class="bg-white rounded">submit</button>
  </form>
</template>
    
<script setup lang='ts'>
import { CheckboxRoot, CheckboxIndicator } from 'radix-vue'
import { Icon } from '@iconify/vue'
</script>
    
<style></style>