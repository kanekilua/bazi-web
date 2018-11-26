import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import ResetPwd from '@/pages/ResetPwd'
import UserAgreement from '@/pages/UserAgreement'
import Birth from '@/pages/Birth'
import BaziBirth from '@/pages/BaziBirth'

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
  ]
})
