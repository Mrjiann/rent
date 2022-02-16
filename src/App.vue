<template>
  <div id="App">
    <router-view/>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/category">
        <img src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item path="/cart">
        <img src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <img src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
                <img src="./assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
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
