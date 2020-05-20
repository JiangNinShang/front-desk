import axios from 'axios'
export default {
  //添加到购物车
  add(state, value) {
    state.tableData.push(value);
    //添加到緩存
  },
  gtSity(state) {
    axios.get('Address/getAddress').then((res) => {
      state.site = res.data;
    }).catch((err) => {
      console.log(err)
    })
  },
  delete(state, value) {
    state.tableData.splice(value, 1)
  }
}
