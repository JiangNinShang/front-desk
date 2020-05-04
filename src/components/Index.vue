<template>
  <div class="main">
    <div style="width:200px;float:left;margin-left:100px; ">
      <el-menu style="width:200px;" default-active="2" class="el-menu-vertical-demo" collapse
      >
      <el-submenu index="1">
        <template slot="title">
          <i>导航一</i>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i>导航二</i>
      </el-menu-item>
      <el-menu-item index="3">
        <i>导航三</i>
      </el-menu-item>
      <el-menu-item index="4">
        <i>导航四</i>
      </el-menu-item>
      <el-menu-item index="4">
        <i>导航五</i>
      </el-menu-item>
    </el-menu>
    </div>
    <div style="width:850px;float:right;margin-right:100px;">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(product,index) in allproducts" :key="index">
          <a>
            <img v-if="product.image!=undefined" :src="host+'img/'+product.image"/>
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- -->
    <div
      style="float:left;margin-top:50px;margin-left:100px;width:1090px;height:100px; border:1px solid gray;"
    >
      <a href="#" v-for="(adv,index) in advertise" :key="index">
        <img style="width:1090px; height:100px;" v-if="adv.image=='2.jpg'" :src="host+'img/'+adv.image" />
      </a>
    </div>

    <!--商品列表滚动 -->

<div class="lc">
  <h4 style="color:#409EFF;">为你推荐</h4>
  <div class="items">
       <div class="left">
      <h3> <a href="#">月月领·加薪年金(15年)</a> </h3>
      <p class="p1">100%返还已交保费</p>
      <p class="p2"> <span class="amount">48-51</span> <span>%</span> </p>
      <p class="p3">每月领取月交金额比例</p>
      <p class="p4">100%返还已交保费</p>
      <a class="btn" href="#"> 立即抢购 </a> </div>
    <div class="right">
      <div class="Scroll-left">
        <div class="hd"> <a class="next"><</a> <a class="prev">></a> </div>
        <div class="bd">
          <ul class="picList">
            <li v-for="(product,index) in allproducts" :key="index">
              <a href="#">
                 <img v-if="product.image!=undefined" :src="host+'img/'+product.image" class="image"/>
                {{product.commodity.commodityName}}
              </a>
              <div style="position: relative;top: 45px;">
                &nbsp;&nbsp;
                <i class="el-icon-view"></i>
                <span>{{product.commodity.price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-button type="text">
                  <font size="4">查看</font>
                </el-button>
              </div> 
              </li>
          </ul>
        </div>
      </div>
    </div>

</div>
</div>



    <!-- <div class="lc">
  <div class="items">
    <div class="right">
      <h4 class="title">为你推荐</h4>
      <div class="Scroll-left">
        <div class="hd"> <a class="next"><</a> <a class="prev">></a> </div>
        <div class="bd">
          <ul class="picList">
            <li v-for="(product,index) in allproducts" :key="index">
              <a href="#">
                 <img v-if="product.image!=undefined" :src="host+'img/'+product.image" class="image"/>
                {{product.commodity.commodityName}}
              </a>
              <div style="position: relative;top: 45px;">
                &nbsp;&nbsp;
                <i class="el-icon-view"></i>
                <span>{{product.commodity.price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-button type="text">
                  <font size="4">查看</font>
                </el-button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div> -->

    <!--商品列表 -->
    <div style="float:left;margin-top:50px;margin-left:45px;width:100%;height:800px;">
      <h4 style="color:#409EFF;margin-left:60px;">热销商品</h4>
      <el-row :gutter="30">
        <el-col
          :span="4"
          v-for="(product,index) in allproducts"
          :key="index"
          :offset="1"
          style="margin-top:30px;"
        >
          <el-card
            :body-style="{ padding: '0px', height:'360px'}"
            shadow="hover"
            style="width: 260px;height: 320px;"
          >
            <div style="padding: 6px;height: 310px;">
              <div style="position: relative;top: 30px;">
               
                     
          <img v-if="product.image!=undefined" :src="host+'img/'+product.image" class="image"/>
        
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
import { superSlide } from "../js/jquery.SuperSlide.2.1.1.js";

export default {
  name: "",
  data() {
    return {
      //商品列表
      allproducts: [],
      //广告发布
      advertise:[]
    };
  },
  computed:{
     host(){
            return this.$http.defaults.baseURL;
        }
  },
  components: {},
  methods: {
    //查询广告
    findAdv(){
      let url="findAdvAll";
      this.$http.post(url).then(response=>{
        this.advertise=response.data;
        console.log(this.advertise);
      }).catch(ex=>{

      });
    },
    //查询发布的商品
    findGoods(){
      console.log("发布的商品1");
      let url="findCrAll";
      this.$http.post(url).then(response=>{
        console.log("发布的商品2"+response.data);
       
        this.allproducts=response.data;
         console.log("发布的商品"+this.allproducts);
      }).catch(ex=>{

      });
    },
    shelfRecommend: function() {
      var that = this;
      $.fn.size = function() {
        return $(this).length;
      };
      $(".Scroll-left").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: true,
        vis:3,
        pnLoop: false
      });
    }
  },
  mounted: function() {
    var that = this;
    that.shelfRecommend();
    this.findGoods();
    this.findAdv();
  }
};
</script>


<style  scoped>
/*
商品列表滚动
*/
@import "../css/style.css";

.el-carousel__item img {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item {
  background-color: #d3dce6;
}
.main {
  margin-top: 100px;
}
.image {
  width: 100%;
  display: block;
}
</style>