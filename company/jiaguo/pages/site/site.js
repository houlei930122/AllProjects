const jiekouUrl = 'https://jiaguoadmin.thepaper.cn';
let tem1_1 ,tem1_2;

Page({
	data: {
		searchCtiy: '',
		toView: '',//用来做定位联动
		cityList: [],
		searchNav: [],
		chooseid: '',
		hotList: []
	},
	onLoad: function (options) {
		const that = this;
		wx.getStorage({
			key: 'userId',
			success(res) {
				that.setData({
					userid: res.data
				})
			}
		})
		wx.getStorage({
			key: 'tem1_1',
			success (res) { 
			  tem1_1 = JSON.parse(res.data);
			}
		  })
		wx.getStorage({
			key: 'tem1_2',
			success (res) { 
				tem1_2 = JSON.parse(res.data);
			}
		})

		// 获取全部地标
		wx.request({
			url: jiekouUrl + '/api/jgyx/videoCategoryList',
			method: 'POST',
			data: {
				hot: ''
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success(res) {
				if (res.data.code == '1') {
					// console.log(res.data.data.categoryList)
					that.setData({
						hotList: res.data.data.categoryList
					})
				} else {
					wx.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000
					})
				}
			},
			err: function (err) {
				console.log(err)
				wx.showToast({
					title: err.msg,
					icon: 'none',
					duration: 2000
				})
			}
		})
	},

	selectcity(e) {
		let addname = e.currentTarget.dataset.addname;
		const userid = this.data.userid;
		this.setData({
			chooseid: addname
		})
		wx.navigateTo({
			url: '../landmark/landmark?userid=' + userid + '&addname=' + addname + '&sort=1',
      success:function(res){
        console.log(res)
      },
      fail:function(err){
        wx.showModal({
          content: err,
          success(res) {
          }
        })
      }
		})
	},
	ty(e) {
		const tid = e.currentTarget.dataset.tid;
		const userid = this.data.userid;
		wx.navigateTo({
			url: '../landmark/landmark?userid=' + userid + '&vid=' + tid + '&sort=1',
      fail: function (err) {
        wx.showModal({
          content: err,
          success(res) {
          }
        })
      }
		})
	},
	onReady: function () {

	},

	onShareAppMessage: function () {
		return {
			title: '家国影像馆',
			path: '/pages/index/index',
			imageUrl: 'https://adproject.thepaper.cn/adproject/2019/8/jiaguo/shareimg.png'
		}
	}
})