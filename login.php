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
$collection = $db->logins;  
//insert a tupple
$item=array('uname'=>'neo','age'=>28,'profession'=>'hacker');
//$collection->insert($item);
  
// pull a cursor query  
$aa=array('uname'=>$name);
$sds=array('_id'=>false);
$cursor = $collection->find($aa,$sds);
  foreach($cursor as $document) {
	$p=array('pass'=>$password);
	$cursor1 = $collection->find($p,$sds);
		foreach($cursor1 as $document) {
			echo json_encode($document);
			header('Location:profile.html');			
} } 
?>   