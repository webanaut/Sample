<?php
foreach($_GET as $g => $v){
	${$g} = $v;
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Say What!</title>
<script type="text/javascript" src="scripts/rt.js"></script>
<style>
body{
	font-family:Tahoma, Geneva, sans-serif;
	font-weight:500;
	font-size:12px;
	color:#009;
	margin:0;
	top:0;
}
h1{
	font-family:Tahoma, Geneva, sans-serif;
	font-weight:800;
	font-size:12px;
	color:#fff;
	margin:0;
}
button{
	background-color:#CCC;
	text-align:center;
}
input[type=text]{
	width:100px;
	height:13px;
	line-height:13px;
	font-family:Tahoma, Geneva, sans-serif;
	font-size:11px;
	background-color:#eee;
}
#textmessage{
	width:200px;
	height:44px;
	line-height:13px;
	font-family:Tahoma, Geneva, sans-serif;
	font-size:11px;
	background-color:#eee;
}
.dialogueBox{
	position:absolute;
	top:24px;
	left:8px;
	width:98%;
	border:#444 thin solid;
	background-color:#bbb;
	font-family:Tahoma, Geneva, sans-serif;
	font-size:10px;
	color:#003;
	line-height:12px;
	padding:10px;
	z-index:3;
}
#dialogueBox{
	height:0px;
	visibility:hidden;
}
#saysomething{
	float:right;
	width:24px;
	height:16px;
	margin-right:16px;
	line-height:10px;
	font-family:"Palatino Linotype", "Book Antiqua", Palatino, serif;
	font-size:10px;
	padding:1px 2px 1px 2px;
}
.header{
	width:280px;
	height:15px;
	line-height:15px;
	background-color:#aaa;
	border-bottom:#000 thin solid;
	margin:0px 0px 0px 0px;
	padding:0px 5px 2px 5px;
}
.talkletteContainer{
	width:280px;
	height:100%;
	background-color:#FFF;
	z-index:1;
}
.talklette{
	float:right;
	width:270px;
	height:44px;
	background-color:#FFF;
	border-bottom:#CCC 1px dotted;
	margin:0px 0px 0px 0px;
	padding:0px 5px 0px 5px;
	font-family:Tahoma, Geneva, sans-serif;
	font-weight:400;
	font-size:10px;
	color:#333;
	z-index:2;
}
.talkletteUser{
	position:relative;
	top:0px;
	left:0px;
	font-family:Tahoma, Geneva, sans-serif;
	font-weight:600;
	font-size:10px;
	color:#099;
}
.talkletteUserImage{
	float:left;
	margin-left:0px;
	margin-right:5px;
	width:38px;
	height:38px;
	border:#00a thin dotted;
	background-color:#fff;
	padding:0px 0px 0px 0px;
	margin:2px 4px 0px 0px;
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
#nevermind{
	font-family:Tahoma, Geneva, sans-serif;
	font-size:11px;
	height:20px;
	line-height:12px;
	width:64px;
	margin-right:0px;
	padding:1px 2px 1px 2px;
	vertical-align:top;
}
#shoutheader{
	position:relative;
	height:0px;
	width:90%;
	margin:3px 0px 5px 0px;
	border-bottom:#FFF thin solid;
	visibility:hidden;
}
#shouttitle{
	float:left;
	font-family:Tahoma, Geneva, sans-serif;
	font-size:12px;
	line-height:20px;
	font-weight:800;
}
#shoutbutton{
	float:right;
}
.saywhatform{
	margin:0;
	width:98%;
}
#saywhatform{
	height:0px;
	visibility:hidden;
}
</style>
</head>

<body>
	<div id="rtContainer">
		<div class="header"><h1>Say What!&nbsp;<span style="float:right;">click me =>&nbsp;<button name="saysomething" id="saysomething" >:&nbsp;O</button></span></h1></div>
        <div id="dialogueBox" class="dialogueBox">
        <div id="shoutheader"><div id="shouttitle">Shout it out!</div><div id="shoutbutton"><button id="nevermind" onclick="nevermind();return false;" >Nevermind!</button></div></div>
        <form name="saywhatform" id="saywhatform" method="post" action="saywhataction.php" class="saywhatform">
		Your&nbsp;username:&nbsp;<input type="text" name="username" value="guest" onfocus="this.value='';return false;" size="12" /><br /><br />
		Your message:<br /><textarea id="textmessage" name="usermessage" onKeyUp="keyup(event);return false;"></textarea>
		</form>
        </div>
    </div>
<label id="shoutId"></label>
<label id="shoutUserId"></label>
<label id="shoutUserName"></label>
<label id="shoutMessage"></label>
<label id="shoutTimestamp"></label>
<label id="oldId"></label>
</body>
</html>