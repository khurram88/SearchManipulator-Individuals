$(document).ready(function()
{
	try {
		var arrPages = new Array();
		arrPages[0] = "/signup/";
		arrPages[1] = "/welcome/2/";
		
		if(curPage(arrPages) == 0)
		{	
			smessage("red","<br/>Click <span style='font-style:italic'>CREATE YOUR ACCOUNT</span>");
			vChange("id", "signupusername", "username");
			vChange("id", "displayn", "fullname");
			vChange("id", "email", "useremail");
			vChange("id", "signuppassword", "password");
			vChange("id", "signuppassword2", "password");
			//click_func("object", "input", "value", "Create your account >", 10);
			//fn_click("button","value","Create your account >",10);
		}
		else if(curPage(arrPages) == 1)
		{
			smessage("red","<br/> Click <span style='font-style:italic'>SAVE ALL CHANGES</span>");
			vChange("id", "realname", "fullname");
			vChange("id", "occupation", "jobtitle");
			vChange("name", "day", "birthday");
			vChange("name", "month", "birthmonth");
			vChange("name", "year", "birthyear");
			vCountry("name", "country", false);
			vGender("name", "gender", "dropdown");
			//vChange("name", "interests", "interests");
			myvBio("name", "aboutme", false);
			//click_func("object", "input", "value", "Save all changes", 10);
		//	fn_click("input","value","Save all changes",10);
				
		}
		else if(vContent("Category selection"))
		{
			smessage("red", "<br/>Select categories you are interested in, or click <span style='font-style:italic'>SAVE CATEGORY PREFERENCES</span>");
		}
		else if(vContent("You have now completed signup"))
		{
			smessage("green", "<br/>You are finished with listal and you may exit this tab.");	
			$("a").each(function()
			{
				if($(this).attr("href").indexOf("/viewimages") != -1)
				{
					var url = $(this).attr("href").replace("/viewimages","");
					var title = localStorage['firstname']+" "+localStorage['lastname']+" on Listal";
					
					chrome.extension.sendRequest({method: "setLocalStorage", key: "listal_sLinkSet1", data: url});
					chrome.extension.sendRequest({method: "setLocalStorage", key: "listal_sTitleSet1", data: title});
					
					return false;
				}
			});
		}
	
	} catch(err){}
	
});