<script setup>
import Question from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue';
import Result from '../components/Result.vue';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const maxQuestions = 8;
const maxQuestionLength = 8;
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

const questionStatus = computed(
  () => `${Math.min(currentQuestionIndex.value + 1, maxQuestions)}/${maxQuestions}`
);
const barPercentage = computed(() => {
  const percentagePerQuestion = 100 / maxQuestionLength;
  const totalPercentage = currentQuestionIndex.value * percentagePerQuestion;
  // console.log(`Total Percentage: ${totalPercentage}`);

  return `${Math.min(totalPercentage, 100)}%`;
});

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }
  // console.log("nummer 1", showResults.value)
  if (currentQuestionIndex.value === maxQuestions - 1) {
    showResults.value = true;
    // console.log("nummer", showResults.value)
  } else {
    currentQuestionIndex.value++;
  }
};

const navigate = (direction) => {
  if (direction === 'next' && currentQuestionIndex.value < maxQuestions) {
    currentQuestionIndex.value++;
  } else if (direction === 'prev' && currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
  }

  // Check if it's the last question after updating the index
  if (currentQuestionIndex.value === maxQuestions) {
    showResults.value = true;
  }
};
</script>
<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
    <div>
      <Question
        v-if="!showResults"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
      <Result v-else :quizQuestionlength="maxQuestions" :numberOfCorrectAnswers="numberOfCorrectAnswers" />
    </div>
    <div class="mt-4 flex justify-between">
      <button
        class="rounded bg-pubquiz-primary p-3 text-xl font-semibold text-black hover:bg-pubquiz-tertiary"
        v-if="!showResults && currentQuestionIndex > 0"
        @click="navigate('prev')"
      >
        Previous Question
      </button>
      <button
        class="rounded bg-pubquiz-primary p-3 text-xl font-semibold text-black hover:bg-pubquiz-tertiary"
        v-if="!showResults"
        @click="navigate('next')"
      >
        Next Question
      </button>
    </div>
  </div>
</template>
