<?php
 
$con = mysql_connect("localhost","user","user");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("dazibao", $con);
$q=$_GET["q"];
$sql="INSERT INTO dazibao VALUES ('$q')";

if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  }
//echo "1 record added";

mysql_close($con);
?>