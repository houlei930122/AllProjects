<template>
  <div class="login-container">
    <h1>登录</h1>
    <el-form class="login-form" :value="form" :rules="rules" ref="form">
      <el-form-item props="nickname">
        <span>
          <i class="el-icon-mobile"></i>
        </span>
        <el-input placeholder="用户名" v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item props="email">
        <span>
          <i class="el-icon-mobile"></i>
        </span>
        <el-input placeholder="邮箱" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item props="captcha">
        <i class="el-icon-umbrella"></i>
        <el-input placeholder="图片" class="captcha-input" v-model="form.captcha"></el-input>
        <img @click="updateCaptcha" :src="captchaImg" alt srcset />
      </el-form-item>
      <el-form-item props="passwd">
        <span>
          <i class="el-icon-lock"></i>
        </span>
        <el-input placeholder="密码" v-model="form.passwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      form:{
        nickname:'',
        captcha:'',
        email:'',
        passwd:'',
      },
      title: "自定义页面标题",
      rules: [],
      captchaImg: "/api/captcha?_t=" + new Date().getTime()
    };
  },
  methods: {
    updateCaptcha() {
      this.captchaImg = "/api/captcha?_t=" + new Date().getTime();
    },
    login(){
      console.log(this.$refs.form)
      
    }

  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>


<style lang="stylus" scoped>
.login-form {
  width: 800px;
  margin: 0 auto;
}

h1 {
  width: 100%;
  text-align: center;
}

.login-form {
  width: 500px;
  margin: 0 auto;
  overflow: hidden;
}
.el-input {
  width: 80%;
}
.register {
  width: 200px;
  height: 40px;
  margin: 0 auto;
}
.captcha-input {
  width: 100px;
}
</style>