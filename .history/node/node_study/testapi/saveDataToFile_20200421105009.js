
var fs= require("fs");
fs.readFile('code.txt',function(err,data){
    if(err){
        console.log("bad")
    }else{
        console.log("ok");
        console.log(data);
        console.log(data.toString());
        }
})
var data="-我要发财了-";
fs.writeFile('code.txt',data,{flag:'a',encoding:'utf-8',mode:'0666'},function(err){
     if(err){
         console.log("文件写入失败")
     }else{
         console.log("文件追加成功");
     }
}) 
setInterval(function(){
    fs.writeFile('code.txt',data,{flag:'a',encoding:'utf-8',mode:'0666'},function(err){
        if(err){
            console.log("文件写入失败")
        }else{
            console.log("文件追加成功");
        }
   }) 
},1000)