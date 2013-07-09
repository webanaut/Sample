<?php
// RETURNS THE XML TO THE CALL

if( isset($_GET['rnd']) ) {
	$rnd = $_GET['rnd'];

	include("hexagrams.php");
	header("content-type: text/xml");
	echo "<?xml version=\"1.0\"?>
		<oracle>
			<chapter>Chapter $chapter - $name</chapter>
			<name>$name</name>
			<translation>$translation</translation>
			<meaning>$meaning</meaning>
			<explanation>$explanation</explanation>
		</oracle>";
	die();

}
?>