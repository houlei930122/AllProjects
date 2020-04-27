<template>
  <div class="login-container">
    <h1>登录</h1>
    <el-form class="login-form" :model="form" :rules="rules" ref="loginForm">
      <el-form-item prop="email">
        <span>
          <i class="el-icon-mobile"></i>
        </span>
        <el-input placeholder="邮箱" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item prop="captcha">
        <i class="el-icon-umbrella"></i>
        <el-input placeholder="图片" class="captcha-input" v-model="form.captcha"></el-input>
        <img @click="updateCaptcha" :src="captchaImg" alt srcset />
      </el-form-item>
      <el-form-item prop="emailcode">
        <i class="el-icon-umbrella"></i>
        <el-input placeholder="验证码" class="captcha-input" v-model="form.captcha"></el-input>

          <el-button type="primary" :disabled="this.send.timer>0" @click="sendEmailCode">{{sendtext}}</el-button>
  
      </el-form-item>
      <el-form-item prop="passwd">
        <span>
          <i class="el-icon-lock"></i>
        </span>
        <el-input placeholder="密码" type="password" v-model="form.passwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="login" round>登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  layout: "login",
  computed: {
    sendtext() {
      if(this.send.timer<=0){
        return '发送'
      }
      return `${this.send.timer}s后发送`
    }
  },
  data() {
    return {
      send:{
        timer:0
      },
      form: {
        captcha: "",
        email: "895879704@qq.com",
        passwd: "a-123123"
      },
      title: "自定义页面标题",
      rules: {
        email: [
          { required: true, message: "请输入邮箱" },
          { type: "email", message: "请输入正确的邮箱" }
        ],
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
    sendEmailCode(){
      this.send.timer = 10
      this.timer = setInterval(() => {
        this.send.timer -= 1
        if(this.send.timer<=0){
          clearInterval(this.timer)
        }
      }, 1000);
    },
    updateCaptcha() {
      this.captchaImg = "/api/captcha?_t=" + new Date().getTime();
    },
    login() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          let obj = {
            email: this.form.email,
            passwd: md5(this.form.passwd),
            captcha: this.form.captcha
          };
          let ret = await this.$http.post("/user/login", obj);
          console.log(ret);
          if (ret.code == 0) {
            //token的存储，登录成功，返回token

            this.$alert("登录成功", "成功", {
              confirmButtonText: "去首页",
              callback: () => {
                this.$router.push("/");
              }
            });
          } else {
            this.$message.error(ret.message);
          }
        } else {
          this.$message.error("校验失败");
        }
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
.el-button{
  width 100px
  padding 0 20px
  line-height 40px
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