$(function() {

	var isOk = false
	var images=[];
	var w = 1080
	var realH = 2090;
	var canvas = $('#door')[0];
	var ctx = canvas.getContext('2d')
	canvas.width = w;
	canvas.height = realH;
	ctx.fillStyle = 'rgba(255,255,255,0)'
	loadImages()
	function loadImages(){
    var loadedImages = 0;
    var numImages = 0;
    for (var i=0;i<35;i++) {
        images[i] = new Image();
        images[i].crossOrigin = 'Anonymous'; //解决跨域
        images[i].src = 'public/open/'+(i+1)+'.png';
        //当一张图片加载完成时执行
        images[i].onload = function(){
        	++loadedImages 
        	var pro = loadedImages/35*100
        	var proNum = Math.floor(pro)>=99? 99:Math.floor(pro)
      	 	$('.loading-num').html(proNum+'%')
	 				$('.loading-progress').find('.progress').css('width',pro+ '%')
          if(loadedImages>34){
          	console.log('加载完成',isOk)
          	if(isOk){
          		$('.loading-num').html('100%')
          		$('.loading-page').fadeOut()	
          	}	else{
          		isOk = true
          	}
          }
          if(loadedImages == 10){
          	ctx.drawImage(images[0], 0, 0, 1080, 2090);
          }
        };
    }
  }
	


	function openDoor(ctx){	
		var imgIndex = 0;
		console.log(images)
		drawDoor()
		function drawDoor(){			
			ctx.clearRect(0,0,1080,2090)
			ctx.drawImage(images[imgIndex], 0, 0, 1080, 2090);
			if(imgIndex<34){
				setTimeout(function(){
					drawDoor()
				},100)
			}			
			imgIndex++					
		}	
	}
	var canvasContainer = document.getElementById('canvasContainer');
	var animItem = lottie.loadAnimation({
		container: canvasContainer,
		animType: 'svg',
		autoplay: false,
		prerender: true,
		loop: false,
		path: 'public/f/1.json'
	});
	$('.door-wrap').on('click','.door-con',function(){
		$(this).hide()
		openDoor(ctx)
		animItem.play()
		setTimeout(function(){
			$('.btn-wrap').addClass('hintClick')
			animItem.pause()
		},18000)
	})
	var stop = 1;
//	var timerArr = [18000,25000,27000,31000,42000]
	var timerArr = [18000,7000,2000,4000,11000]
	$('.btn-wrap').on('click',function(){
		animItem.play()
		$(this).removeClass('hintClick')
		if(timerArr[stop]){
			setTimeout(function(){
				$('.btn-wrap').addClass('hintClick')
				animItem.pause()
				stop++
			},timerArr[stop])
		}
	})
	$('.res-page').on('click','.replay-btn',function(){
		$('.res-page').hide()
		animItem.goToAndPlay(1000,false)
	})

	
	//初始化完成
//	animItem.addEventListener('config_ready', function(e) {
//		console.log(1)
//	})
//	//动画部分已加载
//	animItem.addEventListener('data_ready', function(e) {
//		console.log(2)
//	})
	//元素加载到DOM中开始展示
	animItem.addEventListener('DOMLoaded', function(e) {
		if(isOk){
			$('.loading-num').html('100%')
  		$('.loading-page').fadeOut()	
  	}	else{
  		isOk = true
  	}
	})
	//检测完成
	animItem.addEventListener('complete', function(e) {
		$('.res-page').fadeIn()
//		animItem.destroy()
	})
	//	animItem.stop()  //停止，会重新开始
	//animItem.play()  //播放	
	
	
	
	
	
	
	autoPlayMusic();
	function autoPlayMusic() {
		function musicInBrowserHandler() {
			musicPlay(true)
		}
		document.body.addEventListener('touchstart', musicInBrowserHandler);
		musicInWeixinHandler();

		function musicInWeixinHandler() {
			musicPlay(true);
			document.addEventListener("WeixinJSBridgeReady", function() {
				musicPlay(true)
			}, false);		
		}
		document.removeEventListener('DOMContentLoaded', musicInWeixinHandler)
		function musicPlay(isPlay) {
			var media1 = document.querySelector('#bgmusic');
			if(isPlay && media1.paused) {
				var videoPlay = media1.play();
				videoPlay.then(() => {
					media1.play();
					document.body.removeEventListener('touchstart', musicInBrowserHandler);
					$('.music').addClass('music-on');;					
				}).catch((err) => {
					$('.music').removeClass('music-on');
				})
			}
			if(!isPlay && !media.paused) {
				media1.pause();
				$('.music').removeClass('music-on');
			}
		}
	}
	$(".music").on('click',function() {
		if(!$("#bgmusic")[0].paused) {
			document.getElementById("bgmusic").pause();
			$(".music").removeClass('music-on')
		} else {
			document.getElementById("bgmusic").play();
			$(".music").addClass('music-on')
		}
	});
	
	
})