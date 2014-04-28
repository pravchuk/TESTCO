<?php  
//header('Content-type: application/json');
// Config  
$dbhost = 'localhost';  
$dbname = 'testco'; 
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname; 
// select the collection  
$collection = $db->questions;  
 
$ca=$_GET["ca"];
$marks=$_GET["marks"];
$ques=$_GET["ques"];
$subj=$_GET["subj"];
$tags=$_GET["tags"];
$testId=$_GET["testId"];
$qid="";
// Connect to test database  
$abc=array("qid"=>-1);
$cursor=$collection->find()->sort($abc)->limit(1);
if($cursor)
{
$data  = iterator_to_array( $cursor );
//var_dump ($cursor);
foreach($data as $d) {
	$qid=$d["qid"];
	//echo ($d["qid"]);
}}
//insert a tupple
//$item=array('q'=>$userId,'testId'=>$testId,'qid'=>$qid);
$qid=$qid+1;
$item=array("ca" => $ca, "marks" => $marks , "qid" => strval($qid), "qtype" => "desc", "question" => $ques, "subject" => $subj, "tags" => $tags, "testId" => $testId, "validated" => "no");
$collection->insert($item);
 
?>   