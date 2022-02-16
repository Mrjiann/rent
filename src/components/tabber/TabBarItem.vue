<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div v-bind:class={active:isActive}><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    data(){
      return {
        isActive:true
      }
    },
    props:{
      path:String
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  /* 一般tab-bar高度是49px */
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  /* 图片下面会有三个像素 */
  vertical-align: middle;
  margin-bottom: 2px;
}
.active{
  color: red;
}
</style>