define(['jquery','template','util'],function($,template,util){
	//设置导航菜单选中
	util.setMenu(location.pathname);
	//获取课程数据列表
	$.ajax({
		type : 'get',
		url : '/api/course',
		dataType : 'json',
		success:function(data){
			//解析数据
			var html=template('courseTpl',{list:data.result});//写data，然后遍历得到result也可以
			$('#courseInfo').html(html);
		}
	})
})