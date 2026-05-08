<template>
    <div class="header">
        <div class="l-content">
            <el-button size="small">
                <component class="icons" is="menu" @click="handleCollapse"></component>
            </el-button>
         <el-breadcrumb separator="/" class="bread">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>

        </div>

        <div class="r-content">
 <el-dropdown>
    <span class="el-dropdown-link">
    <img :src="getImageUrl(`user`)" class="user">

    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
        
      </el-dropdown-menu>
    </template>
  </el-dropdown>

        </div>
    </div>
    </template>
    <script setup>
import {ref,computed} from 'vue'
import { useAllDataStore } from "@/stores"

const stort=useAllDataStore()
const handleCollapse=()=>{
    
    //点击后与本来的isCollapse相反
    stort.state.isCollapse=!stort.state.isCollapse

}
const getImageUrl = (user)=>{
//import.meta.url表示在当前路径找
    return new URL(`../assets/image/${user}.png`,import.meta.url).href
}
    </script>
    <style scoped lang="less">
    .header{
        display:flex;
        justify-content:space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #333;
    }
    .icons{
        width:20px;
        height:20px;
        color:#333;
    }
    .r-content{
        .user{
            width:30px;
            height:30px;
            border-radius: 50%;
        }
      
    }
     .l-content{
        display:flex;
        align-items: center;
        .el-button{
            margin-right: 20px;
        }
       }
       //样式穿透
       :deep(.bread span){
        color:#fff !important;
        cursor: pointer !important;
       }
    </style>