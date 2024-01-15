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

// showing the quizes and removing the final from showing
const filteredQuizes = computed(() => {
  const lastQuiz = quizes.value[quizes.value.length - 1];
  const filtered = quizes.value.filter((quiz) => quiz !== lastQuiz);
  return filtered;
});
</script>
