<?php  
// Config  
$dbhost = 'localhost';  
$dbname = 'testco';  

$name=$_POST["username"];
$password=$_POST["password"];
// Connect to test database  
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname;  
  
// select the collection  
$collection = $db->loginpage;

// pull a cursor query  
$aa=array('uname'=>$name);
$sds=array('_id'=>false);
$cursor = $collection->find($aa,$sds);
  foreach($cursor as $document) {
	$p=array('pass'=>$password,'uname'=>$name);
	$cursor1 = $collection->find($p,$sds);
		foreach($cursor1 as $doc) {
			echo json_encode($doc);
			$url="profiles.php?username=".$name;
			header('Location:profiles.php?username='.$name);
		
			$mapassword = 'chukkaisgreat';
			$mysession = md5($username.$password.$mapassword);
			setCookie('dasession',$mysession);
			
			$addDemSession = $collection->update$mysession;
			
} } 
?>   