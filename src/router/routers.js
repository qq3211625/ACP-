import Login from '../pages/Login/Login'
import Enroll from '../pages/Enroll/Enroll'
import Enrolluser from '../pages/Enroll/Enrolluser'
import Enrollpay from '../pages/Enroll/Enrollpay'
import ImpowerApp from '../pages/Enroll/ImpowerApp'
import ApplyApp from '../pages/Enroll/ApplyApp'
import ApplyID from '../pages/Enroll/ApplyID'
import Business from '../pages/registeredAgent/Business'
import Admin from '../pages/registeredAgent/Admin'
import Basics from '../pages/registeredAgent/Basics'

export default [
  {
    path: '/login',
    component: Login,
    meta: {
      isoff: true,
    }
  },
  //注册组件
  {
    path: '/enroll',
    component: Enroll,
  },
  {
    path: '/enrolluser',
    component: Enrolluser,
  },
  {
    path: '/enrollpay',
    component: Enrollpay,
  },
  //小程序授权
  {
    path: '/impowerApp',
    component: ImpowerApp,
  },
  {
    path: '/applyApp',
    component: ApplyApp,
  },
  {
    path: '/applyID',
    component: ApplyID,
  },
  //代注册
  {
    path: '/business',
    component: Business,
  },
  {
    path: '/admin',
    component: Admin,
  },
  {
    path: '/basics',
    component: Basics,
  },
  {
    //自动跳转路由
    path:'/',
    redirect: '/basics'
  }
]
