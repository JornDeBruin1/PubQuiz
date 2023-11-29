<script setup >
    import {defineProps} from "vue";
    import { useRouter } from "vue-router";

    const router = useRouter()
    const {quiz} = defineProps(['quiz'])

    const navigateToQuiz = ()=>{
        router.push(`/quiz/${quiz.id}`)
    }
 
</script>

<template>
    <div class="bg-white w-[310px] overflow-hidden rounded-md shadow-Custom mb-9 mr-5 cursor-pointer" @click="navigateToQuiz">
        <img class="w-full h-48 m-0" :src="quiz.img" alt="">
        <div class="py-0 px-3">
            <h2 class="font-bold">{{quiz.name}}</h2>
            <p>{{quiz.questions.length}} questions</p>
        </div>
    </div>
</template>