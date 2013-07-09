// JavaScript Document
/*
GREGORY G. LEWIS
FORT LAUDERDALE, FLORIDA, U.S.A.
APRIL 25, 2011

DESCRIPTION: The following script is meant to provide the controlled conduit between a remote form / database action, such as a survey or questionnaire, and a blog page, or any web page, for that matter. It will produce a button that is 20 pixels high, and the width of the inline widget is configurable by changing a value in the accompanying javascript, which is plugged into the client's web page html.

This script will produce a button image. When the user or reader rolls over the button, a small window will pop up in the center of the screen. This window is designed to be half the width and height of the user's own browser window space. Inside the window is an i-frame, the content of which comes from another website. Whoever manages this widget will manage whatever content happens to appear in the widget. in the first versions of this widget, that was a short survey form.

After the user completes any action requested by the remotely driven content, he or she will click on the CLOSE button, and the widget returns to its docking spot on the client's web page. The Recommend button is now replaced with a Thank You button, and mouse events (roll overs, clicks) cease for that button.

expands a div with an inner iFrame. The contents of the iFram can be anything, but is intended to be content generated on a remote domain.

STRUCTURE DIAGRAM:

_________________________________________________________________
|warpitwidget (the container div,                                  |
|code goes in the client's                                      |
|web page).                                                     |
|                                                               |
|   _____________________________________________________       |
|   |                                                   |       |
|   |warpitChild (the movable div that                     |       |
|   |contains the iFrame)                               |       |
|   |   _____________________________________________   |       |
|   |   |warpitFrame (iFrame that gets                 |   |       |
|   |   |and displays remote content)               |   |       |
|   |   |                                           |   |       |
|   |   |                                           |   |       |
|   |   |                                           |   |       |
|   |   ---------------------------------------------   |       |
|   -----------------------------------------------------       |
-----------------------------------------------------------------

*/
/*
var t = document.getElementsByTagName('title')[0];
var warpit_title=t.firstChild.data;
var warpit_title2=t.innerHTML;
warpit_url = window.location.href;
warpit_id = "aa1100ff";
*/


//include the jscript library
var jscript = document.createElement('script');
jscript.src = 'http://warpit.com/jquery.js';

var counter = document.createElement("div");
var countImage = document.createElement("img");
var peak = document.createElement("img");

var warpit_url_array = warpit_url.split("//");
var warpit_url = warpit_url_array[1];
warpit_title = warpit_title.replace("'","%27");

var warpit_remoteid = Math.floor(Math.random()*10000);


function makeCounterImage(i){
	srcUrl = "http://warpit.com/warpitcounter.php?protocol=" + escape(warpit_url_array[0]) + "&url=" + escape(warpit_url_array[1]) + "&id=" + i;
	countImage.setAttribute("id","warpitCountImage"+i);
	countImage.setAttribute("src",srcUrl);
	counter.appendChild(countImage);
	
	var peakStyle = "position:absolute;left:-6px;top:13px;z-index:1;";
	peak.setAttribute("src","http://warpit.com/images/peak8.png");
	peak.setAttribute("style",peakStyle);
	peak.setAttribute("id","peak");
	if(i == 1){
		counter.appendChild(peak);
	}
	else{
		counter.removeChild(peak);
	}
}

function makeCounter(){
	//make counter
	var countboxstyle = "position:absolute;top:0px;left:70px;margin-top:"+buttonTopMargin+"px;border-left:#ffcc00 1px solid;border-top:#ffcc00 1px solid;border-right:#ffcc00 1px solid;border-bottom:#ffcc00 1px solid;width:30px;height:16px;padding-top:0px;color:#aaf;background-color:#ffffdd;-moz-border-radius:5px;border-radius:5px;text-align:center;padding-top:1px;-moz-box-shadow: 1px 1px 0px #777777;-webkit-box-shadow: 1px 1px 0px #777777;box-shadow: 1px 1px 0px #777777;z-index:0;";
	counter.setAttribute("style",countboxstyle);
	counter.setAttribute("id","warpitcountbox");
	counter.setAttribute("z-index","1");
	makeCounterImage("1");
	WI.appendChild(counter);
}

