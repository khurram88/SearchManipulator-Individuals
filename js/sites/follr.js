$(document).ready(function()
{
	var arrPages = new Array();
	arrPages[0] = "/Registration";
	arrPages[1] = "/Email/Details";
	arrPages[2] = "/CommunityAdmin/Welcome";
	arrPages[3] = "/Profile/Details";
	
	var linkset = false;
	
	if(curPage(arrPages) == 0)
	{
		if(vContent("We sent a registration email to:"))
		{
			smessage("red", "<br/>Please go to your email and confirm your registration.", "-webkit-box-sizing: initial !important; line-height: inherit !important;");
			
		}
		else
		{
			smessage("red", "<br/>Click <i>REGISTER WITH EMAIL</i>.", "-webkit-box-sizing: initial !important; line-height: inherit !important;");
			vChange("id", "FirstName", "firstname");
			vChange("id", "LastName", "lastname");
			vChange("id", "Email", "useremail");
			vChange("id", "Password", "password");
			vChange("id", "ConfirmPassword", "password");
		}
		
	}
	else if(curPage(arrPages) == 1)
	{
		smessage("red", "<br/>Click <i>NEXT</i>.", "-webkit-box-sizing: initial !important; line-height: inherit !important;");
		vChange("id", "Title", "jobtitle");
		myvBio("id", "Introduction", false);
		
		setInterval(function ()
		{
			var name = document.getElementById("Path").value;
			var title = "Follr | "+ localStorage['firstname']+" "+localStorage['lastname'];
			chrome.extension.sendRequest({method: "setLocalStorage", key: "follr_sLinkSet1", data: "http://follr.me/" + name});
			chrome.extension.sendRequest({method: "setLocalStorage", key: "follr_sTitleSet1", data: title});
			
		},500);
		
	}
	else if(curPage(arrPages) == 2)
	{
		smessage("red", "<br/>Click <a href='https://follr.com/Profile/Details'><i>here</i></a> to continue.", "-webkit-box-sizing: initial !important; line-height: inherit !important;");
		
	}
	else if(curPage(arrPages) == 3)
	{
		smessage("green", "<br/>You can add your detail on this page then, you are finished with setting up your Follr account.<br/><br/>You can close this tab and proceed to the next website.", "-webkit-box-sizing: initial !important; line-height: inherit !important;");
		
	}
	
});