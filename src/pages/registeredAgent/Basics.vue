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
      <el-steps class="steps" :active="3" align-center >
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
              <p class="inputLabel"><i class="arm">* </i>管理员身份证件(正面)</p>
            </div>
            <div class="namesComtent">
              <span class="imgup">
                <div class="delImg">
                    <i class="el-icon-delete delI" @click="clickDelImg1"></i>
                </div>
                <img ref="inputeraa" :src="enterpriseImage" height="300" alt="">
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
                <img ref="inputerbb" :src="evidenceImage" height="300" alt="">
                <!--<label for="avatar2" class="avatarbox2"></label>-->
                <!--<img :src="defaultimg0" alt="" :onerror="custs" v-show="!loadingImgs[1]">-->
                <!--<span class="el-icon-loading loading" v-show="loadingImgs[1]"></span>-->
              </span>
              <input type="file" name="avata2r" id="avatar2"  @change="fileImage2"  accept=".jpg .jpeg .gif .png">
              <p class="accountName">上传联系人身份证反面或者护照，驾照含联系人姓名的页面照片或者扫<br>描件<br>格式要求：支出.jpg .jpeg . gif .png格式照片，大小不超过5M。</p>
            </div>
          </div>
        </div>

        <div class="nextBtn basics">
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
        enterpriseImage: '', //《企业注册证》或《商业许可证书》
        evidenceImage: '', //其他证明材料 多张照片用,隔开
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
          this.enterpriseImage = result.data
        }else{
          this.enterpriseImage = ''
        }


        //这里使用的本地的图片
        // var imgUrl = window.URL.createObjectURL(file)  //获取上传图片本地url
        // this.$refs.inputeraa.src = imgUrl;

        // 更改img url 以后释放 url
        // this.$refs.inputeraa.onload = function() {  //图片加载完成触发回调
        // console.log('图片加载成功')
        // URL.revokeObjectURL(imgUrl)
        // }
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
          this.evidenceImage = result.data
        }else{
          this.evidenceImage = ''
        }
      },
      next () {
        //开始校验
        console.log(this.enterpriseImage)
        if (!this.enterpriseImage) { // 身份证正面照
          this.$message.error('1错了哦，请上传身份证正面照');
          return
        }
        console.log(this.evidenceImage)

        if (!this.evidenceImage) { // 身份证背面照
          this.$message.error('2错了哦，请上传身份证背面照');
          return
        }
        console.log('通过校验')
        //保存到vuex中
        const enterpriseInfo = {
          enterpriseImage: this.enterpriseImage,//《企业注册证》或《商业许可证书》
          evidenceImage: this.evidenceImage,    //其他证明材料 多张照片用,隔开
        }

        this.$store.commit('basics',{enterpriseInfo})//保存用户信息
        this.$router.push('/defrayment')  //跳转路由

      },
      clickDelImg1(){
        this.enterpriseImage = '';          // 上传的地址清空
        this.$refs.inputeraa.src = ''; //删除显示的图片
      },
      clickDelImg2(){
        this.evidenceImage = '';          // 上传的地址清空
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
    margin-bottom: 30px;
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
  .basics{
    text-align: center;
    padding: 30px 0 120px;
  }
  .nextBtn .btn{
    display: inline-block;
    margin-top: 60px;
    width: 120px;
  }
</style>
