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

          <el-row>
            <el-col :span="5" v-for="(shangpin) in this.pageinfo.list" :key="shangpin.id" :offset="1">
              <el-card :body-style="{ padding: '0px' }">
                 <img
                    src="@/assets/3.jpg"
                    width="170"
                    @click="xiangxi(shangpin.id)"
                    height="200"
                    border="0"
                  />
                <div style="padding: 14px;">
                  <span> <a @click="xiangxi(shangpin.id)" href="#">{{shangpin.commodityName}}</a></span>
                 <p>
                    <span>原价:￥{{shangpin.price}}</span>&nbsp;&nbsp;&nbsp;
                    <span>折扣价:￥${{shangpin.zhekoujia }}</span>
                  </p>
                    <el-button type="danger" @click="tianjia(shangpin)">添加到购物车</el-button>
                </div>
              </el-card>
              <br>
            </el-col>
          </el-row>
          
          <div style="clear:both"></div>
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
    //跳转到详情vue
    xiangxi(val) {
      this.$store.dispatch("change", "GoodInDetail");
      this.$store.dispatch("cunid", val);
    },
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
      let url = "/shangpin/findpage?name=" + this.commodityName;
      this.$http
        .get(url)
        .then(response => {
          this.pageinfo = response.data;
        })
        .catch(ex => {});
    },

    fenleichaxun(val) {
      let url = "/shangpin/findpage?id=" + val;
      this.$http
        .get(url)
        .then(response => {
          this.pageinfo = response.data;
        })
        .catch(ex => {});
    },
    //添加到vuex的数组
    tianjia(shangpin) {
      this.$store.dispatch("shuzu", shangpin);
    }
  }
};
</script>

<style  scoped>
.el-select .el-input {
  width: 130px;
}
a {
  text-decoration: none;
}
.div5 {
  width: 290px;
  margin: 10px auto;
  height: 400px;
  margin: auto;
  float: left;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
