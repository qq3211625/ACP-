// 用户模块

import {USE_DATA} from "../mutation-types";
// import {deleteUser, reqUser} from "../../api";

const state = {
  phone: '',  //用户数据
  pwd: '',
  email: '',      //用户邮箱
  firstName: '',  //用户名字
  lastName: '',   //用户姓
  invitationCode: '',  //邀请码

  // 储存用户代注册信息
  enterprise: {
    accountName: '',              //企业开户名称
    acn: '',                       //企业注册号
    businessAddress: '',         //企业办公地址
    corporateBank: '',           //企业开户银行

    corporateBankAccount: '',   //企业银行账号
    enterpriseName: '',          //企业名称
    legalRepresentative: '',    //法定代表人/企业负责人姓名
    officePhone: '',            //企业办公电话

    registeredAddress:'',      //企业地址
    scopeOfBusiness:'',        //经营范围
    status: 0,                //0：待处理 1：成功 2：失败
  },
}

const mutations = {
  message (state,{message1}) {
    state.phone = message1.phone;
    state.pwd = message1.pwd;
    console.log(message1)
  },
  messageEn (state,{message1}) {
    state.email = message1.email;
    state.firstName = message1.firstName;
    state.lastName = message1.lastName;
    state.invitationCode = message1.invitationCode;
  },

  //代注册1
  business (state,{enterprise}) {
    //保存用户代理注册的数据
    state.enterprise.accountName=enterprise.accountName;                   //企业开户名称
      state.enterprise.acn=enterprise.acn;                                //企业注册号
      state.enterprise.businessAddress=enterprise.businessAddress;             //企业办公地址
      state.enterprise.corporateBank=enterprise.corporateBank;            //企业开户银行

      state.enterprise.corporateBankAccount=enterprise.corporateBankAccount;              //企业银行账号
      state.enterprise.enterpriseName=enterprise.enterpriseName;            //企业名称
      state.enterprise.legalRepresentative=enterprise.legalRepresentative;             //法定代表人/企业负责人姓名
      state.enterprise.officePhone=enterprise.officePhone;            //企业办公电话

      state.enterprise.registeredAddress=enterprise.registeredAddress;            //企业地址
      state.enterprise.scopeOfBusiness=enterprise.scopeOfBusiness;              //经营范围
      state.enterprise.status=enterprise.status;             //0：待处理 1：成功 2：失败
  }
}

const actions = {
// 根据会话获取用户信息
  async getUser({commit}){
    const result = await reqUser()
    if(result.code===0){
      const user = result.data
      commit(USE_DATA, user)
    }
  },
//后台删除的session用户id  前台也清除用户信息
  async deleUser({commit}){
    const result = await deleteUser()
    if(result.code===0){
      const user = {}
      commit(USE_DATA, user)
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
