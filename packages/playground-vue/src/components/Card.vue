<template>
  <div class="card-bg  relative rounded-xl bg-neutral-200 flex items-center justify-center min-h-[300px]">
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.card-bg {
  background-image: linear-gradient(330deg, #8E4EC6 0%, #3E63DD 100%);
}
</style>