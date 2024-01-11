<template>
  <div>
    <header class="mb-3 mt-8 flex items-center">
      <div class="mx-auto my-0 flex">
        <h1 class="mr-8 text-5xl font-bold">Pub Quiz</h1>
      </div>
    </header>
    <div class="mt-10 flex flex-wrap">
      <Card v-for="quiz in filteredQuizes" :key="quiz.id" :quiz="quiz"></Card>
    </div>
  </div>
</template>

<script setup>
import q from '../data/quizes.json';
import { computed, ref } from 'vue';
import Card from '../components/Card.vue';

const quizes = ref(q);

const filteredQuizes = computed(() => {
  const lastQuiz = quizes.value[quizes.value.length - 1];
  // console.log('Quizes before filtering:', quizes.value.map(quiz => quiz.id));

  const filtered = quizes.value.filter((quiz) => quiz !== lastQuiz);

  // console.log('Quizes after filtering:', filtered.map(quiz => quiz.id));

  return filtered;
});
</script>
