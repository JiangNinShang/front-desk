<template>
  <div id="app">
    <Home  v-if="$store.getters.getUser!=null"></Home>
    <Public v-else></Public>
  </div>
</template>

<script>
import Home from "@/page/Home";
import Public from "@/page/First";

export default {
  name: "App",
  data(){
    return{
     user:{}
    }
  },
  components: {
   Home,
   Public,
  },
  method:{
    
  }
};
</script>
 
<style>

</style>
