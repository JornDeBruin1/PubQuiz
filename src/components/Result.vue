<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import router from '../router';
import quizesData from '@/data/quizes.json';
import imageMap from '../data/imageImports';


const route = useRoute();
const { quiz } = defineProps(['quiz']);
const currentQuizId = ref(parseInt(route.params.id, 5));
const nextQuizId = computed(() => currentQuizId.value + 1);

const navigateToNext = () => {
  router.push(`/quiz/${nextQuizId.value}`).then(() => {
    currentQuizId.value = nextQuizId.value;
    window.location.reload();
  });
};

const quizes = ref(quizesData);
const nextQuiz = computed(() => quizes.value.find((q) => q.id === nextQuizId.value));


const quizImage = ref(undefined);

const importImagePath = () => {
  const imagePath = nextQuiz.value.img.substring(18);
  quizImage.value = imageMap[imagePath];
};

onMounted(() => {
  importImagePath();
});

</script>

<template>
  <div class="flex flex-wrap mt-10">
    <div v-if="nextQuiz" class="text-center">
      <img :src="quizImage" alt="Quiz Picture" class="mb-2">
      <h2 class="text-xl font-semibold">{{ nextQuiz.name }}</h2>
    </div>
  </div>
  <div class="w-full flex justify-between text-2xl">
    <button type="button" class=" rounded text-white p-3  bg-pubquiz-primary hover:bg-pubquiz-tertiary ">
      <RouterLink to="/"><i class="fa-solid fa-house pr-5"></i>Home</RouterLink>
    </button>
    <button v-if="route.params.id < 5" type="button" class="rounded text-white p-3  bg-pubquiz-primary hover:bg-pubquiz-tertiary">
      <RouterLink :to="`/quiz/${nextQuizId}`" @click="navigateToNext">Next<i class="fa-solid fa-arrow-right pl-5"></i></RouterLink>
    </button>
  </div>
</template>
