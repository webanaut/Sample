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

function sendRequest(rnd) {
	try{
		// go to another, independent page for the xml content
		http.open("GET", "two.php?rnd="+rnd, true);
		http.setRequestHeader('Content-Type',  "text/xml");
		http.onreadystatechange = handleResponse;
		http.send(null);
	}
	catch(e){
		// caught an error
		alert('Request send failed.');
	}
	finally{}
		// disable button until end of response
		document.getElementById('toss').disabled = true;
		document.getElementById('toss').value = "Hold On";
		// hide any previous returned values
		document.getElementById('result').style.display="none";
		onFlip();
}

function handleResponse() {
	try{
		if((http.readyState == 4)&&(http.status == 200)){
			var response = http.responseXML.documentElement;
			var line = response.getElementsByTagName('line')[0].firstChild.nodeValue;
	
			// write out response
		  
		  document.getElementById("line1").style.visibility = "visible";
		  // re-enable the button
		  document.getElementById('toss').disabled = false;
		  document.getElementById('toss').value = " Toss ";
		  document.getElementById('result').style.display="";
		}
  }
	catch(e){
		// caught an error
		alert('Response failed.');
	}
	finally{}
}
