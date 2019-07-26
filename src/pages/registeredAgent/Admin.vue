<template>
  <!--<div>-->
  <!--<div class=".form_top"></div>-->
  <div class="login_page fillcontain boxOverflow">
    <MassgeTop></MassgeTop>
    <div class="content">
      <div class="contentTop">
        <i class="el-icon-warning-outline contentIcon"></i>
        <p>这些信息将由我们帮您提交至微信进行认证</p>
      </div>
      <el-steps class="steps" :active="2" align-center >
        <el-step title="企业资料" description=""></el-step>
        <el-step title="管理员信息" description=""></el-step>
        <el-step title="企业基本资料" description=""></el-step>
        <el-step title="支付费用" description=""></el-step>
      </el-steps>
      <div class="leftBox">
        <div class="textContent">
          <p>企业业务资料</p>
        </div>

        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>Enterprise Name/</p>
              <p>企业全称</p>
            </div>
            <div class="namesComtent">
              <el-input v-model="enterpriseName" placeholder=" " ></el-input>
              <p class="namesComtentText">需与当地政府颁发的企业注册证或商业登记证书等企业证件上的企业名称保持完全一致，信息审核成功后，企业名称不可修改。</p>
            </div>
          </div>
        </div>
        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>ACN/</p>
              <p>企业注册账号</p>
            </div>
            <div class="namesComtent">
              <el-input v-model="acn" placeholder=" " ></el-input>
              <p class="namesComtentText">需与当地政府颁发的企业注册证或商业登记证书等企业证件上的企业名称保持完全一致，信息审核成功后，企业名称不可修改。</p>
            </div>
          </div>
        </div>
        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>Registered Address/</p>
              <p>企业注册地址</p>
            </div>
            <div class="namesComtent namesStyle">
              <el-input v-model="registeredAddress" placeholder=" " ></el-input>
            </div>
          </div>
        </div>
        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>Legal Representative/</p>
              <p>法定代表人/企业负责人姓名</p>
            </div>
            <div class="namesComtent">
              <el-input v-model="legalRepresentative" placeholder=" " ></el-input>
              <p class="namesComtentText">填写企业法定负责人或重要董事姓名</p>
            </div>
          </div>
        </div>

        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>Business Address/</p>
              <p>企业办公地址</p>
            </div>
            <div class="namesComtent">
              <el-input v-model="businessAddress" placeholder=" " ></el-input>
              <p class="namesComtentText">请输入合法证件的有效企业办公地址</p>
            </div>
          </div>
        </div>
        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>Office Phone//</p>
              <p>办公电话</p>
            </div>
            <div class="namesComtent">
              <el-input v-model="officePhone" placeholder=" " ></el-input>
              <p class="namesComtentText">包括区号，电话，分机号，以“-”隔开</p>
            </div>
          </div>
        </div>
        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>Scope of Business/</p>
              <p>经营范围</p>
            </div>
            <div class="namesComtent">
              <el-input v-model="scopeOfBusiness" placeholder=" " ></el-input>
              <p class="namesComtentText">请填写企业的经营范围</p>
            </div>
          </div>
        </div>
        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>Account Name/</p>
              <p>企业开户名称</p>
            </div>
            <div class="namesComtent">
              <el-input v-model="accountName" placeholder=" " ></el-input>
              <p class="accountName">需与企业在银行的开户名称保持完全一致，并用此银行账号支付认证费用。</p>
            </div>
          </div>
        </div>

        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>Corporate Bank/</p>
              <p>企业开户银行</p>
            </div>
            <div  class="namesComtent namesStyle">
              <el-input v-model="corporateBank" placeholder=" " ></el-input>
            </div>
          </div>
        </div>
        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>Corporate Bank Account/</p>
              <p>企业银行账号</p>
            </div>
            <div  class="namesComtent namesStyle">
              <el-input v-model="corporateBankAccount" placeholder=" " ></el-input>
            </div>
          </div>
        </div>

        <div class="nextBtn">
          <el-button class="btn" type="primary" @click="next">下一步</el-button>
        </div>
      </div>
    </div>
  </div>
  <!--</div>-->
</template>

