import Vue from 'vue'
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

// 配置API接口地址
var root = process.env.API_ROOT;
 
// 引用axios
var axios = require('axios');
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key];
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim();
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key]);
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key]);
    }
  }
  return o;
}
 
function apiAxios (method, url, params,type, headers, success, failure) {
  if (params) {
    params = filterNull(params);
  }
  if(type === 'app') {
    url  = "/app" + url;
  }else if(type === 'cesuan') {
    url = "/cesuan" + url;
  }
  console.log('------------进入请求的方法了------------');
  console.log('------------完整的url是：' + root + url + '------------');
  console.log('------------参数是：' + JSON.stringify(params) + '------------');
  axios({
    method: method,
    url: url,
    data: method === 'POST'  ? params : null,
    params: method === 'GET'  ? params : null,
    baseURL: root,
    headers: headers,
    withCredentials: false
  })
  .then(function (res) {
    console.log('------------请求正常------------');
    console.log('------------返回的数据: '+JSON.stringify(res.data)+'------------');
    if(type === 'app') {
      if (res.data.code === 'success') {
        if (success) {
          success(res.data);
        }
      } else {
        if (failure) {
          failure(res.data);
        }else {
          Vue.$vux.toast.text(res.data.msg,'top');
          return;
        }
      }
    }else {
      if (success) {
        success(res.data);
      }
    }
  })
  .catch(err => {
    console.log('------------捕捉异常------------');
    if(err.response) {
      console.log('------------异常的返回:'+JSON.stringify(err.response)+'------------');
      if(failure) {
        failure(err.response);
        return;
      }
    } 
    Vue.$vux.toast.text('' + err,'top');
    return;
  })
}
 
// 返回在vue模板中的调用接口
export default {
  get: function (url, params,type,headers, success, failure) {
    return apiAxios('GET', url, params,type,headers, success, failure);
  },
  post: function (url, params,type,headers, success, failure) {
    return apiAxios('POST', url, params,type,headers, success, failure);
  }
 
}