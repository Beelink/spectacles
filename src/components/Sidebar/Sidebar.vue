<script lang="ts" setup>
import { ref, computed } from "vue";

const isOpened = ref(false);

const menuItems = [
  {
    id: "women",
    title: "WOMEN",
    subitems: [
      {
        id: "spectacles-women",
        title: "SPECTACLES",
        to: "/collections/spectacles-women",
      },
      {
        id: "sunglasses-women",
        title: "SUNGLASSES",
        to: "/collections/sunglasses-women",
      },
    ],
  },
  {
    id: "men",
    title: "MEN",
    subitems: [
      {
        id: "spectacles-men",
        title: "SPECTACLES",
        to: "/collections/spectacles-men",
      },
      {
        id: "sunglasses-men",
        title: "SUNGLASSES",
        to: "/collections/sunglasses-men",
      },
    ],
  },
  {
    id: "home-try-on",
    title: "HOME TRY ON",
    to: "#",
  },
  {
    id: "pair-for-pair",
    title: "PAIR FOR PAIR",
    to: "#",
  },
];

const selectedMenuItem = ref<string>("");

const handleMenuItemClick = (menuItemId: string) => {
  selectedMenuItem.value = menuItemId;
};
const handleBack = () => {
  selectedMenuItem.value = "";
};
const handleClose = () => {
  isOpened.value = false;
};
const handleOpen = () => {
  isOpened.value = true;
};

const currentSubMenu = computed(() => {
  return menuItems.find((item) => item.id === selectedMenuItem.value);
});

defineExpose({
  open: handleOpen,
  close: handleClose,
});
</script>

<script lang="ts">
export default {
  name: "SidebarComponent",
};
</script>

<template>
  <div
    :class="{
      sidebar: true,
      'sidebar--opened': isOpened,
    }"
    @mouseenter="handleOpen"
    @mouseleave="handleClose"
  >
    <div class="sidebar__main">
      <ul class="sidebar__links">
        <li v-for="link in menuItems" :key="link.id">
          <Component
            :is="link.to ? 'RouterLink' : 'button'"
            :to="link.to"
            :class="{
              sidebar__link: true,
              'sidebar__link--with-arrow': link.subitems,
            }"
            @click="
              link.subitems ? handleMenuItemClick(link.id) : handleClose()
            "
          >
            <p class="sidebar__link-title">{{ link.title }}</p>
          </Component>
        </li>
      </ul>
    </div>
    <div
      :class="{
        sidebar__submenu: true,
        'sidebar__submenu--opened': selectedMenuItem,
      }"
    >
      <ul class="sidebar__links">
        <li>
          <button class="sidebar__link sidebar__link--back" @click="handleBack">
            <p class="sidebar__link-title">GO BACK</p>
          </button>
        </li>
        <li v-for="link in currentSubMenu?.subitems" :key="link.id">
          <RouterLink :to="link.to" class="sidebar__link" @click="handleClose">
            <p class="sidebar__link-title">{{ link.title }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./Sidebar.scss";
</style>
