<template>
  <div class="mx-auto my-0 h-auto max-w-5xl">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <Component :is="Component" key="$route.fullPath" />
      </transition>
    </RouterView>
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
export default {
  components: {
    RouterView,
  },
};
</script>
<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.7s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(300px);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: 1s ease-out;
}
</style>