function recordPage(protocol,url,title,remoteid) {
    var tempFrame = document.createElement("iframe");
	tempFrame.setAttribute("id","quickFrame");
	document.getElementById("warpitwidget").appendChild(tempFrame);
	tempFrame.setAttribute("style","position:absolute;top:-1000px;left:-1000px;height:0px;width:0px;visibility:'hidden'");
	srcUrl = "http://warpit.com/recordpage.php?title=" + escape(warpit_title) + "&protocol=" + escape(protocol) + "&url=" + escape(url) + "&remoteid=" + remoteid;
	tempFrame.setAttribute("src", srcUrl );
	//time=setTimeout(function(){ document.getElementById("warpitwidget").removeChild(tempFrame); },3000);
}

window.onload = recordPage(warpit_url_array[0],warpit_url_array[1],warpit_title,warpit_remoteid);

// JavaScript Document
if (document.images){
	var closeButtonOff = new Image(20,20);
	var closeButtonOn = new Image(20,20);
	
	var warpitButtonOff = new Image(1,60);
	var warpitButtonOn = new Image(1,60);
	
	// set image url
	closeButtonOff.src = "http://WarpIt.com/images/button-round-gray2.gif";
	closeButtonOn.src = "http://WarpIt.com/images/button-round-red2.gif";
	
	warpitButtonOff.src = "http://warpit.com/images/button-back-off.gif";
	warpitButtonOn.src = "http://warpit.com/images/button-back-on.gif";
}

//Let's get the title first.
if(! warpit_title.length){ warpit_title = warpit_title2; }

//The next part of this script determines the size of the user's browser window. It calculates the height / width of the client window, but then goes on to calculate half of the height / width.

//default width and height of any generic browser window.
var winW = 630, winH = 460;
//get the real height width of this particular client's window screen.
if (document.body && document.body.offsetWidth) {
 	winW = document.body.offsetWidth;
 	winH = document.body.offsetHeight;
}
if (document.compatMode=='CSS1Compat' &&
    document.documentElement &&
    document.documentElement.offsetWidth ) {
 	winW = document.documentElement.offsetWidth;
 	winH = document.documentElement.offsetHeight;
}
if (window.innerWidth && window.innerHeight) {
 	winW = window.innerWidth;
 	winH = window.innerHeight;
}
//Determine the widget dimensions.
var warpit_width = 120; //Used to be set in accompanying js, now it'sjust the button width.
var warpit_height = 20; // The widget as it sits in the client web page is 20 pixels high...a button height.
//center point of the window.
var	xCenter = parseInt(winW / 2);
var	yCenter = parseInt(winH / 2);
//half window size.
var wiMaxWidth = 300;
var wiMaxHeight = 300;
var buttonTopMargin = 0;
var buttonBottomMargin = 0;

//var wiMaxWidth = parseInt(winW / 3);
//var	wiMaxHeight = parseInt(winH / 3);
//some variables used later to make stuff happen or not happen.
var c = false;
var mouse = true;

