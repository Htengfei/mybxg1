define(['jquery'],function($){
	//工具函数
	return{
		//设置导航菜单选中
		setMenu: function(path){//设置导航菜单选中
			$('.navs a[href="'+path+'"]').addClass('active');//组合选择器，类选择器，标签选择器，属性选择器
		},
		qs:function(key){//获取指定的URL参数值
			//uname=lisi&flag123
			var param=location.search.substring(1);//去掉?
			var result=null;
			if(param){
				var kvs=param.split('&');//去掉&
				$.each(kvs,function(i,item){
					var kv=item.split('=');
					if(key==kv[0]){
						result=kv[1];
						return false;//终止循环
					}
				});
			}
			return result;		
		}
	
	}
})