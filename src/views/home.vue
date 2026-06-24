<template>
<!-- Element Plus 默认把一行分成 24 等份，span 表示占几份，gutter 是列之间的间距 -->
    <el-row class="home" :gutter="20">
      <!-- row里的col水平排列，col里的元素垂直排列 -->
      <!-- 左侧 -->
   <el-col :span="8" style="margin-top: 20px;">
        <el-card class="hover">
         <!-- 分俩个div上下 -->
         <div class="user">
            <!-- 传入图片名字，返回图片地址函数以写 -->
            <img :src="getImageUrl('user')" class="user">
            <div class="user-info">
               <p class="user-info-admin">Admin</p>
            <p class="user-info-p">超级管理员</p>
            </div>
         </div>
         <div class="login-info">
             <p>上次登录时间 <span>2023-10-01 10:00:00</span></p>
            <p>上次登录地点 <span>北京市</span></p>

         </div>
        </el-card>
         <el-card shadow="hover" class="user-table">
            <el-table :data="tableData" >
            <el-table-column
            v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val"
            >
         
         </el-table-column>
            </el-table>
        </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px;">
       <div class="num-box">
          <el-card :body-style="{ padding: '0',display:'flex'}" 
         v-for="item in countData " :key="item.name">
         <component :is="item.icon" class="icon" :style="{background:item.color}">

         </component>
         <div class="detail">
              <p class="num">@{{ item.value }} </p>
              <p class="txt">@{{ item.name }} </p>
            
         </div>
        </el-card>
       </div>

       <el-card class="top-echart">
         <div ref="echart" style="height: 290px;">

         </div>

       </el-card>

    <div class="graph">
      <el-crad>
         <div class="" style="height: 10px;">啊啊啊啊</div>
      </el-crad>
    </div>
    
       
   </el-col>
    
  </el-row >

</template>

<script setup>
import {ref,getCurrentInstance,onMounted} from "vue"
import * as echarts from 'echarts'
const {proxy} = getCurrentInstance();//此时proxy.api就等于api.js中定义的函数了,proxy.$api 等价于 import api from '@/api' 拿到的对象
function getImageUrl(name) {
  return new URL(`../assets/image/${name}.png`, import.meta.url).href;
}
//折线图
const option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 43, 49],
      type: 'line',
      stack: 'x'
    },
    {
      data: [5, 4, 3, 5, 10],
      type: 'line',
      stack: 'x'
    }
  ]
};

//柱状图
const barOption = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    }
  ]
};

//声明
const tableData = ref([]);
const tableLabel = ref({});
const countData = ref([]);
const chartData=ref([]);

//这个tableData是假数据，等会我们使用axios请求mock数据

//先外部定义好函数，等会在onMounted生命周期函数中调用
const getTabData=async()=>{
      const data = await proxy.$api.getTableData();
      console.log("数据data:", data);
      tableData.value = data.tableData;
  
}
const getTabLabel=async()=>{
      const data = await proxy.$api.getTableLabel();
      console.log(data);
      tableLabel.value = data.tableLabel;
  
}
const getCountData=async ()=>{//async函数的作用是让函数内部可以使用await来等待异步操作完成
      const data = await proxy.$api.getCountData();
     console.log(data);
      countData.value = data.countData;
      console.log(countData.value);
  
} 
const getChartData=async ()=>{//async函数的作用是让函数内部可以使用await来等待异步操作完成
      const {orderData} = await proxy.$api.getChartData();
      //对第一个图表数据进行处理，echarts要求x轴和y轴的数据是两个数组，所以我们要把orderData中的date和data分别取出来
      const xData = orderData.date;
      const yData = orderData.data;
     const oneEchart=echarts.init(proxy.$refs['echart'])
     oneEchart.setOption(option);
     //oneEchart.setOption(barOption);
  
} 
//使用onMounted生命周期函数，格式onMounted( 回调函数 )，最好在外部定义好函数，回调函数直接调用就行了，因为如果有多个函数要调用就都放里面
onMounted(() => {
   getTabData();
   getTabLabel();
   getCountData();
   getChartData();
   
})

</script>
<style scoped lang="less">
.home-wrapper {
  background: #f5f5f5; /* 整体浅灰色背景 */
  padding: 20px;
  min-height: 100vh;
}
.home{
   height: 100%;
   overflow: hidden;
   .user{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-right: 20px;
      img{
         width:150px;
         height: 150px;
         border-radius: 50%;
         margin-right: 40px;
      }
      .user-info{
         p{
        line-height: 40px;
      }
      .user-info-p{
         color: #999;
      }
      .user-info-admin{
         font-size: 35px;
      
   }
   }
   
   }
   .login-info{
      margin-top: 20px;
      p{
         line-height: 30px;
         font-size: 14px;
         color:#999;
         span{
            color:#666;
            margin-left:60px;
         }
      }
   }
}
.user-table{
   margin-top: 20px;
}
.num-box{
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   .el-card{
      width: 30%;
      margin-bottom: 20px;
   }
      .icon{
         width: 80px;
         height: 80px;
         font-size: 30px;
         text-align: center;
         line-height: 80px;
         color: #ec6d6d;
         
      }
      .detail{
         margin-left: 15px;
         display: flex;
         flex-direction: column;
         justify-content: center;
         .num{
            font-size: 30px;
            margin-bottom: 10px;
         }
         .txt{
            color:#999;
            font-size: 14px;
            text-align: center;
         }
      }
   

} 
</style>
