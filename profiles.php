<?php  
// Config  
$dbhost = 'localhost';  
$dbname = 'testco';  

// Connect to test database  
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname;  
  
// select the collection  
$collection = $db->profiles;  
  
// pull a cursor query  
$aa = array('name'=>'Mansi Mishra');
$sds=array('_id'=>true);
$cursor = $collection->find($aa);
  foreach($cursor as $document) {
	echo json_encode($document);			
} 

?>   