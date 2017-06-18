$(document).ready(function()
{
	var arrPages = new Array();
	arrPages[0] = "/en/";
	arrPages[1] = "/onboarding?signupSource=easySignup";
	arrPages[2] = ".com/profile/";
	
	
	if(curPage(arrPages) == 0)
	{	
		if(vContent("sign up with your email address:"))
		{
			smessage("red", "<br/>Click <i>SIGN UP</i>");
			
			vChange("id", "firstName", "firstname");
			$('label:contains("First Name")').text("");
			
			vChange("id", "lastName", "lastname");
			$('label:contains("Last Name")').text("");
			
			vChange("id", "email", "useremail");
			$('label:contains("Email address")').text("");
			
			vChange("id", "password", "password");
			$('label:contains("Choose a password")').text("");
			
			//fn_click_byID("id", "sendpassword", "10"); YESSS
		}
	}
	else if(curPage(arrPages) == 1)
	{
		smessage("red", "<br/>Click on <i>YOUR PROFILE</i> at the top left.");
		//fn_click("a", "html", "Profile", 10);
	}
	else if(curPage(arrPages) == 2)
	{
		if(vContent("ist your interests here to help visitors get to know you bet"))
		{
			smessage("green", "<br/>Add your <i>BIOGRAPHY</i>, <i>PROFESSION</i> and <i>EDUCATION</i> below. <br/><br/>Then, you may move onto the next tab.");
			var wL = $("#profilePreview").attr('href');
			var url = "http://www.viadeo.com"+wL;
			var title = localStorage['firstname']+" "+localStorage['lastname']+" | Viadeo";
			
			chrome.extension.sendRequest({method: "setLocalStorage", key: "viadeo_sLinkSet1", data: url});
			chrome.extension.sendRequest({method: "setLocalStorage", key: "viadeo_sTitleSet1", data: title});	
			
			//About Me Details
			$('#editoverview').bind('click', function() 
			{
				var timerIDD = setInterval(function()
				{
					if(vContent("Tell us more about yourself"))
					{
						myvBio("name" , "text", false);
						clearInterval(timerIDD);
					}
				}, 1000);
			});
			
			// Add School Details
			$('#addSchool').bind('click', function()
			{
				var schoolTimer = setInterval(function()
				{
					if(vContent("Add to your Education"))
					{
						vChange("id", "nameSchool", "college");
						vChange("id", "schoolDepartment-input", "major");
						vChange("id", "diploma-input", "degree");
						vChange("name", "startMonth", "educationstartmonth");
						$('[name="startMonth"]').next().text(localStorage['educationstartmonth']);
						vChange("name", "startYear", "educationstartyear");
						$('[name="startYear"]').next().text("");
						if(localStorage['presently_studied'] == "true")
						{
							$("#dateStillInCheckbox_profilePopinDates").click();
						}
						else
						{
							vChange("name", "endMonth", "educationendmonth");
							$('[name="endMonth"]').next().text(localStorage['educationendmonth']);
							vChange("name", "endYear", "educationendyear");
							$('[name="endYear"]').next().text("");
						}
						clearInterval(schoolTimer);
					}
					
				},1000);
			});
			
			//Add Job details
			$('#addJob').bind('click', function()
			{
				
				var jobtimer = setInterval(function()
				{
					
					if(vContent("Your job title"))
					{
						
						vChange("id", "namePosition", "employer");
						vChange("id", "companyTitle", "jobtitle");
						vChange("id", "diploma-input", "degree");
						
						vChange("name", "startMonth", "jobstartmonth");
						$('[name="startMonth"]').next().text(localStorage['jobstartmonth']);
						vChange("name", "startYear", "jobstartyear");
						$('[name="startYear"]').next().text("");
						
						if(localStorage['presently_employed'] == "true")
						{
							$("#dateStillInCheckbox_profilePopinDates").click();
						}
						else
						{
							vChange("name", "endMonth", "jobendmonth");
							$('[name="endMonth"]').next().text(localStorage['jobendmonth']);
							vChange("name", "endYear", "jobendyear");
							$('[name="endYear"]').next().text("");
						}
						
						clearInterval(jobtimer);
					}
					
				},1000);
			});
			
			// Add Keyword details
			$('#btnKeywords').bind('click', function() 
			{
				var timerID = setInterval(function()
				{
					if(vContent("List of keywords"))
					{
						vChange("class" , "js_addKeyWord", "keywords");
						clearInterval(timerID);
					}
				}, 1000);
			});
			
			//Add Links
			$('#socialLinksBox').bind('click', function() 
			{
				var timerID = setInterval(function()
				{
					if(vContent("Link management"))
					{
						myVLinks("name" , "socialTitle", "name", "socialLink", false);
						$('[name="socialTitle"]').next().text("");
						$('[name="socialLink"]').next().text("");
						clearInterval(timerID);
					}
				}, 1000);
			});
		}
	}
	
});