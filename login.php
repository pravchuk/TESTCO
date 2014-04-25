<?php  
// Config  
$dbhost = 'localhost';  
$dbname = 'testco';  

$username=$_POST["username"];
$password=$_POST["password"];
$url = $_POST["url"];
// Connect to test database  
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname;  
  
// select the collection  

$collection = $db->logins;  
//insert a tupple
//$collection->insert($item);

// pull a cursor query  
$aa=array('uname'=>$username);
$sds=array('_id'=>false);
$cursor = $collection->find($aa,$sds);
  foreach($cursor as $document) {

  	//checking if cookie exists
  	if($_COOKIE['sessionid']){
  		$d = array('sessionid'=>$_COOKIE['sessionid']);
  		$cursor1 = $collection->find($d,$sds);
  		if($cursor1){
  			echo "Authenticated";
  		}else{
  			//go to login page
  			header('Location:login.php');
  		}
  	}
  	else{
		$p=array('pass'=>$password,'uname'=>$name);
		$cursor1 = $collection->find($p,$sds);

		foreach($cursor1 as $doc) {
			echo json_encode($doc);
		
			$mapassword = 'chukkaisgreat';
			$mysession = md5($username.$password.$mapassword);
			setcookie('sessionid',$mysession);
			
			$newdata = array('$set' => array("sessionid" => $mysession));
			$collection->update(array("uname" => $username), $newdata);

			// $url="profiles.php?username=".$name;

			// header('Location:profiles.php?username='.$name);
			
		}
	}

} 
?>   