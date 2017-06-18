function listenerFunction ()
{
	document.getElementById("form").addEventListener('change', function() 
			{
				if(this.value == "employment")
				{
					vChange("id", "n_name", "employer");
				}
				else if(this.value == "education")
				{
					vChange("id", "n_name", "college");
				}
				else if(this.value == "association")
				{
					$("#n_name").val("");
				}
			},false);
}

function addLinkListener()
{
	
			document.getElementById("linkSelectType").addEventListener('change', function() 
			{
				if(this.value == "Flickr")
				{
					vChange("id", "link_form_Flickr_username", "username");
					vChange("id", "link_form_Flickr_title", "flickr_sTitleSet1");
				}
				else if(this.value == "LinkedIn")
				{
					vChange("id", "link_form_LinkedIn_username", "username");
					vChange("id", "link_form_LinkedIn_title", "linkedin_sTitleSet1");
				}
				else if(this.value == "Twitter")
				{
					var twitterlink = localStorage['twitter_sLinkSet1'];
					var splitLink = twitterlink.split("/");
					vCustom("id", "link_form_Twitter_username", splitLink[3]);
					vChange("id", "link_form_Twitter_title", "twitter_sTitleSet1");
				}
			},false);
			

}
function goExecute()
{
    var arrPages = new Array();
	arrPages[0] = "www.naymz.com";
	arrPages[1] = "/login/sign_in.action";
	arrPages[2] = "/account/user_home.action?messageType=welcome";
	
	var progress = null;
	var count = 0;
	var employee = true;
	var education = true;
	var addLink = true;
	
	var link1 = false;
	var link2 = false;
	var link3 = false;
	
	var i = 0;
    console.log("Pageeeeeee "+curPage(arrPages));
	if(curPage(arrPages) == 0)
	{
		if(vContent("Choose Theme"))
		{
			vChange("id", "n_name", "employer");
			smessage("green", "Add as many details as you wish to include. <i>ADD LINK</i> at the bottom of the page is where you can add up to 3 URLs you wish to promote in search results. This can be any website that you are on and you wish was higher on search results. <br/><br/>You are now finished with Naymz and may close this tab.");
					
			setInterval(function() 
			{ 
				var elem = document.getElementById("add_history");
				if(elem && count == 1)
				{
					count = 0;
					listenerFunction();
				}
				else if(!elem)
				{
					count = 1;
				}
			},1000);
			
			document.getElementById("form").addEventListener('change', function() 
			{
				if(this.value == "employment")
				{
					vChange("id", "n_name", "employer");
				}
				else if(this.value == "education")
				{
					vChange("id", "n_name", "college");
				}
				else if(this.value == "association")
				{
					$("#n_name").val("");
				}
			},false);
			
							
			$("a").each(function()
			{   
				if($(this).html().indexOf("Edit") != -1)
				{
					var className = $(this).attr('class');
					
					if(progress == null)
					{
						progress = setInterval(function()
						{
							
							 var className = $("#history_updateSection").children("div").attr("class");
							 var classNameforAddLink = $("#linkSection").attr("class");
							 
							 if(className == "edit" && vContent("Name of Employing Institution"))
							 {
								if(employee)
								{
									employee = false;
									console.log("yes employment section");
									vChange("id", "save_employment_name_name", "employer");
									vChange("name", "title.title", "jobtitle");
									vChange("name", "title.startDateMonth", "jobstartmonth");
									vChange("id", "title.startDateYear", "jobstartyear");
									vChange("id", "save_employment_title_roles", "jobdesc");
									
									if(localStorage['presently_employed'] != "true")
									{
										vChange("id", "employment.endDateMonth", "jobendmonth");
										vChange("id", "employment.endDateYear", "jobendyear");
									}
									
								}
								
							 }
							 else
							 {
								employee = true;
							 }
							 
							 if(className == "edit" && vContent("Add Education"))
							 {
								if(education)
								{
									education = false;
									console.log("yes in education section");
									vChange("id", "save_education_name_name", "college");
									vChange("id", "education.startYearStr", "educationstartyear");
									
									if(localStorage['presently_studied'] != "true")
									{
										vChange("id", "education.endYearStr", "educationendyear");
									}	
								}	
							 }
							 else
							 {
								education = true;
							 }
							 
							 
							 // Add Link Section Starts
				
							 if(classNameforAddLink == "editable" && vContent("Add Link"))
							 {
								if(addLink)
								{	
									addLink = false;
									addLinkListener(); //This is SELECT drop down listener
									myVLinks("id", "link_form_Other_title", "id", "link_form_Other_url", false);
									
								}
							 }
							 else
							 {
								addLink = true;
							 }
							 
						},1000);
					}	
				}
			});
		
		}
		else if(vContent("Standard Registration"))
		{
			smessage("red","<br/>Complete the <i>CAPTCHA</i> then,<br/>Click <i>JOIN</i> then,<br/>Click <i>FINISHED</i> to close the pop-up then,<br/>Again Click <i>FINISHED</i> to close the pop-up.");
			vChange("id", "u_firstName", "firstname");
			vChange("id", "u_lastName", "lastname");
			vChange("id", "u_username", "useremail");
			vChange("id", "u_plainTextPassword", "password");
		}
	}
	else if(curPage(arrPages) == 1)
	{
	    smessage("red", "<br/>Complete the <i>CAPTCHA CODE</i> then, <br/>Click <i>JOIN</i> then,<br/>Click <i>FINISHED</i>");
		vChange("id", "u_firstName", "firstname");
		vChange("id", "u_lastName", "lastname");
		vChange("id", "u_username", "useremail");
		vChange("id", "u_plainTextPassword", "password");
	}
	else if(curPage(arrPages) == 2)
	{
		smessage("red", "<br/>Click <i>NO THANKS</i> at the bottom of the pop-up then,<br/>Click the <i>PROFILE</i> link to the left on the menu then,<br/> Click <i>EDIT</i>");
    }
    
}

$(document).ready(function()
{
	goExecute();
});	
			