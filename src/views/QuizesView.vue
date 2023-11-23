
<template>
  <div>
    <header class="mb-3 mt-8 flex items-center">
      <h1 class="font-bold mr-8">Quizes</h1>
      <input class="border-none bg-[#8080801A] p-2.5 rounded" v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="flex flex-wrap mt-10">
      <Card v-for="quiz in filteredQuizes" :key="quiz.id" :quiz="quiz"></Card>
    </div>
  </div>
</template>

<script setup>
import q from '../data/quizes.json'
import { computed, ref, watch } from 'vue'
import Card from '../components/Card.vue'

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
});


// Exclude the sixth quiz from being shown
const filteredQuizes = computed(() => {
  const lastQuiz = quizes.value[quizes.value.length - 1];
  console.log('Quizes before filtering:', quizes.value.map(quiz => quiz.id));
  
  const filtered = quizes.value.filter(quiz => quiz !== lastQuiz);
  
  console.log('Quizes after filtering:', filtered.map(quiz => quiz.id));

  return filtered;
});
</script>