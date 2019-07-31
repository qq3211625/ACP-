// 用户模块

const state = {
  phone: '',  //用户手机号
  pwd: '',
  email: '',      //用户邮箱
  firstName: '',  //用户名字
  lastName: '',   //用户姓
  invitationCode: '',  //邀请码

  // 储存用户代注册1信息
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
    status: '',                //0：待处理 1：成功 2：失败
  },
  // 储存用户代注册2信息
  enterpriseAdmin:{
    adminName: '',      //管理员名称
    adminPhone: '',     //管理员手机号
    adminNumber: '',    //证件号
    frontImage: '',     //身份证正面照,
    backImage: '',      //身份证背面照
  },
  // 储存用户代注册3信息
  enterpriseInfo:{
    enterpriseImage: '',//《企业注册证》或《商业许可证书》,
    evidenceImage: '',  //其他证明材料 多张照片用,隔开
  }
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
  },

  //代注册2
  admin (state,{enterpriseAdmin}) {
    //保存用户代理注册的数据
    state.enterpriseAdmin.adminName=enterpriseAdmin.adminName;                  //管理员名称
    state.enterpriseAdmin.adminPhone=enterpriseAdmin.adminPhone;                  //管理员手机号
    state.enterpriseAdmin.adminNumber=enterpriseAdmin.adminNumber;               //证件号
    state.enterpriseAdmin.frontImage=enterpriseAdmin.frontImage;                  //身份证正面照
    state.enterpriseAdmin.backImage=enterpriseAdmin.backImage;                 //身份证背面照
  },
  //代注册3
  basics (state,{enterpriseInfo}) {
    //保存用户代理注册的数据
    state.enterpriseInfo.enterpriseImage=enterpriseInfo.enterpriseImage;           //《企业注册证》或《商业许可证书》
    state.enterpriseInfo.evidenceImage=enterpriseInfo.evidenceImage;               //其他证明材料 多张照片用,隔开
  },
}

const actions = {

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
