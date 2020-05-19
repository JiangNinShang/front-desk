<template>
  <el-container>
    <el-header>这是头</el-header>
    <el-main>
      <h2>确定收货地址：</h2>
      <el-divider></el-divider>
      <div>
        <el-table
          :data="this.$store.getters.getSity"
          style="width: 100%"
          :cell-style="cellStyle"
          :header-cell-style="rowClass"
          align="center"
          v-loading.fullscreen.lock="fullscreenLoading"
          v-if="this.$store.getters.getSity.length !== 0"
        >
          <el-table-column prop="consigneeName" label="姓名" width="200px" align="center"></el-table-column>
          <el-table-column prop="mobile" label="收货人电话" width="200px" align="center"></el-table-column>
          <el-table-column label="地址" align="center">
            <template slot-scope="scope">
              {{ scope.row.province }}{{ scope.row.city }}{{ scope.row.district }}{{ scope.row.address }}
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row.id)">删除</el-button>
              <el-button size="mini" type="primary" @click="add()" primary>
                <i class="el-icon-upload el-icon--right"></i>
                新增地址
              </el-button>
            </template>
          </el-table-column>
          <el-table-column label="选择收货地址">
            <template slot-scope="scope">
              <el-radio v-model="radio" :label="scope.$index">收货地址</el-radio>
            </template>
          </el-table-column>
        </el-table>
        <div v-else>
          <el-button size="mini" type="primary" @click="add()" primary>
            <i class="el-icon-upload el-icon--right"></i>
            暂无收货地址，赶紧添加一条吧
          </el-button>
        </div>
      </div>
      <el-dialog title="新增收货地址" :visible.sync="dialogFormVisible" width="60%">
        <el-form :model="form">
          <el-row>
            <el-col :span="4"><lable>收货地址：</lable></el-col>
            <el-col :span="18"><area-select v-model="address.city" :data="$pcaa" :level="3" type="text"></area-select></el-col>
          </el-row>
          <br />
          <br />
          <el-form-item label="收货人:" :label-width="formLabelWidth"><el-input type="text" v-model="address.name" autocomplete="off" clearable></el-input></el-form-item>
          <el-form-item label="电话号码:" :label-width="formLabelWidth">
            <el-input type="text" v-model="address.phone" autocomplete="off" clearable maxlength="11" oninput="value=value.replace(/[^\d]/g,'')"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="tmd()">确 定</el-button>
        </div>
      </el-dialog>
      <h2>确认订单信息：</h2>
      <el-divider></el-divider>
      <el-table ref="multipleSelection" :data="wcnm" tooltip-effect="dark" style="width: 100%" align="center">
        <el-table-column label="日期" width="120" align="center">
          <template slot-scope="scope">
            {{ scope.row.date }}
          </template>
        </el-table-column>
        <el-table-column property="name" label="姓名" width="120" show-overflow-tooltip align="center"></el-table-column>
        <el-table-column property="address" label="地址" show-overflow-tooltip align="center"></el-table-column>
        <el-table-column property="price" label="期待薪资" sortable align="center"></el-table-column>
        <el-table-column label="数量" sortable align="center">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.num" :min="1"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="头像" width="120" property="path" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.path" width="40" height="40" />
          </template>
        </el-table-column>
        <el-table-column align="center">
          <template slot="header" slot-scope="scope">
            <label>小计</label>
          </template>
          <template slot-scope="scope">
            {{ scope.row.num * scope.row.price }}
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-pagination
          align="center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.$route.params.shopping.length"
        ></el-pagination>
      </div>
      <div>
        <h2>
          共计{{ this.giao }}件;共计￥{{ this.giao1 }}元
          <el-button type="infor" @click="zfb"><img src="../img/支付宝支付.jpeg" width="130px" height="50px" /></el-button>
          <el-button type="infor" @click="wx"><img src="../img/微信支付.jpg" width="130px" height="50px" /></el-button>
        </h2>
      </div>
    </el-main>
    <el-footer align="center">这是屁股</el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      address: {
        id: '',
        memberId: 1,
        name: '',
        phone: '',
        city: [],
        state: 1
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      value1: true,
      radio: 0,
      sity: [],
      currentPage: 1, // 当前页码
      pageSize: 5 // 每页的数据条数
    };
  },
  methods: {
    add() {
      this.address.name = '';
      this.address.phone = '';
      this.address.city = [];
      this.dialogFormVisible = true;
    },
    handleDelete(row) {
      this.$store.dispatch('deSity', row);
      //调用vuex方法删除
      const loading = this.$loading({
        lock: true,
        text: '数据更新中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.8)'
      });
      this.$message({
        message: '地址删除成功',
        type: 'success'
      });
      setTimeout(() => {
        this.$store.dispatch('gtSity');
        loading.close();
      }, 2000);
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      return 'text-align-center';
    },
    rowClass({ row, rowIndex }) {
      return 'text-align-center';
    },
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    zfb() {
      // 购买
      var playerId = 'test-player-' + new Date().getTime() + '-' + Math.floor(Math.random() * 1000);
      var url = 'http://www.wm2en9.cn/pay-page-any/ddpay.html'; //相对路径根据自己网页的实际情况调整
      url += '?playerId=' + playerId; //订单ID （兼容旧的接口，所以名称延用playerId）
      url += '&payTo=' + 'alipay_any';
      url += '&appId=' + 'XYBYcCrBXXYE90E511825AD49B16B727'; //玎玎支付提供的appId
      url += '&goodsName=' + this.shoppingName;
      url += '&alipayRealName=' + '壹心网';
      url += '&goodsPrice=' + this.giao1 * 100;
      url += '&succOpenUrl=' + 'http://www.wm2en9.cn/index.html';
      window.location.href = url;
    },
    wx() {
      var orderNo = 'test-player-' + new Date().getTime() + '-' + Math.floor(Math.random() * 20000);
      var url = 'http://www.wm2en9.cn/pay-page-any/ddpay.html'; //相对路径根据自己网页的实际情况调整
      url += '?payTo=' + 'wxgrskm';
      url += '&appId=' + 'XYBYcCrBXXYE90E511825AD49B16B727'; //玎玎支付提供的appId
      url += '&goodsName=' + this.shoppingName;
      url += '&money=' + this.giao1 * 100;
      url += '&minMoney=' + 1;
      url += '&maxMoney=' + 200;
      url += '&attach=' + 'test';
      url += '&notifyUrl=' + 'http://www.wm2en9.cn/index.html';
      url += '&succOpenUrl=' + 'http://www.wm2en9.cn/index.html';
      window.location.href = url;
    },
    tmd() {
      this.$store.dispatch('adSity', this.address);
      //调用vuex方法删除
      const loading = this.$loading({
        lock: true,
        text: '数据更新中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.8)'
      });
      this.$message({
        message: '地址添加成功',
        type: 'success'
      });
      setTimeout(() => {
        this.$store.dispatch('gtSity');
        loading.close();
      }, 2000);
      this.dialogFormVisible = false;
    }
  },
  computed: {
    giao: function() {
      if (this.$route.params.shopping.length == 0) {
        return 0;
      } else {
        let count = 0;
        for (var i = 0; i < this.$route.params.shopping.length; i++) {
          count = count + this.$route.params.shopping[i].num;
        }
        return count;
      }
    },
    giao1: function() {
      if (this.$route.params.shopping == 0) {
        return 0;
      } else {
        let count = 0;
        for (var i = 0; i < this.$route.params.shopping.length; i++) {
          count = count + this.$route.params.shopping[i].price * this.$route.params.shopping[i].num;
        }
        return count;
      }
    },
    wcnm: function() {
      let tmd = [];
      for (var i = 0; i < this.$route.params.shopping.length; i++) {
        tmd.push(this.$route.params.shopping[i]);
      }
      return tmd.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
    },
    shoppingName: function() {
      let tmd = [];
      for (var i = 0; i < this.$route.params.shopping.length; i++) {
        tmd.push(this.$route.params.shopping[i].name);
      }
      return tmd;
    }
  }
};
</script>

<style></style>
