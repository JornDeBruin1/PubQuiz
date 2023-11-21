<template>
    <div class="w-full mt-[430px] pt-10  flex justify-between text-2xl">
        <button type="button" class=" rounded text-white p-3  bg-pubquiz-primary hover:bg-pubquiz-tertiary ">
            <RouterLink to="/"><i class="fa-solid fa-house pr-5"></i>Home</RouterLink>
        </button>
        <button v-if="route.params.id < 5" type="button" class="rounded text-white p-3  bg-pubquiz-primary hover:bg-pubquiz-tertiary">
            <RouterLink :to="`/quiz/${nextQuizId}`" @click="navigateToNext">Next<i class="fa-solid fa-arrow-right pl-5"></i></RouterLink>
        </button>
    </div>
</template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRoute, RouterLink } from 'vue-router';
  import router from '../router';
  
  const route = useRoute();
  const currentQuizId = ref(parseInt(route.params.id, 5));
  const nextQuizId = computed(() => currentQuizId.value + 1);
  
  const navigateToNext = () => {
  
    // Update currentQuizId after the navigation
    router.push(`/quiz/${nextQuizId.value}`).then(() => {
      currentQuizId.value = nextQuizId.value;
      // Force a page refresh
      window.location.reload(); 
    });
  };
  </script>
  