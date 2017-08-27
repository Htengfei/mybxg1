<?php
	$dir = 'main';//默认目录名称
	$filename = 'index';//默认文件名称
	//路由：路径的分发，导航  index.php的作用就是根据请求URL的不同导航到不同的页面
	//var_dump($_SERVER);
	//判断数组中是否包含指定的属性
	//'PATH_INFO'是属性，$_SERVER是数组
	if(array_key_exists('PATH_INFO', $_SERVER)){
		//获取URL中的路径 /main/index
		$path = $_SERVER['PATH_INFO'];
		//去掉路径中的第一个斜杠
		$str = substr($path,1);// main/index		
		$arr = explode('/',$str);//分割路径和文件名称
		if(count($arr)==2){
			$dir = $arr[0];//覆盖目录名称
			$filename = $arr[1];//覆盖文件名称
		}else{
			$filename = 'login';//如果不是两层路径就跳转到登录界面
		}

	}
	//路径的格式 
	// /main/index
	// /main/loign
	// /teacher/list
	// /teacher/add

	//在当前页面嵌入子页面
	// include('./views/'.$path.'.html');
	include('./views/'.$dir.'/'.$filename.'.html');

?>