<template>
  <el-container width="100%">
    <el-header align="center"><Head></Head></el-header>
    <el-main align="center" v-if="wcnm !== null">
      <!-- 商品名称--》商品单价--》商品数量--》商品类型--》商品尺码--》商品图片--》小计 -->
      <el-table ref="multipleSelection" :data="wcnm" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" @select-all="selectAll" align="center">
        <el-table-column type="selection" width="55" align="center"></el-table-column>

        <el-table-column property="name" label="商品名称" width="80px" show-overflow-tooltip align="center"></el-table-column>
        <el-table-column property="price" label="单价" sortable align="center"></el-table-column>
        <el-table-column label="数量" align="center">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.num" @change="handleChange" :min="1" :max="10"></el-input-number>
            <!-- 数量最大值对应预定义库存 -->
          </template>
        </el-table-column>
        <el-table-column label="款式尺码" align="center">
          <template slot-scope="scope">
            <el-tag>未知</el-tag>
            <el-tag type="success">小码</el-tag>
          </template>
        </el-table-column>
        <!-- 款式下有尺码可供选择 （放弃）-->
        <el-table-column label="商品图片" width="120" property="path" align="center">
          <template slot-scope="scope">
            <!-- <img src="http://www.wm2en9.cn/img/yun.png" /> -->
            <img :src="scope.row.path" width="40" height="40" />
          </template>
        </el-table-column>
        <el-table-column align="center">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <span><h3>还没有选择商品，赶快选择吧</h3></span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <div>
        <el-pagination
          align="center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.$store.getters.getMU.length"
        ></el-pagination>
      </div>
      <div>
        <span>数&nbsp;&nbsp;&nbsp;量：{{ this.giao }}</span>
        <span style="margin-left: 50px;">总&nbsp;&nbsp;&nbsp;价：{{ this.giao1 }}</span>
        <span style="margin-left: 50px;"><el-button type="text" @click="cnm">结&nbsp;&nbsp;&nbsp;算</el-button></span>
      </div>
    </el-main>
    <el-main v-else><router-link to="/order">购物车空空的，赶快去购买吧</router-link></el-main>
    <el-footer align="center"><Footer></Footer></el-footer>
  </el-container>
</template>

<script>
import Head from './head.vue';
import Footer from '@/components/footer.vue';
export default {
  name: 'shopping',
  data() {
    return {
      multipleSelection: [], //存储选择数据
      pageSize: 5, // 每页的数据条数
      currentPage: 1, // 当前页码
      select: false,
      selectTwo: false,
      search: '',
      dialogVisible: false
    };
  },

  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    selectAll() {
      if (this.select !== false) {
        this.select = false;
        this.multipleSelection = [];
      } else {
        this.select = true;
        this.multipleSelection = this.$store.getters.getMU;
      }
    },
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    //删除的方法
    handleDelete(index, row) {
      this.$confirm('是否删除  ' + row.name + '   ?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('delete', index);
        this.$message({
          type: 'success',
          message: ' 删 除 成 功!'
        });
      });
    },
    errorHandler() {
      return true;
    },
    cnm() {
      if (this.multipleSelection.length == 0) {
        this.dialogVisible = true;
      } else {
        this.$store.dispatch('gtSity');
        var cnm = {
          shopping: this.multipleSelection
        };
        this.$router.push({ name: 'order', params: cnm });
      }
    }
  },
  computed: {
    giao: function() {
      if (this.multipleSelection.length == 0) {
        return 0;
      } else {
        let count = 0;
        for (var i = 0; i < this.multipleSelection.length; i++) {
          count = count + this.multipleSelection[i].num;
        }
        return count;
      }
    },
    giao1: function() {
      if (this.multipleSelection.length == 0) {
        return 0;
      } else {
        let count = 0;
        for (var i = 0; i < this.multipleSelection.length; i++) {
          count = count + this.multipleSelection[i].price * this.multipleSelection[i].num;
        }
        return count;
      }
    },
    wcnm: function() {
      let cnm = this.search;
      let tmd = [];
      if (cnm !== '') {
        for (var i = 0; i < this.$store.getters.getMU.length; i++) {
          let name = this.$store.getters.getMU[i].name;
          let address = this.$store.getters.getMU[i].addresses;
          if (name.indexOf(cnm) !== -1) {
            tmd.push(this.$store.getters.getMU[i]);
          }
        }
        return tmd.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
      } else {
        return this.$store.getters.getMU.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
      }
    }
  },
  components: {
    Head,
    Footer
  }
};
</script>

<style></style>
