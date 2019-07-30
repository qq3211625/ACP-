<template>
  <div class="login_page fillcontain">
    <MassgeTop></MassgeTop>
    <transition name="form-fade" mode="in-out" >
      <section class="form_contianer" >
        <div class="welcome">
          <p></p>
          <p>忘记密码</p>
          <p></p>
        </div>
        <el-form >
          <el-form-item prop="pwd" style="margin-bottom:18px; ">
            <el-input @blur.prevent="changePwds()" v-model="pwd" type="text" placeholder="请输入8-16位的密码" ></el-input>
          </el-form-item>
          <el-form-item prop="confirmPwd" style="margin-bottom: 18px">
            <el-input @blur.prevent="changePwd()" v-model="confirmPwd" type="text" placeholder="请确认密码" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :disabled="isShowNext" type="primary"  class="submit_btn" @click="toNext">下一步</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>
<script>
  import MassgeTop from '../../components/MassgeTop/MassgeTop'
  import { reqCode } from '@/api/index.js';
  import { retrievePassword } from '@/api/index.js';
  export default {
    name: "Enroll",
    data(){
      return {
        pwd:'',     //用户密码
        confirmPwd:'',//用户第二次密码
        isShowNext: true, //是否显示下一步按钮
      }
    },
    components : {
      MassgeTop
    },
    methods:{
      changePwd () {
        const regPwd=/^([0-9]|[a-zA-Z]){8,16}$/;
        if(this.pwd !== this.confirmPwd) {
          this.isShowNext = true
          console.log(this.pwd,this.confirmPwd)
          this.$message.error('两次输入的密码不一致');
          return
        }else if(!regPwd.test(this.confirmPwd)){
          this.$message.error('请输入8-16的密码');
          this.isShowNext = true
        }else if (!this.paw && !this.confirmPwd){
          this.$message.error('请输入密码');
          this.isShowNext = true
        }else{
          this.isShowNext = false;
        }
      },
      changePwds() {
        const regPwd=/^([0-9]|[a-zA-Z]){8,16}$/;
        if(!regPwd.test(this.pwd)){
          this.$message.error('请输入8-16的密码');
          this.isShowNext = true
        }else if(this.pwd !== this.confirmPwd){
          this.isShowNext = true
        }else if(this.pwd === this.confirmPwd){
          this.isShowNext = false
        }
      },
      async toNext () {
        //检验手机验证码请求
        const result = await retrievePassword({
          password : this.pwd,        //验证码
          phone : this.$route.query.id,       //手机号 在路由获取
        })
        console.log(result)
        if (result.code == 0){
          //跳转路由
          this.$router.push('/accomplish')
        }
      },
    },
  }
</script>


<style lang="less" scoped>
  @import '../../style/mixin.less';
  .login_page{
    background-color: #324057;
  }
  .form_contianer{
    .wh(258px, 200px);
    .ctp(258px, 200px);
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    .submit_btn{
      width: 100%;
      font-size: 16px;
    }
    .welcome{
      display: flex;
      font-size: 15px;
      justify-content: space-between;
      margin-bottom: 15px;
      & > :nth-child(1){
        width: 70px;
        border-bottom: 1px solid black;
        margin-bottom: 8px;
      }
      & > :nth-child(3){
        width: 70px;
        border-bottom: 1px solid black;
        margin-bottom: 8px;
      }
    }
  }
  .tip{
    font-size: 12px;
    color: #AEAEAE;
    & > a:nth-child(1){
      color: black;
      text-decoration: underline;
    }

  }
  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>
