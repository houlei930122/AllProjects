<template>
  <div class="login-container">
    <h1 class="tit">注册</h1>
    <el-form class="login-form" :model="form" :rules="rules" ref="registerForm">
      <el-form-item props="nickname" label="昵称">
        <el-input v-model="form.nickname" placeholder="请输入昵称"></el-input>
      </el-form-item>
      <el-form-item props="email" label="邮箱">
        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.captcha" placeholder="请输入验证码" class="captcha-input"></el-input>
        <img :src="captcha" alt srcset @click="updateCaptcha" />
      </el-form-item>
      <el-form-item props="passwd" label="密码">
        <el-input v-model="form.passwd" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item props="repasswd" label="确认密码">
        <el-input v-model="form.repasswd" placeholder="请输入再次密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="register" @click.native.prevent="handRegister" round>确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  layout: "login",
  data() {
    return {
      form: {
        email: "",
        nickname: "",
        passwd: "",
        repasswd: "",
        captcha: ""
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱" },
          { type: "email", message: "请输入正确的邮箱" }
        ],
        nickname: [{ required: true, message: "请输入昵称" }],
        captcha: [{ required: true, message: "请输入验证码" }],
        passwd: [
          {
            required: true,
            pattern: /^[\w_-]{6,12}/g,
            message: "请输入6-12位密码"
          }
        ],
        repasswd: [
          { required: true, message: "请再次输入密码" },
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.passwd) {
                callback(new Error("两次密码不一致"));
              }
              callback();
            }
          }
        ]
      },
      captcha: "api/captcha?_t=" + new Date().getTime()
    };
  },
  methods: {
    updateCaptcha() {
      this.captcha = "api/captcha?_t=" + new Date().getTime();
    },
    handRegister() {
      this.$refs.registerForm.validate(async valid => {
        if (valid) {
          console.log("成功");
          //@todo发送注册请求
          let obj = {
            email: this.form.email,
            nickname: this.form.nickname,
            passwd: this.form.passwd,
            repasswd: this.form.repasswd,
            captcha: this.form.captcha
          }
          let ret = await this.$http.post('/user/register',obj)
          if(ret.code==0){
            this.$alert('注册成功','成功',{
              confirmButtonText = "去登陆",
              callback:()=>{
                this.$router.push("/login")
              }
            })
          }else{
            this.$message.error(ret.message)
          }
        } else {
          this.$message.error('校验失败')
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
h1 {
  width: 100%;
  text-align: center;
}

.login-form {
  width: 500px;
  margin: 0 auto;
  overflow: hidden;
}

.captcha-input {
  width: 100px;
}

.register {
  width: 200px;
  height: 40px;
  margin: 0 auto;
}
</style>