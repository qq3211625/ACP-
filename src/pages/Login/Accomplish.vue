<template>
  <!--<div>-->
  <div class="login_page ">
    <MassgeTop></MassgeTop>
    <div class="content">
      <div class="submit">
        <p>修改成功，自动跳转登录页( {{time}}s )</p>
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
        time: 5
      }
    },
    components : {
      MassgeTop
    },
    methods: {

    },
    mounted(){
      const then = this
      this.timer = setInterval(function () {
        console.log(then.time)
        then.time--;
        if(then.time == 0){
          // 删除循环定时器
          clearInterval(then.timer)
          then.$router.push('/login')  //跳转路由
        }
      },1000)
    },
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
      font-size: 14px;
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
