
import {requesParameter} from "../../request/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.isEmpower();

  },
  getUserInfo:function(res){
    if (res.detail.userInfo) {
      console.log(res);
      wx.login({
        success:userInfoRes => {
          console.log("adadadada97d9a7d9a-- ------");
          this.getUserMessage(userInfoRes);
          console.log("adadadada97d9a7d9a-- aaaaaaaaa ppp");
        },
      })
    }else{
      wx.showModal({

                title: "提示",
        
                content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        
                showCancel: false,
        
                confirmText: '返回授权',
        
                success: function(res) {
        
                  // 用户没有授权成功，不需要改变 isHide 的值
        
                  if (res.confirm) {
        
                    console.log('用户点击了“返回授权”');
        
                  }
        
                }
        
              });
    }
      
  },
  isEmpower:function(){
    var that = this;

        //查看是否授权
    
        wx.getSetting({
    
          success: function(res) {
    
            if (res.authSetting['scope.userInfo']) {
    
              console.log("用户授权了");
    
            } else {
              //用户没有授权
              console.log("用户没有授权");
            }

          }
    
        });
  },
  addToUser:function(resData){
    wx.getUserInfo({
      complete: (res) => {
        console.log(resData.data);
        console.log(res);
        requesParameter({url:"user/addUser"},{data:{
          openid:resData.data.openid,
          nickname:res.userInfo.nickName
        }});
      },
    })
  },
  getUserMessage:function(res){
    wx.request({
      // 自行补上自己的 APPID 和 SECRET
    url: "https://api.weixin.qq.com/sns/jscode2session",
    method:"GET",
    data:{
      appid:"wx3a405abf9e4625f7",
      secret:"3719989a5de3c24b805485b19399a941",
      js_code:res.code,
      grant_type:"authorization_code"
    },
    success: userMessageRes => {
      this.addToUser(userMessageRes);
   }
  });
  }
})