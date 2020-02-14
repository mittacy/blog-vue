<template>
  <div class="main">
    <div class="main-content">
      <Articlelist :fromCategory="true" :categoryID="categoryID"/>
    </div>
    <Intro class="divHide"/>
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
@media (max-width: 800px) {
  .divHide {
    display: none;
  }
  .main-content {
    width: 100%;
  }
}
@media (min-width: 800px) {
  .main-content {
    width: calc(100% - 292px);
  }
}
</style>