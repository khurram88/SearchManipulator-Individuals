$(document).ready(function()
{
	var arrPages = new Array();
	arrPages[0] = "#step=2";
	arrPages[1] = "#step=3";
	arrPages[2] = "#step=4";
	arrPages[3] = localStorage['quoraURL'];
	
	var i = 0;
	var j = 0;
	var k = 0;
	 
	
	if(vContent("Sign up to read Quora") && vContent("By signing up you indicate that you have read and agree to the"))
	{
		smessage("red", "<br/>Click <span style='font-style:italic'>SIGN UP</span>", "line-height: normal !important;");
		$("div").each(function()
		{
			if($(this).attr("class") == "hidden step_2 row")
			{
				$(this).attr("class", "step_2 row")
				
			}
			
			if($(this).attr("class") == "row connect_buttons_row")
			{
				$(this).hide();
			}
			
		});	
		
		//vChange("name", "name", "fullname");
		$('input[name="name"]').each(function()
		{
			$(this).focus();
			$(this).val(localStorage['fullname']);
		
		});
		
		$('input[name="email"]').each(function()
		{
			if(i == 0)
			{
				i++;
				$(this).focus();
				$(this).val(localStorage['useremail']);
			}
			else
			{
				i++;
			}	
		});
		
		$('input[name="password"]').each(function()
		{
			if(j == 0)
			{
				j++;
				$(this).focus();
				$(this).val(localStorage['password']);
			}
			else
			{
				j++;
			}	
		});
		
	} 
	else if(vContent("Verify your email address"))
	{
		
		var timer = setInterval(function ()
		{
			//var url = window.location.href;
			if(vContent("Follow all the topics you are interested in"))
			{
				location.reload();
				clearInterval(timer);
			}
		},2000);
		
		smessage("red", "<br/>Click <span style='font-style:italic'>CONFIRM MY EMAIL</span> then, <br/>confirm your email address");
		
	}
	else if(vContent("topics you're interested in")) 
	{
		var timer = setInterval(function ()
		{
			//var url = window.location.href;
			if(vContent("The average person has"))
			{
				clearInterval(timer);
				setTimeout(function ()
				{
					location.reload();
				},5000);
				
			}
		},2000);
		
		smessage("red", "<br/>Select <span style='font-style:italic'>TOPICS</span> you are interested in then,<br/> Click <span style='font-style:italic'>CONTINUE</span>", "line-height: normal !important;");
		
		
	}
	else if(vContent("The average person has"))
	{	
		
		/*var timer = setInterval(function ()
		{
			var url = window.location.href;
			if(url.indexOf("#step=4") != -1)
			{
				location.reload();
				clearInterval(timer);
			}
		},2000);*/
		
		smessage("green", "<br/>Click <span style='font-style:italic'>NOT NOW</span> then, <br/><br/>You are finished with Quora and you may exit this tab.", "line-height: normal !important;");
		var url = "";
		var tim = setInterval(function ()
		{
			$("a").each(function()
			{
				if($(this).text() == "Profile")
				{
					url = "http://www.quora.com"+$(this).attr("href");
					var title = localStorage['fullname']+" - Quora";
					chrome.extension.sendRequest({method: "setLocalStorage", key: "quora_sLinkSet1", data: url});
					chrome.extension.sendRequest({method: "setLocalStorage", key: "quora_sTitleSet1", data: title});
					clearInterval(tim);
					return false;
				} 
			});
		},2000);
		
		
	}
	else if(vContent("Invite your friends to Quora"))
	{
		/* var timer = setInterval(function ()
		{
			if(vContent("Set Up Your Account"))
			{
				location.reload();
				clearInterval(timer);
			}
		},2000); */
		
		var url = localStorage['quora_sLinkSet1'];
		smessage("red", "<br/>Click <a href='"+url+"'>here</a> to continue");
	}
	else if(vContent("Set Up Your Account") && vContent("Add details about what you know"))
	{
		
		//alert("home comes");
		/*var url = "";
		$("a").each(function()
		{
			if($(this).attr("class") == "nav_item has_nav_menu")
			{
				url = "http://www.quora.com"+$(this).attr("href");
				console.log(url);
				return false;
			}
		});
		
		smessage("green", "<br/>You are finished with Quora and you may exit this tab."); 
		var title = localStorage['fullname']+" - Quora";
		chrome.extension.sendRequest({method: "setLocalStorage", key: "quora_sLinkSet1", data: url});
		chrome.extension.sendRequest({method: "setLocalStorage", key: "quora_sTitleSet1", data: title});*/
	}
	
	
});