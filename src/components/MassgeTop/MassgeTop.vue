<template>
  <div class="massge-top">
    <div class="LOGO">
      <img src="./images/LOGO.jpg" alt="">
    </div>
    <div class="relation">
      <p>联系电话 : </p><p>0412341234</p>
    </div>
    <div class="language">
      <el-row class="block-col-2">
        <el-col :span="12">
          <el-dropdown >
                <span class="el-dropdown-link" >
                  <i class="el-icon-setting" ></i>
                  简体中文
                  <i class="el-icon-arrow-down" ></i>
                </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="font-item">简体中文</el-dropdown-item>
              <el-dropdown-item  class="font-item">ENGLISH</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .massge-top {
    background-color: #FFFFFF;
    height: 80px;
    width: 100%;
    overflow: hidden;
    .LOGO {
      /*background-color: pink;*/
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
      /*background-color: pink;*/
      height: 100%;
      display: inline-block;
      overflow: hidden;
      line-height: 80px;
      & > :nth-child(1){
        float: left;
      }
      & > :nth-child(2){
        float: left;
        padding-left: 5px;
      }
    }
    .language{
      /*background-color: pink;*/
      height: 100%;
      width: 200px;
      float: right;
      box-sizing: border-box;
      padding-top: 30px;
      /*line-height: 80px;*/
    }
  }
  /*下拉列表*/
  .el-dropdown-link {
    cursor: pointer;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .font-item{
    font-size: 12px;
  }
</style>
