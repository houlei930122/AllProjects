<template>
  <div>
    <h1>用户中心</h1>
    <div ref="drag" id="drag">
      <input type="file" name="file" @change="handleFileChange" />
     
    </div>
     <button @click="uploadFile">上传</button>
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
    bindEvents(){

    },
    async uploadFile(){
      const form = new FormData()
      form.append('name','file')
      form.append('file',this.file)
      const ret = await this.$http.post('/uploadfile',form)
      console.log(ret)
    },
    handleFileChange(e){
      const [file] = e.target.files
      if(!file) return
      this.file = file
    },
    
  },
};
</script>

<style lang="stylus" scoped>
#drag
  height 100px
  line-height 100px
  border 2px dashed #eee
  text-align center
  // &:hover
  //   border 2px dashed red
</style>