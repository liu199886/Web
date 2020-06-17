// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      avatarUrl:"",
      nickName:""
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
  },
  //下拉刷新
  onPullDownRefresh:function()
  {
    wx.showNavigationBarLoading() //在标题栏中显示加载
 
    //模拟加载
    setTimeout(function()
    {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500)
  }
})