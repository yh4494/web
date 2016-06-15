<?php
	

	$dirPath = "./";
	$action = null;

	//引入文件
	require "./onlineEditor.php";

	//获得onlineEditor对象
	$onlineEditor = new onlineEditor($dirPath);
	$fileMes = $onlineEditor->main();

	//处理文件路径
	function subFilePath($dirPath,$filename){
		// echo $dirPath . $filename;
		return $dirPath . $filename;
	}

	//初始化
	if(array_key_exists('action', $_GET)){
		switch ($_GET['action']) {
			case 'updata':
				$action = 'updata';
				break;
			case 'del':
				$onlineEditor->delFile(subFilePath($dirPath,$_GET['filename']));
				$action = 'del';
				echo subFilePath($dirPath,$_GET['filename']);
				echo "<script>location.href = 'index.php';</script>";
				break;
		}
	} else{
		$action = null;
	}

	if(array_key_exists('action', $_POST)){
		switch ($_POST['action']) {
			case 'create':
				$onlineEditor->createFile(subFilePath($dirPath,$_POST['filename']));
				echo "<script>location.href = 'index.php';</script>";
				break;
		}
	}

	//获取文件内容
	if(array_key_exists('filename', $_GET) && $_GET['action'] == 'updata'){
		$root = subFilePath($dirPath,$_GET['filename']);
		$fileContent = $onlineEditor -> getContent($root);
	} else
		$fileContent = "坚持就是胜利";

	if (array_key_exists('filecontent', $_POST)) {
		// var_dump($_POST);
		$onlineEditor->putContent(subFilePath($dirPath,$_POST['filename']),$_POST['filecontent']);
		echo "<script>location.href = 'index.php';</script>";
	}	


	//引入界面
	require "./viewEditor.html";

	// print_r($fileMes);



?>