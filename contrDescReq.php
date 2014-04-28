<?php  
//header('Content-type: application/json');
// Config  
$dbhost = 'localhost';  
$dbname = 'testco'; 
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname; 
// select the collection  
$collection = $db->questions;  

// Connect to test database  
$abc=array("qid"=>-1);
$cursor=$collection->find()->sort($abc)->limit(1);
if($cursor)
{
$data  = iterator_to_array( $cursor );
//var_dump ($cursor);
foreach($data as $d) {

	echo ($d["qid"]);
}}
	?>