<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { quiz } = defineProps(['quiz']);

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <div
    class="mb-9 mr-5 w-[310px] cursor-pointer overflow-hidden rounded-md bg-white shadow-Custom"
    @click="navigateToQuiz"
  >
    <img class="m-0 h-48 w-full" :src="quiz.img" alt="" />
    <div class="px-3 py-0">
      <h2 class="font-bold">{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>
