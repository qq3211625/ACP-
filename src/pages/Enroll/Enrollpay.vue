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
          <el-form-item prop="cardName" style="margin-bottom: 18px">
            <el-input v-model="cardName" placeholder="Full Name on Card"><span></span></el-input>
          </el-form-item>
          <el-form-item prop="cardNumber" style="margin-bottom: 18px">
            <el-input v-model="cardNumber" type="text" placeholder="Card Number" ></el-input>
          </el-form-item>
          <el-form-item prop="expiry" style="margin-bottom: 18px">
            <el-input type="text" maxlength="5" v-model="expiry"  placeholder="Expiry MM/YY" @input="expiryVerify"></el-input>
          </el-form-item>
          <el-form-item prop="cardCvv" style="margin-bottom: 18px">
            <el-input v-model="cardCvv" type="text" placeholder="CVV" ></el-input>
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
  import { reqRegister } from '@/api/index.js';
  import MassgeTop from '../../components/MassgeTop/MassgeTop'
  import { mapState } from 'vuex';
  export default {
    name: "Enroll",
    data(){
      return {
        cardName:'',
        cardNumber:'',
        expiry:'',
        expMonth:'',
        expYear:'',
        cardCvv:''
      }
    },
    computed:{
      ...mapState({
        phone: state => state.user.phone
      }),
      ...mapState({
        pwd: state => state.user.pwd
      }),
      ...mapState({
        email: state => state.user.email
      }),
      ...mapState({
        firstName: state => state.user.firstName
      }),
      ...mapState({
        lastName: state => state.user.lastName
      }),
      ...mapState({
        invitationCode: state => state.user.invitationCode
      }),
    },
    components : {
      MassgeTop
    },
    methods:{
      expiryVerify(e) {
        // this.expiry = 0
        // return
        e = e.replace(/\//g, '')
        if(e.length > 2) {
          this.expiry = e.slice(0, 2) + '/' + e.slice(2, e.length)
        }
        console.log(e)
      },
      async next(){
        if(!this.cardName){
          this.$message.error('请输入FirstName');
          return
        }
        if(!this.cardNumber){
          this.$message.error('请输入cardNumber');
          return
        }

        //正则适配有问题
        // const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if(!this.expiry){
          this.$message.error('请输入正确的expiry');
          return
        }else if (this.expiry) {
          //将expiry拆分
          const arr=this.expiry.split("/");
          this.expMonth = arr[0]
          this.expYear = arr[1]
          //只判断月是否大于1小于13
          if(this.expMonth>12 || this.expMonth<0){
            this.$message.error('请输入正确的expMonth');
            return
          }
        }
        if(!this.cardCvv){
          this.$message.error('请输入正确的cardCvv');
          return
        }

//      收集所有信息在这里发送请求
        const obj ={
        cardName: this.cardName,         //卡名字
          cardNumber: this.cardNumber,  //卡号
          expMonth: this.expMonth,      //到期月份
          expYear: this.expYear,        //到期年份
          cardCvv: this.cardCvv,        //必选
          //vuex中提取用户数据
          phone: this.phone,            //用户数据
          pwd: this.pwd,
          email: this.email,            //用户邮箱
          firstName: this.firstName,   //用户名字
          lastName: this.lastName,     //用户姓
          invitationCode: this.invitationCode,  //邀请码
        }
        console.log(obj)
        const result = await reqRegister(obj)
        if(result.code === 0){
          this.$message({
            message:result.message ,
            type: 'success'
          });
          console.log(result)
          //跳转路由
        }else if(result.code === 10000){
          console.log(result)
          //跳转路由
        }else{
          this.$message.error('注册失败');
        }
      },
    },
    mounted () {
      // console.log('----')
      // var date = new Date() //获取一个时间对象
      // var strtime = '2014/04/23 18:55:49:123';
      // console.log(new Date(strtime))
      // // 获取时间戳
      // console.log(date.getTime())
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
