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
import ShengxiaoArtical from '@/pages/ShengxiaoArtical'
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
import UserMessage from '@/pages/UserMessage'
import Recruitment from '@/pages/Recruitment'
import RecruitmentStep1 from '@/pages/RecruitmentStep1'
import RecruitmentStep2 from '@/pages/RecruitmentStep2'
import RecruitmentStep3 from '@/pages/RecruitmentStep3'
import MyCollection from '@/pages/MyCollection'
import ContactService from '@/pages/ContactService'
import FeedBack from '@/pages/FeedBack'




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
          path : '/main/activity',
          name : 'activity',
          component : Activity
        }
        ,{
          path : '/main/calendar',
          name : 'calendar',
          component : Calendar
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
    },
    {
      path : '/shengxiao/knowledge',
      name : 'shengxiaoKnowledge',
      component : ShengxiaoKnowledge
    },
    {
      path : '/shengxiao/detail',
      name : 'shengxiaoDetail',
      component : ShengxiaoDetail
    },
    {
      path : '/shengxiao/famous/:name/:imgUrl/:identify/:works/:experience',
      name : 'shengxiaoFamous',
      component : ShengxiaoFamous,
    },
    {
      path : '/shengxiao/famous/artical',
      name : 'shengxiaoArtical',
      component : ShengxiaoArtical
    },
    {
      path : '/article',
      name : 'article',
      component : Article
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
      path : '/main/calendar/detail',
      name : 'calendarDetail',
      component : CalendarDetail
    },
    {
      path : '/main/mine',
      name : 'mine',
      component: Mine
    },
    {
      path : '/main/mine/setting',
      name : 'setting',
      component: Setting
    },
    {
      path : '/main/mine/setting/userFile',
      name : 'userFile',
      component: UserFile
    },
    {
      path : '/main/mine/setting/security',
      name : 'security',
      component: Security
    },
    {
      path : '/main/mine/setting/security/changePhone',
      name : 'changePhone',
      component: ChangePhone
    },
    {
      path : '/main/mine/userMessage',
      name : 'userMessage',
      component: UserMessage
    },
    {
      path : '/main/mine/recruitment',
      name : 'recruitment',
      component: Recruitment,
      children : [
        {
          path : 'recruitmentStep1',
          name : 'recruitmentStep1',
          component : RecruitmentStep1
        },
        {
          path : 'recruitmentStep2',
          name : 'recruitmentStep2',
          component : RecruitmentStep2
        },
        {
          path : 'recruitmentStep3',
          name : 'recruitmentStep3',
          component : RecruitmentStep3
        },
      ]
    },
    {
      path : '/main/mine/myCollection',
      name : 'myCollection',
      component: MyCollection
    },
    {
      path : '/main/mine/contactService',
      name : 'contactService',
      component : ContactService
    },
    {
      path : '/main/mine/feedBack',
      name : 'feedBack',
      component : FeedBack 
    }
    
  ]
})
