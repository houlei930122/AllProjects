<template>
  <div>
    <h1>用户中心</h1>
    <div ref="drag" id="drag">
      <input type="file" name="file" ref="file" @change="handleFileChange" />
    </div>
    <div>
      <el-progress
        :stroke-width="20"
        :text-inside="true"
        :percentage="uploadProgress"
      ></el-progress>
    </div>
    <div>
      <p>计算文件md5</p>
      <el-progress
        :stroke-width="20"
        :text-inside="true"
        :percentage="hashProgress"
      ></el-progress>
    </div>
    <button @click="uploadFile">上传</button>
  </div>
</template>

<script>
import sparkMd5 from "spark-md5"; //时间切片需要
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
      uploadProgress: 0,
      hashProgress: 0,
      chuunks:[]
    };
  },
  methods: {
    bindEvents() {
      const drag = this.$refs.drag;
      drag.addEventListener("dragover", (e) => {
        //拖拽到区域内
        drag.style.borderColor = "red";
        e.preventDefault();
      });
      drag.addEventListener("dragleave", (e) => {
        //离开拖拽区域
        drag.style.borderColor = "#eee";
        e.preventDefault();
      });
      drag.addEventListener("drop", (e) => {
        //放在拖拽区域
        const files = e.dataTransfer.files;
        drag.style.borderColor = "#eee";
        this.file = files[0];
        e.preventDefault();
      });
    },
    async blobToString(blob) {
      // 转16进制编码
      return new Promise((resolve) => {
        // FileReader读取文件 介绍https://blog.csdn.net/weixin_30483495/article/details/102069940
        const reader = new FileReader();
        reader.readAsBinaryString(blob); // 将文件读取为二进制码
        reader.onload = function () {
          // 文件读取成功完成时触发
          const ret = reader.result
            .split("")
            .map((v) => v.charCodeAt()) // 获取字符的Unicode码，国际化便于计算机识别
            .map((v) => v.toString(16).toUpperCase()) // 转为16进制，全大写
            .map((v) => v.padStart(2, "0")) //保证每个字符串有两位，不足补0
            .join(" ");
          resolve(ret);
        };
      });
    },
    async isGif(file) {
      //判断是否是gif
      //GIF89a 和GIF87a
      //前面6个16进制，'47 49 46 38 39 61' 和 '47 49 46 38 37 61'
      //16进制转换;
      const ret = await this.blobToString(file.slice(0, 6)); //只需要前边6个
      const isGif = ret == "47 49 46 38 39 61" || ret == "47 49 46 38 37 61";
      return isGif;
    },
    async isPng(file) {
      //判断是否是png
      const ret = await this.blobToString(file.slice(0, 8));
      const isPng = ret == "89 50 4E 47 0D 1A 0A";
      return isPng;
    },
    async isJpg(file) {
      //判断是否是jpg，jpg的16进制码需要通过前边两个"FF D8"和后边两个"FF D9"判定
      const len = file.length;
      const start = await this.blobToString(file.slice(0, 2));
      const tail = await this.blobToString(file.slice(-2, len));
      const isJpg = start == "FF D8" && tail == "FF D9";
      return isJpg;
    },
    async isImage(file) {
      //判断图片
      //通过文件流来判断
      return this.isGif(file);
    },
    createFileChunk(file, size = CHUNK_SISE) {
      //创建文件切片
      const chunks = [];
      let cur = 0;
      while (cur < file.size) {
        chunks.push({ index: cur, file: file.slice(cur, cur + size) });
        cur += size;
      }
      return chunks;
    },
    // 使用web worker 计算MD5
    async calculateHashWorker() {
      //计算文件md5
      return new Promise((resolve) => {
        // new Worker作用类似JAVA的多线程，可以解决前端页面出现的卡顿现象
        this.worker = new Worker("/hash.js");
        this.worker.postMessage({ chunks: this.chunks });
        this.worker.onmessage = (e) => {
          const { progress, hash } = e.data;
          this.hashProgress = Number(progress.toFixed(2));
          if (hash) {
            resolve(hash);
          }
        };
      });
    },
    // 利用时间切片，计算MD5，和上边的那个对比
    async calculateHashIdle() {
      //时间切片 计算文件md5 react原理
      const chunks = this.chunks;
      return new Promise((resolve) => {
        const spark = new sparkMd5.ArrayBuffer();
        let count = 0;
        const appendToSpark = async (file) => {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = (e) => {
              spark.append(e.target.result);
              resolve();
            };
          });
        };
        const workLoop = async (deadline) => {
          while (count < chunks.length && deadline.timeRemaining() > 1) {
            // 空闲时间且有任务
            await appendToSpark(chunks[count].file);
            count++;
            if (count < chunks.length) {
              this.hashProgress = Number(
                ((100 * count) / chunks.length).toFixed(2)
              );
            } else {
              this.hashProgress = 100;
              resolve(spark.end());
            }
          }
          window.requestIdleCallback(workLoop);
        };
        window.requestIdleCallback(workLoop);
      });
    },


    async uploadFile() {
      //上传照片

      // if (!(await this.isImage(this.file))) {
      //   console.log("不是图片");
      //   return;
      // } else {
      //   console.log("是图片");
      // }
      // console.log(111);
      // this.chunks = this.createFileChunk(this.file);
      // console.log(this.chunks);
      // const hash1 = await this.calculateHashWorker();
      // const hash2 = await this.calculateHashIdle();
      // console.log(hash1);
      // console.log(hash2);
      // return;
      const form = new FormData();
      form.append("name", "file");
      form.append("file", this.file);
      const ret = await this.$http.post("/uploadfile", form, {
        onUploadProgress: (progress) => {
          //onUploadProgress 监听文件上传进程，计算百分比
          console.log(progress.loaded);
          this.uploadProgress = Number(
            ((progress.loaded / progress.total) * 100).toFixed(2)
          );
        },
      });
      console.log(ret);
    },

    // 切片上传逻辑
    // async uploadChunks(){
    //   // this.chunks = this.createFileChunk(this.file);
    //   // console.log(this.chunks);
    //   // const hash1 = await this.calculateHashWorker();
    //   const requests = this.chunks.map((chunk,index)=>{
    //     // 转成promise
    //     const form = new FormData()
    //     form.append('chunk',chunk.chunk)
    //     form.append('hash',chunk.hash)
    //     form.append('name',chunk.name)
    //     return form
    //   }).map((form,index)=>this.$http.post('/uploadfile' ,form, {
    //     onUploadProgress: (progress) => {
    //       //onUploadProgress 监听文件上传进程，计算百分比
    //       console.log(progress.loaded);
    //       this.uploadProgress = Number(
    //         ((progress.loaded / progress.total) * 100).toFixed(2)
    //       );
    //     },
    //   })
    // },

    // 并发控制
    sendRequest(chunks,limit=3){
      // chunks 并发的
      // 一个数组，长度是limit
      // [task1,task2,task3]
      return new Promise((resolve,reject)=>{
        const len = chunks.length
        let counter = 0
        let isStop = false  //是否停止上传，出现3个错误停止上传
        const start = ()=>{
          const task = chunks.shift()
          if(task){
            // 报错重试，超过3次结束
            if(isStop) return
            try {
              // 发送请求，resolve()
              // todo
              if (counter === len-1) {
                // 最后一个任务
                resolve()
              } else{
                counter++
                start()
              }
            } catch (error) {
              if(task.error<3){
                task.error++   // 统计报错次数，如果超过3次，就取药重试
                chunks.unshift(task)   // 将报错的提交，添加到有待执行的第一个，再次重试
                start()
              }else{
                isStop = true; // 取消重试
                reject()
              }

            }
          }
        }
        while (limit>0) {
          // 启动下一个任务
          start()
          limit-=1
        }

      })



    },
    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      this.file = file;
      console.log(file);
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>