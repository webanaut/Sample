<?php
function dbQuery($sql){
	$db = new Database();
	$dbConnect = mysql_connect($db->db_host, $db->db_username, $db->db_password) 
		or die("Unable to connect to MySQL");
	$selected = mysql_select_db($db->db_database,$dbConnect) 
		or die("Could not select $dbName");
	$result = mysql_query($sql) or die("<div style='color:red;'>error in SQL: <p>$sql</p><p>".mysql_error()."</p></div>");
	mysql_close($dbConnect);
	return $result;
}
?>