<template>
  <!--<div>-->
  <!--<div class=".form_top"></div>-->
  <div class="login_page fillcontain">
    <MassgeTop></MassgeTop>
    <div class="content">
      <div class="leftBox">
        <div>
          <img src="./images/123.jpg" alt="">
        </div>
        <div>
          <a href="https://mp.weixin.qq.com/">
            <el-button class="buttoms" type="primary" size="medium">微信认证小程序</el-button>
          </a>
        </div>
        <div class="textConten">
          <p>前往微信公众号注册小程序</p>
        </div>
      </div>
      <div class="rightBox">
        <div>
          <img src="./images/123.jpg" alt="">
        </div>
        <div>
          <el-button class="buttoms" @click="$router.push('/business')"  size="medium">代注册小程序</el-button>
        </div>
        <div >
          <p>1, 填写审核资料</p>
          <p>2, 支付审核费用(微信收取)</p>
          <p>3, 等待*个工作日左右</p>
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
      }
    },
    components : {
      MassgeTop
    },
    methods: {
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
  .login_page{
    background-color: #324057;
    .form_contianer{
      .wh(238px, 256px);
      .ctp(238px, 256px);
      padding: 25px;
      border-radius: 5px;
      text-align: center;
      background-color: #fff;
      .submit_btn{
        width: 100%;
        font-size: 16px;
      }
    }
  }
  .content {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: brown;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .leftBox {
    width: 40%;
    height: 70%;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    div > img{
      display: inline-block;
      width: 100px;
      height: 100px;
      background: #555555;
     }
    .textConten{
      text-align: center;
    }
    .buttoms{
      margin: 30px 0;
      width: 250px;
      height: 50px;
      font-size: 18px;
    }
   }
  .rightBox {
    width: 40%;
    height: 70%;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    div > img{
      display: inline-block;
      width: 100px;
      height: 100px;
      background: #555555;
    }
    .textConten{
      text-align: center;
    }
    .buttoms{
      margin: 20px 0;
      width: 250px;
      height: 50px;
      font-size: 18px;
      color: #66B1FF;
      border-color: #3190e8;
    }
  }


</style>
