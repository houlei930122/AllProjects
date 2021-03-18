$(function() {
	var chk = true;
	$('.form-wrap').on('click','.submit-btn',function(){
		get.call(this)
	})
	function get(){
		if(chk){
			chk = false;
			var xing = $(this).parent().find('.xing-text').val();
			var ming = $(this).parent().find('.ming-text').val();
			var tel = $(this).parent().find('.tel-text').val();
			var province = $(this).parent().find(".province").find(":selected").text();
			var city = $(this).parent().find(".city").find(":selected").text();
			var selectdealer = $(this).parent().find(".dealer").find(":selected").text();					
			var sex = $(this).parent().find('.sex-wrap').attr('data-sex')
			var time = $(this).parent().find('.time-wrap').attr('data-time')
			var isAgree = $(this).parent().find('.check-msg').attr('data-agree')
			
			if (xing === "" ) {
			    hint("请输入姓!");		    
			    chk = true;
			    return;
			}
			if (ming === "" ) {
			    hint("请输入名!");		    
			    chk = true;
			    return;
			}
			if (tel === "" || !isMobil(tel)) {
			    hint("请输入正确的手机号码!");
			    chk = true;
			    return;
			}
			if (province === "请选择省份" ) {
			    hint("请选择省份!");
			    chk = true;
			    return;
			}			
			if (city === "请选择市/区") {
			    hint("请选择城市!");
			    chk = true;
			    return;
			}
			if (selectdealer == "请选择经销商") {
			    hint("请选择经销商!");
			    chk = true;
			    return;
			}	
			if(isAgree == '0'){
				hint("请勾选授权!");
		    chk = true;
		    return;
			}
			function getCode(dealersArr,selectdealer) {
			  for(var i = 0;i<dealersArr.length;i++){
			  	if(dealersArr[i]['shopname']  == selectdealer){
			  		return dealersArr[i]
			  	}
			  }
			};
			var codeItem = getCode(dealersArr,selectdealer)
			var code = codeItem.code;
			var province_code = codeItem.province_code;
			var city_code =codeItem.city_code;	

			var data = {			 
			  "lastName": xing,
		    "firstName": ming,
		    "gender": sex,
		    "mobile": tel,
		    "province": province_code,
		    "city": city_code,
		    "dealerCode": code,
		    "model": "ZLM1008",
		    "expectOrderDateType": time,
		    "campaign": "20210319"
			}
			$.ajax({
				url: 'https://adpaiprojects.thepaper.cn/lincoln/leads',
				data: data,
				type: 'POST',
				dataType: 'json',
				success: function(res) {
					chk = true;
					if(res.code == '200'){
						hint("恭喜，报名成功!");
						$(".xing-text").val('');
			   		$(".tel-text").val('');
					}else{
						hint(res.msg);
					}
				},
				error: function(jqXHR, textStatus, errorMsg) {
					console.log("请求失败：" + errorMsg);	
					chk = true;
				}
			})
			
			var data1 = {
			  "activityId": "lincoln20210319",
			  "activity": "22021年3月林肯航海家投放",
			  "channel": "澎湃新闻",
			  "name": xing+ming,
			  "phone": tel,
			  "sex": sex,
			  "province": province_code,
			  "city": city_code,
			  "dealerId": code,
			  "brand":"林肯",
			  "series":"ZLM1008",
			  "buyTime": time
			}
			$.ajax({
				url: 'https://adpaiprojects.thepaper.cn/CarApi/postLead',
				data: data1,
				type: 'POST',
				dataType: 'json',
				success: function(res) {				
				},
				error: function(jqXHR, textStatus, errorMsg) {
					console.log("请求失败：" + errorMsg);	
				}
			})
		}
	}

	$('.sex-wrap').on('click','.man',function(){
		var text = $(this).text()
		$(this).parent().parent().find('.man').removeClass('act')
		$(this).addClass('act')
		if(text == '先生'){
			$(this).parent().parent().attr('data-sex',1)
		}else{
			$(this).parent().parent().attr('data-sex',2)
		}
		
	})
	$('.time-wrap').on('click','.time-item',function(){
		var text = $(this).text()
		$(this).parent().parent().find('.time-item').removeClass('act')
		$(this).addClass('act')
		if(text == '3个月内'){
			$(this).parent().parent().attr('data-time','01')
		}
		if(text == '4-6个月'){
			$(this).parent().parent().attr('data-time','02')
		}
		if(text == '7-12个月'){
			$(this).parent().parent().attr('data-time','03')
		}
		if(text == '1年以上'){
			$(this).parent().parent().attr('data-time','04')
		}
	})
	$('.explain').on('click','.check-box',function(){
		var isC = $(this).hasClass('act')
		if(isC){
			$(this).removeClass('act')
			$(this).parent().attr('data-agree','0')
		}else{
			$(this).addClass('act')
			$(this).parent().attr('data-agree','1')
		}
	})
	$('.check-msg').on('click','span',function(){
		window.location.href = 'privacy.html'
	})
	
	$('.video-list').on('click','.video-poster',function(){
		$(this).parent().find('video').show()
		$(this).hide()
		stopVideo()
		$(this).parent().find('video')[0].play()
		
	})
	
	function stopVideo(){
		var len = $('.video-list').find('video')
		for(var i=0;i<len.length;i++ ){
			len[i].pause()
		}
	}
	
	var timer;
	function hint(str){
		clearTimeout(timer)
		$('.hint').html(str)
		$('.hint').show();
		timer=setTimeout(function(){
			$('.hint').hide();
		},2000)
	}
	//是否是正确的手机号
	function isMobil(str) {
	    var strleng = str.length;
	    if(/^1[34587]\d{9}/.test(str) && strleng=='11') {
	      return true;
	    }else{
	        //alert('手机号码有误请重新输入！')
	      return false;
	    }
	}
	
	
	shareInfo = {
		'_title': '新一代林肯航海家',
		'_desc': '',
		'_link': location.href.split('?')[0],
		'_imgUrl': 'https://adproject.thepaper.cn/adproject/2020/10/Lincoln/img/',
		'_type': 'link'
	}
	shareMsg(shareInfo._title, shareInfo._desc, shareInfo._link, shareInfo._imgUrl, shareInfo._type);
})