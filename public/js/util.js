define(['jquery'],function($){
	//工具函数
	return{
		setMenu: function(path){
			$('.navs a[href="'+location.pathname+'"]').addClass('active');
		}
	}
})