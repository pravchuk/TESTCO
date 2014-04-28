<?php  
// Config  
$dbhost = 'localhost';  
$dbname = 'testco';  
session_start();
// Connect to test database  
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname;  
//$name=$_GET["username"]; 
// select the collection  
$collection = $db->res;  
  
// pull a cursor query 
//echo $_SESSION['username'];
$aa = array('uname'=>$_SESSION['username']);
$sds=array('_id'=>true);
$cursor = $collection->find($aa);
  foreach($cursor as $document) {
	echo json_encode($document);	

} 

?>   