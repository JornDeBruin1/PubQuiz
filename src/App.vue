<template>
  <div class="mx-auto h-auto max-w-5xl my-0">
    <RouterView/>
  </div>
</template>

<script>
import {RouterView} from 'vue-router'
export default{
  components: {
    RouterView,
  }
}
</script>