<template>
  <header class="mt-10 w-full flex flex-col items-center">
    <h4 class="text-4xl">Question {{ questionStatus }} </h4>
    <div class="w-[300px] h-[50px] border-4 border-pubquiz-primary border-solid ">
      <div class="h-full w-0 bg-pubquiz-primary" :style="{width: barPercentage }"></div>
    </div>
  </header>
</template>

<script setup >
    import { defineProps } from 'vue';

    const { questionStatus, barPercentage } = defineProps([
    'questionStatus',
    'barPercentage'
    ]);

</script>
