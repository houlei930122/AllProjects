<template>
  <div>
    <h1>用户中心</h1>
    <div ref="drag" id="drag">
      <input type="file" name="file" ref="file" @change="handleFileChange" />
    </div>
    <div>
      <el-progress :stroke-width="20" :text-inside="true" :percentage="uploadProgress"></el-progress>
    </div>
    <button @click="uploadFile">上传</button>
  </div>
</template>

<script>
export default {
  async mounted() {
    const ret = await this.$http.get("/user/info");
    console.log(ret);
    this.bindEvents();
  },
  data() {
    return {
      file: null,
      uploadProgress: 0
    };
  },
  methods: {
    bindEvents() {
      const drag = this.$refs.drag;
      drag.addEventListener("dragover", e => {
        //拖拽到区域内
        drag.style.borderColor = "red";
        e.preventDefault();
      });
      drag.addEventListener("dragleave", e => {
        //离开拖拽区域
        drag.style.borderColor = "#eee";
        e.preventDefault();
      });
      drag.addEventListener("drop", e => {
        //放在拖拽区域
        const files = e.dataTransfer.files;
        drag.style.borderColor = "#eee";
        this.file = files[0];
        e.preventDefault();
      });
    },
    async blobToString(blob) {
      return new Promise(resolve=>{
        const reader = new FileReader()
        reader.onload = function () {
          console.log(reader.result)
        }
      })
    },
    async isGif(file) {
      //GIF89a 和GIF87a
      //前面6个16进制，'47 49 46 38 39 61' 和 '47 49 46 38 37 61'
      //16进制转换
      const ret = await this.blobToString(file.slice(0, 6));
      const isGif = ret === "47 49 46 38 39 61" || ret === "47 49 46 38 37 61";
      return isGif
    },
    isImage(file) {
      //通过文件流来判断
      return this.isGif(file);
    },

    async uploadFile() {
      if(!this.isImage(this.file)){
        console.log('不是图片')
        return
      }else{
        console.log('是图片')
      }
      return
      const form = new FormData();
      form.append("name", "file");
      form.append("file", this.file);
      const ret = await this.$http.post("/uploadfile", form, {
        onUploadProgress: progress => {
          //onUploadProgress 监听文件上传进程，计算百分比
          console.log(progress.loaded);
          this.uploadProgress = Number(
            ((progress.loaded / progress.total) * 100).toFixed(2)
          );
        }
      });
      console.log(ret);
    },
    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      this.file = file;
      console.log(file);
    }
  }
};
</script>

<style lang="stylus" scoped>
#drag {
  height: 100px;
  line-height: 100px;
  border: 2px dashed #eee;
  text-align: center;
  // &:hover
  // border 2px dashed red
}
</style>