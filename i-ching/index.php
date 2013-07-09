<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#"  xmlns:rt="http://newsketeer.com/rt/rt#">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta property="og:title" content="i ching" />
<meta property="og:type" content="product" />
<meta property="og:url" content="https://apps.facebook.com/my-ching/" />
<meta property="og:image" content="https://popgnosis.com/i-ching/images/color_image.png" />
<meta property="og:site_name" content="I CHING" />
<meta property="fb:admins" content="1455042550" />
<title>The Oracle</title>
<script type="text/javascript" src="jquery/jquery-1.9.1.min.js"><!-- // --></script>
<script type="text/javascript" src="scripts/ajax.js"><!-- // --></script>
<script type="text/javascript" src="scripts/oracle.js"><!-- //--></script>
<style type="text/css">
body{font-family:arial;font-size:11px}
fieldset{text-align:center;width:550px;border:1px solid #387CAF}
legend{font-weight:bold;color:#387CAF;font-size:17px}
#returned_value{text-align:center;font-size:12px;}
#go, input{border:1px solid #387CAF;background:#FFF}

td {
	font-family:Arial, Helvetica, sans-serif;
	font-size:12px;
	color:#111111;
}
p {
	font-family:Arial, Helvetica, sans-serif;
	font-size:12px;
	color:#111111;
}
#shell{
	margin: 0 auto;
	width:90%;
	overflow-y:hidden;
}
#left{
	float:left;
}
#right{
	float:right;
	overflow-y:hidden;
}
#pennies{
	margin:0 auto;
	padding: 10px 10px 10px 10px;
	width:100%;
	text-align:center;
}
#reading{
	width:200px;
	padding:20px 20px 20px 20px;
	background-color:#FFF;
	visibility:visible;
}
#linecount{
	visibility:hidden;
}
#line1{
	position:relative;margin:0 auto;top:210px;width:200px;height:10px;visibility:hidden;
}
#line2{
	position:relative;margin:0 auto;top:190px;width:200px;height:10px;visibility:hidden;
}
#line3{
	position:relative;margin:0 auto;top:170px;width:200px;height:10px;visibility:hidden;
}
#line4{
	position:relative;margin:0 auto;top:150px;width:200px;height:10px;visibility:hidden;
}
#line5{
	position:relative;margin:0 auto;top:130px;width:200px;height:10px;visibility:hidden;
}
#line6{
	position:relative;margin:0 auto;top:110px;width:200px;height:10px;visibility:hidden;
}
#hexagram{
	position:relative;
	margin-top:0px;
	text-align:center;
	width:394px;
	height:394px;
	background-image:url('images/greenmoonmirror.gif');
}
#result{
	position:absolute;
	text-align:center;
	width:90%;
	height:20px;
	margin:-400px auto 0px auto;
}
#try{
	font-size:18px;
	text-decoration:none;
	color:#FF0000;
	font-family:Geneva, Arial, Helvetica, sans-serif;
	visibility:hidden;
}
</style>
</head>
	
<body>
<div id="shell">
  	<div id="left">
    <div class="fb-like" data-href="https://apps.facebook.com/my-ching/" data-send="true" data-layout="button_count" data-width="450" data-show-faces="false"></div>
      	<h3>Instructions:</h3>
        Ask question, click pennies six times.
        <div id="pennies">
        <!-- upper -->
      	<?php $flip = rand(0,3); ?>
      	<input type="image" src="images/penny_0<?php echo $flip; ?>.png" width="100px"  border="0" id="toss" onClick="line=getLine();a=onFlip(); document.getElementById('toss').src = 'images/penny_0'+a+'.png'; castLine(a,line);" style="border-style:none;">
	  	</div>
      	<!-- lower -->
		<div id="reading"><h3>reading</h3></div>
  	</div>
  	<!-- right -->

  	<div id="right">
		<div id="hexagram">
          	<div id="line6"></div>
          	<div id="line5"></div>
          	<div id="line4"></div>
          	<div id="line3"></div>
          	<div id="line2"></div>
          	<div id="line1"></div>
	  	</div>
  	</div>
</div>
<div id="linecount">0</div>

<div id="result"><a href="" id="try">Try again</a></div>

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=212304282113081";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
</body>
</html>