<template>
<!-- gutter把一行总共分成 20 等份，span 就是占几份。 -->
    <el-row class="home" :gutter="20">
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
    
  </el-row>

</template>
<script setup>
import {ref} from "vue"
function getImageUrl(name) {
  return new URL(`../assets/image/${name}.png`, import.meta.url).href;
}
//这个tableData是假数据，等会我们使用axios请求mock数据
const tableData = ref([
    {
        name: "Java",
        todayBuy: 100,
        monthBuy: 200,
        totalBuy: 300,
    },
    {
        name: "Python",
        todayBuy: 100,
        monthBuy: 200,
        totalBuy: 300,
    }
])

const tableLabel = ref({
    name: "课程",
    todayBuy: "今日购买",
    monthBuy: "本月购买",
    totalBuy: "总购买",
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
</style>
