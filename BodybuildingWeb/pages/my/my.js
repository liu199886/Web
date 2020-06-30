// pages/my/my.js
import {request} from "../../request/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getByRecord("111");
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
  },
  getByRecord(mes){
    request({url:"user/byrecord?openid="+"111"})
    .then(result => {
      this.setData({
        user : result
        });
  })
  }
})