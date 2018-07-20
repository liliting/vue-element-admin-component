<template>
  <div class="login-container">
    <el-form class="login-form" ref="loginForm">
      <h2>系統登陸</h2>
      <span>第三方登录</span>
      <el-row type="flex" justify="space-around" class="svg-container">
          <el-col :span="4">
            <a href="" class="svg-link weibo">
              <fa-icon :icon="['fab','weibo']" style="color: #F6D259" size="2x"></fa-icon>
            </a>
          </el-col>
          <el-col :span="4">
            <a href="" class="svg-link qq">
              <fa-icon :icon="['fab', 'qq']" style="color: #1CC5EC;" size="2x"></fa-icon>
            </a>
          </el-col>
          <el-col :span="4">
            <a href="" class="svg-link weixin">
              <fa-icon :icon="['fab', 'weixin']" style="color: #14D324;" size="2x"></fa-icon>
            </a>
          </el-col>
      </el-row>
      <div class="or-box">
        <div class="or-line"></div>
        <div class="or">or</div>
        <div class="or-line"></div>
      </div>
      <el-form-item>
        <el-input placeholder="用戶名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="密碼"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="login">登陸</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="text">忘记密码？</el-button>
        <el-button type="text">注册新账号</el-button>
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
  },
  methods: {
    login () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body{
  background: #f1f1f1;
}
.login-container{
  width: 350px;
  margin: 10% auto;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 20px 40px;
  h2{
    font-weight: 400;
  }
  span{
    color: #666;
  }
}
.btn{
  display: block;
  width: 100%;
}
.svg-container{
  padding: 20px 0;
  .svg-link{
    width: 44px;
    height: 32px;
    padding-top: 6px;
    padding-bottom: 6px;
    display: block;
    border: 2px solid #f1f1f1;
    border-radius: 50%;
    &.weibo{
      border-color: #F6D259;
    }
    &.qq{
      border-color: #1CC5EC;
    }
    &.weixin{
      border-color: #14D324;
    }
  }
}
.or-box{
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   color: #dcdfe6;
  .or-line{
    flex: 5;
    height: 1px;
    background: #dcdfe6;
  }
  .or{
    flex: 1;
  }
}
</style>
