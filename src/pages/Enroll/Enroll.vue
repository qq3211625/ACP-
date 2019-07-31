<template>
  <div class="login_page fillcontain">
    <MassgeTop></MassgeTop>
    <transition name="form-fade" mode="in-out" >
      <section class="form_contianer" >
        <div class="welcome">
          <p></p>
          <p>新用户注册</p>
          <p></p>
        </div>
        <el-form >
          <el-form-item prop="phone" style="margin-bottom: 18px">
            <el-input @blur.prevent="changeCount()" v-model="phone" placeholder="请输入手机号"><span>dsfsf</span></el-input>
          </el-form-item>
          <el-form-item prop="code" style="margin-bottom: 18px;" >
            <el-input @blur.prevent="changeCode()"  v-model="code" type="text" placeholder="短信验证码" style="width: 112px;margin-right: 9px; dispaly:inline-block"></el-input>
            <el-button :disabled="isShowCode" type="primary" @click='clickCode' >获取验证码</el-button>
          </el-form-item>
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
        <p class="tip">已有账号？现在就<a href="javascript:" @click="$router.push('/login')">登录</a></p>
      </section>
    </transition>
  </div>
</template>
<script>
  import MassgeTop from '../../components/MassgeTop/MassgeTop'
  import { reqCode } from '@/api/index.js';
  import { verifyCode } from '@/api/index.js';
  export default {
    name: "Enroll",
    data(){
      return {
        phone:'',   //手机号
        code:'',    //验证码
        reqCode1:'',//后台返回验证码
        pwd:'',     //用户密码
        confirmPwd:'',//用户第二次密码
        isShowCode: true, //是否显示验证按钮
        isShowNext: true, //是否显示下一步按钮
      }
    },
    components : {
      MassgeTop
    },
    methods:{
      changeCount() {   //input 失去焦点校验手机号(澳洲)
        if(this.phone.slice(0,2)=='04'&&this.phone.length==10){
          this.isShowCode= false //显示验证按钮
        }else if(this.phone.slice(0,1)=='4'&&this.phone.length==9){
          this.isShowCode= false //显示验证按钮
        }else if(!this.phone){
          this.$message.error('Incomplete Information');
          this.isShowCode= true  //不显示验证按钮
          return
        }else{
          this.$message.error('Contact Number Incorrect Input Format');
          this.isShowCode= true  //不显示验证按钮
          return
        }

        // var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        // if (reg.test(phone)){
        //   this.isShowCode = false;
        // }else{
        //   this.$message.error('请输入正确的手机号');
        // }
      },
      async clickCode () {
        const phone = this.phone
        const reqCode1 =await reqCode({ //请求接口
          phone,
          type: 1
        });
        this.reqCode1 = reqCode1.data;  //没有接口  模拟成功
        console.log(this.reqCode1)
      },
      changeCode () {
        if(!this.code){
          this.$message.error('请输入验证码');
        }else if(this.reqCode1 != this.code){
          console.log(this.reqCode1,this.code)
          this.$message.error('验证码错误');
        }else{
          this.$message({
            message: '获取成功',
            type: 'success'
          });
          console.log(this.reqCode1,this.code)
        }
      },
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
        const verify = await verifyCode({
          code : this.code,        //验证码
          phone : this.phone,       //手机号
          type : 1
        })
        console.log(verify)
        //将用户手机号,和密码保存到vuex中
        let message1 = {
          phone : this.phone,       //手机号
          pwd : this.pwd,         //用户密码
        }
        //手机号码保存到sessionStorage中,避免用户刷新在代注册中丢失
        window.sessionStorage.setItem('phone',this.phone)

        if (verify.code == 0){
          //跳转路由
          console.log(message1)
          this.$store.commit('message',{message1})//保存用户信息
          this.$router.push('/enrolluser')
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
    .wh(238px, 340px);
    .ctp(238px, 340px);
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
