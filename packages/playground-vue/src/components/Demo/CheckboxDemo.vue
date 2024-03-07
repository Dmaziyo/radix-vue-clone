<template>
  <div class="absolute top-4 left-4">
    States:{{ checkOne ? 'one on' : 'one off' }} - {{ checkTwo ? 'two on' : 'two off' }} - {{ checkThree ? 'three on' :
      'three off' }}
  </div>
  <form class="flex flex-col gap-3">
    <label class="flex flex-row gap-3 items-center">
      <CheckboxRoot v-model="checkOne"
        class="shadow-blackA7 hover:bg-violet3 flex h-6 aspect-square  items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus-within:shadow-[0_0_0_2px_black]">
        <CheckboxIndicator class="w-full h-full rounded flex items-center justify-center">
          <Icon class="h-4 w-4 text-black" icon="lucide:check"></Icon>
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none">Checkbox</span>
    </label>
    <label class="flex flex-row gap-3 items-center">
      <CheckboxRoot v-model="checkTwo" :disabled="true"
        class="data-[disabled]:bg-neutral-400 bg-white shadow h-6 aspect-square rounded flex items-center justify-center ">
        <CheckboxIndicator class="bg-black w-full h-full rounded flex items-center justify-center">
          <Icon class="h-4 w-4 text-white" icon="lucide:check"></Icon>
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none">Disabled Checkbox</span>
    </label>
    <label class="flex flex-row gap-3 items-center">
      <CheckboxRoot v-model="checkThree" required
        class="shadow-blackA7 hover:bg-violet3 flex h-6 aspect-square  items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus-within:shadow-[0_0_0_2px_black]">
        <CheckboxIndicator class="w-full h-full rounded flex items-center justify-center">
          <Icon class="h-4 w-4 text-black" icon="lucide:check"></Icon>
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
import { ref } from 'vue';

const checkOne = ref(false)
const checkTwo = ref(false)
const checkThree = ref(false)
</script>

<style></style>