<template>
<div class="edit">
  <div class="edit-title">修改管理员信息</div>
  <div class="edit-caps" >密码</div>
  <div class="edit-password-cap">
    <div class="edit-text">Password</div>
    <input id="edit-password-input" type="password" v-model="password">
    <div class="edit-password-button" @click="putAdminPwd">确认</div>
  </div>
  <div class="edit-caps">其他</div>
  <div class="edit-else">
    <div class="edit-text">Cname</div>
    <input class="edit-else-input" type="text" v-model="admin.cname">
  </div>
  <div class="edit-else">
    <div class="edit-text">Introduce</div>
    <input class="edit-else-input" type="text" v-model="admin.introduce">
  </div>
  <div class="edit-else">
    <div class="edit-text">Github</div>
    <input class="edit-else-input" type="text" v-model="admin.github">
  </div>
  <div class="edit-else">
    <div class="edit-text">Mail</div>
    <input class="edit-else-input" type="text" v-model="admin.mail">
  </div>
  <div class="edit-else">
    <div class="edit-text">Bilibili</div>
    <input class="edit-else-input" type="text" v-model="admin.bilibili">
  </div>
  <div class="edit-else-button" @click="putAdmin">确认</div>
</div>
</template>

<script>
import {apiGetAdminInformation, apiPutAdmin, apiPutAdminPwd} from '@/request/api'
export default {
  data () {
    return {
      admin: {},
      password: '',
    }
  },
  created() {
    this.initAdmin()
  },
  methods: {
    async initAdmin() {
      const response = await apiGetAdminInformation()
      if (response.status != 200) { return }
      this.admin = response.data.data
    },
    async putAdmin() {
      const response = await apiPutAdmin(this.admin)
      this.$store.dispatch('changeTipsMsg', response.data.msg)
      if (response.status == 200) {
        this.$store.dispatch('changeActiveItem', '/')
        this.$router.push({
          name: 'home'
        })
      }
    },
    async putAdminPwd() {
      if (this.password === '') {
        this.$store.dispatch('changeTipsMsg', '密码不能为空')
        return
      }
      const response = await apiPutAdminPwd({password: this.password})
      this.$store.dispatch('changeTipsMsg', response.data.msg)
      if (response.status == 200) {
        this.$store.dispatch('changeActiveItem', '/')
        this.$router.push({
          name: 'home'
        })
      }
    },
  }
}
</script>

<style scoped>
.edit-title {
  display: flex;
  justify-content: flex-start;
  font-size: 2.8em;
  font-weight: 500;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 10px;
}
.edit-text {
  width: 100px;
  display: flex;
}
.edit-caps {
  display: flex;
  justify-content: flex-start;
  font-size: 25px;
  font-weight: 500;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 10px;
  margin-top: 20px;
}
.edit-password-cap,
.edit-else {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
}
#edit-password-input,
.edit-else-input {
  width: 200px;
  height: 30px;
  line-height: 30px;
  margin-left: 30px;
  border: 1px solid #eaecef;
  border-radius: 4px;
  padding-left: 5px;
  font-size: 14px;
}
#edit-password-input:focus,
.edit-else-input:focus {
  border: 1px solid #2d8cf0;
  box-shadow: 0 1px 3px rgba(0,0,0,.15);
}
.edit-password-button,
.edit-else-button {
  width: 50px;
  height: 30px;
  line-height: 30px;
  margin-left: 20px;
  font-size: 14px;
  color: #2d8cf0;
  border: 1px solid #2d8cf0;
  border-radius: 4px;
  cursor: pointer;
}
.edit-else-button {
  width: 200px;
  margin-top: 20px;
  margin-left: 0;
}
.edit-password-button:hover,
.edit-else-button:hover {
  background-color: #2d8cf0;
  color: #fff;
}
.edit-info {
  text-align: left;
  font-size: 1.3em;
  margin-bottom: 6px;
  font-weight: 300;
}
</style>