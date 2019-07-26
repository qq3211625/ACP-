<template>
  <!--<div>-->
    <!--<div class=".form_top"></div>-->
    <div class="login_page fillcontain">
      <MassgeTop></MassgeTop>
      <transition name="form-fade" mode="in-out" >
        <!--<div class="form_top"></div>-->
        <section class="form_contianer" >
          <div class="welcome">
            <p></p>
            <p>欢迎登陆</p>
            <p></p>
          </div>
          <el-form >
            <el-form-item prop="phone" style="margin-bottom: 18px">
              <el-input v-model="phone" placeholder="手机号" name="phone" ></el-input>
              <!--<span style="color: red;" >{{ errors.first('phone') }}</span>-->
            </el-form-item>
            <el-form-item prop="password" style="margin-bottom: 18px">
              <el-input v-model="password" type="password" placeholder="密码" ></el-input>
            </el-form-item>
            <div class="if-remember">
              <div>
                <input type="checkbox" >
                <p class="tip">
                  记住密码
                </p>
              </div>
              <div ><a href="javascript:" style="color: #797979;">忘记密码？</a></div>
            </div>
            <el-form-item>
              <el-button type="primary" @click="submitLogin" class="submit_btn">登陆</el-button>
            </el-form-item>
          </el-form>
          <p class="tip">没有账号吗？现在就<a style="color: #797979;" href="javascript:" @click="$router.push('/Enroll')">注册</a></p>
        </section>
      </transition>
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
        phone: '',
        password: ''
      }
    },
    components : {
      MassgeTop
    },
    methods: {
      async submitLogin () {
        if(!this.phone){
          this.$message.error('请输入手机号');
        }
        if(!this.password){
          this.$message.error('请输入密码');
        }
        const obj = {
          password: this.password,
          phone: this.phone
        }
        const result = await reqLogin(obj);
        // 判断成功跳转中介页面
        if(result.code == 0){
          this.$message.error('登录成功');
          //跳转页面
        }else if(result.code == 10000){
          this.$message.error(result.message);
          return
        }
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
      .if-remember{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        margin-bottom: 15px;
        & > :nth-child(1){
          display: flex;
          align-items: center;
          & > :nth-child(1){
          }
          & > :nth-child(2){
            padding-left: 5px;
          }
        }
        & > :nth-child(2){
          & > :nth-child(1){
            text-decoration: underline;
          }
        }
      }
    }
	}
  /*.form_top{*/
    /*height: 50px;*/
    /*background-color: deeppink;*/
  /*}*/

  .tip {
    color: #AEAEAE;
  }
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>
