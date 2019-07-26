<template>
  <!--<div>-->
  <!--<div class=".form_top"></div>-->
  <div class="login_page fillcontain">
    <div class="massge-top">
      <div class="LOGO">
        <img src="./images/123.jpg" alt="">
      </div>
      <div class="relation">
        <p class="textContent">微信公众平台</p>
      </div>
    </div>
    <div class="content">
      <p class="textContent">公众平台账号授权</p>
      <div class="leftBox">
        <div>
          <img src="./images/123.jpg" alt="">
        </div>
        <div class="textConten">
          <p>使用公众平台绑定的管理员个人微信号扫描</p>
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
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: brown;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .textContent{
      margin: 40px 0;
      font-size: 20px;
    }
  }
  .leftBox {
    width: 20%;
    height: 40%;
    background: white;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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


</style>
