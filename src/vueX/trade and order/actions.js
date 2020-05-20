import axios from 'axios'
export default {
  add(context, value) {
    context.commit('add', value)
  },
  delete(context, value) {
    context.commit('delete', value)
  },
  deSity(context, value) {
    let parmens = new URLSearchParams()
    parmens.append('id', value);
    axios.post('Address/deAddress', parmens).then((res) => {}).catch((err) => {
      console.log(err)
    })
  },
  //删除商品
  delete(context, value) {
    context.commit('delete', value)
  },
  //新增地址
  adSity(context, value) {
    let parmens = new URLSearchParams()
    parmens.append('id', value.id);
    parmens.append('memberId', value.memberId);
    parmens.append('name', value.name);
    parmens.append('phone', value.phone);
    parmens.append('sity', value.city);
    axios.post('Address/adAddress', parmens).then((res) => {}).catch((err) => {
      console.log(err)
    })
  },
  //新增订单
  adOrder(state, value) {

  },
  gtSity(context) {
    context.commit('gtSity')
  }
}
