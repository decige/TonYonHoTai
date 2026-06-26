<template>
 
    <el-aside width="width" >
      <!-- 在el-menu 上添加 :router="true" ：然后 el-menu-item 的 :index 会自动作为路由路径跳转。 -->
     <el-menu 
     text-color="#fff"
     background-color="#545c64"
     :collapse="isCollapse"
     :collapse-transition="false"
     :router="true"
     >
      <h3 v-show="!isCollapse">通用后台管理系统</h3>
      <h3 v-show="isCollapse" >通用后台</h3>
      <el-menu-item v-for="itme in noChhildren" 
      :key="itme.path" 
      :index="itme.path"
      
      >

          <component class="icons" :is="itme.icon" />
          <span>{{ itme.label }}</span>
        </el-menu-item>

        <el-sub-menu v-for="itme in hasChildren" :key="itme.path" :index="itme.path">
          <template #title>
            <component class="icons" :is="itme.icon" />
            <span>{{ itme.label }}</span> 
          </template>
          <!-- <el-menu-item-group
          v-for="(subItme,subIndex) in itme.children" :key="subItme.path" :index="subItme.path"
          >
             <el-icon><component class="icons" :is="subItme.icon" /></el-icon>
            <span >{{ subItme.label }}</span>
           
          </el-menu-item-group> -->
          <el-menu-item-group v-for="(subItme,subIndex) in itme.children" :key="subItme.path" :index="subItme.path">
            
            <!-- <component class="icons" :is="subItme.icon" /> -->
            <el-menu-item :index="subItme.path">{{ subItme.label }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
       
        
      </el-menu>
</el-aside>
    </template>
    <script setup>
    import {ref,computed} from "vue"
    import { useAllDataStore } from "@/stores"
    import { useRouter } from "vue-router"
        const router = useRouter()

// 完整菜单列表数据
const list = ref([
  {
    path: '/home',
    name: 'home',
    label: '首页',
    icon: 'house',
    url: 'Home'
  },
  {
    path: '/mall',
    name: 'mall',
    label: '商品管理',
    icon: 'video-play',
    url: 'Mall'
  },
  {
    path: '/user',
    name: 'user',
    label: '用户管理',
    icon: 'user',
    url: 'User'
  },
  {
    path: '/other',
    name: 'other',
    label: '其他',
    icon: 'location',
    // 二级子菜单
    children: [
      {
        path: '/page1',
        name: 'page1',
        label: '页面1',
        icon: 'setting',
        url:'page1'
      },
      {
        path: '/page2',
        name: 'page2',
        label: '页面2',
        icon: 'setting',
        url: 'page2'
      }
    ]
  }
])
    const noChhildren = computed(() =>  list.value.filter(item => !item.children))
    const hasChildren = computed(() => list.value.filter(item => item.children))
                    const clickMenu = (item) => {
            console.log(item);
            router.push(item.path)
        }

        const stort=useAllDataStore()
        // const isCollapse=computed(()=>stort.state.isCollapse)
        // const width=compute(()=>stort.state.isCollapse) ? '64px' : '180px'
        const isCollapse = computed(() => stort.state.isCollapse)
        const width = computed(() => stort.state.isCollapse ? '64px' : '180px')
    </script>

    <style scoped lang="less">
    .icons {
        width:20px;
        height:20px;
        color:#fff;
        margin-right: 5px;
}
    .el-menu {
        border-right: none;
        h3{
            line-height: 55px;
            color: #fff;
            text-align: center; 
            font-size:18x;
        }
        

} 
.el-aside{
            height: 100%;
            background-color: #545c64;

        }
    </style>