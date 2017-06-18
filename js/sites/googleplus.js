$(document).ready(function()
{
	var arrPages = new Array();
	arrPages[0] = "/SignUp";
	arrPages[1] = "/UserSignUpIdvChallenge";
	arrPages[2] = "/up/accounts/?";
	arrPages[3] = "/SignUpDone?";
	arrPages[4] = "/personalinfo";
	arrPages[5] = "/up/search";
	arrPages[6] = "/up/accounts/upgrade/";
	arrPages[7] = "/getstarted/getstarted?";
	arrPages[8] = "/getstarted/profile?";
	arrPages[9] = "/getstarted/follow?";
	
	console.log(curPage(arrPages));
	
	var timCheck = setInterval(function ()
		{
			var va = $("body").html().indexOf("Add people you know");
			console.log("Text position "+va);
			if($("body").html().indexOf("Add people you know") > -1)
			{
				
				smessage("red", "<br/>Click <span style='font-style:italic'>CONTINUE</span>", "line-height: normal;");
				clearInterval(timCheck);
					setInterval(function ()
					{
						var url = window.location.href;
						if(url.indexOf("/getstarted/profile?") != -1)
						{
							location.reload();
						}
					},500);
			}
			
		},1000);
		
	if(curPage(arrPages) == 0)
	{	
		if(vContent("Create your Google Account"))
		{
			smessage("red", "<br/>Click <span style='font-style:italic'>NEXT STEP</span>", "line-height: normal;");
			$("#firstname-placeholder").hide();
			$("#lastname-placeholder").hide();
			$("#birthday-placeholder").hide();
			$("#birthyear-placeholder").hide();
			
			vChange("id", "FirstName", "firstname");
			vChange("id", "LastName", "lastname");
			vChange("id", "GmailAddress", "username");
			$("#GmailAddress").focus();
			$("#GmailAddress").blur();
			
			$("[title='Birthday']").children(":first").text(localStorage['birthmonth']);
			var months = { 01:"January", 02:"February",  03:"March",  04:"April",  05:"May", 06:"June", 07:"July", 08:"August", 09:"September", 10:"October", 11:"November", 12:"December" };
			$.each(months, function(key, value) 
			{
				if(value.indexOf(localStorage['birthmonth']) != -1)
				{
					$("#HiddenBirthMonth").attr("value",key);
				}	
			});
			
			vChange("id", "BirthDay", "birthday");
			vChange("id", "BirthYear", "birthyear");
			
			$("[title='Gender']").children(":first").text(localStorage['gender']);
			if(localStorage['gender'] == "male")
			{
				$("#HiddenGender").attr("value", "MALE");
			}
			else
			{
				$("#HiddenGender").attr("value", "FEMALE");
			}
			
			$("#SkipCaptcha").click();
			$("#TermsOfService").click();
			
			$("[title='Location']").children(":first").text(localStorage['country']);  
			setTimeout(function() 
			{
				vChange("id", "Passwd", "password");
				vChange("id", "PasswdAgain", "password");
				
			},1000);
		}
	
	}
	else if(curPage(arrPages) == 1)
	{
		if(vContent("Enter verification code"))
		{
			smessage("red", "<br/>Enter your verification code and <br/> Click <span style='font-style:italic'>CONTINUE</span>", "line-height: normal;");
		}
		else
		{
			smessage("red", "<br/>Enter your Phone number and <br/> Click <span style='font-style:italic'>CONTINUE</span>", "line-height: normal;");
		}
	}
	else if(curPage(arrPages) == 2)
	{
		if(vContent("How you'll appear"))
		{
			smessage("red", "<br/>Click <span style='font-style:italic'>NEXT STEP</span>", "line-height: normal;");
		}
	}
	else if(curPage(arrPages) == 3)
	{
		if(vContent("Welcome"))
		{
			smessage("red", "<br/>Click <span style='font-style:italic'>GET STARTED</span>", "line-height: normal;");
		}
	}
	else if(curPage(arrPages) == 4)
	{
		smessage("red", "<br/>Click <a href='https://plus.google.com/up/accounts/upgrade/'>here</a> to continue </span>", "line-height: normal;");
	}
	else if(curPage(arrPages) == 5)
	{
		smessage("red", "<br/>Click <span style='font-style:italic'>CONTINUE TO GOOGLE+</span>", "line-height: normal;");
	}
	else if(curPage(arrPages) == 6)
	{
		smessage("orange", "<br/>OPTIONAL Add your photo<br/> Click <span style='font-style:italic'>UPGRADE</span>", "line-height: normal;");
	}
	else if(curPage(arrPages) == 7)
	{
		console.log("Waiting");
		setTimeout(function ()
		{
			console.log("Execute");
			smessage("red", "<br/>Click <span style='font-style:italic'>CONTINUE</span>", "line-height: normal;");
		
			setInterval(function ()
			{
				var url = window.location.href;
				if(url.indexOf("/getstarted/profile?") != -1)
				{
					location.reload();
				}
			},500);
		
		},2000);
		
			
	}
	else if(curPage(arrPages) == 8)
	{
		var i = 0;
		smessage("red", "<br/>Click <span style='font-style:italic'>FINISH</span>", "line-height: normal;");
		var timer = setInterval(function()
		{
			$("[label='Employer']").each(function ()
			{
				console.log("asdf");
				if(i == 0)
				{
					i++;
					$(this).focus();
					$(this).val(localStorage['employer']);
					$(this).css("color","black");
					
					$("[label='Job title']").focus();
					$("[label='Job title']").val(localStorage['jobtitle']);
					$("[label='Job title']").css("color","black");
					
					$("[label='School name']").focus();
					$("[label='School name']").val(localStorage['college']); 
					$("[label='School name']").css("color","black");
					
					$("[label='Year']").focus();
					$("[label='Year']").val(localStorage['educationstartyear']); 
					$("[label='Year']").css("color","black");
					
					$("[label='Enter a city or a country']").focus();
					$("[label='Enter a city or a country']").val(localStorage['country']); 
					$("[label='Enter a city or a country']").css("color","black");
					
					clearInterval(timer);
				}	
			});
		},500);
				
	}
	else if(curPage(arrPages) == 9)
	{
		smessage("red", "<br/>Click <span style='font-style:italic'>CONTINUE</span> then, <br/> Click <span style='font-style:italic'>CONTINUE ANYWAY</span>", "line-height: normal;");
		
		setInterval(function ()
		{
			var url = window.location.href;
			if(url.indexOf("/getstarted/profile?") != -1)
			{
				location.reload();
			}
		},500);
			
	}
	else if(vContent("Follow things you love"))
	{
		if(window.location.href.indexOf("https://plus.google.com") > -1)
		{
			smessage("green", "<br/>You are finished with Google+ and you may exit this tab.", "line-height: normal;");
			$("a").each(function()
			{
				if($(this).attr("aria-label") == "Profile")
				{
					var url = "https://plus.google.com"+$(this).attr("href");
					var title = localStorage['firstname']+" "+localStorage['lastname']+ " - Google+";
					chrome.extension.sendRequest({method: "setLocalStorage", key: "googleplus_sLinkSet1", data: url});
					chrome.extension.sendRequest({method: "setLocalStorage", key: "googleplus_sTitleSet1", data: title});
						
					return false;
				}
			});
		}
	}
	
	
	
	
});