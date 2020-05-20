<template>
  <div class="Footer">
    <div>
      <el-divider></el-divider>
      <el-row>
        
        <el-col :span="6">
          <h4>购买产品</h4>
          <ul>
            <li>
              <a href="#">长袖</a>
            </li>
            <li>
              <a href="#">短袖</a>
            </li>
            <li>
              <a href="#">男款</a>
            </li>
            <li>
              <a href="#">女款</a>
            </li>
            <li>
              <a href="#">夏款</a>
            </li>
            <li>
              <a href="#">冬款</a>
            </li>
            <li>
              <a href="#">春秋款</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="6">
          <h4>服务与支持</h4>
          <ul>
            <li>
              <a href="#">预约服务</a>
            </li>
            <li>
              <a href="#">无偿退款</a>
            </li>
            <li>
              <a href="#">联系我们</a>
            </li>
            <li>
              <a href="#">xxxx新闻</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </el-col>
        <el-col :span="6">
          <h4>关于我们</h4>
          <ul>
            <li>
              <a href="#">关于我们</a>
            </li>
            <li>
              <a href="#">可持续发展</a>
            </li>
            <li>
              <a href="#">运营商网络</a>
            </li>
            <li>
              <a href="#">成为合作伙伴</a>
            </li>
            <li>
              <a href="#">xxx俱乐部</a>
            </li>
           
          </ul>
        </el-col>
        <el-col :span="6">
          <h4>关于新闻</h4>
          <ul>
            <li>
              <a href="#">xxxx新闻</a>
            </li>
          </ul>
        </el-col>
      </el-row>

      <el-divider></el-divider>
      <el-row>
        <el-col :span="8">
          <h5>版权所有 © xxxx有限公司 1998-2020。保留一切权利。粤A2-20044005号</h5>
        </el-col>
        <el-col :span="10">
          <ul id="menu">
            <li>
              <a href="#">网站地图</a>
            </li>
            <li>
              <a href="#">使用条款</a>
            </li>
            <li>
              <a href="#">隐私</a>
            </li>
            <li>
              <a href="#">关于cookies</a>
            </li>
            <li>
              <a href="#">法律信息</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="6">
          <i class="el-icon-present"></i>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style  scoped>
ul {
  list-style: none;
  font:15px verdana, arial, sans-serif; 
  text-align:left;
}
#menu,
#menu li {
  float: left;
  margin-left: 10px;
}
h4{
   margin-left:40px;
}
a{
  text-decoration: none;
  color: gray;
}
h5{
  color:gray;
}
a:hover{
  color:black;
}
</style>
