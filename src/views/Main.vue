<template>
<div class="common-layout">
    <el-container class="lay-container">
        <!-- 自定义左侧组件 common-aside -->
        <common-aside></common-aside>
        <el-container>
            <el-header class="el-header">
                <!-- 头部也来个自定义组件common-header -->
                <common-header></common-header>
            </el-header>
            <el-main class="rigth-main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script setup >
import CommonAside from "../components/commonAside.vue"

import CommonHeader from "../components/CommonHeader.vue";
</script>

<style scoped lang="less">
.common-layout,.lay-container{
    height: 100vh;
}
.el-header{
    background-color:#333;
}
</style>