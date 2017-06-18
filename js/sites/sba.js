$(document).ready(function()
{	
	var arrPages = new Array();
	arrPages[0] = "/user/register";
	arrPages[1] = "/community/users/";
	arrPages[2] = "/add/topic";
	arrPages[3] = "/discussion-boards/";
	
	if(vContent("Trending on SBA.Gov") && vContent("Log out"))
	{
		smessage("red", "<br/> Click <a href='http://www.sba.gov/community/add/topic'>here</a> to continue.");
	}
	else if(curPage(arrPages) == 0)
	{
		smessage("red", "<br/>Type <span style='font-style:italic'>CAPTCHA CODE</span> then,<br/>Click <span style='font-style:italic'>CREATE NEW ACCOUNT</span>");
		vChange("id", "edit-name", "username");
		vChange("id", "edit-mail", "useremail");
		vChange("id", "edit-pass-pass1", "password");
		$("#edit-pass-pass1").focus();
		vChange("id", "edit-pass-pass2", "password");
		$("#edit-pass-pass2").focus();
		$("#edit-pass-pass2").blur();
		$("#edit-name").focus();
		
		$("#edit-field-community-guidlines-und").prop("checked", true);
		
		//Community Profile
		vChange("id", "edit-field-name-und-0-value", "firstname");
		vChange("id", "edit-field-title-und-0-value", "jobtitle");
		myvBio("id", "edit-field-about-me-und-0-value", false);
		myVLinks("id", "edit-field-professional-web-site-url-und-0-title", "id", "edit-field-professional-web-site-url-und-0-url", false);
		vChange("id", "edit-field-location-und-0-value", "citystate");
	}
	else if(curPage(arrPages) == 1)
	{
		if(vContent("Thank you for joining the SBA community"))
		{
			smessage("red", "<br/> Click <a href='http://www.sba.gov/community/add/topic'>here</a> to continue.");
		}
	}
	else if(curPage(arrPages) == 2)
	{
		if(vContent("complete the word verification below") || vContent("Please complete this new word verification"))
		{
			smessage("red", "<br/>Type <span style='font-style:italic;'>VERIFICATION CODE</span> then,<br/>Click <span style='font-style:italic'>SUBMIT</span>.");
			vChange("id", "edit-title", "fullname");
			$("#edit-taxonomy-5031").val("13531");
			myvBio("id", "edit-body", false);
		}
		else
		{
			smessage("red", "<br/>Click <span style='font-style:italic'>SUBMIT</span>.");
			vChange("id", "edit-title", "fullname");
			$("#edit-taxonomy-5031").val("13531");
			myvBio("id", "edit-body", false);
		}
	}
	else if(curPage(arrPages) == 3)
	{
		smessage("green", "<br/> You are now finished with SBA and may close this tab.");
		chrome.extension.sendRequest({method: "setLocalStorage", key: "sba_sLinkSet1", data: document.URL});
		chrome.extension.sendRequest({method: "setLocalStorage", key: "sba_sTitleSet1", data: localStorage['username']+" | SBA.gov"});
	}
	
});