//when you get a style.width or style.height, it is a string with "px" appended to it. This function strips off that "px" and turns what's left of the string into a number. Ex: transform "240px" into 240.
// This function removes non-numeric characters
function getValue(str){
	str += '';
  	var rgx = /^\d|\.|-$/;
	 var out = '';
	  for( var i = 0; i < str.length; i++ )
	  {
	    if( rgx.test( str.charAt(i) ) ){
	      if( !( ( str.charAt(i) == '.' && out.indexOf( '.' ) != -1 ) ||
	             ( str.charAt(i) == '-' && out.length != 0 ) ) ){
	        out += str.charAt(i);
	      }
	    }
	  }
	  return parseInt(out);
}
//Extremely useful function, which gets the position, relative to the widget, of the web page element, passed to the function as "elt". this makes it possible to move the widget around on the screen, and then return it to its original docking coordinates.
function getPos(elt) {
    var pt = [0, 0];

    while (elt.offsetParent !== null) {
        pt[0] += elt.offsetLeft;
        pt[1] += elt.offsetTop;
        elt = elt.offsetParent;
    }
    return pt;
}
//Function to resize an object at some predetermined rate of growth. Pass the "d" parameter as a "0" to make it grow, and a "1" to make it shrink.
function expand(x,y,maxX,maxY,d,cx,cy){
	eNameString = "wiDiv,wiFrame";
	eNameArray = eNameString.split(",");
	if(d == 0){
		if(x >= maxX){
			cx = true;
		}
		if(y >= maxY){
			cy = true;
		}
		if(cx == false){
			x+= 20;
		}
		if(cy == false){
			y+= 20;
		}
	}
	else if(d == 1){
		if(x <= 70){
			cx = true;
		}
		if(y <= 20){
			cy = true;
		}
		if(cx == false){
			x-= 20;
		}
		if(cy == false){
			y-= 20;
		}
	}
	if(cx == false){
		wiFrame.style.width = (x) + 'px';
	}
	if(cy == false){
		wiFrame.style.height = y + 'px';
	}
	if(cx == true && cy == true){
		wiFrame.style.width = maxX + "px";
		wiFrame.style.height = maxY + "px";
		wiDiv.style.backgroundImage = "url('http://warpit.com/images/background-grade-1.png')";
		wiDiv.style.backgroundRepeat = "repeat-x";
		return true;
	}
	timer = window.setTimeout(function(){expand(x,y,maxX,maxY,d,cx,cy);},10);
	return false;
}
//animates the return of the object to its docking coordinates.
function returnToHome(oX,oY){
	if(oX == false){
		x = getValue(wiDiv.style.left);
		if(x < 0){
			x += 20;
			if(x >= 0){ oX = true; }
			wiDiv.style.left = x + "px";
		}
		else if(x > 0){
			x -= 20;
			if(x <= 0){ oX = true; }
			wiDiv.style.left = x + "px";
		}
		else{
			oX = true;
		}
	}
	if(oY == false){
		y = getValue(wiDiv.style.top);
		if(y < 0){
			y += 20;
			if(y >= 0){ oY = true; }
			wiDiv.style.top = y + "px";
		}
		else if(y > 0){
			y -= 20;
			if(y <= 0){ oY = true; }
			wiDiv.style.top = y + "px";
		}
		else{
			oY = true;
		}
	}
	if(oX == true && oY == true){
		wiDiv.removeChild(wiFrame);
		closingFormalities();		
		return true;
	}
	else{
		timer = window.setTimeout(function(){ returnToHome(oX,oY); },10);
	}
}
//the iframe url.
//test frame url, local, without database
frameUrl = "http://WarpIt.com/initiateConduit.php?title=" + escape(encodeURI(warpit_title)) + "&protocol=" + escape(warpit_url_array[0]) +  "&url=" + escape(encodeURI(warpit_url_array[1])) + "&remoteid=" + warpit_remoteid;

//the elements and their styles.
//container div style.
var WI = document.getElementById("warpitwidget");
var WIStyle = "position:relative;top:-6px;height:"+warpit_height+"px;width:"+warpit_width+"px;margin-top:0px;margin-bottom:0px;border:0px;display:inline-block;"
WI.setAttribute("style",WIStyle);
WI.setAttribute("title","Warp this page to recommend it to others with similar interests as you!");
WI.setAttribute("alt","Warp this page to recommend it to others with similar interests as you!");
//WI.appendChild(jscript);

