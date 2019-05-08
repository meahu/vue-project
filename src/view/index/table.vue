<template>
    <div>
      <haha :click1="click1"></haha>
      <haha :click1="click2"></haha>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <div class="haha w10">111</div>
      <img src="../../../static/images/img2.png" alt="">
    </div>
    
  </template>

  <script>
    import axios from 'axios';
    import {getUserInfo} from '@/request/user/index.js'
    // import img2 from '@/asset/css/test2.css'

    export default {
      components : {
      },
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods: {
        click1 () {
          console.log('click1');
        },click2 () {
          console.log('click2');
        }
      },
      mounted () {
        this.$a('1');
        this.$a('2');
        this.$a('3');
        getUserInfo({a: 1, b: 2}).then(function (response) {
        }).catch(err => {
        });
      }
    }
  </script>

<style lang="less">
.haha {
  color: red;
}
</style>
