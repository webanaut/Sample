<?php
/*name: saywhataction.php
params: "username="+document.forms['saywhatform']['username'].value+"&userMessage="+document.forms['saywhatform']['usermessage'].value;
*/

require_once("../lib/database.inc");
require_once("../lib/db_functions.inc");

foreach($_POST as $k => $v){
	${$k} = trim($v);
}

if(strlen(trim($username)) && strlen(trim($usermessage))){
  $sql = "SELECT uid FROM shout_users WHERE (username='$username')";
  $result = dbQuery($sql);
  if(mysql_num_rows($result)){
	  while($row=mysql_fetch_row($result)){
		  $sql = "INSERT INTO shout_messages (shout_user,shout_message) VALUES ('".$row[0]."','".addslashes($usermessage)."')";
		  $result = dbQuery($sql);
	  }
  }
}
?>