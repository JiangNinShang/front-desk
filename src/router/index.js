import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/Login"
import Regsiter from "@/components/Register"
import Forget from "@/components/Forget"
import First from "@/page/First"
import Home from "@/page/Home"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/home",component:Home},
    {path:"/login",component:Login},
    {path:"/forget",component:Forget},
    {path:"/register",component:Regsiter},
    {path:"/first",component:First}
  ]
})
