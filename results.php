<?php  
// Config  
$dbhost = 'localhost';  
$dbname = 'testco';  
//$name=$_POST["username"];
//$password=$_POST["password"];
// Connect to test database  
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname;  
  
// select the collection  
$collection = $db->mockresult;  
//insert a tupple
//$item=array('uname'=>'neo','age'=>28,'profession'=>'hacker');
//$collection->insert($item);
  
// pull a cursor query  
//$aa=array('uname'=>'manisha','mcqs'=>45);
$aa=array('name'=>'Arvind');
$sds=array('_id'=>false);
$cursor = $collection->find($aa,$sds);
  foreach($cursor as $document) 
  {
			echo json_encode($document);
			//header('Location:profile.html');			
} 
?>   