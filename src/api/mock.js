import Mock from "mockjs";
import homeApi from "./mockData/home.js";
//1拦截的路径，2请求的类型方法，3返回的假数据
// Mock.mock("/api/getTableData", "get", {
//   code: 200,
//   data: [
//     {
//       name: "Java",
//       todayBuy: 100,
//       monthBuy: 200,
//       totalBuy: 300
//     },
//     {
//       name: "Python",
//       todayBuy: 100,
//       monthBuy: 200,
//       totalBuy: 300
//     }
//   ]
// });
import userApi from "./mockData/user.js"
Mock.mock("/api/getTable", "get",homeApi.getTableData);//品牌数据
Mock.mock("/api/home/getTableLabel", "get", homeApi.getTableLabel);//表格头
Mock.mock("/api/home/getCountData", "get", homeApi.getCountData);//月付
Mock.mock("/api/home/getChartData", "get", homeApi.getChartData);//图表
Mock.mock("/api/home/getUserData", "get", userApi.getUserList);//用户