if (process.env.NODE_ENV == "development") {
  // 开发
  var BASE_URLA = "http://47.98.169.218:8083";
  // var BASE_URLA = "http://192.168.0.189:8083";
  // var BASE_URLA = 'http://sign.xn--fjq0sg8h2zkivvwsonptcv2b.com/api'
  var information = "http://47.98.169.218:8090"
} else if (process.env.NODE_ENV == "debug") {
  // debug
  var BASE_URLA = "http://47.98.169.218:8083";
  var information = "http://47.98.169.218:8090"
} else if (process.env.NODE_ENV == "production") {
  // 生产
  var BASE_URLA = "http://47.98.169.218:8083";
  // var information = "http://47.98.169.218:8090"
  var information = "http://sign.xn--fjq0sg8h2zkivvwsonptcv2b.com/web/api:8090"
}
window.information = information;
window.BASE_URLA = BASE_URLA;
export default {
  // baseUrl: BASE_URLA,
  information,
  BASE_URLA,
  // 人脸补录
  // updatePersonImg: `POST ${BASE_URLA}/faceplat/facePersonImg/updatePersonImg.do`
  // 获取类别列表
  catList: `${BASE_URLA}/textbook/catList`,
  // 获取列表 
  list: `${BASE_URLA}/textbook/list`,
  // 教材详情 
  info: `${BASE_URLA}/textbook/info`,
  // 获取考试须知 
  getNotes: `${BASE_URLA}/exam/notes/getNotes`,
  // 获取考试流程 
  getProcess: `${BASE_URLA}/exam/process/getProcess`,
  // 资讯类别列表
  informationCategory: `${information}/information/category/list`,
  // 资讯列表
  informationList: `${information}/information/list`,
  // 资讯详情 
  informationInfo: `${information}/information/info`,
  // 获取考试流程详情
  getProcessInfo: `${BASE_URLA}/exam/process/getProcessInfo`,
  // 联系我们 
  contact: `${BASE_URLA}/contact/us/search`,
};
