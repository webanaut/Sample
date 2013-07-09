// JavaScript Document

var xmlhttp;

if (window.XMLHttpRequest){ // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
else{ // code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

function nevermind(){
	document.forms['saywhatform']['username'].value = "guest";
	document.forms['saywhatform']['usermessage'].value = "";
	document.getElementById("dialogueBox").style.visibility = "hidden";
	document.getElementById("shoutheader").style.visibility = "hidden";
    document.getElementById("saywhatform").style.visibility = "hidden";
}

function keyup(e) {
    if (!e) { var e = window.event; }

    // Enter is pressed
    if (e.keyCode == 13) { submitForm(); }
}

function submitForm(){
	var http = new XMLHttpRequest();
	var url = "saywhataction.php";
	var params = "username="+document.forms['saywhatform']['username'].value+"&usermessage="+escape(document.forms['saywhatform']['usermessage'].value);
	http.open("POST", url, true);
	
	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.setRequestHeader("Content-length", params.length);
	http.setRequestHeader("Connection", "close");
	
	http.onreadystatechange = function() {//Call a function when the state changes.
		if(http.readyState == 4 && http.status == 200) {
			document.forms['saywhatform']['username'].value = "guest";
			document.forms['saywhatform']['usermessage'].value = "";
			document.getElementById("dialogueBox").style.visibility = "hidden";
			document.getElementById("shoutheader").style.visibility = "hidden";
			document.getElementById("saywhatform").style.visibility = "hidden";
		}
	}
	http.send(params);
	
	return false;
}

function openDialogue(){
	if( document.getElementById("dialogueBox").style.visibility !== "visible"){

		document.getElementById("dialogueBox").style.visibility = "visible";
		document.getElementById("shoutheader").style.visibility = "visible";
		var hF = 1;
		var t = setInterval(function (){ 
									  document.getElementById("dialogueBox").style.height = hF + "px";
									  document.getElementById("saywhatform").style.height = hF + "px";
									  if(document.getElementById("shoutheader").offsetHeight < 21){
										  document.getElementById("shoutheader").style.height = hF + "px";
									  }
									  if(hF > 120){
										  clearInterval(t);
										  document.getElementById("saywhatform").style.visibility = "visible";
									  }
									  else{
										  hF = hF + 5;
									  }
									   },10);
	}
}

function activateButton(){
	if (document.getElementById("saysomething").addEventListener){
		document.getElementById("saysomething").addEventListener('click',openDialogue, false);
	} else if (document.getElementById("saysomething").attachEvent){
		document.getElementById("saysomething").attachEvent('onclick',openDialogue);
	}
}

function callTalklette(){
	activateButton();
	window.setInterval("createTalklette()", 2000);
}

function createTalklette(){
	variable=new XMLHttpRequest();
	
	document.getElementById("shoutId").innerHTML = "";
	document.getElementById("shoutUserId").innerHTML = "";
	document.getElementById("shoutUserName").innerHTML = "";
	document.getElementById("shoutMessage").innerHTML = "";
	document.getElementById("shoutTimestamp").innerHTML = "";

	
	xmlhttp.onreadystatechange=function(){
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
		  var response = xmlhttp.responseXML;
		  
		  if(response.getElementsByTagName("id") && response.getElementsByTagName("userid") && response.getElementsByTagName("username") && response.getElementsByTagName("message") && response.getElementsByTagName("timestamp")){
			var shoutId = response.getElementsByTagName("id");
			var shoutUserId = response.getElementsByTagName("userid");
			var shoutUserName = response.getElementsByTagName("username");
			if(response.getElementsByTagName("userimage")){
				var shoutUserImage = response.getElementsByTagName("userimage");
			}
			var shoutMessage = response.getElementsByTagName("message");
			var shoutTimestamp = response.getElementsByTagName("timestamp");
			for (i=0;i<shoutId.length;i++){
				
				document.getElementById("shoutId").innerHTML += "|" + shoutId[i].childNodes[0].nodeValue;
				document.getElementById("shoutUserId").innerHTML += "|" + shoutUserId[i].childNodes[0].nodeValue;
				document.getElementById("shoutUserName").innerHTML += "|" + shoutUserName[i].childNodes[0].nodeValue;
				if(! typeof document.getElementById("shoutUserImage") == "undefined" || ! document.getElementById("shoutUserImage") == null){
					document.getElementById("shoutUserImage").innerHTML += "|" + shoutUserImage[i].childNodes[0].nodeValue;
				}
				document.getElementById("shoutMessage").innerHTML += "|" + shoutMessage[i].childNodes[0].nodeValue;
				document.getElementById("shoutTimestamp").innerHTML += "|" + shoutTimestamp[i].childNodes[0].nodeValue;
			}
			var sIdArray = new Array(); sIdArray = document.getElementById("shoutId").innerHTML.split("|");
			var sUserIdArray = new Array(); sUserIdArray = document.getElementById("shoutUserId").innerHTML.split("|");
			var sUserNameArray = new Array(); sUserNameArray = document.getElementById("shoutUserName").innerHTML.split("|");
			if(! typeof document.getElementById("shoutUserImage") == "undefined" || ! document.getElementById("shoutUserImage") == null){
				var sUserImageArray = new Array(); sUserImageArray = document.getElementById("shoutUserImage").innerHTML.split("|");
			}
			var sMessageArray = new Array(); sMessageArray = document.getElementById("shoutMessage").innerHTML.split("|");
			var sTimestampArray = new Array(); sTimestampArray = document.getElementById("shoutTimestamp").innerHTML.split("|");
			
			var oldId = document.getElementById("oldId").innerHTML;
			if(document.getElementById("shoutId").innerHTML !== oldId || oldId == ""){
			  if(document.getElementById("talkletteContainer")){
				  document.getElementById("talkletteContainer").parentNode.removeChild(document.getElementById("talkletteContainer"));
			  }
			  var talkletteContainer = document.createElement("div");
			  talkletteContainer.setAttribute("id","talkletteContainer");
			  talkletteContainer.setAttribute("class","talkletteContainer");
			  document.getElementById("rtContainer").appendChild(talkletteContainer);
			  for(i=1;i<sIdArray.length;i++){
				  var newId = sIdArray[i];
				  var newUserID = sUserIdArray[i];
				  var newUserName = sUserNameArray[i];
				  var newMessage = sMessageArray[i];
				  
				  //alert(newId + ", " + newUserID + ", " + newUserName + ", " + newMessage);
				  
				  var talklette = document.createElement("div");
				  talklette.setAttribute("id","t_" + newId);
				  talklette.setAttribute("name","talklette");
				  talklette.setAttribute("class","talklette");
				  talklette.setAttribute("style","margin-top:0px;");
				  
				  
				  var talkletteUserImage = document.createElement("img");
				  talkletteUserImage.setAttribute("id","img_" + newUserID);
				  talkletteUserImage.setAttribute("class","talkletteUserImage");
				  talkletteUserImage.src = "images/silhouette.jpg";

				  var talkletteUser = document.createElement("label");
				  talkletteUser.setAttribute("id","u_" + newId);
				  talkletteUser.setAttribute("class","talkletteUser");

				  var talkletteText = document.createTextNode(newMessage);
				  
				  document.getElementById("talkletteContainer").appendChild(talklette);	
				  document.getElementById("t_" + newId).appendChild(talkletteUserImage);
				  document.getElementById("t_" + newId).appendChild(talkletteUser);
				  document.getElementById("u_" + newId).innerHTML = newUserName + "&nbsp; - &nbsp;";
				  
				  document.getElementById("t_" + newId).appendChild(talkletteText);
			  }
			}
		  }
		  document.getElementById("oldId").innerHTML = document.getElementById("shoutId").innerHTML;
	  }
  	}
	
	xmlhttp.open("GET","xml/getshout.php",true);
	xmlhttp.send();	
	
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(callTalklette);
