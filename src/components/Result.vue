<template>
    <div>
      <RouterLink to="/">Go Back</RouterLink>
      <button>
        <RouterLink v-if="route.params.id < 6" :to="`/quiz/${nextQuizId}`" @click="navigateToNext">Next</RouterLink>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRoute, RouterLink } from 'vue-router';
  import router from '../router';
  
  const route = useRoute();
  const currentQuizId = ref(parseInt(route.params.id, 6));
  const nextQuizId = computed(() => currentQuizId.value + 1);
  
  const navigateToNext = () => {
    console.log('Next quiz clicked');
    console.log('Current quiz ID:', currentQuizId.value);
    console.log('Next quiz ID:', nextQuizId.value);
  
    // Update currentQuizId after the navigation
    router.push(`/quiz/${nextQuizId.value}`).then(() => {
      currentQuizId.value = nextQuizId.value;
      // Force a page refresh
      window.location.reload(); 
    });
  };
  </script>
  