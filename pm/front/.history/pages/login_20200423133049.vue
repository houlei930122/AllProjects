<template>
  <div>
    <el-form class="login-form" :rule="rules">
      <el-form-item props="username">
        <span>
          <i class="el-icon-mobile"></i>
        </span>
        <el-input placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item props="email">
        <span>
          <i class="el-icon-mobile"></i>
        </span>
        <el-input placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item props="captcha">
       
        <el-input placeholder="图片"></el-input>
        <img src="/api/captcha" alt="" srcset="">
      </el-form-item>
      <el-form-item props="passwd">
        <span>
          <i class="el-icon-lock"></i>
        </span>
        <el-input placeholder="密码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
        title:'自定义页面标题',
      rules: []
    };
  },
  head(){
      return {
          title:this.title
      }
  }

};
</script>


<style lang="stylus" scoped>
.login-form {
  width: 800px;
  margin: 0 auto;
}
</style>