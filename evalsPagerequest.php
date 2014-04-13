<?php  
// Config  
$dbhost = 'localhost';  
$dbname = 'testco';  
$userId=$_GET["userId"];
$testId=$_GET["testId"];
// Connect to test database  
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname;  
  
// select the collection  
$collection = $db->studentAns;  
//insert a tupple
$item=array('userId'=>$userId,'testId'=>$testId);
//$collection->insert($item);
  
// pull a cursor query  
$sds=array('_id'=>false);
$cursor = $collection->find($item,$sds);
foreach($cursor as $document) {
	echo json_encode($document);
	//header('Location:profile.html');//the page you want to be directed to	
		// url to run the script:  http://localhost/TESTCO/evalspagerequest.php?userId=a1&testId=t1
}  
?>   