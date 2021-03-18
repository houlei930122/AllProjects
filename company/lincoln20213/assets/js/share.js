
function shareMsg(share_title,share_desc,share_link,share_imgUrl,share_type ){	
	$.ajax({
		url: 'https://adpaiprojects.thepaper.cn/WeiXin/qinzi/jssdk.php?url='+encodeURIComponent(location.href.split('#')[0]),
		data: '',
		type: 'get',
		dataType: 'json',
		success: function(res) {		
			wx.config({
				debug: false, 
				appId:res.appId, 
				timestamp:res.timestamp, 
				nonceStr:res.nonceStr, 
				signature:res.signature, 
				jsApiList: [
				'onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone'
				] 
			});				
		},
		error: function(jqXHR, textStatus, errorMsg) {
			console.log("请求失败：" + errorMsg);			
		}
	})	
	wx.ready(function() {
		//朋友圈
		wx.onMenuShareTimeline({
			title: share_title, 
			link: share_link, 
			imgUrl: share_imgUrl, 
			success: function() {
				
			},
			cancel: function() {
				
			}
		});
		//		朋友
		wx.onMenuShareAppMessage({
			title: share_title, 
			desc: share_desc, 
			link: share_link, 
			imgUrl: share_imgUrl, 
			type: share_type, 		
			success: function() {
				
	    		
			},
			cancel: function() {
				
			}
		});
		wx.onMenuShareQQ({
			title: share_title, 
			desc: share_desc, 
			link: share_link, 
			imgUrl:share_imgUrl, 
			success: function() {
				
			},
			cancel: function() {
				
			}
		});
		wx.onMenuShareQZone({
			title: share_title, 
			desc: share_desc, 
			link: share_link, 
			imgUrl: share_imgUrl, 
			success: function() {
				
			},
			cancel: function() {
				
			}
		});
		wx.onMenuShareWeibo({
			title: share_title, 
			desc: share_desc, 
			link: share_link, 
			imgUrl: share_imgUrl, 
			success: function() {
				
			},
			cancel: function() {
				
			}
		});
	});		
};

