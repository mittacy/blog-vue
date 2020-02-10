<template>
  <div class="tips-box" :class="{msgActive: $store.state.tipsBox}">{{$store.state.tipsMsg}}</div>
</template>

<style scoped>
.tips-box {
  position: fixed;
  top: 50px;
  left: 700px;
  padding: 5px 10px;
  font-size: 16px;
  color: #fff;
  background-color: #2d8cf0;
  border: 1px solid #2d8cf0;
  border-radius: 4px;
  box-shadow: 0 4px 12px #2d8cf0;
  transition: all .7s ease-in;
  z-index: 500;
  opacity: 0;
}
.msgActive {
  top: 70px;
  opacity: 1;
  z-index: 2000;
}
</style>