<script>
  import MassgeTop from '../../components/MassgeTop/MassgeTop'
  import { reqLogin } from '@/api/index.js'; // 登录请求
  // import {mapActions, mapState} from 'vuex'

  export default {
    data(){
      return {
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
      }
    },
    components : {
      MassgeTop
    },
    methods: {
      next () {
        console.log('开始校验')
        if (!this.enterpriseName) { // 1 企业全称
          this.$message.error('1错了哦，这是一条错误消息');
          return
        }
        if (!this.acn) { // 2 企业注册账号
          this.$message.error('2错了哦，这是一条错误消息');
          return
        }
        if (!this.registeredAddress) { // 3 企业注册地址
          this.$message.error('3错了哦，这是一条错误消息');
          return
        }
        if (!this.legalRepresentative) { // 4 法定代表人/企业负责人姓名
          this.$message.error('4错了哦，这是一条错误消息');
          return
        }

        if (!this.businessAddress) { // 5 企业办公地址
          this.$message.error('5错了哦，这是一条错误消息');
          return
        }
        if (!this.officePhone) { // 6 办公电话
          this.$message.error('6错了哦，这是一条错误消息');
          return
        }
        if (!this.scopeOfBusiness) { // 7 经营范围
          this.$message.error('7错了哦，这是一条错误消息');
          return
        }
        if (!this.accountName) { // 8 企业开户名称
          this.$message.error('8错了哦，这是一条错误消息');
          return
        }

        if (!this.corporateBank) { // 9 企业开户银行
          this.$message.error('9错了哦，这是一条错误消息');
          return
        }
        if (!this.corporateBankAccount) { // 10 企业银行账号
          this.$message.error('10错了哦，这是一条错误消息');
          return
        }

        //定义请求参数
        const enterprise = {
          accountName: this.accountName,              //企业开户名称
          acn: this.acn,                       //企业注册号
          businessAddress:this.businessAddress,         //企业办公地址
          corporateBank: this.corporateBank,           //企业开户银行

          corporateBankAccount: this.corporateBankAccount,   //企业银行账号
          enterpriseName: this.enterpriseName,          //企业名称
          legalRepresentative: this.legalRepresentative,    //法定代表人/企业负责人姓名
          officePhone: this.officePhone,            //企业办公电话

          registeredAddress: this.registeredAddress,      //企业地址
          scopeOfBusiness: this.scopeOfBusiness,        //经营范围

          status: 0,                //0：待处理 1：成功 2：失败
        }
        // 校验成功保存到vuex中
        this.$store.commit('business',{enterprise})//保存用户信息
        this.$router.push('/admin')
      }
    },
    // mounted(){
    // },
    // computed: {
    // },
    // watch: {
    // }
  }
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';
  .boxOverflow{
    overflow: auto;
  }
  .login_page{
    background-color: #324057;
    .form_contianer{
      .wh(238px, 256px);
      .ctp(238px, 256px);
      padding: 25px;
      border-radius: 8px;
      text-align: center;
      background-color: #fff;
      .submit_btn{
        width: 100%;
        font-size: 16px;
      }
    }
  }
  .content {
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 100px ;
    background-color: brown;
    min-width: 1024px;
    .contentTop{
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #F2F2F2;
      display: flex;
      justify-content: flex-start;
      .contentIcon {
        margin: 18px 10px 0 25px;
      }
    }
    .textContent{
      padding:30px 0 30px 140px;
      font-size: 20px;
    }
    .steps{
      margin: 20px 0 5px 0;
    }
  }
  .leftBox {
    width: 95%;
    margin: auto;
    min-width: 1000px;
    background: #F7F7F7;
    border-radius: 6px;
    font-size: 14px;
    div > img{
      display: inline-block;
      width: 100px;
      height: 100px;
      background: #555555;
    }
    .textConten{
      text-align: center;
      margin-top: 5px;
    }
  }
  .massge-top {
    background-color: #FFFFFF;
    height: 80px;
    width: 100%;
    overflow: hidden;
    .LOGO {
      background-color: pink;
      width: 150px;
      height: 100%;
      overflow: hidden;
      display: inline-block;
      text-align: center;
      margin-left: 100px;
      & > img {
        width: 100px;
        height: 40px;
        display: inline-block;
        margin-top: 15px;
      }
    }
    .relation{
      background-color: pink;
      height: 100%;
      display: inline-block;
      overflow: hidden;
      line-height: 80px;
      font-size: 28px;
      & > :nth-child(1){
        float: left;
      }
      & > :nth-child(2){
        float: left;
        padding-left: 5px;
      }
    }
  }
  .rider_name{
    .names{
      display: flex;
      .namesLeft{
        box-sizing: border-box;
        padding-right: 50px;
        width: 395px;
        display: flex;
        flex-direction:column;
        align-items: flex-end;
        .arm{
          color: red;
        }
      }

      .namesComtent{
        width: 518px;
        min-width: 500px;
        margin-bottom: 30px;
        .namesComtentText{
          margin-top: 10px;
        }
      }
      /*底下没有文字的使用的样式*/
      .namesStyle{
        margin-bottom: 60px;
      }
    }
  }

</style>
<style>
  .nextBtn{
    text-align: center;
    margin-top: -20px;
    padding-bottom: 50px;
  }
  .nextBtn .btn{
    display: inline-block;
    margin: auto;
    width: 120px;
  }
</style>
