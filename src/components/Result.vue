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

const quizes = ref(quizesData);
const nextQuiz = computed(() => quizes.value.find((q) => q.id === nextQuizId.value));

const quizImage = ref(undefined);
const isImageLoaded = ref(false);

const importImagePath = () => {
  if (nextQuiz.value && nextQuiz.value.img) {
    quizImage.value = nextQuiz.value.img;
  } else {
    // If there is no next quiz (last result), set the image path accordingly
    const lastResultImagePath = '/images/end.jpg';
    console.log('lastResultImagePath:', lastResultImagePath);
    quizImage.value = lastResultImagePath;
  }
};


onMounted(() => {
  importImagePath();
});

const handleImageLoad = () => {
  isImageLoaded.value = true;
};

const navigateToNext = () => {
  isImageLoaded.value = false;
  
  router.push(`/quiz/${nextQuizId.value}`).then(() => {
    currentQuizId.value = nextQuizId.value;
    window.location.reload();
  });
};

// console.log("image:", quizImage)

</script>

<template>
  <div class="flex flex-wrap mt-10">
    <div class="w-full flex justify-center">
      <h1 class="text-3xl font-bold mb-[50px]">
        Volgende Ronde: 
      </h1>
    </div>
    <div 
      class=
        "flex flex-col justify-evenly
        w-[400px] h-[450px] mx-auto shadow-Custom 
        bg-white cursor-pointer rounded-2xl"
        @click="navigateToNext"
      >
      <img :src="quizImage" alt="Quiz Picture" class="h-[300px] w-full mt-[-60px] rounded-2xl" @load="handleImageLoad" v-show="isImageLoaded">
      <h2 v-if="isImageLoaded" class="text-3xl font-bold mx-auto">{{ nextQuiz ? nextQuiz.name : 'End' }}</h2>
    </div>
  </div>
  <div class="w-full flex justify-between text-2xl">
    <button type="button" class="rounded text-white p-3 bg-pubquiz-primary hover:bg-pubquiz-tertiary">
      <RouterLink to="/"><i class="fa-solid fa-house pr-5"></i>Home</RouterLink>
    </button>
  </div>
</template>

