define(['jquery','template','util','datepicker','language','validate'],function($,template,util){
	//设置菜单选中
	util.setMenu('/teacher/list');
	//获取编辑的讲师ID
	var tcId = util.qs('tc_id');
	if(tcId){ 
		//编辑操作（根据ID调用后台接口获取数据）
		$.ajax({
			type : 'get',
			url : '/api/teacher/edit',
			data : {tc_id : tcId},
			dataType : 'json',
			success : function(data){
			// console.log(data);
				//解析数据渲染页面
				data.result.operate='编辑讲师';//将讲师添加改为编辑讲师
				var html=template('teacherTpl',data.result);
				$('#teacherInfo').html(html);
				//提交编辑讲师表单(必须写在success里面，因为ajax是异步执行，只有写在success里面，才能保证在提交表单之前ajax已经加载了表单)
				submitForm('/api/teacher/update');
			}			
		});
	}else{
		//添加操作
		var html=template('teacherTpl',{operate:'添加讲师',tc_gender:0});
		$('#teacherInfo').html(html);
		//提交添加讲师表单
		submitForm('/api/teacher/add');		
		}

	// 提交表单公用方法
	function submitForm(url){
		$('#teacherForm').validate({
			sendForm : false,//禁用默认提交
			valid : function(){
				//这里应该提交表单
				 
			},
			description : {
				tc_name : {
					required : '请输入用户名',
					valid : '用户名可以使用'
				},
				tc_pass : {
					required : '请输入密码',
					pattern : '密码必须是六位数字',
					valid : '密码有效'
				},
				tc_join_date : {
					required : '请输入日期',
					valid : '日期有效'
				}
			}
		})
	}

	// function submitForm(url){
	// 	$('#teacherBtn').click(function(){
	// 		$.ajax({
	// 			type : 'post',
	// 			url : url,
	// 			data : $('#teacherForm').serialize(),
	// 			dataType : 'json',
	// 			success:function(data){
	// 				// 成功后跳转列表页
	// 				if(data.code==200){
	// 					location.href='/teacher/list'
	// 				}
	// 			}
	// 		})
	// 	})
	// }	
})

