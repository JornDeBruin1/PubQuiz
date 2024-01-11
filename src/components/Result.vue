<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import router from '../router';
import quizesData from '@/data/quizes.json';
// import imageMap from '../data/imageImports';

const route = useRoute();
const { quiz } = defineProps(['quiz']);
const currentQuizId = ref(parseInt(route.params.id, 5));
const nextQuizId = computed(() => currentQuizId.value + 1);

const quizes = ref(quizesData);
const nextQuiz = computed(() => quizes.value.find((q) => q.id === nextQuizId.value));

const quizImage = ref(undefined);
const isImageLoaded = ref(false);
const quizTitle = ref('');
const importImagePath = () => {
  if (nextQuiz.value && nextQuiz.value.img) {
    quizImage.value = nextQuiz.value.img;
  } else {
    const lastResultImagePath = '/images/end.jpg';
    // console.log('lastResultImagePath:', lastResultImagePath);
    quizImage.value = lastResultImagePath;
  }
};

onMounted(() => {
  importImagePath();
});

const clickable = computed(() => nextQuizId.value < quizes.value.length);

const displayedQuiz = ref(null);

const handleImageLoad = () => {
  isImageLoaded.value = true;
  displayedQuiz.value = { ...nextQuiz.value };
};

const navigateToNext = () => {
  if (!clickable.value) {
    return;
  }

  router.push(`/quiz/${nextQuizId.value}`).then(() => {
    setTimeout(() => {
      currentQuizId.value = nextQuizId.value;
    }, 800);
    window.location.reload();
  });
};

onMounted(() => {
  if (nextQuizId < 5) {
    importImagePath();
    quizTitle.value = nextQuiz.value.name;
    displayedQuiz.value = { ...nextQuiz.value };
  }
});
const shouldShowTitle = computed(() => {
  // console.log('isImageLoaded:', isImageLoaded.value);
  // console.log('nextQuiz:', nextQuiz.value);
  return isImageLoaded.value && nextQuiz.value;
});
</script>

<template>
  <div>
    <div class="mt-10 flex flex-wrap">
      <div class="flex w-full justify-center">
        <h1 v-if="nextQuizId < 5" class="mb-[50px] text-3xl font-bold">Volgende Ronde:</h1>
      </div>
      <div
        class="mx-auto flex h-[450px] w-[400px] cursor-pointer flex-col justify-evenly rounded-2xl bg-white shadow-Custom"
        @click="navigateToNext"
        :class="{ 'pointer-events-none': !clickable }"
        :key="nextQuizId"
      >
        <img
          :src="quizImage"
          alt="Quiz Picture"
          class="mt-[-60px] h-[300px] w-full rounded-2xl"
          @load="handleImageLoad"
          v-show="isImageLoaded"
        />
        <h2 v-if="shouldShowTitle" class="mx-auto text-3xl font-bold">{{ nextQuiz.name }}</h2>
        <h2 v-else class="mx-auto text-3xl font-bold">The End</h2>
      </div>
    </div>
    <div class="flex w-full justify-between text-2xl">
      <button
        type="button"
        class="rounded bg-pubquiz-primary p-3 text-xl font-semibold text-black hover:bg-pubquiz-tertiary"
      >
        <RouterLink to="/"><i class="fa-solid fa-house pr-5"></i>Home</RouterLink>
      </button>
    </div>
  </div>
</template>
