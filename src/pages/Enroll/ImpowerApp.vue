<template>
  <!--<div>-->
  <!--<div class=".form_top"></div>-->
  <div class="login_page fillcontain">
    <MassgeTop></MassgeTop>
    <div class="content">
      <div class="leftBox">
        <div>
          <img src="./images/2.png" alt="">
        </div>
        <div>
          <el-button class="buttoms" @click="$router.push('/applyID')" type="primary" size="medium">已有小程序,立即绑定</el-button>
        </div>
        <div class="textConten">
          <p>为保证所有功能正常使用,</p>
          <p>授权时请把所有权限统一授权给平台</p>
        </div>
      </div>
      <div class="rightBox">
        <div>
          <img src="./images/1.png" alt="">
        </div>
        <div>
          <el-button class="buttoms" @click="$router.push('/applyApp')" size="medium">没有小程序,立即申请</el-button>
        </div>
        <div class="textConten">
          <p>为保证所有功能正常使用,</p>
          <p>授权时请把所有权限统一授权给平台</p>
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
      /*width: 100px;*/
      /*height: 100px;*/
      /*background: #555555;*/
     }
    .textConten{
      text-align: center;
    }
    .buttoms{
      margin: 20px 0;
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
      /*width: 100px;*/
      /*height: 100px;*/
      /*background: #555555;*/
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
