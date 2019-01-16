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
import FirstGuider from '@/pages/FirstGuider'

import Activity from '@/pages/Activity'
import Calendar from '@/pages/Calendar'
// 主路由页面
import Main from '@/pages/Main'
import Home from '@/pages/Home'
import Fortune from '@/pages/Fortune'
import Mine from '@/pages/Mine'
import Bazi from '@/pages/Bazi'
import Ziwei from '@/pages/Ziwei'
import Fengshui from '@/pages/Fengshui'
import FengshuiJiaju from '@/pages/FengshuiJiaju'
import Love from '@/pages/Love'
import LoveBlossoms from '@/pages/LoveBlossoms'
import Hehun from '@/pages/Hehun'
import HehunAnalyze from '@/pages/HehunAnalyze'
import Xiangshu from '@/pages/Xiangshu'
import ZhougongHome from '@/pages/zhougongHome'
import ZhougongAnalyze from '@/pages/ZhougongAnalyze'
import Empty from '@/pages/Empty'
import GiveName from '@/pages/GiveName'
import NameHome from '@/pages/NameHome'
import Shengxiao from '@/pages/Shengxiao'
import ShengxiaoDetail from '@/pages/ShengxiaoDetail'
import ShengxiaoFamous from '@/pages/ShengxiaoFamous'
import ShengxiaoKnowledge from '@/pages/ShengxiaoKnowledge'
import Article from '@/pages/Article'
import NameTestResult from '@/pages/NameTestResult'
import FamilyName from '@/pages/FamilyName'
import FamilyNameInner from '@/pages/FamilyNameInner'
import NamedResult from '@/pages/NamedResult'
import QimenFile from '@/pages/QimenFile'
import QimenPan from '@/pages/QimenPan'
import CalendarDetail from '@/pages/CalendarDetail'
import Setting from '@/pages/Setting'
import UserFile from '@/pages/UserFile'
import Security from '@/pages/Security'
import ChangePhone from '@/pages/ChangePhone'
import Recruitment from '@/pages/Recruitment'
import RecruitmentStep1 from '@/pages/RecruitmentStep1'
import RecruitmentStep2 from '@/pages/RecruitmentStep2'
import RecruitmentStep3 from '@/pages/RecruitmentStep3'
import MyCollection from '@/pages/MyCollection'
import ContactService from '@/pages/ContactService'
import FeedBack from '@/pages/FeedBack'
import Weather from '@/pages/Weather'
import WeatherProvince from '@/pages/WeatherProvince'
import WeatherCity from '@/pages/WeatherCity'
import InterestingTest from "@/pages/InterestingTest"
import About from '@/pages/About'
import InterestingTestResult from '@/pages/InterestingTestResult'
import InterestingInner from '@/pages/InterestingInner'
import InterestingMore from '@/pages/InterestingMore'




Vue.use(Router)

