<?php  
//header('Content-type: application/json');
// Config  
$dbhost = 'localhost';  
$dbname = 'testco';  
$userId=$_GET["userId"];
$testId=$_GET["testId"];
$qid=$_GET["qid"];
$marks=$_GET["marks"];
// Connect to test database  
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname;  
  
// select the collection  
$collection = $db->studentAns;  
//insert a tupple
$item=array('userId'=>$userId,'testId'=>$testId,'qid'=>$qid);
//$collection->insert($item);
  
// pull a cursor query
$rec=array('marksobt'=>$marks);  
$up=array('$set'=>$rec);
$cursor = $collection->update($item,$up);
//foreach($cursor as $document) {
//	echo json_encode($document);
	//header('Location:profile.html');//the page you want to be directed to	
		// url to run the script:  http://localhost/TESTCO/evalspagerequest.php?userId=a1&testId=t1
//}  
?>   