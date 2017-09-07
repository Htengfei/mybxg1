
require.config({
  baseUrl : '/public/assets',
  paths : {
    jquery : 'jquery/jquery',
    cookie : 'jquery-cookie/jquery.cookie',
    template : 'artTemplate/template-web',
    bootstrap : 'bootstrap/js/bootstrap.min',
    datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker',
    language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',//非标准模块，依赖jquery和datepicker
    validate : 'validate/jquery-validate.min',
    uploadify : 'uploadify/jquery.uploadify.min',
    form : 'jquery-form/jquery.form',
    region : 'jquery-region/jquery.region',
    ckeditor : 'ckeditor/ckeditor',
    nprogress : 'nprogress/nprogress',
    common : '../js/common',
    login : '../js/login',
    index : '../js/index',
    teacherlist : '../js/teacher-list',
    teacheradd : '../js/teacher-add',
    util : '../js/util',
    settings: '../js/settings',
    state : '../js/state',
    courselist : '../js/course-list',
    courseadd : '../js/course-add',
    coursebasic : '../js/course-basic'
  },
  shim : {//垫片，将非标准模块转换为标准模块
  	bootstrap : {
  		deps : ['jquery']
  	},
    language : {
      deps :['jquery','datepicker']
    },
    validate : {
      deps : ['jquery']
    },
    uploadify : {
      deps : ['jquery']
    },
    ckeditor : {
      exports: 'CKEDITOR'//导出
    }
  }
});