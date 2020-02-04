<template>
  <div class="content">
    <Articlelist :fromCategory="true" :categoryID="categoryID"/>
    <Intro/>
  </div>
</template>

<script>
import Intro from '@/components/Intro'
import Articlelist from '@/components/Articlelist'
export default {
  data () {
    return {
      categoryID: {
        type: Number,
        default: -1
      }
    }
  },
  created () {
    this.categoryID = this.$route.params.id
    console.log('cateID -> ', this.categoryID)
  },
  components: {
    Intro,
    Articlelist
  },
}
</script>

<style scoped>
.content {
  display: flex;
  width: 1140px;
  margin: 0 auto;
  padding-top: 20px;
}
</style>