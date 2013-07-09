// JavaScript Document
hexagram = new Array(6);
images = new Array(4);
images[0] = "../images/penny_00.png";
images[1] = "../images/penny_01.png";
images[2] = "../images/penny_02.png";
images[3] = "../images/penny_03.png";

function onFlip(){
	var flip = Math.floor(Math.random()*4)
	return flip;	
}
function castLine(n,line){
	if(line == 1){
		for(i=1;i<7;i++){
			document.getElementById('line'+i).innerHTML = "";
		}
	}
	hexagram[line-1] = n;
	document.getElementById('line'+line).innerHTML = "<img src='images/line0"+n+".png' />";
	document.getElementById('line'+line).style.visibility = "visible";
	if(line == 6){
		readOracle();		
	}
}
function getLine(){
	var lineCount = 0;
	lineCount = parseInt(document.getElementById("linecount").innerHTML);
	lineCount = lineCount + 1;
	if(lineCount == 6){
		document.getElementById("try").style.visibility = "visible";
	}
	if(lineCount > 6){
		lineCount = 1;
		document.getElementById("try").style.visibility = "hidden";
	}
	document.getElementById("linecount").innerHTML = lineCount;
	return lineCount;
}
function readOracle(){
	simplehexarray = new Array(4);
	for(i=0;i<hexagram.length;i++){
		if(hexagram[i] == 0){ thisline = 0; }
		if(hexagram[i] == 1){ thisline = 1; }
		if(hexagram[i] == 2){ thisline = 0; }
		if(hexagram[i] == 3){ thisline = 1; }
		simplehexarray[i] = thisline;
	}
	simplehexstring = simplehexarray.join("");
	n = convert(simplehexstring) + 1;
	//alert(n);
	sendRequest(n);
}
function convert(n){
	var num1;
	var num2;
	var currnum;
	currnum = 32;
	num2 = eval(n.charAt(0)) * currnum;
	for (i = 1; i < 6; i++){
		currnum = currnum / 2;
		num2 = num2 + (eval(n.charAt(i)) * currnum);
	}
	return parseInt(num2);
}


//ajax:
// Simplified Ajax script
var http = createRequestObject();

function createRequestObject() {  
	// find the correct xmlHTTP, works with IE, FF and Opera
	var xmlhttp;
	try {
  	xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
  }
  catch(e) {
    try {
    	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch(e) {
    	xmlhttp=null;
    }
  }
  if(!xmlhttp&&typeof XMLHttpRequest!="undefined") {
  	xmlhttp=new XMLHttpRequest();
  }
	return  xmlhttp;
}

function sendRequest(n) {
	try{
		// go to another, independent page for the xml content
		urlString = "two.php?rnd="+n;
		http.open("GET", urlString, true);
		http.setRequestHeader('Content-Type',  "text/xml");
		http.onreadystatechange = handleResponse;
		http.send(null);
	}
	catch(e){
		// caught an error
		alert('Request send failed.');
	}
	finally{}
}
function handleResponse() {
	try{
		if((http.readyState == 4)&&(http.status == 200)){
			var response = http.responseXML.documentElement;
			var chapter = response.getElementsByTagName('chapter')[0].firstChild.nodeValue;
			var name = response.getElementsByTagName('name')[0].firstChild.nodeValue;
			var translation = response.getElementsByTagName('translation')[0].firstChild.nodeValue;
			var meaning = response.getElementsByTagName('meaning')[0].firstChild.nodeValue;
			var explanation = response.getElementsByTagName('explanation')[0].firstChild.nodeValue;
	
			// write out response
		  	document.getElementById("reading").innerHTML = '<table width=\"100%\" border=\"0\" bgcolor=\"#666666\" cellpadding=\"3\" cellspacing=\"1\" align=\"center\"><tr><td align=\"left\" bgcolor=\"#fff\" ><strong>'+chapter+' :</strong>&nbsp;<i>'+translation+'</i></td></tr><tr><td align=\"left\" bgcolor=\"#fff\" ><p><u>Reading:</u>&nbsp;"'+meaning+'"</p></td></tr><tr><td align=\"left\" bgcolor=\"#fff\" ><p><u>Interpretation:</u>&nbsp;'+explanation+'</p></td></tr></table>';
			document.getElementById("reading").style.visibility = "visible";
		}
	}
	catch(e){
		// caught an error
		alert('The Oracle cannot see. Ask again');
	}
	finally{}
}

