<template>
  <!--<div>-->
  <div class="login_page ">
    <MassgeTop></MassgeTop>
    <div class="content" @click="next">
      <div class="submit">
        <p>提交成功,我们认证成功后我们将会</p>
        <p>以短信形式通知您</p>
      </div>
    </div>
  </div>
  <!--</div>-->
</template>

<script>
  import MassgeTop from '../../components/MassgeTop/MassgeTop'

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
      next () {
        const then = this
        setTimeout(function (){
          then.$router.push('/login')  //跳转路由
        },2000)
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
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
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
    margin: auto;
    background-color: #F2F2F2;
    .submit {
      font-size: 12px;
      position: absolute;
      width: 320px;
      height: 100px;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
