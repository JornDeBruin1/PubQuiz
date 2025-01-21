<template>
  <div class="mt-5">
    <h1 class="padding mb-5 text-5xl">{{ question.text }}</h1>
  </div>
  <div class="padding mt-10 flex flex-col justify-center">
    <div class="mb-5 flex" v-for="option in question.options" :key="option.id">
      <p
        class="flex h-12 w-12 items-center justify-center bg-pubquiz-primary text-3xl font-semibold text-black"
      >
        {{ option.label }}
      </p>
      <div class="ml-5 text-3xl">
        <p>
          {{ option.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['selectOption', 'navigate']);

const { question } = defineProps(['question']);
</script>
<style scoped>
.padding {
  padding-left: 10px;
}
</style>
