<?php  
// Config  
$todo=$_POST['what'];
$size=$_POST['size'];

	$ans=array();
	//echo "great";
	for ($i =1; $i < $size; $i++)
	{
		$a=$i."";
		 $ans[$i] = $_POST[$a];
		//echo ($ans[$i]);
	}
//	$ans = $_POST['1'];
	//echo $ans[3];
	$dbhost = 'localhost';  
$dbname = 'testco';  
//$name=$_POST["username"];
//$password=$_POST["password"];
// Connect to test database  
$m = new Mongo("mongodb://$dbhost");  
$db = $m->$dbname;  
$ca=0; 
$dq=0;
$ddq=0;
// select the collection  
$collection = $db->mcq;    
// pull a cursor query  
//$aa=array('uname'=>'manisha','mcqs'=>45);
for ($i =1; $i < $size; $i++)
{
	$aa=array('qNo'=>$i);
	$sds=array('_id'=>false);
	$cursor = $collection->find($aa,$sds);
	$cursor = iterator_to_array($cursor);
	//echo($i);
  foreach($cursor as $document) 
  {
		//echo ($document['quest']);
		//echo ($document['ca']);
		//echo ($ans[$i]);
		if($ans[$i]==$document['ca'])//if($ans[$i]==3)
		{
			$ca=$ca+1;
		}
			//header('Location:profile.html');			
  }
}
//echo ' ';

$res= '{ "mcq":'. $ca . ",dq:" . $dq . ',"ddq":'. $ddq .'}';
$res=stripslashes($res);
$fp = fopen('results.txt', 'w');
fwrite($fp, json_encode($res));
fclose($fp);
echo $res;


  
?>   