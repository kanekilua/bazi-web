import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import ResetPwd from '@/pages/ResetPwd'
import UserAgreement from '@/pages/UserAgreement'
import Birth from '@/pages/Birth'
import BaziBirth from '@/pages/BaziBirth'
import PeachBlossom from '@/pages/PeachBlossom'
import Activity from '@/pages/Activity'
import Calendar from '@/pages/Calendar'

// 主路由页面
import Main from '@/pages/Main'
import Home from '@/pages/Home'
import Master from '@/pages/Master'
import Fortune from '@/pages/Fortune'
import Predict from '@/pages/Predict'
import Mine from '@/pages/Mine'
import Bazi from '@/pages/Bazi'
import Ziwei from '@/pages/Ziwei'
import ZiweiAnalyze from '@/pages/ZiweiAnalyze'
import Fengshui from '@/pages/Fengshui'
import FengshuiJiaju from '@/pages/FengshuiJiaju'
import FengshuiDetail from '@/pages/FengshuiDetail'
import Love from '@/pages/Love'
import LoveBlossoms from '@/pages/LoveBlossoms'
import Hehun from '@/pages/Hehun'
import HehunAnalyze from '@/pages/HehunAnalyze'
import Xiangshu from '@/pages/Xiangshu'
import XiangshuInner from '@/pages/XiangshuInner'
import ZhougongHome from '@/pages/zhougongHome'
import ZhougongAnalyze from '@/pages/ZhougongAnalyze'
import Empty from '@/pages/Empty'
import GiveName from '@/pages/GiveName'
import NameHome from '@/pages/NameHome'
import Shengxiao from '@/pages/Shengxiao'
import ShengxiaoDetail from '@/pages/ShengxiaoDetail'
import Article from '@/pages/Article'
import NameTest from '@/pages/NameTest'
import NameTestInner from '@/pages/NameTestInner'
import NameTestResult from '@/pages/NameTestResult'
import FamilyName from '@/pages/FamilyName'
import FamilyNameInner from '@/pages/FamilyNameInner'
import NamedResult from '@/pages/NamedResult'
import QimenFile from '@/pages/QimenFile'
import QimenPan from '@/pages/QimenPan'
import CalendarDetail from '@/pages/CalendarDetail'
import Weather from '@/pages/Weather'
import WeatherProvince from '@/pages/WeatherProvince'
import WeatherCity from '@/pages/WeatherCity'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/',
      name : 'welcome',
      component : Welcome
    },
    {
      path : '/login',
      name : 'login',
      component : Login
    },
    {
      path : '/register',
      name : 'register',
      component : Register
    },
    {
      path : '/resetPwd',
      name : 'resetPwd',
      component : ResetPwd
    },
    {
      path : '/userAgreement',
      name : 'userAgreement',
      component : UserAgreement
    },
    {
      path : '/birth',
      name : 'birth',
      component : Birth
    },
    {
      path :'/main',
      name : 'main',
      component : Main,
      redirect: '/main/home',
      children: [
        {
          path : '/main/home',
          name : 'home',
          component: Home
        },
        {
          path : '/main/master',
          name : 'master',
          component: Master
        },
        {
          path : '/main/fortune',
          name : 'fortune',
          component: Fortune
        },
        {
          path : '/main/predict',
          name : 'predict',
          component: Predict
        },
        {
          path : '/main/mine',
          name : 'mine',
          component: Mine
        },{
          path : '/main/activity',
          name : 'activity',
          component : Activity
        }
      ]
    },
    {
      path : '/bazi',
      name : 'bazi',
      component : Bazi,
    },
    {
      path : '/ziwei',
      name : 'ziwei',
      component : Ziwei,
    },
    {
      path: '/analyze',
      name:'analyze',
      component: ZiweiAnalyze,
      component : Bazi
    },
    {
      path : '/baziBirth',
      name : 'baziBirth',
      component: BaziBirth
    },
    {
      path: '/fengshui',
      name:'fengshui',
      component: Fengshui
    },
    {
      path: '/jiaju',
      name:'jiaju',
      component: FengshuiJiaju
    },
    {
      path: '/fengshuidetail',
      name:'fengshuidetail',
      component: FengshuiDetail
    },
    {
      path: '/love',
      name:'love',
      component: Love
    },
    {
      path: '/loveBlossoms',
      name:'loveBlossoms',
      component: LoveBlossoms
    },
    {
      path : '/peachBlossom',
      name : 'peachBlossom',
      component: PeachBlossom
    },
    {
      path : '/hehun',
      name : 'hehun',
      component: Hehun
    },
    {
      path : '/hehunAnalyze',
      name : 'hehunAnalyze',
      component: HehunAnalyze
    },
    {
      path : '/xiangshu',
      name : 'xiangshu',
      component: Xiangshu
    },
    {
      path : '/xiangshuInner',
      name : 'xiangshuInner',
      component: XiangshuInner
    },
    {
      path : '/zhougongHome',
      name : 'zhougongHome',
      component : ZhougongHome
    },
    {
      path : '/zhougongAnalyze',
      name : 'zhougongAnalyze',
      component : ZhougongAnalyze
    },
    {
      path : '/empty',
      name : 'empty',
      component : Empty
    },
    {
      path : '/giveName',
      name : 'giveName',
      component : GiveName 
    },
    {
      path : '/nameHome',
      name : 'nameHome',
      component : NameHome
    },
    {
      path : '/shengxiao',
      name : 'shengxiao',
      component : Shengxiao
    },{
      path : '/shengxiao/detail',
      name : 'shengxiaoDetail',
      component : ShengxiaoDetail
    },
    {
      path : '/article',
      name : 'article',
      component : Article
    },{
      path : '/nameTest',
      name : 'nameTest',
      component : NameTest 
    },
    {
      path : '/nameTestInner',
      name : 'nameTestInner',
      component : NameTestInner
    },
    {
      path : '/nameTestResult',
      name : 'nameTestResult',
      component : NameTestResult
    },
    {
      path : '/familyName',
      name : 'familyName',
      component : FamilyName
    },
    {
      path : '/familyNameInner',
      name : 'amilyNameInner',
      component : FamilyNameInner
    },
    {
      path : '/namedResult',
      name : 'namedResult',
      component : NamedResult
    },
    {
      path : '/qimenFile',
      name : 'qimenFile',
      component : QimenFile
    },
    {
      path : '/qimenPan',
      name : 'qimenPan',
      component : QimenPan
    },
    {
      path : '/main/calendar',
      name : 'calendar',
      component : Calendar
    },
    {
      path : '/main/calendar/detail',
      name : 'calendarDetail',
      component : CalendarDetail
    },
    {
      path : '/main/calendar/weather',
      name : 'weather',
      component :Weather
    },
    {
      path : '/main/calendar/weather/province',
      name : 'province',
      component :WeatherProvince
    },
    {
      path : '/main/calendar/weather/city',
      name : 'city',
      component :WeatherCity
    }
  ]
})
