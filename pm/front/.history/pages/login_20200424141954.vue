<template>
  <div class="login-container">
    <h1>登录</h1>
    <el-form class="login-form" :value="form" :rules="rules" ref="loginForm">
      <el-form-item prop="nickname" label="用户名">
        <span>
          <i class="el-icon-mobile"></i>
        </span>
        <el-input placeholder="用户名" v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <span>
          <i class="el-icon-mobile"></i>
        </span>
        <el-input placeholder="邮箱" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item prop="captcha" label="验证码">
        <i class="el-icon-umbrella"></i>
        <el-input placeholder="图片" class="captcha-input" v-model="form.captcha"></el-input>
        <img @click="updateCaptcha" :src="captchaImg" alt srcset />
      </el-form-item>
      <el-form-item prop="passwd" label="密码">
        <span>
          <i class="el-icon-lock"></i>
        </span>
        <el-input placeholder="密码" type="password1" v-model="form.passwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="login" round>登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      form: {
        nickname: "",
        captcha: "123",
        email: "qwewq@qq.com",
        passwd: ""
      },
      title: "自定义页面标题",
      rules: {
        email: [
          { required: true, message: "请输入邮箱" },
          { type: "email", message: "请输入正确的邮箱" }
        ],
        nickname: [{ required: true, message: "请输入姓名" }],
        captcha: [{ required: true, message: "请输入验证码" }],
        passwd: [
          {
            required: true,
            pattern: /^[\w_-]{6,12}/g,
            message: "请输入6-12位密码"
          }
        ]
      },
      captchaImg: "/api/captcha?_t=" + new Date().getTime()
    };
  },
  methods: {
    updateCaptcha() {
      this.captchaImg = "/api/captcha?_t=" + new Date().getTime();
    },
    login() {
      this.$refs.loginForm.validate(async valid => {
        console.log(valid);
      });
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