<template>
  <div id="myfooter">
    <el-row>
  <el-col :span="24"><div class="grid-content bg-color"><label style="text-align: center; color: rgba(255, 255, 255, 1); font-family: 微软雅黑; font-size: 28px; font-style: normal; font-weight: 400; text-decoration: none; white-space: nowrap;">CopyRight</label></div></el-col>
</el-row>
  </div>
</template>
 
<script type="text/javascript">
export default {
  
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #303133;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>