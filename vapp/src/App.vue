<template>
  <div id="app">
  <myheader></myheader>
  <p>{{ msg }}</p>
  <myfooter></myfooter>
  </div>
</template>

<script>

import myheader from './components/myheader.vue'
import myfooter from './components/myfooter.vue' 
export default {
  //name: 'app',
  data(){
    return{
      msg: 'hello! from app.vue.'
    }
  },
  components: {
    myheader,
    myfooter
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-color{
    background: #303133;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  justify-content: center;
}
</style>
