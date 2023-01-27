<script lang="ts" setup>
import { ref } from "vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import LogoIcon from "@/assets/imgs/logo.svg?url";

const sidebarRef = ref();

const handleOpenSidebar = () => {
  sidebarRef.value.open();
};
const handleCloseSidebar = () => {
  sidebarRef.value.close();
};
</script>

<script lang="ts">
export default {
  name: "HeaderComponent",
};
</script>

<template>
  <div class="header">
    <div class="header__container">
      <div class="header__left-side">
        <button
          class="header__menu-btn"
          @mouseenter="handleOpenSidebar"
          @mouseleave="handleCloseSidebar"
          @click="handleOpenSidebar"
        >
          MENU
        </button>
      </div>

      <div class="header__logo">
        <img class="header__logo-img" :src="LogoIcon" alt="spectacles" />
      </div>

      <div class="header__right-side" />
    </div>
    <Sidebar ref="sidebarRef" />
  </div>
</template>

<style lang="scss" scoped>
@import "./Header.scss";
</style>
