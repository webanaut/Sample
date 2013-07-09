<?php
//name: xml/getshout.php
require_once("../../lib/database.inc");
require_once("../../lib/db_functions.inc");

$xmlString = "";

$sql = "SELECT  shout_messages.shout_id,
				shout_messages.shout_user,
				shout_messages.shout_message,
				shout_messages.shout_timestamp,
				shout_users.uid,
				shout_users.username \n";
$sql .= "FROM shout_messages \n";
$sql .= "INNER JOIN shout_users \n";
$sql .= "ON shout_messages.shout_user = shout_users.uid \n";
$sql .= "WHERE (shout_messages.shout_message <> '') \n";
$sql .= "ORDER BY shout_messages.shout_timestamp DESC limit 5 ";
$result = dbQuery($sql);

while($row=mysql_fetch_row($result)){
	$xmlString .= "<id>".$row[0]."</id> \n";
	$xmlString .= "<message>".htmlspecialchars(stripslashes($row[2]))."</message> \n";
	$xmlString .= "<timestamp>".$row[3]."</timestamp> \n";
	$xmlString .= "<userid>".$row[4]."</userid> \n";
	$xmlString .= "<username>".$row[5]."</username> \n";
}
header('Content-type: application/xml');
echo "<?xml version=\"1.0\" encoding=\"utf-8\" ?> \n";
echo "<dataset> \n";
echo "   $xmlString";
echo "</dataset>";
?>