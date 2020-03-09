<template>
<div class="log">
  {{errLog}}
</div>
</template>

<script>
import {apiErrLog} from '@/request/api'

export default {
  created() {
    this.initLog()
  },
  data() {
    return {
      errLog: ""
    }
  },
  methods: {
    async initLog() {
      const res = await apiErrLog()
      if (res.status != 200) {
        this.$store.dispatch('changeTipsMsg', res.data.msg)
        return
      }
      this.errLog = res.data.data
    }
  }
}
</script>

<style scoped>
.log {
  width: 100%;
  font-size: 15px;
  padding-left: 10px;
  text-align: left;
  white-space: pre-line;
}
</style>