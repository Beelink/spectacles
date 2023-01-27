<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<script lang="ts">
export default {
  name: "GlassesPage",
};
</script>

<template>
  <div class="glasses-page page">
    <div class="glasses-page__container">
      <h1>{{ route.params.collection }}</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./GlassesPage.scss";
</style>
