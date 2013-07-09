<?php
foreach($_GET as $g => $v){
	${$g} = $v;
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Roger That!</title>
<script type="text/javascript" src="scripts/rt.js"></script>
<style>
body{
	font-family:Tahoma, Geneva, sans-serif;
	font-weight:500;
	font-size:12px;
	color:#009;
}
h1{
	font-family:Tahoma, Geneva, sans-serif;
	font-weight:800;
	font-size:12px;
	color:#eee;
}
.header{
	width:280px;
	height:15px;
	line-height:15px;
	background-color:#666;
	border-bottom:#000 thin solid;
	margin:0px 0px 0px 0px;
	padding:0px 5px 0px 5px;
}
.talkletteContainer{
	width:280px;
	height:100%;
}
.talklette{
	float:right;
	width:240px;
	height:40px;
	background-color:#FFF;
	border-bottom:#CCC 1px dotted;
	margin:0px 0px 0px 0px;
	padding:0px 5px 0px 5px;
	font-family:Tahoma, Geneva, sans-serif;
	font-weight:400;
	font-size:10px;
	color:#009;
}
.talkletteUser{
	position:relative;
	top:0px;
	left:0px;
	font-family:Tahoma, Geneva, sans-serif;
	font-weight:400;
	font-size:10px;
	color:#099;
}
.talkletteUserImage{
	float:left;
	margin-left:-35px;
	margin-right:5px;
	width:38px;
	height:38px;
	border:#00a thin dotted;
	background-color:#eee;
	background-image:url('images/silhouette.jpg');
}
#shoutId{
	visibility:hidden;
}
#shoutUserId{
	visibility:hidden;
}
#shoutUserName{
	visibility:hidden;
}
#shoutMessage{
	visibility:hidden;
}
#shoutTimestamp{
	visibility:hidden;
}
#oldId{
	visibility:hidden;
}
</style>
</head>

<body>
	<div id="rtContainer">
		<div class="header"><h1>Roger That!</h1></div>
    </div>
<label id="shoutId"></label>
<label id="shoutUserId"></label>
<label id="shoutUserName"></label>
<label id="shoutMessage"></label>
<label id="shoutTimestamp"></label>
<label id="oldId"></label>
</body>
</html>