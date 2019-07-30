<template>
  <!--<div>-->
  <!--<div class=".form_top"></div>-->
  <div class="login_page fillcontain boxOverflow">
    <MassgeTop></MassgeTop>
    <div class="content">
      <div class="contentTop">
        <!--<i class="el-icon-warning-outline contentIcon"></i>-->
        <!--<p>这些信息将由我们帮您提交至微信进行认证</p>-->
      </div>
      <el-steps class="steps" :active="4" align-center >
        <el-step title="企业资料" description=""></el-step>
        <el-step title="管理员信息" description=""></el-step>
        <el-step title="企业基本资料" description=""></el-step>
        <el-step title="支付费用" description=""></el-step>
      </el-steps>
      <div class="leftBox">
        <div class="textContent">
          <p>支付信息</p>
        </div>
        <div class="bankTop">
          <div>
            <p>请用以下对公账户打款99.00美元, 转账时</p>
            <p>请查看<span class="textColor">银行卡注意事项</span></p>
          </div>
          <div class="bankText">
            <p>微信团队对公账号信息</p>
          </div>
        </div>
        <div class="bank">
          <div class="leftMessage">
            <div class="names">
              <div class="namesLeft">
                <p class="inputLabel"><i class="arm"></i>管理员姓名</p>
                <p class="inputLabel"><i class="arm"></i>开户银行</p>
                <p class="inputLabel"><i class="arm"></i>开户人</p>
                <p class="inputLabel"><i class="arm"></i>金额</p>
              </div>
              <div class="namesComtent">
                <p class="namesComtentText">123123412341234</p>
                <p class="namesComtentText">asdasda</p>
                <p class="namesComtentText">asdasdasd</p>
                <p class="namesComtentText">99.00美元</p>
              </div>
            </div>
          </div>
          <div class="contentImg">
            <img src="" alt="">
          </div>
          <div class="rightMessage">
            <div class="bank_name">
              <div class="names">
                <div class="namesLeft">
                  <p class="inputLabel"><i class="arm"></i>管理员姓名</p>
                </div>
                <div class="namesComtent">
                  <p class="namesComtentText">755901658232501 复制</p>
                  <p class="namesComtentText textColor">(打款时请将该15位数字作为收款账号.请勿向其他收款账号打</p>
                  <p class="namesComtentText textColor">款.诺有多个海外账号申请微信认证,需分开多笔汇款99.00美</p>
                  <p class="namesComtentText textColor">元.)</p>
                </div>
              </div>
            </div>

            <div class="bank_name">
              <div class="names">
                <div class="namesLeft">
                  <p class="inputLabel"><i class="arm"></i>公司名称</p>
                  <p class="inputLabel"><i class="arm"></i>Account Name</p>
                </div>
                <div class="namesComtent">
                  <p class="namesComtentText">深圳市腾讯计算机系统有限公司</p>
                  <p class="namesComtentText">ShenZhen Tencent Computer Systems Ltd.</p>
                  <p class="namesComtentText textColor">诺由于字符太长无法填写完成的我司户名, 可在地址栏里补全剩下的</p>
                  <p class="namesComtentText textColor">部分再写地址 (若地址栏里有add缩写要删去) ; 也可以选择在备注/</p>
                  <p class="namesComtentText textColor">附言里填写完整户名信息</p>
                </div>
              </div>
            </div>

            <div class="bank_name">
              <div class="names">
                <div class="namesLeft">
                  <p class="inputLabel"><i class="arm"></i>开户银行</p>
                  <p class="inputLabel"><i class="arm"></i>Beneficiary's</p>
                  <p class="inputLabel"><i class="arm"></i>Bank</p>
                </div>
                <div class="namesComtent">
                  <p class="namesComtentText">招商银行深圳威盛大厦支行</p>
                  <p class="namesComtentText">China Merchants Bank,H.O.Shenzhen</p>
                </div>
              </div>
            </div>

            <div class="bank_name">
              <div class="names">
                <div class="namesLeft">
                  <p class="inputLabel"><i class="arm"></i>SWIFT CODE</p>
                </div>
                <div class="namesComtent">
                  <p class="namesComtentText">CMBCCNBSXXX</p>
                </div>
              </div>
            </div>

            <div class="bank_name">
              <div class="names">
                <div class="namesLeft">
                  <p class="inputLabel"><i class="arm"></i>备注信息</p>
                </div>
                <div class="namesComtent">
                  <p class="namesComtentText">gh_175cd1a0a6c1</p>
                  <p class="namesComtentText textColor">请填写申请认证的账号的原始ID (如银行无法输入备注信息, 可省</p>
                  <p class="namesComtentText textColor">略不填写)</p>
                </div>
              </div>
            </div>

            <div class="bank_name">
              <div class="names">
                <div class="namesLeft">
                  <p class="inputLabel"><i class="arm"></i>汇款性质</p>
                </div>
                <div class="namesComtent">
                  <p class="namesComtentText">service trade/bill payment/verification fee/trade in service/service</p>
                  <p class="namesComtentText">fee (选其一即可)</p>
                </div>
              </div>
            </div>

            <div class="bank_name">
              <div class="names">
                <div class="namesLeft">
                  <p class="inputLabel"><i class="arm"></i>联系客服</p>
                </div>
                <div class="namesComtent">
                  <p class="namesComtentText">腾讯公司, 0086-0755-83765566 (注: 打款时若需要联系人和联系</p>
                  <p class="namesComtentText">电话,可填写以上信息)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>转款证明单</p>
            </div>
            <div class="namesComtent">
              <span class="imgup">
                <div class="delImg">
                    <i class="el-icon-delete delI" @click="clickDelImg1"></i>
                </div>
                <img ref="inputeraa" :src="transferImage" height="300" alt="">transferImage
              </span>
              <input type="file" name="avata1r" id="avatar1" @change="fileImage1" accept=".jpg .jpeg .gif .png">
              <p class="namesComtentText">需要提供转款证明单以及转款时间<br>格式要求：支出.jpg .jpeg . gif .png格式照片，大小不超过5M。</p>
            </div>
          </div>
        </div>
        <div class="textContent">
          <p>发票信息</p>
        </div>
        <div class="accountName">
          <form action="" method="">
            <div class="invoice">
              <p><i class="arm">*</i>发票类型</p>
              <div>
                <!--<input name="Fruit" type="radio"  value="no" /> 不开发票-->
                <!--<input  name="Fruit" type="radio"  value="yes" /> 增值税普票-->
                <el-radio style="margin-left: 40px" v-model="radio" label="0">不开发票</el-radio>
                <el-radio style="margin-left: 120px" v-model="radio" label="1">增值税普票</el-radio>
              </div>
            </div>

            <div v-show="radio == '1'">
              <div class="invoice invoiceIpunt">
                <p><i class="arm">*</i>邮寄地址</p>
                <div class="inputBox"><el-input style="width: 500px" v-model="mailAddress" placeholder=""  maxlength='50'></el-input></div>
              </div>
              <div class="invoice invoiceIpunt">
                <p><i class="arm">*</i>详细地址</p>
                <div class="inputBox"><el-input style="width: 500px" v-model="detailsAddress" placeholder="" maxlength='50'></el-input></div>
              </div>

              <div class="invoice invoiceIpunt">
                <p><i class="arm">*</i>邮政编码</p>
                <div class="inputBox"><el-input style="width: 500px" v-model="postalCode" placeholder="" maxlength='50'></el-input></div>
              </div>
              <div class="invoice invoiceIpunt">
                <div><p class="linkman"><i class="arm">*</i>联系人</p></div>
                <div class="inputBox"><el-input style="width: 500px" v-model="contacts" placeholder="" maxlength='50'></el-input></div>
              </div>
              <div class="invoice invoiceIpunt">
                <p><i class="arm">*</i>联系电话</p>
                <div class="inputBox"><el-input style="width: 500px" v-model="telephone" placeholder="" maxlength='50'></el-input></div>
              </div>
            </div>

          </form>
        </div>
        <div class="nextBtn">
          <el-button class="btn"  @click="$router.go(-1) ">上一步</el-button>
          <el-button class="btn" type="primary" @click="next">下一步</el-button>
        </div>
      </div>
    </div>
  </div>
  <!--</div>-->
