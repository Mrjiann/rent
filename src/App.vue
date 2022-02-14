<template>
  <div id="App">
    <tab-bar>
      <tab-bar-item>
        <img src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item>
        <img src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item>
        <img src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item>
        <img src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item>
        <img src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <div slot="item-text">首页</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabber/TabBar.vue'
import TabBarItem from './components/tabber/TabBarItem.vue';

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  },
};
</script>

<style>
@import "./assets/css/base.css";


</style>
