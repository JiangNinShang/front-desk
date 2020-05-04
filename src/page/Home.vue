<template>
  <div id="app">
    <el-backtop :bottom="80">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >UP</div>
    </el-backtop>
    <el-container>
      <el-header>
        <Head></Head>
      </el-header>
      <el-main>
        <Index></Index>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import Index from "@/components/Index";

export default {
  name: "App",
  components: {
    Head,
    Footer,
    Index
  }
};
</script>
 
<style>
.el-header {
  background-color: #f5f5f5;
  width: 100%;
}
.el-footer {
  width: 100%;
  background-color: white;
  color: #333;
}

.el-main {
  background-color: #f5f5f5;
  color: #333;
  width: 100%;
}
</style>
