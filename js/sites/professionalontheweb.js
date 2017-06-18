
function goExecute()
{
    var arrPages = new Array();
	arrPages[0] = "/u/account/signup";
	arrPages[1] = "/login/sign_in.action";
	
	if(curPage(arrPages) == 0)
	{
		if(vContent("Sign up"))
		{
			smessage("red","<br/>Click <span style='font-style:italic'>SIGN UP</span>");
			vChange("id", "user_name", "username");
			vChange("id", "user_www", "link1_oLinkSet1");
			vChange("id", "user_email", "useremail");
			vCountry("id", "user_country_id", true);
			vChange("id", "user_started_at", "yearfounded");
			vChange("id", "user_login", "username");
			vChange("id", "user_password", "password");
			vChange("id", "user_password_confirmation", "password");
			
			$("#user_terms_of_service").prop("checked", true);
		}
	}
	else if(vContent("Add your tags separated by space"))
	{
	    smessage("green", "<br/>You may add details on this page then,<br/><br/>You are finished with ProfessionalOnTheWeb and you may exit this tab");
		myVLinks("id", "link_name", "id", "link_www", false);
		vChange("id", "tag_name", "keywords");
		
		setInterval(function ()
		{
			$("a").each(function ()
			{
				var user_name = localStorage['username'];
				if($(this).text() == user_name)
				{
					var url = "http://www.professionalontheweb.com"+$(this).attr("href");
					var title = localStorage['username']+" "+localStorage['country']+" - Professional On The Web";
					chrome.extension.sendRequest({method: "setLocalStorage", key: "professionalontheweb_sLinkSet1", data: url});
					chrome.extension.sendRequest({method: "setLocalStorage", key: "professionalontheweb_sTitleSet1", data: title});
					return false;
				}
			});
		},2000);
	
	}
	
}

$(document).ready(function()
{
	goExecute();
});	
			