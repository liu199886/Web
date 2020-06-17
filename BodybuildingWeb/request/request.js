export const request=(path)=>{
    //定义公共url
const baseUrl="http://localhost:8080/BodyBeautifu_war/";
return new Promise((resolve,reject)=>{
  wx.request({
    ...path,
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    method: 'POST',
    url:baseUrl+path.url,
    success:(result)=>{
      resolve(result.data);
    },
    fail:(err)=>{
      reject(err);
    }
  })
});

}
export const requesParameter=(path,params)=>{
  //定义公共url
const baseUrl="http://localhost:8080/BodyBeautifu_war/";
console.log("进入requesParameter方法"+path);
console.log(path);
console.log(params);
return new Promise((resolve,reject)=>{
wx.request({
  ...path,
  header: {
    "content-type": "application/json;charset=UTF-8"
  },
  method: 'POST',
  data:params,
  url:baseUrl+path.url,
  success:(result)=>{
    resolve(result.data);
  },
  fail:(err)=>{
    reject(err);
  }
})
});

}