<template>
  <div class="Head">
    <el-row>
      <el-col :span="12" :offset="1">
        <img src="@/assets/logo.png" style="width:200px; height:60px" />
      </el-col>
      <el-col :span="2" :offset="5" style="align-context:right;">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-user"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
            <el-dropdown-item icon="el-icon-tickets">订单中心</el-dropdown-item>
            <el-dropdown-item icon="el-icon-shopping-cart-2">
              购物车
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-collection-tag" @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
          &nbsp;&nbsp;&nbsp;&nbsp;
        <el-button circle  class="el-icon-search"></el-button>
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
    toLogin() {},
    logout() {
      this.$store.dispatch("logout", null);
    }
  }
};
</script>

<style  scoped>
.head{
  margin-top:100px;
}
.el-dropdown {
  margin-right: 0px;
}
.el-dropdown-link {
  font-size: 30px;
}
.el-input {
  font-size: 15px;
  border-radius: 20px;
}
</style>
