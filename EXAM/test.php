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
$collection = $db->mcq;  
//insert a tupple

$aa=array();//'sub'=>'phy','sub'=>'chem','sub'=>'math');
$sds=array('ca'=>false);
$cursor = $collection->find($aa,$sds);
	echo '[ {},';
  foreach($cursor as $document) {
	//$p=array('tag'=>'gravity');
//	$cursor1 = $collection->find($p,$sds);
	//	foreach($cursor1 as $document) {
		{	echo json_encode($document).',';
			//header('Location:profile.html');			
		}
	//	echo ',';
}
echo ' ]';
?>  