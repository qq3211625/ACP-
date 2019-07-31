//定义 请求的  函数数据体
/*
包含n个接口请求函数的模块
调用ajax函数发请求
函数的返回值是promise
 */
import ajax from './ajax'
import {ajax1} from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = 'http://192.168.50.100:8301/api'

// POST 登录请求
export const reqLogin = ({password, phone}) => ajax(BASE + `/agent/login` ,{password, phone}, "POST");

// GET 短信管理验证码
export const reqCode = ({phone, type}) => ajax(BASE + `/sms/sendSms` ,{phone, type});

// POST 注册检验手机验证码
export const verifyCode = ({code, phone, type}) => ajax(BASE + `/agent/checkPhone` ,{code, phone, type},"POST");

// 检验注册信息
export const checkAgentVo = ({email, firstName, invitationCode, lastName}) => ajax(BASE + `/agent/checkAgent` ,{email, firstName, invitationCode, lastName},"POST");


// POST用户注册
// http://192.168.50.100:8301/api/agent/register
export const reqRegister = ({cardCvv, cardName, cardNumber, email,expMonth,expYear,firstName,invitationCode,lastName,password,phone}) => ajax(BASE + `/agent/register` ,{cardCvv, cardName, cardNumber, email,expMonth,expYear,firstName,invitationCode,lastName,password,phone},"POST");

// /api/agent/uploadAvatar  上传图片
export const uploadAvatar = (file , reqConfig) => ajax(BASE + `/agent/uploadAvatar` ,file ,"POST", reqConfig);

// /api/enterprise/insertEnterprise  代注册
export const enterpriseVo = ({enterprise, enterpriseAdmin, enterpriseInfo, enterprisePay, phone}) => ajax1(BASE + `/enterprise/insertEnterprise` ,{enterprise, enterpriseAdmin, enterpriseInfo, enterprisePay, phone},"POST");

//api/agent/retrievePassword找回密码
export const retrievePassword = ({password, phone}) => ajax(BASE + `/agent/retrievePassword` ,{password, phone},"POST");







