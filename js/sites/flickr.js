$(document).ready(function()
{
	var arrPages = new Array();
	arrPages[0] = "/config/login?.src=flickrsignin";
	arrPages[1] = "/signin/yahoo/";
	arrPages[2] = "/profile_url.gne";
	arrPages[3] = "/profile_edit.gne";
	arrPages[4] = "/people/";
	arrPages[5] = "/signup/";
	arrPages[6] = "/account_prefs_update.gne?redir=";
	arrPages[7] = "/account_prefs_update.gne";
	arrPages[8] = "/config/login_verify2?";
	arrPages[9] = "/registration?"; //if useremail is other then Yahoo.com
	console.log("Pageeeeeee "+curPage(arrPages));
	
	if(vContent("Flickr is more fun with friends")) // This check for the very front page of flickr i.e www.flickr.com
	{
		smessage("red", "<br/>Click <a href='http://www.flickr.com/profile_url.gne'>here</a> to continue.");
		//fn_click("url", null, "http://www.flickr.com/profile_url.gne", 10);
	}
	else if(curPage(arrPages) == 6 || curPage(arrPages) == 7)
	{
		smessage("red", "<br/>Click <i>NEXT</i> then, <br/>Click <i>TAKE ME TO FLICKR</i>.");
	}
	else if(curPage(arrPages) == 0)
	{	
		smessage("red", "<br/>Click <i>SIGN IN</i>");
		vChange("id", "login-username", "useremail");
		vChange("id", "login-passwd", "password");
		//fn_click_byID("id", ".savvxcvxcve", 10);
	}
	else if(curPage(arrPages) == 1 || curPage(arrPages) == 5)
	{	
		if(vContent("Here are some alternatives if you'd like to use one of them"))
		{
			smessage("red", "<br/>Please select a new username then click <i>CREATE MY ACCOUNT</i>");
		}
		else if(vContent("Choose your new Flickr screen name"))
		{
			smessage("red", "<br/>Please click <i>REATE MY ACCOUNT</i>");
			vChange("id", "username_field", "username");
			fn_click("input", "value", "CREATE MY ACCOUNT", 10);
		}
		
	}
	else if(vContent("Here's how to get started"))
	{
		smessage("red", "<br/>Click <a href='http://www.flickr.com/profile_url.gne'>here</a> to continue.");
		fn_click("url", null, "http://www.flickr.com/profile_url.gne", 10);
	}
	else if(curPage(arrPages) == 2)
	{	
		if(vContent("Choose your alias"))
		{
			if(vContent("Sorry, that alias is already taken"))
				smessage("red", "<br/>Please choose another alias then click <i>PREVIEW</i>");
			else 
				smessage("red", "<br/>Click <i>PREVIEW</i>");
				
			vChange("name", "alias", "username");
		}
		else if(vContent("This can't be changed later") && vContent("Please check to make sure this is correct"))
		{
			smessage("red", "<br/>Click <i>OK, LOCK IT IN</i>");
			vChange("name", "alias", "username");
		}
		else
		{
			smessage("red", "<br/>Click <a href='http://www.flickr.com/profile_edit.gne'>here</a> to continue.");
			//fn_click("url", null, "http://www.flickr.com/profile_edit.gne", 10);
		}
	}
	else if(curPage(arrPages) == 3)
	{
		smessage("red", "<br/>Click <i>SAVE IT</i> at the bottom of the page.");
	
		vChange("name", "firstname", "firstname");
		vChange("name", "lastname", "lastname");
		
		var youBio = myvBio("df", "df", true);
		$('[name="description"]').val(youBio);
		
		vChange("name", "occupation", "job");
		vChange("name", "hometown", "citystate");
		vChange("name", "country", "country");
		vChange("name", "city", "city");
		myVLinks("name", "website2", "name", "website", false);
		
		//$('[name="description"]').val(bio);
		
		if(localStorage['gender'] == 'female')
		{
			$('input:radio[name=gender]')[0].checked = true;
		}
		else
		{
			$('input:radio[name=gender]')[1].checked = true;
		}
	}
	else if(curPage(arrPages) == 4)
	{
		smessage("green", "<br/>You are currently viewing at your profile.<br/><br/>You are now finished with FLICKR and may close this tab.");
		var title = localStorage['useremail'].split("@");
		chrome.extension.sendRequest({method: "setLocalStorage", key: "flickr_sLinkSet1", data: window.location.href});
		chrome.extension.sendRequest({method: "setLocalStorage", key: "flickr_sTitleSet1", data: "Flickr: "+title[0]});
	}
	else if(curPage(arrPages) == 8)
	{	
		smessage("red", "<br/>Click <i>SIGN IN</i>");
		vChange("id", "username", "useremail");
		vChange("id", "passwd", "password");
		//fn_click_byID("id", ".save", 10); YESSSSS
	}
	else if(curPage(arrPages) == 9)
	{
		vChange("name", "firstname", "firstname");
		vChange("id", "last-name", "lastname");
		vChange("id", "password", "password");
		vMonth("id", 'month', 'birthmonth');
		vChange("id", "day", "birthday");
		vChange("id", "year", "birthyear");
	}
	
	
});