<template>
  <div class>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <h3 class="title">用户注册</h3>
      <el-form-item>
        <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="手机号码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" style="width:62%;margin-right:40px;" auto-complete="off" placeholder="短信验证码"></el-input><el-button type="primary">发送验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">
        同意
        <a href="#" style="color:blue;">《用户协议》</a>
      </el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      ruleForm: {
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
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (
            this.ruleForm.username === "admin" &&
            this.ruleForm.password === "123456"
          ) {

            sessionStorage.setItem("user", this.ruleForm.username);
            this.$router.push({ path: "/" });
          } else {

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
