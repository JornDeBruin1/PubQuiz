<template>
  <div class="mt-5">
    <h1 class="mb-5 text-5xl">{{ question.text }}</h1>
  </div>
  <div class="flex flex-col mt-10">
    <div class="flex mb-5" v-for="option in question.options" :key="option.id">
      <p class="bg-pubquiz-primary w-12 h-12 flex items-center justify-center text-3xl text-black font-semibold">
        {{ option.label }}
      </p>
      <div class="text-3xl ml-5">
        <p>
          {{ option.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits} from 'vue';

const emit = defineEmits(['selectOption', 'navigate']);

const { question } = defineProps(['question']);

</script>
