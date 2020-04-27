<template>
  <div>
    <h1>用户中心</h1>
    <div>
      <input type="file" name="file" @change="handleFileChange" />
      <button @click="upload">上传</button>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    const ret = await this.$http.get("/user/info");
    console.log(ret);
  },
  data() {
    return {
      file: null
    }
  },
  methods: {
    handleFileChange(e){
      const [file] = e.target.files
      if(!file) return
      this.file = file
    },
    upload(){
      
    }
  },
};
</script>

<style lang="stylus" scoped></style>