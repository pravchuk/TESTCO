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
$opt1=$_GET["opt1"];
$opt2=$_GET["opt2"];
$opt3=$_GET["opt3"];
$opt4=$_GET["opt4"];
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
$item=array("ca" => $ca, "marks" => $marks, "opt1" =>$opt1, "opt2" =>$opt2, "opt3" =>$opt3, "opt4" =>$opt4, "qid" => strval($qid), "qtype" => "mcq", "question" => $ques, "subject" => $subj, "tags" => $tags, "testId" => $testId, "validated" => "no"); 
//$item=array("ca" => $ca, "marks" => $marks ,"opt1"=>$opt1,"opt2"=>$opt2,"opt3"=>$opt3,"opt4"=>$opt4 , "qid" => $qid, "qtype" => "mcq", "question" => $ques, "subject" => $subj, "tags" => $tags, "testId" => $testId, "validated" => "no");
$collection->insert($item);
 
?>   