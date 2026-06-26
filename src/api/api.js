//整个项目的api统一管理，不用每个组件都去写请求接口了
import { mock } from "mockjs";
import usesApi from "./mockData/user"
import request from "./request";//直接使用这个函数来发送请求,这个函数在request.js里已经封装好了,我们只需要调用它就可以了
export default {
    //封装request.js里已经封装好的函数,就不用重复写then和catch了,直接调用这个函数就可以了
    getTableData(){
        return request({
            //url:"https://apifoxmock.com/m1/4068509-0-default/api/home/getTable",
           // url:"/getTable",
           url:"/getTable",
            method:"get",
           // mock:true, //true,就会使用mockApi这个地址,如果false,就会使用baseApi这个地址
        })
     },
     getTableLabel(){
        return request({
            url:"/home/getTableLabel",
            method:"get",
            //true,就会使用mockApi这个地址,如果false,就会使用baseApi这个地址
           // mock:false,
        })
     },
     getCountData(){
        return request({
            url:"/home/getCountData",
            method:"get",
            //true,就会使用mockApi这个地址,如果false,就会使用baseApi这个地址
            // mock:true,
        })
     },
      getChartData(){
        return request({
            url:"/home/getChartData",
            method:"get",
            //true,就会使用mockApi这个地址,如果false,就会使用baseApi这个地址
            // mock:true,
        })
     },
      getUserData(){
        return request({
            
            url:"/home/getUserData",
            method:"get",
            //true,就会使用mockApi这个地址,如果false,就会使用baseApi这个地址
            //mock:true,
            
        })
     }
    

}