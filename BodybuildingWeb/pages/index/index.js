import {request} from "../../request/request"
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    coursesList:[]
  },
  //下拉刷新
  onPullDownRefresh:function()
  {
    //下拉刷新时重新请求数据
    this.getCourses();
    wx.showNavigationBarLoading() //在标题栏中显示加载
 
    //模拟加载
    setTimeout(function()
    {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500)
  },
  /**
   * 请求数据 coursesList 将课程数据装入该数组中
   */
  getCourses(){
    request({url:"course/allCourse"})
    .then(result => {
      this.setData({
        coursesList : result
        });
  })
  },
  onLoad: function (options) {
    // 1 开始发送异步请求 优化手段可以通过es6
    this.getCourses();
   },
   handlerJump(e){
     console.log(e);

   }
})
