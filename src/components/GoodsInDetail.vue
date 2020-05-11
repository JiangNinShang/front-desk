<template>
  <div class>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        
        <a href="#" @click="fanhuishangyibo">返回上一步</a>
        
        <el-row>
          <el-col :span="6" :offset="5">
            <img src="@/assets/3.jpg" class="tupian" />
          </el-col>
        </el-row>
        <div class="div2">
          <table style="width: 400px;height:130px">
            <tr>
              <td width="70px">商品名称:</td>
              <td>{{Commodity.commodityName}}</td>
            </tr>
            <tr>
              <td>商品原价:</td>
              <td >{{Commodity.price}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                折扣价:{{Commodity.zhekoujia}}</td>
              
            </tr>
            <tr>
              <td>商品详细:</td>
              <td>{{Commodity.introduce}}</td>
            </tr>
          </table>
        </div>
        <div class="div3">
        <el-row>
          <el-col :span="3" :offset="11">
             <el-button type="danger">添加到购物车</el-button>
          </el-col>
          
        </el-row>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      Commodity: {}
    };
  },
  components: {},
  methods: {
    /*返回上一步 */
    fanhuishangyibo() {
      this.$store.dispatch("change", "GoodsHomePage");
    },
    shangpin() {
      let id =this.$store.getters.getShangpinid;
      var url = "/shangpin/findCommodity?id="+id;
      console.log(id);
      this.$http
        .get(url)
        .then(response => {
          this.Commodity = response.data;
        })
        .catch(ex => {});
    }
  },
  mounted(){
     this.shangpin();
  }
};
</script>

<style  scoped>
.tupian {
  width: 370px;
  height: 400px;
}
.div3 {
  position:relative;
  left: 70px;
  bottom: 100px;
}
.div2 {
  position:relative;
  left: 760px;
  bottom: 400px;
}
.div1{
margin: auto;
width: 1200px;
height: 600px;
background:#fafafa;
}
a {
  text-decoration: none;
}
</style>
