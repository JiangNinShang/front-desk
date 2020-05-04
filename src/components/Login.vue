<template>
  <div class>
    <el-form :model="user" :rules="rules" ref="user">
      <h3 class="title">账户登录</h3>
      <el-form-item>
        <el-input type="text" v-model="user.username" auto-complete="off" placeholder="用户号码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="user.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">
        同意
        <a href="#" style="color:blue;">《用户协议》</a>
      </el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "please enter your account",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "enter your password", trigger: "blur" }
        ]
      },
      checked: false
    };
  },
  methods: {
    handleSubmit(event) {
      this.$refs.user.validate(valid => {
        if (valid) {
          if (
            this.user.username === "admin" &&
            this.user.password === "123456"
          ) {
            this.logining = false;
            this.$store.dispatch("login", this.user);
           
          } else {
            this.logining = false;
            this.$alert("username or password wrong!", "info", {
              confirmButtonText: "ok"
            });
          }
        } else {
          console.log("error submit!");
          return false;
        }
      });
    }
  },
  components: {}
};
</script>

<style  scoped>

label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
a {
  text-decoration: none;
}
</style>
