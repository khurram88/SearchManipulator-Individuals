$(document).ready(function()
{	
	var arrPages = new Array();
	arrPages[0] = "/signup";
	arrPages[1] = "/welcome/intro";
	arrPages[2] = "/settings/profile";
	arrPages[3] = "/welcome/recommendations";
	
	
	if(curPage(arrPages) == 0)
	{
		smessage("red", "<br/>Click <span style='font-style:italic'>CREATE MY ACCOUNT</span>");
		vChange("name", "user[name]", "fullname");
		vChange("name", "user[email]", "useremail");
		vChange("name", "user[user_password]", "password");
		vChange("name", "user[screen_name]", "username");
		//fn_click("input", "value", "Create my account", 10);
	}
	else if(curPage(arrPages) == 1)
	{
	    smessage("red", "<br/>Go to your Yahoo email and confirm your email address to access all of Twitter's features.");
		/*var tm_set = setInterval(function()
		{
			if(vContent("Get started in less than 60 seconds."))
			{
				if(!vContent("Step 2")) 
				{	
					clearInterval(tm_set);
					smessage("red", "[Step 2 of 4] <br/>Click <a href='http://twitter.com/settings/profile'>here</a> to continue.");
					fn_click("url", null, "http://twitter.com/settings/profile", 10);
				}
			}
		}, 100);*/
	}
	else if(vContent("Here are some people you might enjoy following."))
	{
		smessage("red", "<br/>Your email address has been confirmed.<br/>Click <a href='https://twitter.com/settings/profile'>here</a> to edit your Twitter profile");
	}
	else if(curPage(arrPages) == 2 && vContent("Thanks, your settings have been saved."))
	{
		smessage("green", "<br/>You are finished with Twitter and you may exit this tab.");
		
		chrome.extension.sendRequest({method: "setLocalStorage", key: "twitter_sLinkSet1", data: "http://twitter.com" + $("[data-nav='profile']").attr("href") });
		chrome.extension.sendRequest({method: "setLocalStorage", key: "twitter_sTitleSet1", data: $("[data-nav='profile']").attr("href").substring(1)+" on Twitter"});
		$("#settings_save").removeAttr("disabled", "disabled");
	}
	else if(curPage(arrPages) == 2)
	{
		smessage("orange", "<br/>Click <span style='font-style:italic'>SAVE CHANGES</span>.");
		myVLinks("", "", "id", "user_url", false);
		
		if(localStorage["citystate"].length > 30)
			vChange("id", "user_location", "city");
		else
			vChange("id", "user_location", "citystate");
			
		myvBio("id", "user_description", false);
		$("#settings_save").removeAttr("disabled", "disabled");
	}
	else if(curPage(arrPages) == 3)
	{
		smessage("red", "<br/>Go to your Yahoo email and confirm your email address to access all of Twitter's features.");
	}
	
});

function vUsername()
{
	var x = localStorage["username"];
	$.ajax("http://twitter.com/users/username_available?username=" + x)
	.done(function(data)
	{
		if(data["valid"])
		{
			vChange("name", "user[screen_name]", "username");
		}
		else
		{
			x.replace(x.match(/[0-9][0-9]/), parseInt(x.match(/[0-9][0-9]/)) + 1);
			localStorage["username"] = x;
			vUsername();
		}
	});
}