</template>

<script>
  import MassgeTop from '../../components/MassgeTop/MassgeTop'
  import { enterpriseVo } from '@/api/index.js'; //代注册请求接口
  import { uploadAvatar } from '@/api/index.js'; //图片上传
  import { mapState } from 'vuex';        //获取用户数据
  // import {mapActions, mapState} from 'vuex'

  export default {
    data(){
      return {
        type: '',           //发票类型 0：不开发票 1：增值税普票
        radio: '0',         //点选按钮(默认不开发票)
        contacts: '',       //联系人
        detailsAddress: '', //详情地址
        mailAddress: '',       //邮寄地址
        postalCode: '',       //邮政编码
        telephone: '',        //联系人电话
        transferImage: '',    //转款图片
      }
    },
    components : {
      MassgeTop
    },
    methods: {

      async fileImage1 (e) {      // 点击上传图片chenge事件
        // console.log(e)
        // 获取得到file 对象
        let file = e.target.files[0];
        let fileArr =e.target.files;
        // 限制上传图片的大小
        if(file.size > 1024 * 1024 * 5) {
          alert('图片大小不能超过 5MB!');
          return false;
        }
        //检查图片类型
        for (let i = 0; i < fileArr.length; i++) {
          let typeimg = fileArr[i].name.toLowerCase().split('.')[fileArr[i].name.toLowerCase().split('.').length - 1]
          console.log(typeimg)
          if (typeimg!= "png" &&  typeimg != "jpg" && typeimg != "jpeg" && typeimg != "gif") {
            this.$message.error('Please upload .jpg or .png .jpeg format photos.');
            return
          }
        }
        //上传图片
        let param = new FormData();
        // console.log(param)
        param.append("file", file);

        // console.log('param', param)
        const reqConfig = {
          headers: { "Content-Type": "multipart/form-data" }
        }

        const result =await uploadAvatar( param , reqConfig)
        if(result.code == 0){
          this.transferImage = result.data
        }else{
          this.transferImage = ''
        }

      },
      async next () {

        console.log('开始校验')
        if(!this.transferImage){
          this.$message.error('请上传图片');
          return
        }
        if(!this.mailAddress){       //邮寄地址
          this.$message.error('1错了哦，请输入邮寄地址');
          return
        }
        //
        if (!this.detailsAddress) { // 详情地址
          this.$message.error('2错了哦，请输入正确详情地址');
          return
        }
        //
        if (!this.postalCode) { // 邮政编码
          this.$message.error('3错了哦，请输入正确的邮政编码');
          return
        }
        if (!this.contacts) { // 联系人
          this.$message.error('4错了哦，联系人 ');
          return
        }
        if (!this.telephone) { // 联系人电话
          this.$message.error('6错了哦，请输入正确联系人电话');
          return
        }
        console.log('通过校验')
        if(this.radio == '0'){
          this.type = 0
          this.contacts = '';       //联系人
          this.detailsAddress = ''; //详情地址
          this.mailAddress = '';       //邮寄地址
          this.postalCode = '';       //邮政编码
          this.telephone = '';        //联系人电话
          this.transferImage = '';   //转款图片
        }else {
          this.type = 1
        }

        const enterprisePay = {
          type: this.type,                        //发票类型 0：不开发票 1：增值税普票
          contacts: this.contacts,               //联系人
          detailsAddress: this.detailsAddress,  //详情地址

          mailAddress: this.mailAddress,         //邮寄地址,
          postalCode: this.postalCode,           //邮政编码

          telephone: this.telephone,             //联系人电话
          transferImage: this.transferImage,    //转款图片
        }
        const enterprise = this.enterprise
        const enterpriseAdmin = this.enterpriseAdmin
        const enterpriseInfo = this.enterpriseInfo
        const phone = this.phone;   //这个是注册成功的手机号
        // const phone = 13411343200;  //测试使用的已注册账号
        // 拿去vuex中的用户数据
        //发送请求
        const result =await enterpriseVo({enterprisePay, enterprise, enterpriseAdmin, enterpriseInfo, phone})
        console.log(result)
        if(result.code == 0){
          // this.$router.push('/')  //跳转提交成功页面
        }else {
          this.$message.error(result.message);
        }

      },
      clickDelImg1(){
        this.transferImage = '';          // 上传的地址清空
        this.$refs.inputeraa.src = ''; //删除显示的图片
      },
    },
    // mounted(){
    // },
    computed: {
      ...mapState({
        enterprise: state => state.user.enterprise,// 储存用户代注册1信息
        enterpriseAdmin: state => state.user.enterpriseAdmin,// 储存用户代注册2信息
        enterpriseInfo: state => state.user.enterpriseInfo,// 储存用户代注册3信息
        phone: state => state.user.phone,// 用户注册手机号码
      }),
    },
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
      height: 0px;
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
      background-color: #F7F7F7;
      border-radius: 15px;
    }
    .steps{
      margin: 40px 0 30px 0;
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
    .bankTop{
      margin: auto;
      width: 950px;
      height: 80px;
      background-color: #FFFFFF;
      display: flex;
      & > div {
        padding-top: 10px;
        margin-left: 10px;
      }
      .bankText{
        margin-left: 50px;
      }
    }
    .bank{
      display: flex;
      margin: auto;
      width: 950px;
      background-color: #FFFFFF;
      .leftMessage{
        box-sizing: border-box;
        width: 250px;
        height: 300px;
        background-color: #F7F8FA;
        margin-left: 10px;
        .names{
          display: flex;
          width: 250px;
          .namesLeft{
            box-sizing: border-box;
            margin: 0 0 0 20px;
            width: 90px;
            .inputLabel{
              margin: 8px 0 25px 0;
            }
          }

          .namesComtent{
            .namesComtentText{
              margin: 8px 0 25px 0;
              white-space:nowrap;
            }
          }
          /*底下没有文字的使用的样式*/
          .namesStyle{
            margin-bottom: 60px;
          }
        }
      }
      .contentImg{
        width: 50px;
        & > img{
          margin-top: 100px;
        }
      }
      .rightMessage{
        width: 630px;
        margin-right: 20px;
        padding-left: 20px;
        background-color: #F7F8FA;
        margin-bottom: 30px;
      }
      .bank_name{
        width: 100%;
        .names{
          display: flex;
          .namesLeft{
            box-sizing: border-box;
            padding: 0px 20px 0 0;
            width: 130px;
            .inputLabel{
              margin-top: 8px;
            }
          }

          .namesComtent{
            margin-bottom: 30px;
            .namesComtentText{
              margin-top: 10px;
              white-space:nowrap;
            }
          }
          /*底下没有文字的使用的样式*/
          .namesStyle{
            margin-bottom: 60px;
          }
        }
      }
    }
    .rider_name{
      .names{
        margin-top: 40px;
        display: flex;
        .namesLeft{

          box-sizing: border-box;
          padding: 8px 50px 0 0;
          width: 364px;
          display: flex;
          flex-direction:column;
          align-items: flex-end;
        }

        .namesComtent{
          width: 518px;
          min-width: 500px;
          margin-bottom: 30px;
          position: relative;
          .namesComtentText{
            margin-top: 10px;
            white-space:nowrap;
          }
        }
        /*底下没有文字的使用的样式*/
        .namesStyle{
          margin-bottom: 60px;
        }
      }
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

  .delImg{
    /* width: 130px;
    height: 130px; */
    position: absolute;
    background: rgba(78, 78, 78, 0.3) ;
    z-index: 100;
    display: none;
    left: 0
  }
  .imgup:hover .delImg{
    display: block;
  }

  .imgup .delI{
    cursor: pointer;
    font-size: 25px;
    float: right;
  }
  .textColor{
    color: red;
  }
  .arm{
    color: red;
  }
  .invoice{
    display: flex;
    line-height: 40px;
    .linkman{
      padding-left: 14px;
    }
  }
  .invoiceIpunt{
    margin-top: 20px;
    .inputBox{
      margin-left: 40px;
    }
  }
  .accountName{
    padding-left: 250px;
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
    margin-top: 60px;
    width: 120px;
  }
</style>
