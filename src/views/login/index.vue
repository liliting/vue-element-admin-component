<template>
  <div class="login-container">
    <el-form class="login-form" ref="loginForm">
      <h2>系統登陸</h2>
      <el-form-item>
        <el-input placeholder="用戶名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="密碼"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary">登陸</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  background: #f1f1f1;
}
.login-container{
  width: 400px;
  margin: 10% auto;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 20px 40px;
}
.btn{
  display: block;
  width: 100%;

}
</style>
