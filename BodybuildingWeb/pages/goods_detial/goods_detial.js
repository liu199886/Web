// pages/goods_detial/goods_detial.js
import {request} from "../../request/request"
import {requesParameter} from "../../request/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course :{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      course :  options
    });
    console.log(this.data.course.courseid);
    requesParameter({url:"course/courseSubitem"},{data:this.data.course})
    .then(result => {
      this.setData({
        //coursesList : result
        });
  })
  }
})