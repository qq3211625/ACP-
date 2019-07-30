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





//2获取食品分类列表
export const reqCategory = () => ajax(BASE + '/index_category');

// 3、根据经纬度获取商铺列表

export const reqshops = ({latitude, longitude}) => ajax(BASE + '/shops', {latitude, longitude});
                        // var {latitude, longitude} = {latitude:1,  longitude:2}
                        // var obj={latitude1:1,  longitude:2}

// 发送短信验证码 http://localhost:5000/sendcode?phone=13716962779
export const securitycode  = ({phone:phone}) => ajax(BASE + '/sendcode', {phone:phone});

//手机号验证码登陆  请求URL：http://localhost:5000/login_sms
export const phonelogin = ({phone, code}) => ajax(BASE + '/login_sms', {phone, code}, "POST")

// ### POST 请求URL：http://localhost:5000/login_pwd
export const passlogin = ({name, pwd, captcha}) => ajax(BASE + '/login_pwd', {name, pwd, captcha}, "POST")

//### 根据会话获取用户信息 http://localhost:5000/userinfo

export const reqUser = () => ajax(BASE + '/userinfo');//免登陆

//登出用户,删除cookie
export const deleteUser = () => ajax(BASE + '/logout');//免登陆

