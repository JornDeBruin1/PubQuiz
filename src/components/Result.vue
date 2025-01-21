<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import router from '../router';
import quizesData from '@/data/quizes.json';

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
    quizImage.value = lastResultImagePath;
  }
};

const correctAnswers = computed(() => {
  const currentQuiz = quizes.value.find((q) => q.id === currentQuizId.value);
  if (!currentQuiz) return [];
  return currentQuiz.questions.map((question) => {
    const correctOption = question.options.find((option) => option.isCorrect);
    return {
      question: question.text,
      correctAnswer: correctOption ? correctOption.text : 'No correct answer found',
    };
  });
});

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
  return isImageLoaded.value && nextQuiz.value;
});
</script>

<template>
  <div>
    <div class="mt-10 flex flex-wrap">
      <div class="flex w-full justify-center">
        <h1 v-if="nextQuizId < 5" class="mb-[50px] text-3xl font-bold">Antwoorden:</h1>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="(answer, index) in correctAnswers" :key="index" class="marginBottom marginLeft">
          <strong>Question:</strong> {{ answer.question }}<br />
          <strong>Correct Answer:</strong> {{ answer.correctAnswer }}
        </li>
      </ul>
    </div>
    <div class="flex w-full justify-between text-2xl">
      <button
        type="button"
        class="marginTop rounded bg-pubquiz-primary p-3 text-xl font-semibold text-black hover:bg-pubquiz-tertiary"
      >
        <RouterLink to="/"><i class="fa-solid fa-house pr-5"></i>Home</RouterLink>
      </button>
    </div>
  </div>
</template>

<style>
.marginTop {
  margin-top: 20px;
}
.marginLeft {
  margin-left: 20px;
}
.marginBottom {
  margin-bottom: 20px;
}
</style>
