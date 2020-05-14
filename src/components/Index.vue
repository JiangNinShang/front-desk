<template>
  <div class="main">
    <!--侧边栏分类 -->
    <div style="width:200px;float:left;margin-left:100px; ">
      <el-menu style="width:200px;" default-active="2" class="el-menu-vertical-demo" collapse>
        <type-menus :typeList="types"></type-menus>
      </el-menu>
    </div>

    <div style="width:890px;float:left;margin-left:40px;">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item class="carousel" v-for="(product,index) in topproduct" :key="index">
          <a href="#">
            <img v-if="product.image!=undefined" :src="host+'img/'+product.image" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--广告1-->
    <div style="float:left;margin-top:100px;margin-left:100px;width:93%;height:300px;">
      <div
        style="float:left;width:45%;margin-right:50px;"
        v-for="(adv,index) in advertise"
        :key="index"
      >
        <a href="#">
          <img
            style="width:100%; height:100%;"
            v-if="adv.image=='1.jpg'"
            :src="host+'img/'+adv.image"
          />
        </a>
      </div>
    </div>

    <!--商品列表滚动 -->
    <div class="back_add">
      <h4 style="color:#409EFF;">为你推荐</h4>
      <div class="Containt">
        <el-button class="iconleft" @click="zuohua" circle>
          <i class="el-icon-arrow-left"></i>
        </el-button>
        <ul :style="{'left':calleft + 'px'}" v-on:mouseover="stopmove()" v-on:mouseout="move()">
          <li v-for="(product,index) in centerproduct" :key="index">
            <el-card>
              <div class="pic">
                <a href="#">
                  <img
                    v-if="product.image!=undefined"
                    :src="host+'img/'+product.image"
                    class="image"
                  />
                </a>
              </div>
              <div class="title">
                <a href="#">{{product.commodity.commodityName}}</a>
                <p>￥{{283}}</p>
              </div>
            </el-card>
          </li>
        </ul>

        <el-button circle class="iconright" @click="youhua">
          <i class="el-icon-arrow-right"></i>
        </el-button>
      </div>
    </div>

    <!--广告2-->
    <div style="float:left;margin-top:100px;margin-left:100px;width:85%;height:150px;">
      <a href="#" v-for="(adv,index) in advertise" :key="index">
        <img style="width:100%; height:50%;" v-if="adv.image=='2.jpg'" :src="host+'img/'+adv.image" />
      </a>
    </div>

    <!--商品列表 -->
    <div style="float:left;margin-top:50px;width:100%;height:800px;margin-left:50px;">
      <h4 style="color:#409EFF;margin-left:60px;">热销商品</h4>
      <el-row :gutter="30" v-for="(page, index) of pages" :key="index">
        <el-col
          :span="4"
          v-for="(product, innerindex) of page"
          :key="innerindex"
          :offset="innerindex > 0 ? 2 : 1"
          style="margin-top:30px;"
        >
          <el-card
            v-loading
            :body-style="{ padding: '0px', height:'360px'}"
            shadow="hover"
            style="width: 260px;height: 320px;"
          >
            <div style="padding: 6px;height: 310px;">
              <div style="position: relative;top: 30px;">
                <img v-if="product.image!=undefined" :src="host+'img/'+product.image" class="image" />
                {{product.commodity.commodityName}}
              </div>

              <div style="position: relative;top: 45px;">
                &nbsp;&nbsp;
                <i class="el-icon-view"></i>
                <span>{{product.commodity.price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-button type="text">
                  <font size="4">查看</font>
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import TypeMenus from "../components/TypeMenus";

export default {
  name: "",
  data() {
    return {
      //轮播商品列表
      topproduct: [],
      //商品滑动列表
      centerproduct: [],
      //尾部商品列表
      footproduct: [],
      //广告发布
      advertise: [],
      types: [],
      calleft: 0
    };
  },
  computed: {
    host() {
      return this.$http.defaults.baseURL;
    },
    //热销商品
    pages() {
      const pages = [];
      this.footproduct.forEach((item, index) => {
        const page = Math.floor(index / 3); //4代表4条为一行，随意更改
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  components: { TypeMenus },
  created() {
    this.move();
  },
  methods: {
    //移动
    move() {
      this.timer = setInterval(this.starmove, 3000);
    },
    //开始移动
    starmove() {
      this.calleft -= 340;
      if (this.calleft < -1200) {
        this.calleft = 0;
      }
    },
    //鼠标悬停时停止移动
    stopmove() {
      clearInterval(this.timer);
    },
    //点击按钮左移
    zuohua() {
      this.calleft -= 340;
      if (this.calleft < -1200) {
        this.calleft = 0;
      }
    },
    //点击按钮右移
    youhua() {
      this.calleft += 340;
      if (this.calleft > 0) {
        this.calleft = -1020;
      }
    },
    //递归查询类型列表
    findType() {
      let url = "type/findType";
      this.$http
        .post(url)
        .then(response => {
          this.types = this.getTreeData(response.data.list);
          console.log(response.types);
        })
        .catch(ex => {
          console.log(ex);
        });
    },
    getTreeData(data) {
      // 循环遍历json数据
      for (var i = 0; i < data.length; i++) {
        if (data[i].childType.length < 1) {
          // children若为空数组，则将childType设为undefined
          data[i].childType = undefined;
        } else {
          // childType若不为空数组，则继续 递归调用 本方法
          this.getTreeData(data[i].childType);
        }
      }
      return data;
    },
    //查询广告
    findAdv() {
      let url = "release/findAdvAll";
      this.$http
        .post(url)
        .then(response => {
          this.advertise = response.data;
          console.log(this.advertise);
        })
        .catch(ex => {
          console.log(ex);
        });
    },
    //查询发布的商品

    findGoodsBycode(value) {
      let url = "release/findCrByCode";
      let params = new URLSearchParams();
      params.append("code", value);
      this.$http
        .post(url, params)
        .then(response => {
          if (value == "001") {
            this.topproduct = response.data;
          }
          if (value == "002") {
            this.centerproduct = response.data;
          }
          if (value == "003") {
            this.footproduct = response.data;
          }
        })
        .catch(ex => {
          console.log(ex);
        });
    }
  },
  mounted() {
    this.findGoodsBycode("001");
    this.findGoodsBycode("002");
    this.findGoodsBycode("003");
    this.findAdv();
    this.findType();
  }
};
</script>


<style  scoped>
/*
商品列表滚动
*/
@import "../css/style.css";

.carousel img {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.carousel {
  background-color: #d3dce6;
}
.main {
  margin-top: 100px;
}
.image {
  width: 100%;
  display: block;
}

.el-carousel__item .el-card {
  opacity: 0.75;
  line-height: 200px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>