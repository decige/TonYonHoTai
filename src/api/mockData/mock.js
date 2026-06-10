import Mock from "mockjs";
//1拦截的路径，2请求方式，3返回的假数据
Mock.mock("/api/getTableData", "get", {
  code: 200,
  data: [
    {
      name: "Java",
      todayBuy: 100,
      monthBuy: 200,
      totalBuy: 300
    },
    {
      name: "Python",
      todayBuy: 100,
      monthBuy: 200,
      totalBuy: 300
    }
  ]
});