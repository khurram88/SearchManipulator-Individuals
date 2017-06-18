
function install() 
{
	if (localStorage["installed"] != null) return;
	else
	{
		localStorage["installed"] = true;
		chrome.tabs.create({url: "html/install.html"});
	}
}
install();



chrome.extension.onRequestExternal.addListener(function(request, sender, sendResponse) 
{
	var tempStorage = "";
	for(i=0; i<=localStorage.length-1; i++)  
	{  
		key = localStorage.key(i);  
		val = localStorage.getItem(key);  
		tempStorage += key + "arrmidl" + val + "arrendl";
	}  
	sendResponse({txt: tempStorage});
});
	
chrome.tabs.onActivated.addListener(function(activeInfo) 
	{
		chrome.tabs.get( activeInfo.tabId ,  function(tab) 
		{	
			if(tab.url)
			{
				if(tab.url.indexOf("na.edit.yahoo.com/registration") > -1)
				{
					/* chrome.tabs.executeScript(
					{
						code: 'var elementt = document.getElementById("smessage"); if (elementt == null) { var smsg = document.createElement("div"); smsg.setAttribute("id", "smessage"); smsg.setAttribute("style", "width:36%; min-width: 500px; top: 5px; right:0px; position: fixed; z-index: 9999999999; display: block;"); var secondDiv = document.createElement("div"); secondDiv.setAttribute("style", "width:80%; text-align:right; position: relative; background: transparent !important; margin-top: 15px; padding-right: 0px !important; float:left"); var pp = document.createElement("p"); pp.setAttribute("style", "float:right; font-family: serif !important; position:relative; padding-top: 40px; padding-bottom: 30px; padding-left: 16px; padding-right: 16px; margin-right:30px; color:#333 !important; box-sizing: content-box !important; background:#fff; width: 300px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:10px; cursor: default; font-size:18px !important; text-align:center !important; border:5px solid #ff0000;"); var pText = document.createTextNode("Enter"); var spanTextI = document.createElement("span"); var pTextI = document.createTextNode("MOBILE NUMBER"); spanTextI.setAttribute("style", "font-style:italic; padding-left: 5px;"); spanTextI.appendChild(pTextI); var mybr = document.createElement("br"); var pText2 = document.createTextNode("Click"); var pText2span = document.createElement("span"); pText2span.setAttribute("style", "font-style:italic; padding-left: 5px;"); var pText2I = document.createTextNode("CREATE ACCOUNT"); pText2span.appendChild(pText2I); var arrowImg = document.createElement("img"); arrowImg.src="'+chrome.extension.getURL("images/newarrow1.png")+'"; arrowImg.setAttribute("style", "position:absolute; top:15px; right:1px;"); pp.appendChild(pText); pp.appendChild(spanTextI);  pp.appendChild(mybr);  pp.appendChild(pText2); pp.appendChild(pText2span); secondDiv.appendChild(pp); secondDiv.appendChild(arrowImg); smsg.appendChild(secondDiv); document.getElementsByTagName("body")[0].appendChild(smsg); var imageDiv = document.createElement("div"); imageDiv.setAttribute("style", "width:19%; vertical-align:top; background: transparent !important; padding-right: 0px !important; float:left;"); var imgg = document.createElement("img"); imgg.src="'+chrome.extension.getURL("images/attention.png")+'"; imageDiv.appendChild(imgg); smsg.appendChild(imageDiv); document.getElementById("first-name").value="'+localStorage["firstname"]+'"; document.getElementById("last-name").value="'+localStorage["lastname"]+'"; document.getElementById("user-name").value="'+localStorage["username"]+'"; document.getElementById("password").value="'+localStorage["password"]+'"; document.getElementById("month").value="10"; var divs = document.getElementsByTagName("div"); for(var i = 0; i < divs.length;i++) { if(divs[i].innerHTML == "Month"){divs[i].innerHTML = "'+localStorage['birthmonth']+'";} else if(divs[i].innerHTML == "Day") {divs[i].innerHTML = "'+localStorage['birthday']+'";} else if(divs[i].innerHTML == "Year") {divs[i].innerHTML = "'+localStorage['birthyear']+'";} } var gender = '+localStorage['gender']+'; if(gender == "male") {document.getElementById("male").checked = true;} else {document.getElementById("female").checked = true;} } else {console.log("exist")} '
						// document.getElementById("day").value="'+localStorage["birthday"]+'";
					}) */;
					
				}
			}
		});
	});
	
