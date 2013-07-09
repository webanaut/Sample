<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>The I-Ching Hexagrams</title>
</head>

<body>
<?php
$count = 1;
for($i=64;$i>0;$i--){
	$number = decbin ( 64 - $i );
	if (strlen("$number") == 5){ $number = "0$number"; }
	if (strlen("$number") == 4){ $number = "00$number"; }
	if (strlen("$number") == 3){ $number = "000$number"; }
	if (strlen("$number") == 2){ $number = "0000$number"; }
	if (strlen("$number") == 1){ $number = "00000$number"; }
	echo "<table width=\"400\" height=\"50\"><tr valign=\"middle\"><td>". $count ."</td><td align=\"center\"><div style=\"position:absolute;\">";
	for($ii=0;$ii<strlen("$number");$ii++){
		if(substr("$number",$ii,1)=="0"){ echo "<div style=\"position:absolute;top:-". ((6 * $ii) + 5) ."px;\">_____&nbsp;&nbsp;_____</div>"; }
		if(substr("$number",$ii,1)=="1"){ echo "<div style=\"position:absolute;top:-". ((6 * $ii) + 5) ."px;\">___________</div>"; }
	}
	echo "</div></td></tr></table>";
	echo "<hr>";
	$count++;
}
?>
</body>
</html>
