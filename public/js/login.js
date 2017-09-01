define(['jquery','cookie'],function($){
	//实现登录功能
	$('#login').click(function(){		
       $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#loginForm').serialize(),
            dataType:'json',
            success:function(data){
                // console.log(data);
                if(data.code==200){
                	//先保存cookie
                	//data.result是对象，但是data只能存字符串
                	//path:{'/'}设置到根路径，所有页面都能得到
                	$.cookie('loginInfo',JSON.stringify(data.result),{path :'/'});
                    //登录成功，跳转到主页面
                    location.href='/main/index'
                }else{
                    alert('用户名或者密码错误');
                }
            }
       });
        return false;//阻止默认提交事件
    });
});