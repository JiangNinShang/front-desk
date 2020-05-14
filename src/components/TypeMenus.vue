<template>
     <div class="">
     
       <label v-for="(types,index) in typeList" :key="index" >
    	<el-menu-item v-if="types.childType==null"
                    :key="types.id" :data="types" :index="types.typeName+''">
        <!--标题-->
        <span slot="title">{{types.typeName}}</span>
      </el-menu-item>
      
      <!--有多级菜单-->
      <el-submenu v-if="types.childType!=null"
                  :key="types.id" :data="types" :index="types.typeName+''">
        <template slot="title">
          <span> {{types.typeName}}</span>
        </template>
        <!--递归组件，把遍历的值传回子组件，完成递归调用-->
        <type-menus :typeList="types.childType"></type-menus>
      </el-submenu>

    </label>

  </div>
</template>

<script>
export default {
     name: 'TypeMenus', //使用递归组件必须要有
    props: ['typeList'], // 传入子组件的数据
    data() {
        return {}
    },
    components: {},
    methods: {}
}
</script>

<style  scoped>
</style>
