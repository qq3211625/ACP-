<template>
  <div class="login_page fillcontain">
    <MassgeTop></MassgeTop>
    <transition name="form-fade" mode="in-out" >
      <section class="form_contianer" >
        <div class="welcome">
          <p></p>
          <p>支付费用</p>
          <p></p>
        </div>
        <el-form >
          <el-form-item prop="FirstName" style="margin-bottom: 18px">
            <el-input v-model="firstName" placeholder="First Name"><span></span></el-input>
          </el-form-item>
          <el-form-item prop="LastName" style="margin-bottom: 18px">
            <el-input v-model="lastName" type="text" placeholder="Last Name" ></el-input>
          </el-form-item>
          <el-form-item prop="Email" style="margin-bottom: 18px">
            <el-input v-model="email" type="text" placeholder="Email" ></el-input>
          </el-form-item>
          <el-form-item prop="InvitationCode" style="margin-bottom: 18px">
            <el-input v-model="invitationCode" type="text" placeholder="Invitation Code (Optional)" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="next" class="submit_btn">下一步</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
  import { checkAgentVo } from '@/api/index.js';
  import MassgeTop from '../../components/MassgeTop/MassgeTop'
  export default {
    name: "Enroll",
    data(){
      return {
        firstName:'',
        lastName:'',
        email:'',
        invitationCode:'',
      }
    },
    components : {
      MassgeTop
    },
    methods:{
      async next(){
        if(!this.firstName){
          this.$message.error('请输入FirstName');
          return
        }
        if(!this.lastName){
          this.$message.error('请输入LastName');
          return
        }
        const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if(!reg.test(this.email)){
          this.$message.error('请输入正确的Email');
          return
        }
        // if(this.invitationCode){
        //   this.invitationCode
        //   return
        // }

      //  最后收集信息发送请求
      //   const users = {
      //     email: this.email,
      //     firstName: this.firstName,
      //     invitationCode: this.invitationCode,
      //     lastName: this.lastName
      //   }
        const result = await checkAgentVo({
          email: this.email,
          firstName: this.firstName,
          invitationCode: this.invitationCode,
          lastName: this.lastName
        })
        if(result.code === 0){
          this.$message({
            message:result.message ,
            type: 'success'
          });
          let message1 = {
            email: this.email,    //用户邮箱
            firstName: this.firstName,  //用户名字
            invitationCode: this.invitationCode,  //邀请码
            lastName: this.lastName         //用户姓
          }
          //将信息保存到VUEX中
          this.$store.commit('messageEn',{message1})//保存用户信息
          this.$router.push('/Enrollpay')
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
    .wh(238px, 315px);
    .ctp(238px, 315px);
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
  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>
