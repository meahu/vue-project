<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    
<router-link :to="{ path: '/tabs/sub1' }">配置管理</router-link>
<router-link :to="{ path: '/tabs/sub2' }">用户管理</router-link>
    <!-- <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
    <router-view></router-view>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>