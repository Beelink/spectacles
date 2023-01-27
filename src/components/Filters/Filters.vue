<script lang="ts" setup>
import { computed, ref } from "vue";
import { useCollectionsQuery } from "@/queries/glasses/useCollections";

export interface FiltersProps {
  collection: string;
}

const props = defineProps<FiltersProps>();

const collectionsQuery = useCollectionsQuery();

const heading = computed(() => {
  return collectionsQuery.data.value?.data.collections.find(
    (c) => c.configuration_name === props.collection,
  )?.name;
});

const colours = ["black", "tortoise", "coloured"];
const selectedColours = ref<string[]>([]);

const toggleColour = (colour: string) => {
  const index = selectedColours.value.indexOf(colour);
  if (index === -1) {
    selectedColours.value.push(colour);
  } else {
    selectedColours.value.splice(index, 1);
  }
  emit("change", { colours: selectedColours.value });
};

const emit = defineEmits<{
  (e: "change", filters: { colours: string[] }): void;
}>();
</script>

<script lang="ts">
export default {
  name: "FiltersComponent",
};
</script>

<template>
  <div class="filters">
    <div class="filters__container">
      <div class="filters__cell" />
      <div class="filters__cell">
        <h1 class="filters__heading">{{ heading }}</h1>
      </div>
      <div class="filters__cell">
        <button
          v-for="colour in colours"
          :key="colour"
          :class="{
            filters__filter: true,
            'filters__filter--active': selectedColours.includes(colour),
          }"
          @click="toggleColour(colour)"
        >
          {{ colour }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./Filters.scss";
</style>
