<?php  
// Config  
$dbhost = 'localhost';  
$dbname = 'testco';  

// Connect to test database 
session_start(); 
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname;  
$name=$_SESSION["username"]; 
//echo $name;
// select the collection
  
$collection = $db->profiles;  
  
// pull a cursor query 

$aa = array('name'=>$name);
$sds=array('_id'=>true);
$cursor = $collection->find($aa);
  foreach($cursor as $document) {
	echo json_encode($document);	
	//header('Location:profiles.js');
} 

?>   