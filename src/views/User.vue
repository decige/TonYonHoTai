<template>
    <div class="user-header">
        <el-button type="primary" >新增</el-button>
        <!-- el-form-item默认垂直布局，加上inline属性就变成水平布局 -->
        <el-form :inline="true" :model="formInline">
            <el-form-item label="请输入">
                <el-input placeholder="请输入用户名" width="20px" v-model="formInline.keyword"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="handleSearch">搜索</el-button>
            </el-form-item>
        </el-form>
    </div>
    <div class="table"> 
        <el-table :data="tableData" style="width: 100%">
    <el-table-column 
    v-for="item in tableLabel"
    :key="item.prop"
    :width="item.width ? item.width : 125"
    :prop="item.prop"
    :label="item.label"
    />
    
    <el-table-column fixed="right" label="Operations" min-width="120">
      <template #default>
        <el-button type="primary" size="small" >
          编辑
        </el-button>
        <el-button type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script setup >
import {ref,getCurrentInstance,onMounted, reactive} from "vue"
const config=reactive({
    name:''
})
const handleSearch = () => {
    config.name=formInline.keyword
    getUserData()
}
const formInline=reactive({
    keyword:''
})
const tableData = ref([])
const {proxy}=getCurrentInstance()

const getUserData=async ()=>{
    let data=await proxy.$api.getUserData(config)
    console.log(data)
    tableData.value=data.list.map(item=>({
        ...item,
        sexLabel : item.sex===1?'男' : '女'
    }))
}

const tableLabel=reactive([
    {
        prop:'name',
        label:'姓名'
    },
     {
        prop:'age',
        label:'年龄'
    },
     {
        prop:'sexLabel',
        label:'性别'
    },
     {
        prop:'birth',
        label:'出生日期',
        width:200
    },
     {
        prop:'addr',
        label:'地址',
        width:400
    }
])
onMounted(()=>{
getUserData()
})
</script>
<style>
.user-header{
    display: flex;
    justify-content: space-between;
   
}
</style>