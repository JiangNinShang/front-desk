<template>
  <div class="Head">
    <el-row>
      <el-col :span="4">
        <img src="@/assets/logo.png" style="width:200px; height:60px" />
      </el-col>
      <el-col :span="10">
        <el-input size="large" placeholder="请输入内容..." suffix-icon="el-icon-search" v-model="key"></el-input>
      </el-col>
      <el-col :span="8" :offset="1" style="align-context:right;" >
        <el-button round size="mini">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-user"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              
              <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
              <el-dropdown-item icon="el-icon-tickets">订单中心</el-dropdown-item>
              <el-dropdown-item icon="el-icon-shopping-cart-2">购物车
                 <el-badge class="mark" :value="12" />
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-collection-tag" @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-button>
        <el-button round size="medium" @click="toLogin">登录</el-button>
        <el-button round size="medium">注册</el-button>

        <el-button round size="medium">全部宝贝</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-divider></el-divider>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      key: ""
    };
  },
  components: {},
  methods: {
    toLogin(){
      
    },
    logout(){
      this.$store.dispatch("logout", null);
    }
  }
};
</script>

<style  scoped>
.Head {
  margin-top: 30px;
}
.el-dropdown {
  margin-right: 0px;
}
.el-dropdown-link {
  font-size: 25px;
}
.el-input {
  font-size: 15px;
  border-radius: 20px;
}
</style>
