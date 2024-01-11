<template>
  <header class="mt-10 flex w-full flex-col items-center">
    <h4 class="text-4xl">Question {{ questionStatus }}</h4>
    <div class="h-[50px] w-[300px] border-4 border-solid border-pubquiz-primary">
      <div class="h-full w-0 bg-pubquiz-primary" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';

const { questionStatus, barPercentage } = defineProps(['questionStatus', 'barPercentage']);
</script>