const router = new Router({
  routes: [
    {
      path : '/',
      name : 'welcome',
      component : Welcome,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/login',
      name : 'login',
      component : Login,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/register',
      name : 'register',
      component : Register,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/resetPwd',
      name : 'resetPwd',
      component : ResetPwd,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/userAgreement',
      name : 'userAgreement',
      component : UserAgreement,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/birth',
      name : 'birth',
      component : Birth,
      meta: {
        keepAlive: true
      }
    },
    {
      path :'/main',
      name : 'main',
      component : Main,
      redirect: '',
      children: [
        {
          path : '/main/home',
          name : 'home',
          component: Home,
          meta: {
            keepAlive: true
          }
        },
        {
          path : '/main/fortune',
          name : 'fortune',
          component: Fortune,
          meta: {
            keepAlive: false
          }
        },
        {
          path : '/main/activity',
          name : 'activity',
          component : Activity,
          meta: {
            keepAlive: true
          }
        },
        {
          path : '/main/calendar',
          name : 'calendar',
          component : Calendar,
          meta: {
            keepAlive: true
          }
        },
        {
          path : '/main/mine',
          name : 'mine',
          component: Mine,
          meta: {
            keepAlive: false
          }
        },
      ]
    },
    {
      path : '/bazi',
      name : 'bazi',
      component : Bazi,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/ziwei',
      name : 'ziwei',
      component : Ziwei,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/baziBirth',
      name : 'baziBirth',
      component: BaziBirth,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/fengshui',
      name:'fengshui',
      component: Fengshui,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/jiaju',
      name:'jiaju',
      component: FengshuiJiaju,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/love',
      name:'love',
      component: Love,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/loveBlossoms',
      name:'loveBlossoms',
      component: LoveBlossoms,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/peachBlossom',
      name : 'peachBlossom',
      component: PeachBlossom,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/firstGuider',
      name : 'firstGuider',
      component : FirstGuider,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/hehun',
      name : 'hehun',
      component: Hehun,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/hehunAnalyze',
      name : 'hehunAnalyze',
      component: HehunAnalyze,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/xiangshu',
      name : 'xiangshu',
      component: Xiangshu,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/zhougongHome',
      name : 'zhougongHome',
      component : ZhougongHome,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/zhougongAnalyze',
      name : 'zhougongAnalyze',
      component : ZhougongAnalyze,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/empty',
      name : 'empty',
      component : Empty,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/giveName',
      name : 'giveName',
      component : GiveName,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/nameHome',
      name : 'nameHome',
      component : NameHome,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/shengxiao',
      name : 'shengxiao',
      component : Shengxiao,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/shengxiao/knowledge',
      name : 'shengxiaoKnowledge',
      component : ShengxiaoKnowledge,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/shengxiao/detail',
      name : 'shengxiaoDetail',
      component : ShengxiaoDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/shengxiao/famous/:name/:imgUrl/:identify/:works/:experience',
      name : 'shengxiaoFamous',
      component : ShengxiaoFamous,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/article',
      name : 'article',
      component : Article,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/nameTestResult',
      name : 'nameTestResult',
      component : NameTestResult,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/familyName',
      name : 'familyName',
      component : FamilyName,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/familyNameInner',
      name : 'amilyNameInner',
      component : FamilyNameInner,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/namedResult',
      name : 'namedResult',
      component : NamedResult,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/qimenFile',
      name : 'qimenFile',
      component : QimenFile,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/qimenPan',
      name : 'qimenPan',
      component : QimenPan,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/main/calendar/detail',
      name : 'calendarDetail',
      component : CalendarDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/main/mine/setting',
      name : 'setting',
      component: Setting,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/main/mine/setting/userFile',
      name : 'userFile',
      component: UserFile,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/main/mine/setting/security',
      name : 'security',
      component: Security,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/main/mine/setting/security/changePhone',
      name : 'changePhone',
      component: ChangePhone,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/main/mine/recruitment',
      name : 'recruitment',
      component: Recruitment,
      meta: {
        keepAlive: false
      },
      children : [
        {
          path : 'recruitmentStep1',
          name : 'recruitmentStep1',
          component : RecruitmentStep1,
          meta: {
            keepAlive: false
          }
        },
        {
          path : 'recruitmentStep2',
          name : 'recruitmentStep2',
          component : RecruitmentStep2,
          meta: {
            keepAlive: false
          }
        },
        {
          path : 'recruitmentStep3',
          name : 'recruitmentStep3',
          component : RecruitmentStep3,
          meta: {
            keepAlive: false
          }
        },
      ]
    },
    {
      path : '/main/mine/myCollection',
      name : 'myCollection',
      component: MyCollection,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/main/mine/contactService',
      name : 'contactService',
      component : ContactService,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/main/mine/feedBack',
      name : 'feedBack',
      component : FeedBack ,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/main/calendar/weather',
      name : 'weather',
      component :Weather,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/main/calendar/weather/province',
      name : 'province',
      component :WeatherProvince,
      meta: {
        keepAlive: true
      }
    },
    {
      path : '/main/calendar/weather/city',
      name : 'city',
      component :WeatherCity,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/interestingInner',
      name : 'interestingInner',
      component : InterestingInner,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/interestingTest',
      name : 'interestingTest',
      component : InterestingTest ,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/interestingTestResult',
      name : 'interestingTestResult',
      component : InterestingTestResult,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/interestingMore',
      name : 'interestingMore',
      component : InterestingMore,
      meta: {
        keepAlive: false
      }
    },
    {
      path : '/main/mine/about',
      name : 'about',
      component : About,
      meta: {
        keepAlive: true
      }
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  if(from.name !== null) {
    MobclickAgent.onPageBegin(from.name);
  }
  MobclickAgent.onPageBegin(to.name);
  next();
})

export default router;