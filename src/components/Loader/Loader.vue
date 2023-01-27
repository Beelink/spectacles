<script lang="ts" setup>
export interface LoaderProps {
  show: boolean;
}

defineProps<LoaderProps>();
</script>

<script lang="ts">
export default {
  name: "LoaderComponent",
};
</script>

<template>
  <div
    :class="{
      loader: true,
      'loader--show': show,
    }"
  >
    <div class="loader__lds-dual-ring" />
  </div>
</template>

<style lang="scss" scoped>
@import "./Loader.scss";
</style>
