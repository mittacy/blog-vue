<template>
  <div class="turntop" :class="{'show-top': showTop}" @click="backTop">
    <i class="iconfont icon-top"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTop: false,
      scrollTrigger: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (document.documentElement.scrollTop > 600) {
        if (this.showTop) {
          return
        }
        this.showTop = true
      } else if (this.showTop) {
        this.showTop = false
      }
    },
    backTop () {
      // 防止重复点击
      if (this.scrollTrigger) {
        return;
      }
      // 获取当前距离顶部的数值，设置每次上滑的高度直到滚动到顶部为止
      let scrollTop = document.documentElement.scrollTop;
      let steep = scrollTop / 2000;
      let timer = setInterval(() => {
        this.scrollTrigger = true;
        // 上滑滚动的速度慢慢加快，第一次走2000/1,然后减去已走的距离，下一次用剩下的距离再减去步进值，步进值也是不断变化，这样速度会越来越快
        scrollTop -= steep;
        // 步进值不改变的话会匀速缓慢上滑，不断增加步进值上滑的距离增加，视觉效果速度变快
        steep += 5;
        if (scrollTop <= 0) {
          clearInterval(timer);
          this.scrollTrigger = false;
        }
        // move
        document.documentElement.scrollTop = scrollTop;
        // 清楚定时器
        if (scrollTop <= 0) {
          clearInterval(timer)
          return
        }
      }, 30);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
}
</script>

<style scoped>
.turntop {
  position: fixed;
  right: -50px;
  bottom: 100px;
  cursor: pointer;
  transition: all 1s ease-in-out;
}
.show-top {
  right: 30px;
}
.turntop i {
  color: #515a6e;
  font-size: 40px;
  font-style: italic;
}
.turntop i:hover {
  color: #17233d;
}
</style>