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
      <el-steps class="steps" :active="2" align-center >
        <el-step title="企业资料" description=""></el-step>
        <el-step title="管理员信息" description=""></el-step>
        <el-step title="企业基本资料" description=""></el-step>
        <el-step title="支付费用" description=""></el-step>
      </el-steps>
      <div class="leftBox">
        <div class="textContent">
          <p>管理员信息</p>
        </div>

        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>管理员姓名</p>
            </div>
            <div class="namesComtent">
              <el-input v-model="adminName" placeholder=" " ></el-input>
              <p class="namesComtentText">请填写该小程序的姓名，与申请公函上的管理员一致，认证审核过程将与该管理员联系。</p>
            </div>
          </div>
        </div>
        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>管理员手机号码</p>
            </div>
            <div class="namesComtent">
              <el-input @blur.prevent="changeCount(adminPhone)" style="min-width: 380px; width: 380px" v-model="adminPhone" placeholder=" " ></el-input>
              <el-button style="min-width: 120px; margin-left: 10px" class="btn" type="primary" @click="clickCode" :disabled="isShowCode">获取验证码</el-button>
              <p class="namesComtentText">请填写管理员的手机号码，认证审核过程将与该管理员联系，验证码有效期10分钟。</p>
            </div>
          </div>
        </div>
        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>短信验证码</p>
            </div>
            <div class="namesComtent namesStyle">
              <el-input v-model="code" placeholder=" " ></el-input>
            </div>
          </div>
        </div>
        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>管理员证件号码</p>
            </div>
            <div class="namesComtent">
              <el-input style="min-width: 340px; width: 340px" v-model="adminNumber" placeholder=" " ></el-input>
              <p class="namesComtentText">护照或者驾驶证的证件号码</p>
            </div>
          </div>
        </div>

        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>管理员身份证件(正面)</p>
            </div>
            <div class="namesComtent">
              <span class="imgup">
                <div class="delImg">
                    <i class="el-icon-delete delI" @click="clickDelImg1"></i>
                </div>
                <img ref="inputeraa" :src="frontImage" height="300" alt="">
              </span>
              <input type="file" name="avata1r" id="avatar1" @change="fileImage1" accept=".jpg .jpeg .gif .png">
              <p class="namesComtentText">上传联系人身份证正面或者护照，驾照含联系人姓名的页面照片或者扫<br>描件<br>格式要求：支出.jpg .jpeg . gif .png格式照片，大小不超过5M。</p>
            </div>
          </div>
        </div>

        <div class="rider_name">
          <div class="names">
            <div class="namesLeft">
              <p class="inputLabel"><i class="arm">* </i>管理员身份证件(反面)</p>
            </div>
            <div class="namesComtent">
              <span class="imgup" >
                <div class="delImg">
                    <i class="el-icon-delete delI" @click="clickDelImg2"></i>
                </div>
                <img ref="inputerbb" :src="backImage" height="300" alt="">
                  <!--<label for="avatar2" class="avatarbox2"></label>-->
                  <!--<img :src="defaultimg0" alt="" :onerror="custs" v-show="!loadingImgs[1]">-->
                  <!--<span class="el-icon-loading loading" v-show="loadingImgs[1]"></span>-->
              </span>
              <input type="file" name="avata2r" id="avatar2"  @change="fileImage2"  accept=".jpg .jpeg .gif .png">
              <p class="accountName">上传联系人身份证反面或者护照，驾照含联系人姓名的页面照片或者扫<br>描件<br>格式要求：支出.jpg .jpeg . gif .png格式照片，大小不超过5M。</p>
            </div>
          </div>
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
  import { reqCode } from '@/api/index.js';
  import { uploadAvatar } from '@/api/index.js'; //
  // import {mapActions, mapState} from 'vuex'

  export default {
    data(){
      return {
        adminName: '', //管理员名称
        adminNumber: '', //证件号
        adminPhone: '', //管理员手机号

        code: '',        //验证码
        isShowCode: true, //是否显示验证按钮

        backImage: '',  //身份证背面照
        frontImage: '',  //身份证正面照
        resultCode: '',   //后台返回的验证码
      }
    },
    components : {
      MassgeTop
    },
    methods: {
      changeCount () { //验证管理员手机号码(澳洲)
        if(this.adminPhone.slice(0,2)=='04'&&this.adminPhone.length==10){
          this.isShowCode= false //显示验证按钮
        }else if(this.adminPhone.slice(0,1)=='4'&&this.adminPhone.length==9){
          this.isShowCode= false //显示验证按钮
        }else if(!this.adminPhone){
          this.$message.error('Incomplete Information');
          this.isShowCode= true  //不显示验证按钮
          return
        }else{
          this.$message.error('Contact Number Incorrect Input Format');
          this.isShowCode= true  //不显示验证按钮
          return
        }

        // var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        // if (!reg.test(this.adminPhone)){   //管理员手机号
        //   this.$message.error('2错了哦，请输入正确的手机号');
        //   this.isShowCode= true  //是否显示验证按钮
        //   return
        // }
        // this.isShowCode= false //是否显示验证按钮
      },

      async clickCode () {   //请求手机验证码
        const phone = this.adminPhone
        const result =await reqCode({ //请求接口
          phone,
          type: 3  //代注册小程序
        });
        console.log(result)
        if(result.code == 0){
          this.isShowCode = true //是否显示验证按钮
          this.resultCode = result.data
          this.$message({
            message: '获取成功',type: 'success'
          });
        }else{
          this.$message.error(result.message);
        }
      },
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
          this.frontImage = result.data
        }else{
          this.frontImage = ''
        }

      },
      async fileImage2 (e) {
          // 点击上传图片chenge事件  获取得到file 对象
          let file = e.target.files[0];
          let fileArr =e.target.files;
          // 限制上传图片的大小
          if(file.size > 1024 * 1024 * 5) {
            this.$message.error('图片大小不能超过 5MB!');
            return false;
          }

        console.log(fileArr.length)

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
            this.backImage = result.data
          }else{
            this.backImage = ''
          }

      },
      next () {

        console.log('开始校验')
        if(!this.adminName){       //管理员名称
          this.$message.error('1错了哦，请输入管理员名称');
          return
        }
        //
        if (!(this.code == this.resultCode) || !this.code) { // 验证码
          this.$message.error('3错了哦，请输入正确的验证码');
          return
        }
        //
        if (!this.adminNumber) { // 证件号
          this.$message.error('4错了哦，请输入正确的证件号');
          return
        }
        console.log(this.frontImage)
        if (!this.frontImage) { // 身份证正面照
          this.$message.error('5错了哦，请上传身份证正面照');
          return
        }
        if (!this.backImage) { // 身份证背面照
          this.$message.error('6错了哦，请上传身份证背面照');
          return
        }
        console.log('通过校验')
        //将用户信息储存到vuex中
        // 校验成功保存到vuex中
        const enterpriseAdmin = {
          adminName: this.adminName, //管理员名称
          adminPhone: this.adminPhone,//管理员手机号
          adminNumber: this.adminNumber, //证件号
          frontImage: this.frontImage,//身份证正面照,
          backImage: this.backImage,  //身份证背面照
        }
        this.$store.commit('admin',{enterpriseAdmin})//保存用户信息
        this.$router.push('/basics')  //跳转路由

      },
      clickDelImg1(){
        this.frontImage = '';          // 上传的地址清空
        this.$refs.inputeraa.src = ''; //删除显示的图片
      },
      clickDelImg2(){
        this.backImage = '';          // 上传的地址清空
        this.$refs.inputerbb.src = ''; //删除显示的图片
      },
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
        padding: 8px 50px 0 0;
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
