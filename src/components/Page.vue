<template>
  <div class="page-wrap">
    <div class="page">
      <span class="page-count">共 {{listNums}} 条</span>
      <div class="page-controller">
        <div class="page-arrow" :class="{hideClass: pageNum>5, 'page-arrow-disabled': !leftArrowIsAble}" @click="changePage(currentPage-1)">
          <i class="iconfont icon-icon_right_arrow"></i>
        </div>
        <div class="page-arrow" :class="{hideClass: pageNum<=5, 'page-arrow-disabled': !leftArrowIsAble}" @click="moveNumbers(false)">
          <i class="iconfont icon-icon_right_arrow"></i>
        </div>
        <div class="page-numbers-wrap" :style="{width: buttonWidth +'px'}">
          <div class="page-numbers" :style="{left: moveLeft+'px'}">
            <div v-for="num in pageNum"
              :key="num"
              class="page-number"
              :class="{'page-active': currentPage === num-1}"
              @click="changePage(num-1)"
              >
              {{num}}
            </div>
          </div>
        </div>
        <div class="page-arrow" :class="{hideClass: pageNum>5, 'page-arrow-disabled': !rightArrowIsAble}" @click="changePage(currentPage+1)">
          <i class="iconfont icon-icon_left_arrow"></i>
        </div>
        <div class="page-arrow" :class="{hideClass: pageNum<=5, 'page-arrow-disabled': !rightArrowIsAble}" @click="moveNumbers(true)">
          <i class="iconfont icon-icon_left_arrow"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum: 0,
      currentPage: 0,
      leftArrowIsAble: false,
      rightArrowIsAble: false,
      moveLeft: 0,
      buttonWidth: 0
    }
  },
  props: {
    listNums: {
      type: Number,
      required: true
    },
  },
  methods: {
    init() {
      this.currentPage = 0
      this.$store.dispatch('changePage', 0)
      if (this.listNums%10 == 0) {
        this.pageNum = parseInt(this.listNums/10)
      } else {
        this.pageNum = parseInt(this.listNums/10)+1
      }
      this.buttonWidth = this.pageNum * 36 + 4
      this.isArrowAble()
    },
    isArrowAble() {
      // 按钮功能不同是否可点击不同
      if (this.pageNum >= 5) {    // 按钮功能为左右平移按钮
        this.leftArrowIsAble = this.moveLeft < 0 ? true : false
        if (this.pageNum*36 > (-this.moveLeft + 5*36)) {
          this.rightArrowIsAble = true
        } else {
          this.rightArrowIsAble = false
        }
      } else {    // 按钮功能为上/下一页
        this.leftArrowIsAble = this.currentPage > 0 ? true : false
        this.rightArrowIsAble = this.currentPage < this.pageNum-1 ? true : false
      }
    },
    async changePage(page) {
      if (page === this.currentPage) return
      // 改变page
      this.currentPage = page
      this.$store.dispatch('changePage', page)
      this.isArrowAble()
    },
    moveNumbers(isLeft) {
      if (isLeft) {
        this.moveLeft = this.moveLeft - 36
      } else {
        this.moveLeft = this.moveLeft + 36
      }
    },
  },
  watch: {
    listNums() {
      this.init()
    },
    moveLeft: function() {
      this.isArrowAble()
    }
  }
}
</script>

<style scoped>
.hideClass {
  display: none;
}
.page-wrap {
  width: 100%;
  padding-top: 20px;
  margin-bottom: 20px;
}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.page-count {
  font-size: 12px;
  margin-right: 20px;
  color: #515a6e;
}
.page-controller {
  display: flex;
}
.page-numbers-wrap {
  max-width: 184px;
  height: 32px;
  position: relative;
  overflow: hidden;
}
.page-numbers {
  display: flex;
  position: absolute;
  transition: all .5s ease-in-out;
}
.page-arrow, .page-number {
  width: 30px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  font-family: Arial;
  color: #ccc;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}
.page-number {
  margin-left: 4px;
}
.page-arrow:hover, .page-number:hover {
  color: #2d8cf0;
  border: 1px solid #2d8cf0;
}
.page-active {
  color: #2d8cf0;
  border: 1px solid #2d8cf0;
}
.page-arrow-disabled {
  pointer-events: none;
}
</style>