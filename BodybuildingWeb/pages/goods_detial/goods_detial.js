// pages/goods_detial/goods_detial.js
import {request} from "../../request/request"
import {requesParameter} from "../../request/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course :{},
    courseSubitem:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      course :  options
    });
    wx.request({
      header: {
        "content-type": "application/json;charset=UTF-8"
      },
      method: 'GET',
      url:"http://localhost:8080/BodyBeautiful_war/course/courseSubitem?courseid="+this.data.course.courseid,
      success:(result)=>{
        this.setData({
          courseSubitem :  result.data
        });
      },
      fail:(err)=>{
        
      }
    })
    
  }
})