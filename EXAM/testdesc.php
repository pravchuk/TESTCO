<?php
//$sub = $_GET['sub'];
//$ca = $_GET['ca'];
// Config  
$dbhost = 'localhost';  
$dbname = 'testco';  
//$name=$_POST["username"];
//$password=$_POST["password"];
// Connect to test database  
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname;  
  
// select the collection  
$collection = $db->testdesc;  
//insert a tupple
//$item=array('uname'=>'neo','age'=>28,'profession'=>'hacker');
//$collection->insert($item);
  
// pull a cursor query  
$aa=array('sub'=>'phy');
$sds=array('ca'=>false);
$cursor = $collection->find($aa,$sds);
	echo '[ {},';
  foreach($cursor as $document) {
	$p=array('tag'=>'gravity');
//	$cursor1 = $collection->find($p,$sds);
	//	foreach($cursor1 as $document) {
		{	echo json_encode($document).',';
			//header('Location:profile.html');			
		}
	//	echo ',';
}
echo ' ]';
?>  