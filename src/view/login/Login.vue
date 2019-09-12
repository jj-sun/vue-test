<template>
  <div class="login">
    <img src="../../assets/logo.png">
    <div>
      <el-input v-model="input1" placeholder="用户名" clearable></el-input>
    </div>
    <div style="margin-top: 15px">
      <el-input v-model="input2" placeholder="密码" show-password clearable></el-input>
    </div>
    <div style="margin-top: 15px">
      <el-button type="primary" @click="getLogin">登录</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      input1: '',
      input2: ''
    }
  },
  methods: {
    getLogin () {
      alert(this.input1 + ' : ' + this.input2 + ',登录成功')
      console.log('登录')
      this.$router.push({name: 'Main'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-input{width: fit-content;}
.el-button{width: 15%;}
</style>
