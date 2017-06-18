$(document).ready(function()
{
	
		var arrPages = new Array();
		//arrPages [0] = "/";
		arrPages [1] = "/login";					// page for login and signup
		arrPages [2] = "/account-settings";
	
		// cookies not reliable; check if user pic was available
		logged_in = $(".user_pic").length > 0 ? true : false;	
		
		if(!logged_in && curPage(arrPages) != 1)
		{
			setInterval(function()
			{
				var signUpFormStatus = document.getElementById("login_lb");
				if(signUpFormStatus != null)
				{
					vChange("name","word_user[login]", "username");
					vChange("name","word_user[password]", "password");
					vChange("name","email_address[email]", "useremail");	
				}
			
			}, 200);
			
			smessage("red", "<br/>Going to SIGN-UP page.");
			//fn_click("url", null, "https://www.scribd.com/login", 10); YESSSS
		}
		
		else if(curPage(arrPages) == 1)
		{
			smessage("red", "<br/>Click <i>SIGN UP</i> towards the bottom of the page.");		
			
			vChange("name","word_user[login]", "username");
			vChange("name","word_user[password]", "password");
			vChange("name","email_address[email]", "useremail");
			vCustom("id","optin_login_lb",false);

			setTimeout(function(){
				document.getElementsByName("signup_form_login_lb")[0].submit();
			},5000);			
			
		}	
		
		// check if logged in
		else if(logged_in)
		{
			if(curPage(arrPages) == 2)
			{
				smessage("green", "<br/>(OPTIONAL) Upload <i>PHOTO</i>.<br/>Click <i>SAVE</i>.<br/><br/> You have completed Scribd. Please click the next tab to continue.");
			
				vChange("id","word_user_name","fullname");
				var bio = myvBio("name", "word_user[about]", true);
				$("#word_user_about").val(bio);
				vChange("id","word_user_interests","interests");
				vChange("id","word_user_place","citystate");
				myVLinks("", "", "name","word_user[website]", false);
				vChange("name", "word_user[interests]", "interests");
				$("a").each(function()
				{
					if($(this).html().indexOf("View Public Profile") != -1)
					{	
						var url = $(this).attr("href");
						var title = $("#word_user_login").val()+" on Scribd";
						chrome.extension.sendRequest({method: "setLocalStorage", key: "scribd_sLinkSet1", data: url});
						chrome.extension.sendRequest({method: "setLocalStorage", key: "scribd_sTitleSet1", data: title});
						return false;
					}
				});
			}
			else
			{
				smessage("red", "<br/>Click <a href='https://www.scribd.com/account_settings'>here</a> to continue.");	
				//fn_click("url", null, "https://www.scribd.com/account_settings", 10);
			}	
		}
		
});