//inner div
var wiDiv = document.createElement("div");
wiDivStyle = "position:fixed;padding:0px;margin-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;overflow:auto;opacity:0.95;filter:alpha(opacity=95);-moz-border-radius: 20px;border-radius: 20px;-moz-box-shadow: 5px 5px 2px #555555;-webkit-box-shadow: 5px 5px 2px #555555;box-shadow: 5px 5px 2px #555555;border:#eee 3px ridge;z-index:1;"
//inner div style
wiDiv.setAttribute("style",wiDivStyle);
wiDiv.setAttribute("id","warpitChild");
wiDiv.setAttribute("name","warpitChild");

//iframe
var wiFrame = document.createElement("iframe");
var wiFrameStyle = "position:relative;top:0px;width:300px;height:325px;margin-left: 0px;margin-top:0px;margin-right:0px;margin-bottom:0px;left:0px;overflow-x:hidden;overflowX:hidden;overflow:auto;border:none;";
wiFrame.setAttribute("style",wiFrameStyle);
wiFrame.setAttribute("id","warpitFrame");
wiFrame.setAttribute("name","warpitFrame");
wiFrame.setAttribute("src",frameUrl);

//button
var wiButton = document.createElement("button");
var wiButtonStyle = "position:relative;top:0px;left:"+(getValue(WI.style.left))+"px;margin-top:"+buttonTopMargin+"px;margin-bottom:"+buttonBottomMargin+"px;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;border: 1px outset #aaf;padding:0px 0px 2px  0px;display:inline-block;text-decoration:none;background-image:url('http://warpit.com/images/button-back-off.gif');background-repeat:repeat-x;color:#00a;cursor:pointer;font:11px sans-serif;width:60px;height:20px;font-family:Tahoma, Geneva, sans-serif;font-size:10px;z-index:2;";
wiButton.setAttribute("style",wiButtonStyle);
wiButton.setAttribute("id","warpitButton");
wiButton.setAttribute("name","warpitButton");

var closelink = document.createElement('div');
var closelinkStyle = "position:relative;top:-315px;left:275px;width:20px;height:20px;opacity:0.50;filter:alpha(opacity=50);"
//closelink.setAttribute('href','');
closelink.setAttribute("style",closelinkStyle);
closelink.setAttribute("id","wiClose");
closelink.innerHTML = "<a href='' style='text-decoration:none;' onclick='swapImage(\"1\");return false;' onmouseup='swapImage(\"0\");return false;' onmouseover=swapImage(\"1\");return false;' onmouseout=swapImage(\"0\");return false;' ><img name=\"closeButton\" id=\"closeButton\" width=\"20\" height=\"20\" src='http://WarpIt.com/images/button-round-gray2.gif' border='0' ></a>";

//The following four lines attach the components in their proper order to the main container div ("warpitwidget"), and then create the mouseover event for the button.
wiDiv.appendChild(wiFrame);
WI.appendChild(wiButton);
wiButton.innerHTML = "<b><span style=\"color:#09c\">W</span><span style=\"color:#cdad00\">a</span><span style=\"color:#0a0\">r</span><span style=\"color:#CD5555\">p</span><span style=\"color:#09c\">I</span><span style=\"color:#cdad00\">t</span><span style=\"color:#0a0\">!</span></b>";

if (wiButton.addEventListener){
	wiButton.addEventListener('click',onMouse, false);
} else if (wiButton.attachEvent){
	wiButton.attachEvent('onclick',onMouse);
}

if (wiButton.addEventListener){
	wiButton.addEventListener('mouseover',function(){ buttonChange("1") }, false);
} else if (wiButton.attachEvent){
	wiButton.attachEvent('onmouseover',function(){ buttonChange("1") });
}

if (wiButton.addEventListener){
	wiButton.addEventListener('mouseout',function(){ buttonChange("0") }, false);
} else if (wiButton.attachEvent){
	wiButton.attachEvent('onmouseout',function(){ buttonChange("0") } );
}

var WITop = WI.offsetTop;
var WILeft = WI.offsetLeft;

makeCounter();

function swapImage(i){
	if(i == "0"){
		document['closeButton'].src = closeButtonOff.src;
	}
	else if(i == "1"){
		document['closeButton'].src = closeButtonOn.src;
	}
}

