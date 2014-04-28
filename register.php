<?php  
// Config  
$dbhost = 'localhost';  
$dbname = 'testco';  

$name=$_POST["usernamesignup"];
$pass=$_POST["password"];
$email=$_POST["emailsignup"];
//$url = $_POST["url"];
// Connect to test database  
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname;  
  
// select the collection  

$collection = $db->loginpage;  
$col = $db->profiles;  
//insert a tupple
//$collection->insert($item);
//echo $uname,$email,$pass;
// pull a cursor query  
$val=rand(3,100);
$n=explode(' ', $name);
$id="student".$val;
$uname=$n[0]."_student";
$res=array("uname"=>$uname,"pass"=>$pass,"email"=>$email,"_id"=>$id);
//$res=array("mcq"=>$ca,"dq"=>$dq,"ddq"=>$ddq);
$collection->insert($res);
$res2=array("uname"=>$uname,"pass"=>$pass,"email"=>$email,"_id"=>$id,"name"=>$name);
$col->insert($res2);
header("location:http://localhost/TESTCO/login.html");
 
?>   