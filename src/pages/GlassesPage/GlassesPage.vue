<script lang="ts" setup>
import { ref, watch } from "vue";
import { IGetGlassesResponse, IGlass } from "@/api/glasses/getGlasses";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useGlassesQuery } from "@/queries/glasses/useGlasses";
import { ITEMS_PER_PAGE } from "@/config";
import { useIntersectionObserver } from "@vueuse/core";
import Loader from "@/components/Loader/Loader.vue";
import Filters from "@/components/Filters/Filters.vue";

const route = useRoute();

const el = ref<HTMLElement>();
const page = ref(1);
const pages = ref<IGetGlassesResponse[]>([]);
const total = ref(0);
const collection = ref(String(route.params.collection));
const selectedColours = ref<string[]>([]);

const handleColoursChange = (filters: { colours: string[] }) => {
  selectedColours.value = filters.colours;
  pages.value = [];
  page.value = 1;
};

watch(
  () => route.params.collection,
  (newValue) => {
    pages.value = [];
    page.value = 1;
    collection.value = String(newValue);
  },
);

useIntersectionObserver(
  el,
  () => {
    nextPage();
  },
  { threshold: 1 },
);

const glassesQuery = useGlassesQuery(
  {
    collection,
    perPage: ITEMS_PER_PAGE,
    page: page,
    colours: selectedColours,
  },
  (newPage) => {
    total.value = newPage.meta.total_count;
    pages.value.push(newPage);
  },
);

const glasses = computed(() => {
  return pages.value.reduce((preValue, page) => {
    return preValue.concat(page.glasses);
  }, [] as IGlass[]);
});

const canGoToNextPage = computed(() => {
  return (
    !glassesQuery.isFetching.value &&
    glasses.value.length > 0 &&
    page.value * ITEMS_PER_PAGE < total.value
  );
});

const nextPage = () => {
  if (canGoToNextPage.value) {
    page.value = page.value + 1;
  }
};
</script>

<script lang="ts">
export default {
  name: "GlassesPage",
};
</script>

<template>
  <div class="glasses-page page">
    <div class="glasses-page__container">
      <Filters :collection="collection" @change="handleColoursChange" />
      <div class="glasses-page__list">
        <div
          v-for="listItem in glasses"
          :key="listItem.id"
          class="glasses-page__list-item"
        >
          <h3 class="glasses-page__list-item-title">{{ listItem.name }}</h3>
          <img
            class="glasses-page__list-item-image"
            :src="listItem.glass_variants[0].media[0].url"
          />
        </div>
      </div>
      <div ref="el">
        <Loader :show="glassesQuery.isFetching.value" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./GlassesPage.scss";
</style>
