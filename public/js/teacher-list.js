define(['jquery','template','util','bootstrap'],function($,template,util){
	// var ret=util.qs('uname');
	// console.log(ret);
	//设置导航菜单选中
	util.setMenu(location.pathname);
	//调用后台接口获取列表数据
	$.ajax({
		type : 'get',
		url : '/api/teacher',
		dataType : 'json',
		success : function(data){
			//解析数据渲染页面
			var html=template('teacherTpl',{list: data.result});
			$('#teacherInfo').html(html);

			// 绑定预览单击事件(如果写在下面，那么按钮还没有生成，没法绑定)
			$('.preview').click(function(){
				var td=$(this).closest('td');//离a标签最近的父元素
				var tcId=td.attr('data-tcId');
				//根据ID查询数据
				$.ajax({
					type : 'get',
					url : '/api/teacher/view',
					data : {tc_id : tcId},
					dataType : 'json',
					success : function(data){
						//解析数据渲染页面
						var html=template('modalTpl',data.result);
						$('#modalInfo').html(html);
						//显示弹窗
						$('#teacherModal').modal();
					}
				})
			});

			//启用注销功能
			$('.eod').click(function(){
			//获取当前记录的ID
				var td=$(this).closest('td');//离a标签最近的父元素
				var tcId=td.attr('data-tcId');
				var tcStatus=td.attr('data-status');
				var that=this;
				//调用接口
				$.ajax({
					type : 'post',
					url : '/api/teacher/handle',
					data : {tc_id : tcId,tc_status : tcStatus},
					dataType : 'json',
					success:function(data){
						if(data.code==200){
							//修改当前状态
							td.attr('data-status',data.result.tc_status);
							//修改文字信息
							if(data.result.tc_status==0){
								$(that).html('注 销');
							}else{
								$(that).html('启 用');
							}
						}
					}
				})
			})
		}
	});

});


