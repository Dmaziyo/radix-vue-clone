<script setup lang="ts">
import CheckboxDemo from './components/Demo/CheckboxDemo.vue'
import Card from './components/Card.vue';
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="max-w-6xl w-full grid grid-cols-3 gap-3 pt-40">
      <Card>
        <CheckboxDemo></CheckboxDemo>
      </Card>
    </div>

  </div>
</template>


