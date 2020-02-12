<template>
  <div class="main">
    <div class="main-content">
      <Articlelist :fromCategory="true" :categoryID="categoryID"/>
    </div>
    <div class="main-intro">
      <Intro/>
    </div>
  </div>
</template>

<script>
import Intro from '@/components/Intro'
import Articlelist from '@/components/Articlelist'
export default {
  data () {
    return {
      categoryID: '-1'
    }
  },
  created () {
    this.categoryID = this.$route.params.id
  },
  components: {
    Intro,
    Articlelist
  },
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
}
.main-content {
  width: 75%;
}
.main-intro {
  width: 24%;
}
</style>