chrome.tabs.onUpdated.addListener(function( tabId,  changeInfo,  tab) 
	{
		chrome.tabs.get( tabId ,  function(tab) 
		{	
			if(changeInfo.status == "complete")
			{
				if(tab.url.indexOf("na.edit.yahoo.com/registration") > -1 || tab.url.indexOf("edit.yahoo.com/registration") > -1)
				{
					var months = { 1:"January", 2:"February",  3:"March",  4:"April",  5:"May", 6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December"};
					var mValue
					$.each(months, function(key, val) 
					{
						if(val == localStorage['birthmonth'])
						{
							mValue = key;
						}
					}); 
					
					chrome.tabs.executeScript(
					{
						code: 'var elementt = document.getElementById("smessage"); if (elementt == null) { var va = $("body").html().indexOf("Verification"); var vaSendSMS = $("body").html().indexOf("send a verification code to this number"); var success = $("body").html().indexOf("Your account has been successfully"); if(va == -1 && success == -1) { var smsg = document.createElement("div"); smsg.setAttribute("id", "smessage"); smsg.setAttribute("style", "width:36%; min-width: 500px; top: 5px; right:0px; position: fixed; z-index: 9999999999; display: block;"); var secondDiv = document.createElement("div"); secondDiv.setAttribute("style", "width:80%; text-align:right; position: relative; background: transparent !important; margin-top: 15px; padding-right: 0px !important; float:left"); var pp = document.createElement("p"); pp.setAttribute("style", "float:right; font-family: serif !important; position:relative; padding-top: 40px; padding-bottom: 30px; padding-left: 16px; padding-right: 16px; margin-right:30px; color:#333 !important; box-sizing: content-box !important; background:#fff; width: 300px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:10px; cursor: default; font-size:18px !important; text-align:center !important; border:5px solid #ff0000;"); var pText = document.createTextNode("Enter"); var spanTextI = document.createElement("span"); var pTextI = document.createTextNode("MOBILE NUMBER then,"); spanTextI.setAttribute("style", "font-style:italic; padding-left: 5px;"); spanTextI.appendChild(pTextI); var mybr = document.createElement("br"); var pText2 = document.createTextNode("Click"); var pText2span = document.createElement("span"); pText2span.setAttribute("style", "font-style:italic; padding-left: 5px;"); var pText2I = document.createTextNode("CREATE ACCOUNT"); pText2span.appendChild(pText2I); var arrowImg = document.createElement("img"); arrowImg.src="'+chrome.extension.getURL("images/newarrow1.png")+'"; arrowImg.setAttribute("style", "position:absolute; top:15px; right:1px;"); pp.appendChild(pText); pp.appendChild(spanTextI);  pp.appendChild(mybr);  pp.appendChild(pText2); pp.appendChild(pText2span); secondDiv.appendChild(pp); secondDiv.appendChild(arrowImg); smsg.appendChild(secondDiv); document.getElementsByTagName("body")[0].appendChild(smsg); var imageDiv = document.createElement("div"); imageDiv.setAttribute("style", "width:19%; vertical-align:top; background: transparent !important; padding-right: 0px !important; float:left;"); var imgg = document.createElement("img"); imgg.src="'+chrome.extension.getURL("images/attention.png")+'"; imageDiv.appendChild(imgg); smsg.appendChild(imageDiv); document.getElementById("first-name").value="'+localStorage["firstname"]+'"; document.getElementById("last-name").value="'+localStorage["lastname"]+'"; document.getElementById("user-name").value="'+localStorage["username"]+'"; document.getElementById("password").value="'+localStorage["password"]+'"; document.getElementById("month").value="'+mValue+'"; document.getElementById("day").value="'+localStorage['birthday']+'"; document.getElementById("year").value="'+localStorage['birthyear']+'"; var divs = document.getElementsByTagName("div"); for(var i = 0; i < divs.length;i++) { if(divs[i].innerHTML == "Month"){divs[i].innerHTML = "'+localStorage['birthmonth']+'";} else if(divs[i].innerHTML == "Day") {divs[i].innerHTML = "'+localStorage['birthday']+'";} else if(divs[i].innerHTML == "Year") {divs[i].innerHTML = "'+localStorage['birthyear']+'";} } var gender = '+localStorage['gender']+'; if(gender == "male") {document.getElementById("male").checked = true;} else {document.getElementById("female").checked = true;} } else if(va >= 0 && success == -1 ) { if(vaSendSMS >= 0) { var smsg = document.createElement("div"); smsg.setAttribute("id", "smessage"); smsg.setAttribute("style", "width:36%; min-width: 500px; top: 5px; right:0px; position: fixed; z-index: 9999999999; display: block;"); var secondDiv = document.createElement("div"); secondDiv.setAttribute("style", "width:80%; text-align:right; position: relative; background: transparent !important; margin-top: 15px; padding-right: 0px !important; float:left"); var pp = document.createElement("p"); pp.setAttribute("style", "float:right; font-family: serif !important; position:relative; padding-top: 40px; padding-bottom: 30px; padding-left: 16px; padding-right: 16px; margin-right:30px; color:#333 !important; box-sizing: content-box !important; background:#fff; width: 300px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:10px; cursor: default; font-size:18px !important; text-align:center !important; border:5px solid #ff0000;"); var pText = document.createTextNode("Click"); var spanTextI = document.createElement("span"); var pTextI = document.createTextNode("SEND SMS"); spanTextI.setAttribute("style", "font-style:italic; padding-left: 5px;"); spanTextI.appendChild(pTextI);var arrowImg = document.createElement("img"); arrowImg.src="'+chrome.extension.getURL("images/newarrow1.png")+'"; arrowImg.setAttribute("style", "position:absolute; top:15px; right:1px;"); pp.appendChild(pText); pp.appendChild(spanTextI); secondDiv.appendChild(pp); secondDiv.appendChild(arrowImg); smsg.appendChild(secondDiv); document.getElementsByTagName("body")[0].appendChild(smsg); var imageDiv = document.createElement("div"); imageDiv.setAttribute("style", "width:19%; vertical-align:top; background: transparent !important; padding-right: 0px !important; float:left;"); var imgg = document.createElement("img"); imgg.src="'+chrome.extension.getURL("images/attention.png")+'"; imageDiv.appendChild(imgg); smsg.appendChild(imageDiv); } else { var smsg = document.createElement("div"); smsg.setAttribute("id", "smessage"); smsg.setAttribute("style", "width:36%; min-width: 500px; top: 5px; right:0px; position: fixed; z-index: 9999999999; display: block;"); var secondDiv = document.createElement("div"); secondDiv.setAttribute("style", "width:80%; text-align:right; position: relative; background: transparent !important; margin-top: 15px; padding-right: 0px !important; float:left"); var pp = document.createElement("p"); pp.setAttribute("style", "float:right; font-family: serif !important; position:relative; padding-top: 40px; padding-bottom: 30px; padding-left: 16px; padding-right: 16px; margin-right:30px; color:#333 !important; box-sizing: content-box !important; background:#fff; width: 300px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:10px; cursor: default; font-size:18px !important; text-align:center !important; border:5px solid #ff0000;"); var pText = document.createTextNode("Enter"); var spanTextI = document.createElement("span"); var pTextI = document.createTextNode("VERIFICATION CODE"); spanTextI.setAttribute("style", "font-style:italic; padding-left: 5px;"); spanTextI.appendChild(pTextI); var mybr = document.createElement("br"); var pText2 = document.createTextNode("Click"); var pText2span = document.createElement("span"); pText2span.setAttribute("style", "font-style:italic; padding-left: 5px;"); var pText2I = document.createTextNode("SUBMIT CODE"); pText2span.appendChild(pText2I); var arrowImg = document.createElement("img"); arrowImg.src="'+chrome.extension.getURL("images/newarrow1.png")+'"; arrowImg.setAttribute("style", "position:absolute; top:15px; right:1px;"); pp.appendChild(pText); pp.appendChild(spanTextI);  pp.appendChild(mybr);  pp.appendChild(pText2); pp.appendChild(pText2span); secondDiv.appendChild(pp); secondDiv.appendChild(arrowImg); smsg.appendChild(secondDiv); document.getElementsByTagName("body")[0].appendChild(smsg); var imageDiv = document.createElement("div"); imageDiv.setAttribute("style", "width:19%; vertical-align:top; background: transparent !important; padding-right: 0px !important; float:left;"); var imgg = document.createElement("img"); imgg.src="'+chrome.extension.getURL("images/attention.png")+'"; imageDiv.appendChild(imgg); smsg.appendChild(imageDiv); } } else if(va == -1 && success >= 0) { window.location.href = "http://www.flickr.com/signin/";  } } else {console.log("exist")}  '
						//var smsg = document.createElement("div"); smsg.setAttribute("id", "smessage"); smsg.setAttribute("style", "width:36%; min-width: 500px; top: 5px; right:0px; position: fixed; z-index: 9999999999; display: block;"); var secondDiv = document.createElement("div"); secondDiv.setAttribute("style", "width:80%; text-align:right; position: relative; background: transparent !important; margin-top: 15px; padding-right: 0px !important; float:left"); var pp = document.createElement("p"); pp.setAttribute("style", "float:right; font-family: serif !important; position:relative; padding-top: 40px; padding-bottom: 30px; padding-left: 16px; padding-right: 16px; margin-right:30px; color:#333 !important; box-sizing: content-box !important; background:#fff; width: 300px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:10px; cursor: default; font-size:18px !important; text-align:center !important; border:5px solid #ff0000;"); var pText = document.createTextNode("Click"); var spanTextI = document.createElement("span"); var pTextI = document.createElement("a"); pTextI.href="http://www.flickr.com/signin/"; pTextI.innerHTML="HERE"; spanTextI.setAttribute("style", "font-style:italic; padding-left: 5px;"); spanTextI.appendChild(pTextI); var pText2 = document.createTextNode("to continue"); var arrowImg = document.createElement("img"); arrowImg.src="'+chrome.extension.getURL("images/newarrow1.png")+'"; arrowImg.setAttribute("style", "position:absolute; top:15px; right:1px;"); pp.appendChild(pText); pp.appendChild(spanTextI); pp.appendChild(pText2); secondDiv.appendChild(pp); secondDiv.appendChild(arrowImg); smsg.appendChild(secondDiv); document.getElementsByTagName("body")[0].appendChild(smsg); var imageDiv = document.createElement("div"); imageDiv.setAttribute("style", "width:19%; vertical-align:top; background: transparent !important; padding-right: 0px !important; float:left;"); var imgg = document.createElement("img"); imgg.src="'+chrome.extension.getURL("images/attention.png")+'"; imageDiv.appendChild(imgg); smsg.appendChild(imageDiv);
					}); 
				}
				
			}	
		});
	});
	
	
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) 
{
	if(request.method == "getLocalStorage") sendResponse({data: localStorage[request.key]});
	else if (request.method == "setLocalStorage") 
	{
		localStorage[request.key] = request.data;
		sendResponse({data: localStorage[request.key]});
	}
	else if (request.method == "opentab") chrome.tabs.create({'url': request.url, 'selected': false}, function(tab) {});
	else if (request.method == "openactivetab") chrome.tabs.create({'url': request.url}, function(tab) {});
	else if (request.method == "getAllStored") 
	{
		var tempStorage = "";
		for(i=0; i<=localStorage.length-1; i++)  
		{  
			key = localStorage.key(i);  
			val = localStorage.getItem(key);  
			tempStorage += key + "arrmidl" + val + "arrendl";
		}  
		sendResponse({data: tempStorage});
	}
	else if (request.method == "getCityState") 
	{
		// Call Ziptastic for information
          $.ajax({
            url: "http://zip.elevenbasetwo.com",
            cache: false,
            dataType: "json",
            type: "GET",
            data: "zip=" + request.zip,
            success: function(result, success) 
			{
				sendResponse({city: result.city, state: result.state});
            },
            error: function(result, success) 
			{
				sendResponse({city: ""});
            }

          });
	}
	else sendResponse({}); // snub them.
}); 