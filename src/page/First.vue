<template>
  <div class>
    <div class="login-container">
      <Login v-if="isLogin"></Login>
      <router-view v-else></router-view>
      <el-col :span="6" v-if="isForget">
        <router-link to="/forget">
          <a href="#" style="color:orange" @click="fgPwd()">忘记密码？</a>
        </router-link>
      </el-col>
      <el-col :span="6" v-else><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></el-col>
      <el-col :span="10" :offset="8" v-if="isRegist">
        <a href="#"  @click="ammRegst()">
          还没有账号? <span>&nbsp;</span>
          <router-link to="/register">
            <span style="color:orange;">立即注册</span>
          </router-link>
        </a>
      </el-col>
      <el-col :span="10" :offset="8" v-else>
        <a href="#" @click="ammRegst2()">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          已有帐号?
          <router-link to="/login" >
            <span style="color:orange;">立即登录</span>
          </router-link>
        </a>
      </el-col>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";
export default {
  name: "",
  data() {
    return {
      isLogin: true,
      isRegist: true,
      isForget: true
    };
  },
  components: {
    Login
  },
  methods: {
    fgPwd() {
      this.isLogin = false;
      this.isForget = false;
    },
    ammRegst() {
      this.isLogin = false;
      this.isRegist = false;
    },
    ammRegst2() {
      this.isForget = true;
      this.isLogin = true;
      this.isRegist = true;
    }
  }
};
</script>

<style  scoped>
.login-container {
  margin: 150px auto;
  width: 400px;
  height: 500px;
}
a {
  text-decoration: none;
}
</style>
