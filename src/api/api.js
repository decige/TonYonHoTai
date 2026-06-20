//整个项目的api统一管理，不用每个组件都去写请求接口了
import request from "./request";//直接使用这个函数来发送请求,这个函数在request.js里已经封装好了,我们只需要调用它就可以了
export default {
    //封装request.js里已经封装好的函数,就不用重复写then和catch了,直接调用这个函数就可以了
    getTableData(){
        return request({
            url:"/api/getTableData",
            method:"get"
        })
     },
     getTableLabel(){
        return request({
            url:"/api/getTableLabel",
            method:"get"
        })
     }
    

}