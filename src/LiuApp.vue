<template>
  <div id="app">
     <component :is="$store.getters.getApp_view"></component>
  </div>
</template>

<script>
import GoodsHomePage from './components/GoodsHomePage'
import GoodInDetail from './components/GoodsInDetail'
export default {
  name: 'App',
  components:{
    GoodsHomePage,
    GoodInDetail,
    ss
  }
}
</script>


<style>
  .el-header, .el-footer {
    background-color:turquoise;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color:wheat;
    
  
  }
  
  .el-main {
    background-color: white;
    color: #333;
height: 600px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .font{
    line-height: 40px;
    text-align:right;
    padding-right:10px;
    
  }
  .el-menu{
    text-align: left;
    min-height: 600px;
  }
  a:hover{
    color:darkorange;
  }
</style>