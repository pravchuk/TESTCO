<?php  
header('Content-type: text/plain');
// Config  
try
{
    $connection = new Mongo('mongodb://kj:kj1234@ds033067.mongolab.com:33067/testco');
    $database   = $connection->selectDB('testco');
    $collection = $database->selectCollection('questions');
}
catch(MongoConnectionException $e)
{
    die("Failed to connect to database ".$e->getMessage());
}
//insert a tupple
$item=array('validated'=>'no','qtype'=>'desc');
//$collection->insert($item);
  
// pull a cursor query  
$sds=array('_id'=>false);
$cursor = $collection->find($item,$sds)->limit(1);
if($cursor)
{
//var_dump ($cursor);
foreach($cursor as $document) {
	echo json_encode($document);
	//header('Location:profile.html');//the page you want to be directed to	
		// url to run the script:  http://localhost/TESTCO/evalspagerequest.php?userId=a1&testId=t1
}
}
else
echo "null"  
?>   