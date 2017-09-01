
require.config({
  baseUrl : '/public/assets',
  paths : {
    jquery : 'jquery/jquery',
    cookie : 'jquery-cookie/jquery.cookie',
    template : 'artTemplate/template-web',
    bootstrap : 'bootstrap/js/bootstrap.min',
    common : '../js/common',
    login : '../js/login',
    teacherlist : '../js/teacher-list'
  },
  shim : {//垫片，将非标准模块转换为标准模块
  	bootstrap : {
  		deps : ['jquery']
  	}
  }
});