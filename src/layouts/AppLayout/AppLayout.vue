<script lang="ts" setup>
import Header from "@/components/Header/Header.vue";
</script>

<script lang="ts">
export default {
  name: "AppLayout",
};
</script>

<template>
  <div class="app-layout layout">
    <Header />
    <div class="app-layout__container">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./AppLayout.scss";
</style>
