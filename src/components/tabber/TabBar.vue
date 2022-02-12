<template>
  <div id="tab-bar">
    <span class="tab-bar-item">首页</span>
    <span class="tab-bar-item">消息</span>
    <span class="tab-bar-item">发布</span>
    <span class="tab-bar-item">推荐</span>
    <span class="tab-bar-item">我的</span>
  </div>
</template>

<script>
export default {
    name:"TabBar"
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.4);
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  /* 一般tab-bar高度是49px */
  height: 49px;
  line-height: 49px;
}
</style>