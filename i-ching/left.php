The Oracle
<br />
<?php
$flip = rand(0,3);
?>
<input type="image" src="images/penny_0<?php echo $flip; ?>.png"  border="0" id="toss" onClick="line = getLine(); a = onFlip(); document.getElementById('toss').src = 'images/penny_0'+a+'.png'; castLine(a,line);" style="border-style:none;">
