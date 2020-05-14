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
        drag.style.borderColor = "red";
        e.preventDefault();
      });
      drag.addEventListener("dragleave", e => {
        drag.style.borderColor = "#eee";
        e.preventDefault();
      });
      drag.addEventListener("drop", e => {
        const files = e.dataTransfer.files;
        drag.style.borderColor = "#eee";
        this.file = files[0];
        
        e.preventDefault();
        this.$refs.file.setAttribute('file',files[0])
      });
    },
    async uploadFile() {
      const form = new FormData();
      form.append("name", "file");
      form.append("file", this.file);
      const ret = await this.$http.post("/uploadfile", form, {
        onUploadProgress: progress => {
          console.log(progress)
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
      console.log(file)
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