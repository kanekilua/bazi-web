// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引用公共样式style
import './assets/style/commonStyle.less'

// 引用公共js
import api from './api/api.js'
import utils from './assets/js/utils'
import './assets/js/global.js'
Vue.prototype.$http =api;
Vue.prototype.$utils = utils;

// 引用外部js
import rem from '../static/js/rem'


// 加载自定义公共组件
import components from './components/' 
Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()); //首字母大写
  Vue.component(`v${name}`, components[key]);
})

// vux基础组件引用
import { XButton,XInput,Group,Flexbox,FlexboxItem,ToastPlugin,Tab,TabItem,Swiper,SwiperItem,DatetimePlugin,Popup,TransferDom,Cell,AlertPlugin,Sticky,XDialog,Picker,LoadMore} from 'vux'
Vue.component('x-button', XButton);
Vue.component('x-input', XInput);
Vue.component('group', Group);
Vue.component('flexbox', Flexbox);
Vue.component('flexbox-item', FlexboxItem);
Vue.component('tab', Tab);
Vue.component('tab-item', TabItem);
Vue.component('swiper', Swiper);
Vue.component('swiper-item', SwiperItem);
Vue.use(AlertPlugin);
Vue.use(DatetimePlugin);
Vue.component('popup', Popup);
Vue.component('transfer-dom', TransferDom);
Vue.component('cell', Cell);
Vue.component('sticky', Sticky);
Vue.component('x-dialog', XDialog);
Vue.component('picker', Picker);
Vue.component('load-more', LoadMore);
Vue.use(DatetimePlugin)
Vue.use(ToastPlugin);

// vue2.0移动设备指令
import touch from 'vue-directive-touch'
Vue.use(touch)

// 引用swiper插件
import {swiperSlide,swiper } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
Vue.component('swiper', swiper);
Vue.component('swiper-slide', swiperSlide);

Vue.config.productionTip = false;

// 自定义路由跳转方法
Vue.prototype.$jump = function(index) {
  this.$router.push(index);
}

document.addEventListener('deviceready', function() {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
  GeTuiSdkPlugin.callback_init(callback);
  GeTuiSdkPlugin.initialize();
}, false);

// 个推sdk的回调函数
function callback (type, data) {
  if(type == 'cid') {
      //TODO data = clientid
  } else if(type == 'pid') {
      //TODO data = 进程pid
  } else if(type == 'payload') {
         //TODO data=透传数据
  } else if(type == 'online') {
      if(data == 'true') {
          //TODO 已上线
      } else {
          //TODO 已离线
      }
  }else if(type == 'onNotificationArrived') {
        alert('onNotificationArrived' + data) //通知到达回调
  } else if(type == 'onNotificationClicked') {
        alert('onNotificationClicked' + data) //点击通知事件回调
  }
}
