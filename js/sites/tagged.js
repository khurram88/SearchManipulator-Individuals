
$(document).ready(function()
{
		var arrPages = new Array();
		arrPages[0] = "/register.html?display=login";
		arrPages[1] = "/reg_import_neutral.html?";
		arrPages[2] = "/reg_photo.html"; // not working
		arrPages[3] = "/home.html";
		arrPages[4] = "/profile.html";
		
		if(curPage(arrPages) == 0)
		{
			if(vContent("By clicking Next, you are indicating that you"))
			{	
				smessage("red","<br/>Click <span style='font-style:italic'>NEXT</span>");
				$("#login_frame").attr("class", "reg_form centered_form  hide_me");
				$("#reg_form").attr("class", "reg_width centered_form");
				
				vChange("id", "first_name", "firstname");
				$("#first_name").focus();
				
				vChange("id", "last_name", "lastname");
				$("#last_name").focus();
				
				vChange("id", "email", "useremail");
				$("#email").focus();
				
				vChange("id", "password", "password");
				$("#password").focus();
				
				vChange("id", "zipCode", "zip");
				$("#zipCode").focus();
				
				vChange("id", "birth_day", "birthday");
				$("#birth_day").focus();
				
				vMonth("id", "birth_month", "birthmonth");
				$("#birth_month").focus();
				
				vChange("id", "birth_year", "birthyear");
				$("#birth_year").focus();
				
				vChange("id", "country", "country");
				
				if(localStorage['gender'] == "male")
				{
					$("#male").focus().click();
				}
				else
				{
					$("#female").focus().click();
				}
				
			}
		}
		else if(curPage(arrPages) == 1)
		{
			smessage("red", "<br/>Click <span style='font-style:italic'>SKIP</span> then, <br/> Click <span style='font-style:italic'>MAYBE LATER</span> then, <br/>Click <span style='font-style:italic'>SKIP</span>");
		}	
		else if(curPage(arrPages) == 2)
		{
			smessage("orange","<br/>OPTIONAL: Upload a photo or, <br/>Click <span style='font-style:italic'>MAYBE LATER</span>");
		}	
		else if(curPage(arrPages) == 3)
		{
			if(window.location.href.indexOf("?jli=1") == -1)
			{
				smessage("red", "<br/>Go to your Yahoo email and confirm your email address.");
				var timterr = setInterval(function ()
				{
					var style = $('[role="dialog"]').css("display");
					if (typeof style === "undefined")
					{
						clearInterval(timterr);
						window.open("http://www.tagged.com/home.html?jli=1","_self");
						setTimeout(function ()
						{
							location.reload(true);
						},3000);
						
					}
					
				},500);
				 
			}
			else
			{
				smessage("red", "<br/>Click <a href='http://www.tagged.com/profile.html'>here</a> to continue");
		 
			}
		}
		else if(curPage(arrPages) == 4)
		{
			smessage("green","<br/>Click <span style='font-style:italic'>SAVE</span> behind this box. <br/><br/>You are finished with Tagged and you may exit this tab.");
			$('[name="profile_url"]').focus();
			vChange("name", "profile_url", "username");
			var url = "http://www.tagged.com/"+$('[name="profile_url"]').val();
			chrome.extension.sendRequest({method: "setLocalStorage", key: "tagged_sLinkSet1", data: url });
			chrome.extension.sendRequest({method: "setLocalStorage", key: "tagged_sTitleSet1", data: "Tagged - My Profile"});
				
			$('[name="submit_btn"]').bind( "click", function() 
			{
				var url = "http://www.tagged.com/"+$('[name="profile_url"]').val();
				chrome.extension.sendRequest({method: "setLocalStorage", key: "tagged_sLinkSet1", data: url });
				chrome.extension.sendRequest({method: "setLocalStorage", key: "tagged_sTitleSet1", data: "Tagged - My Profile"});
			});
			
		}	
		
});

