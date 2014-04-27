<?php  
// Config  
$dbhost = 'localhost';  
$dbname = 'testco';  

$username=$_POST["username"];
$password=$_POST["password"];	

//$username="arvind";
//$password="arv";

// Connect to test database  
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname;  
  
// select the collection  

$collection = $db->loginpage;  


// pull a cursor query
session_start();  
$aa=array('uname'=>$username,'pass'=>$password);
$sds=array('_id'=>false);
$cursor = $collection->find($aa,$sds);
foreach($cursor as $doc)
{

  	echo "Authenticated";
	if(isset($_SESSION['username']))
	{
		$_SESSION['insession']=True;
	}
	else
	{
		$_SESSION['username']=$username;
	}
	$redir=explode('_', $username);//$username.split("_");
	echo ($redir);
	if($redir[1]=='admin')
	{
		header('Location:admint.html');
	}
	else if($redir[1]=='eval')
	{
		header('Location:evalpro.html');
	}
	else if($redir[1]=='valid')
	{
		header('Location:val.html');
	}
	else if($redir[1]=='contri')
	{
		header('Location:contripro.html');
	}
	else
	{
		header('Location:studentpro.html');
	}
}
	echo "erroe";
	//header('Location:login.html');
 
?>   