function buttonChange(i){
	if(i == "0"){
		document.getElementById('warpitButton').style.backgroundImage = "url('http://warpit.com/images/button-back-off.gif')";
	}
	else if(i == "1"){
		document.getElementById('warpitButton').style.backgroundImage = "url('http://warpit.com/images/button-back-on.gif')";
	}
}

//all this stuff happens after the first rollover action.
function onMouse(){
	
	counter.removeChild(countImage);

	//This cool little line replaces the button with the widget window once the user has moused over the button. "Poof" the button disappears, and "Presto-Change-o" the widget appears in its place.
	wiButton.parentNode.replaceChild(wiDiv,wiButton);
	
	wiWidth = getValue(wiFrame.style.width);
	wiHeight = getValue(wiFrame.style.height);
	
	//The "xCenter / 2" represents making the widget window half the size of the browser viewing space. It could be some other number, slightly larger or slightly smaller, however big you think that inner widget  window should be. I think 1/2 size of main window works.
	//395 = div height , 451 = inner window height, 451 - 395 = 
	width = wiFrame.offsetWidth;
	height = 320;
	vMargin = parseInt( ( window.innerHeight - height ) / 2 );
	wiDiv.style.left = ( window.innerWidth / 2  ) - ( ( wiDiv.offsetWidth / 2 ) + 20 ) + "px";
	wiDiv.style.top = ( vMargin - 20 ) + "px";
	//expand warpitChild to 1/2 area of page.
	expand(warpit_width,warpit_height,width,height,0,false,false);
	//after the widget window is created and positioned, then make the CLOSE button.
	timer = setTimeout(function(){ closelink.style.visibility = "visible"; },500);
	makeCloseBtn();
	wiDiv.style.top = ( getValue(wiDiv.style.top) ) + "px";
	
	return false;
}
//Initiates the creation of the CLOSE button.
function makeCloseBtn(){

	//Create a CLOSE button for the expanded window.
	function closeLink(){
		
		function getValue(n){
		  tString = n;
		  endString = tString.indexOf("p");
		  string = "";
		  for(i=0;i<endString;i++){
			  string = string + tString.charAt(i);
		  }
		  return string;
		}
		
		//Disengages the CLOSE button by removing the mouse action from it. Called "waitO" because this action happens after a short delay. Intended to happen after the widget window shrinks back to its normal size.
		function waitO(){
			wiDiv.removeChild(document.getElementById('wiClose'));
			wiDiv.style.position = "relative";
			returnToHome(false,false);
			return false;
		}
		
		wiWidth = 200;
		wiHeight = parseInt(window.innerHeight - 40);
		document.getElementById('wiClose').removeEventListener("click",function(){},false);
		t = expand(wiDiv.offsetWidth,wiDiv.offsetHeight,warpit_width,warpit_height,1,false,false);
		littleTime = window.setTimeout(function(){ waitO(); },500);
		return false;
	}
	
	// making the CLOSE button:
	wiDiv.appendChild(closelink);
	var closebox = document.getElementById('wiClose');
	closebox.addEventListener("click",closeLink,false);
	
	return false;
}

//return the widget to its original state, and replace the "Recommend" button text with "Thank You".
function closingFormalities(){
	WI.removeChild(wiDiv);
	WI.appendChild(wiButton);
	//disable the previous "Recommend" button.
	wiButton.style.width = "70px";
	wiButton.innerHTML = "<b><span style=\"color:#09c\">T</span><span style=\"color:#cdad00\">h</span><span style=\"color:#09c\">a</span><span style=\"color:#cdad00\">n</span><span style=\"color:#0a0\">k</span> <span style=\"color:#CD5555\">Y</span><span style=\"color:#cdad00\">o</span><span style=\"color:#09c\">u</span></b>";
	wiButton.setAttribute('disabled',true);
	wiButton.disabled = true;
	wiButton.disabled = 'disabled';
	makeCounterImage("2");
}