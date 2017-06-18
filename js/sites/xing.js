$(document).ready(function()
{
	var arrPages = new Array();
	arrPages[0] = "/app/signup";
	arrPages[1] = "/app/signup?op=email;sid=";
	arrPages[2] = "/app/signup?op=minireg_step3";
	arrPages[3] = "/app/billing?op=premium_registration_overview";
	arrPages[4] = "/profile/";
	arrPages[5] = "/app/profile?op=aboutme";
	arrPages[6] = "/app/startpage";
	arrPages[7] = "/welcome/simple-profile"; //Third Page
	arrPages[8] = "/upsell/jobs-pro";
	arrPages[9] = "/contacts/recommendations";
	
	var profExp = false;
	var editEdu = false;
	var editInterest = false;
	var editQua = false;
	var editBir = false;
	
	if(curPage(arrPages) == 0)
	{
		if(vContent("We'll create your XING profile using the following information:"))
		{
			smessage("red", "<br/>Enter required details and click <i>NEXT</i> to continue.");
			vGender("name", "gender", "radio");
			vChange("id", "title", "jobtitle");
			vChange("id", "company", "employer");
			$( "#type" ).prev().text("Employee");
			vChange("id", "city", "citystate");
			vCustom("id", "type", "employee");
			vCountry("id", "country", false);
			$("#country").prev().text(localStorage["country"]);
			vChange("id", "industry", "major");
			vCustom("id", "timezone", "America/New_York");
			//click_func("object", "button", "class", "disable-after-submit mt10", 10);
			//fn_click("button", "value", "Sign up now for free", 10);
		}
		else if(vContent("Sign up for free"))
		{
			var lvMessage = "<br/>Click <i>SIGN UP NOW FOR FREE</i> then, <br/>Fill out the <i>CAPTCHA CODE</i> then,<br/>Click <i>POST</i>.";
			smessage("red", lvMessage);
			vChange("name", "first_name", "firstname");
			vChange("name", "last_name", "lastname");
			vChange("name", "email", "useremail");
			vChange("name", "password", "password");
			vCustom("name", "tandc_check", true);
			//click_func("object", "button", "tabindex", "260", 10);
		}
	}
	else if(curPage(arrPages) == 1)
	{
		smessage("red", "<br/>Go to your Email then,<br/>Click on the link in your mail to complete the registration process and activate your XING profile:");
	}
	else if(curPage(arrPages) == 2)
	{
		smessage("red", "<br/>Enter your <i>CAREER DETAIL</i>, then <br/>Click <i>NEXT</i> to continue.");
		
		vGender("name", "gender", "radio");
		vChange("id", "title", "jobtitle");
		vChange("id", "company", "employer");
		vChange("id", "city", "citystate");
		vCustom("id", "type", "employee");
		$( "#type" ).prev().text("Employee");
		vCountry("id", "country", true);
		$("#country").prev().text(localStorage["country"]);
		vChange("id", "industry", "major");
		vCustom("id", "timezone", "America/New_York");
		vChange("id", "haves-wrapper", "keywords");
		//fn_click("button", "class", "disable-after-submit mt10", 10);
		
		document.getElementById("type").addEventListener('change', function() 
		{
			if(this.value == "student")
			{
				vChange("id", "education", "college");
				vChange("id", "subject", "major");
				vChange("id", "academic", "degree");
			}
			
		},false);
	}
	else if(curPage(arrPages) == 3)
	{	
		smessage("red", "<br/>Click <a href='https://www.xing.com/profile'>here</a> to continue.");
		//fn_click("url", null, "https://www.xing.com/profile", 10);
		
	}
	else if(curPage(arrPages) == 4)
	{
		
		if(vContent("Visitors to your profile"))
		{
			smessage("green", "<br/>You may add details about your <i>CAREER</i>, <i>EDUCATION</i> on this page. If not, <br/><br/>You are finished with XING and you may exit this tab");//"<br/>1. Click <i>ADD</i> on <i>INTERESTS</i><br/>2. Click <i>ADD</i> on <i>ORGANIZATION</i><br/>3. Click <i>ADD</i> on <i>PROFESSIONAL EXPERIENCE</i><br/>4. Click <i>ADD</i> on <i>EDUCATIONAL BACKGROUND</i> <br/>5. Click <i>ADD</i> on <i>QUALIFICATIONS</i>. <br/>6. Click <i>ADD</i> on <i>BIRTHDAY</i>. <br/><br/>You are now completed with XING and may close this tab");
			
			setInterval(function()
			{
				
				//Professional Experience details
				if(vContent("Edit professional experience"))
				{
					if(!profExp)
					{
						var elem = document.getElementById("job-title");
					
						
						if(elem != null)
						{
							
							profExp = true;
							
							vChange("name" , "job_title", "jobtitle");
							$("#status").val("1");
							$("#industry").val("1");
							vChange("name" , "company_name", "employer");
							vChange("name" , "begin_date_month", "jobstartmonth");
							vChange("name" , "begin_date_year", "jobstartyear");
							if(localStorage['presently_employed'] == 'true')
							{
								$("#current-company").click();
							}
							else
							{
								vChange("name" , "end_date_month", "jobendmonth");
								vChange("name" , "end_date_year", "jobendyear");
							}
							vChange("name", "company_notes", "jobdesc");
						}	
					}
				}
				else 
				{
					profExp = false;
				}

				//Education Detail
				if(vContent("Edit education"))
				{
					if(!editEdu)
					{
						var elem = document.getElementById("school-name");
						
						
						if(elem != null)
						{
							editEdu = true;
							vChange("name" , "school_name", "college");
							vChange("name" , "subject", "major");
							vChange("name" , "begin_date_month", "educationstartmonth");
							vChange("name" , "begin_date_year", "educationstartyear");
							vChange("name" , "end_date_month", "educationendmonth");
							vChange("name" , "end_date_year", "educationendyear");
						}	
					}
					
				}
				else
				{
					editEdu = false;
				}
				
				//Interest Details
				if(vContent("Edit interests"))
				{
					if(!editInterest)
					{
						var elem = document.getElementsByName("interests")[0];
					
						
						if(elem != null)
						{
							editInterest = true;
							vChange("name" , "interests", "interests");
						}	
					}	
				}
				else
				{
					editInterest = false;
				}
				
				
				//Qualification
				if(vContent("Edit qualifications"))
				{
					if(!editQua)
					{
						var elem = document.getElementsByName("qualifications")[0];
						
						
						if(elem != null)
						{
							editQua = true;
							vChange("name" , "qualifications", "degree");
						}	
					}	
				}
				else 
				{
					editQua = false;
				}

				//Edit Birthday
				if(vContent("Edit date of birth"))
				{
					if(!editBir)
					{
						var elem = document.getElementById("birth_date_day");
						
						
						if(elem != null)
						{
							editBir = true;
							vChange("name" , "day", "birthday");
							vChange("name" , "month", "birthmonth");
							vChange("name", "year", "birthyear");
						}	
					}	
				}
				else
				{
					editBir = false;
				}	
					
				
			},500);
			
			
			$("a").each(function ()
			{
				if($(this).text() == 'Public')
				{
					var wL = "https://www.xing.com"+$(this).attr('href');
					var title = localStorage['firstname']+" "+localStorage['lastname']+" | XING";
					chrome.extension.sendRequest({method: "setLocalStorage", key: "xing_sLinkSet1", data: wL});
					chrome.extension.sendRequest({method: "setLocalStorage", key: "xing_sTitleSet1", data: title});
				}	
			});
			
			
			
		}
		else
		{
			$("a").each(function()
			{
				if($(this).html().indexOf("/img/n/nobody_m_s2.png") != -1)
				{
					smessage("red", "<br/>Click <a href='" + $(this).attr("href") + "'>here</a> to continue");
					//fn_click("url", null, $(this).attr("href"), 10);
					return false;
				}
			});
		}
	}
	else if(curPage(arrPages) == 5)
	{
		/*smessage("green", "<br/>Click <i>EDIT</i> and add any bio then, <br/>Click <i>SAVE</i>.<br/><br/> And that's it you are now completed with XING and may close this tab."); 
		
		$('*[data-edit-widget-op="edit"]').bind('click', function() 
			{
				var timerIDD5 = setInterval(function()
				{
					$("a").each(function()
					{
						if($(this).text() == "Bold [CTRL + B]")
						{
							
							var vbio = myvBio("dfd", "dfd", true);
							$("iframe").contents().find(".wysihtml5-output").append(vbio);
							clearInterval(timerIDD5);
						}
						
					});
					/* var asd = document.getElementById("wysihtml5-about-me-toolbar");
					if(vContent("Page can be viewed by others." && asd != null))
					{
						var vbio = myvBio("dfd", "dfd", true);
						$("iframe").contents().find(".wysihtml5-output").append(vbio);
						clearInterval(timerIDD5);
					} 
				}, 2000);
			});*/
	}
	else if(curPage(arrPages) == 6)
	{
		smessage("red", "<br/>Click <a href='https://www.xing.com/profile'>here</a> to continue.");
	}
	else if(curPage(arrPages) == 7)
	{
		var url = window.location.href;
		if(vContent("Which of the following employment statuses"))
		{
			smessage("red", "<br/>Enter your <i>DETAILS</i> then, <br/> Click <i>COMPLETE SHORT INTRODUCTION</i>.");
		}
		else if(url.indexOf("/employee") > -1 || url.indexOf("/unemployed") > -1 || url.indexOf("/student") > -1 || url.indexOf("/entrepreneur") > -1 || url.indexOf("/freelancer") > -1)
		{
			if(url.indexOf("/industry") > -1)
			{
				smessage("red", "<br/>Select your <i>INDUSTRY</i> then, <br/> Click <i>COMPLETE SHORT INTRODUCTION</i>.");
			}
			else
			{
				smessage("red", "<br/>Enter your <i>DETAILS</i> then, <br/> Click <i>COMPLETE SHORT INTRODUCTION</i>.");
			}
		}
		
	}
	else if(curPage(arrPages) == 8)
	{
		smessage("red", "<br/>Click <i>NO THANKS</i>");
	}
	else if(curPage(arrPages) == 9 || vContent("Invite people to join XING"))
	{
		var url = "https://www.xing.com"+$('a[data-tooltip="Profile"]').attr('href');
		smessage("red", "<br/>Click <a href='"+url+"'>here</a> to continue.");
	}
	
});