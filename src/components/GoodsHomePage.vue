<template>
  <div class>
    <el-container>
      <el-header>头部</el-header>
      <el-main>
        <div style=" width:80%; margin: auto;">
          <el-row>
            <el-col :span="6" :offset="9">
              <el-input placeholder="搜索商品" v-model="commodityName">
                <el-button type="primary" slot="append" @click="chaxun">搜索</el-button>
              </el-input>
            </el-col>
          </el-row>
          <br />
          <el-row>
            <el-col :span="2" :offset="4">商品类型:</el-col>
            <el-col :span="1">
              <a @click="fenleichaxun('')" href="#">全部</a>
            </el-col>
            <el-col :span="1" v-for=" type in this.TBcommodityType" :key="type.id">              
              <a @click="fenleichaxun(type.id)" href="#">{{type.typeName}}</a>
            </el-col>
          </el-row>
          <br />

          <div
            style="width:290px;margin:10px auto;height:400px;float:left;margin: auto;"
            v-for="shangpin in this.pageinfo.list"
            :key="shangpin.id"
          >
            <table width="100%" border="0" align="center" style="margin: auto;">
              <tr>
                <td align="center">
                  <a  @click="tiaozhuan(shangpin.id)" href="#" >
                    <img  src="@/assets/3.jpg" width="170" height="200" border="0"  />
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center">                
                  <a  @click="tiaozhuan(shangpin.id)" href="#" >{{shangpin.commodityName}}</a>
                </td>
              </tr>

              <tr>
                <td align="center">
                  <p>
                    <span>原价:￥{{shangpin.price}}</span>&nbsp;&nbsp;&nbsp;
                    <span>折扣价:￥${{shangpin.zhekoujia }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <el-button type="danger">添加到购物车</el-button>
                </td>
              </tr>
            </table>
          </div>
          <el-row>
            <el-col :span="16" :offset="6">
              <el-pagination
                :current-page.sync="pageinfo.pageNum"
                :page-size="pageinfo.pageSize"
                :total="pageinfo.total"
                :page-sizes="[4, 8, 12, 16]"
                layout="total, sizes, prev, pager, next, jumper"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              ></el-pagination>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer>尾部</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      sousuo: "",
      pageinfo: {},
      commodityName: "",
      TBcommodityType: ""
    };
  },
  components: {},
  mounted() {
    this.findType();
    this.findPage();
  },
  methods: {
    //修改每页显示数量
    handleSizeChange(val) {
      this.findPage(this.pageinfo.pageNum, val);
    },
    //分页
    handleCurrentChange(val) {
      this.findPage(val, this.pageinfo.pageSize);
    },

    //查询类型
    findType() {
      let url = "/shangpin/type";
      this.$http
        .post(url)
        .then(response => {
          this.TBcommodityType = response.data;
        })
        .catch(ex => {});
    },
    
    findPage(page = 1, pageSize = 8) {
      let url = "/shangpin/findpage?page=" + page + "&pageSize=" + pageSize;
      this.$http
        .get(url)
        .then(response => {
          this.pageinfo = response.data;
        })
        .catch(ex => {});
    },
    chaxun() {
      let url = "/shangpin/findpage?name="+this.commodityName;
      this.$http
        .get(url)
        .then(response => {
          this.pageinfo = response.data;
        })
        .catch(ex => {});
    },
    /*跳转到详情vue */
    tiaozhuan(val){
      this.$store.dispatch("change","GoodInDetail");
       this.$store.dispatch("cunid",val);
    },
    fenleichaxun(val){
      let url = "/shangpin/findpage?id="+val;
      this.$http
        .get(url)
        .then(response => {
          this.pageinfo = response.data;
        })
        .catch(ex => {});
    },
    
  }
};
</script>

<style  scoped>
.el-select .el-input {
  width: 130px;
}
a{
  text-decoration:none;
}
</style>
