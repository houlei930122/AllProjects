<template>
    <div>
       <el-form class="login-form">
           <el-form-item>
               <span>
                   <i class="el-icon-mobile"></i>
               </span>
               <el-input placeholder="用户名"></el-input>
           </el-form-item>
       </el-form>
    </div>
</template>

<script>
    export default {
        layout:'login'
    }
</script>


<style lang="stylus" scoped>
.login-form
    width 800px
    margin 0 auto
</style>