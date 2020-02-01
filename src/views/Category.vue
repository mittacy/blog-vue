<template>
<div class="content">
  <Catelist  :class="{hidden: !showCate}"/>
  <Intro/>
</div>
</template>

<script>
import Intro from '@/components/Intro';
import Catelist from '@/components/Catelist'
export default {
  data () {
    return {
      showCate: true,
      showArticle: false
    }
  },
  components: {
    Intro,
    Catelist,
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
.hidden {
  opacity: 0;
  /* display: none; */
}
</style>