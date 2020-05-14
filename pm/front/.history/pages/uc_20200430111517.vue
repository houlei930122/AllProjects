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
import sparkMd5 from "spark-md5";
const CHUNK_SISE = 0.2 * 1024 * 1024;
export default {
  async mounted() {
    // const ret = await this.$http.get("/user/info");
    // console.log(ret);
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
      console.log(blob);
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = function() {
          // console.log(reader.result)
          const ret = reader.result
            .split("")
            .map(v => v.charCodeAt())
            .map(v => v.toString(16).toUpperCase())
            .map(v => v.padStart(2, "0"))
            .join(" ");
          resolve(ret);
        };
        reader.readAsBinaryString(blob);
      });
    },
    async isGif(file) {
      //GIF89a 和GIF87a
      //前面6个16进制，'47 49 46 38 39 61' 和 '47 49 46 38 37 61'
      //16进制转换
      console.log(file);
      console.log(file.slice(0, 6));
      const ret = await this.blobToString(file.slice(0, 6));
      console.log(ret);
      const isGif = ret == "47 49 46 38 39 61" || ret == "47 49 46 38 37 61";
      return isGif;
    },
    async isPng(file) {
      const ret = await this.blobToString(file.slice(0, 8));
      const isPng = ret == "89 50 4E 47 0D 1A 0A";
      return isPng;
    },
    async isJpg(file) {
      const len = file.length;
      const start = await this.blobToString(file.slice(0, 2));
      const tail = await this.blobToString(file.slice(-2, len));
      const isJpg = start == "FF D8" && tail == "FF D9";
      return isJpg;
    },
    async isImage(file) {
      //通过文件流来判断
      return this.isGif(file);
    },
    createFileChunk(file, size = CHUNK_SISE) {
      const chunks = [];
      let cur = 0;
      while (cur < this.file.size) {
        chunks.push({ index: cur, file: this.file.slice(cur, cur + size) });
        cur+=size
      }
      return chunks;
    },
    async uploadFile() {
      //上传照片
      // if(!await this.isImage(this.file)){
      //   console.log('不是图片')
      //   return
      // }else{
      //   console.log('是图片')
      // }
      const chunks = this.createFileChunk();
      console.log(chunks);

      return;
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