$(document).ready(function()
{
	try {
			
		var arrPages = new Array();
		arrPages[0] = "/reg/join?trk=hb_join";
		arrPages[1] = "/reg/basic-profile"; 
		arrPages[2] = "/reg/abook";
		arrPages[3] = "/reg/confirm-";
		arrPages[4] = "/reg/send-mobile-message-entry";
		arrPages[5] = "/reg/upgrade?flow="; //removed
		arrPages[6] = "/profile/guided";
		arrPages[7] = "/profile/edit";
		arrPages[8] = "/profile/edit-additional-info";
		arrPages[9] = "/profile/edit?";
		arrPages[10] = "/profile/edit-education";
		arrPages[11] = "/profile/edit-summary";
		arrPages[12] = "/uas/login";
		arrPages[13] = "/profile/view";
		arrPages[14] = "/profile/edit?locale=en_US&report%2Esuccess";
		arrPages[15] = "/reg/join-create";
		arrPages[16] = "/reg/broadcast-entry?";
		var i = 0;
		var j = 0;
		var k = 0;
		var it = 0;
		var p = 0;
		var pfirst = true;
		var itfirst = true;
		var sfirst = true;
		
		if(curPage(arrPages) == 0)
		{	
			smessage("red", "<br/>Click <i>JOIN LINKEDIN</i>.");

			vChange("id", "firstName-coldRegistrationForm", "firstname");
			vChange("id", "lastName-coldRegistrationForm", "lastname");
			vChange("id", "email-coldRegistrationForm", "useremail");
			vChange("id", "password-coldRegistrationForm", "password");
				
			//fn_click("button", "id", "btn-submit", 10); Yes
		}
		else if(curPage(arrPages) == 1)
		{
			smessage("red", "<br/>You do not have to create a 2<span style='vertical-align:super; font-size: 12px;'>nd</span> LinkedIn profile if you already have one, and you may close this tab. However it is recommend you create one through our software as it will be powerful in search engine rankings. <br/>Select your <i>INDUSTRY</i> then,<br/> Click <i>CREATE MY PROFILE</i>.");
			vCountry("id", "countryCode-location-employedProfileForm", true);
			vChange("name", "postalCode", "zip");
			vChange("id", "companyName-companyInfo-employeeCompany-employedProfileForm", "employer");
			vChange("id", "workCompanyTitle-employedProfileForm", "jobtitle");
			vChange("id", "schoolText-school-education-studentProfileForm", "college");
			vChange("id", "startYear-startEndYear-education-studentProfileForm", "educationstartyear");
			
			if(localStorage['presently_employed'] == 'true')
			{
				$("#employed-btn").focus().click().blur();
			}
			else if(localStorage['presently_studied'] == 'true')
			{
				$("#student-btn").focus().click().blur();
			}
			
			//fn_click("input", "id", "employed-btn-submit", 10);
		}
		else if(curPage(arrPages) == 2)
		{
			smessage("red", "<br/>Click <i>SKIP THIS STEP</i> for the next few pages, unless you want to connect with friends");
			
			//fn_click_byID("id", "skipButton", 10);
		}
		else if(curPage(arrPages) == 12)
		{
			//smessage("red", "[Step 6 of 17] <br/>Click SIGN IN to continue");
			//vChange("id", "session_password-login", "password");
		}
		else if(curPage(arrPages) == 3)
		{
			if(vContent("After clicking the button below you will be asked to sign in to your account to confirm this email address"))
			{
				//smessage("red", "[Step 5 of 17] <br/>Click CONFIRM");
				//fn_click("input", "value", "Confirm", 10);
			}
			else
			{
				smessage("red", "<br/> Confirm your email address.");
				$("a").each(function()
				{
					if($(this).html().indexOf("Confirm my Yahoo! Account") != -1)
					{	
						$(this).hide();
						$(this).css("display", "none");
						$(this).css("opacity", "0");
						return false;
					}
				});		
				
			}
		}
		else if(curPage(arrPages) == 4)
		{
			smessage("red", "<br/>Click <i>SKIP</i>");
			//click_func("object", "button", "html", "Share on Twitter", 10);
		}
		else if(curPage(arrPages) == 5) //removed
		{
			smessage("red", "<br/>Click <i>SKIP THIS STEP</i>");
			//fn_click("a", "html", "Choose Basic", 10);
		}
		else if(curPage(arrPages) == 6)
		{
			smessage("red", "<br/> Click <a href='http://www.linkedin.com/profile/edit'>here</a> to continue.");
			//fn_click("url", null, "http://www.linkedin.com/profile/public-profile-settings", 10);
		}
		else if(curPage(arrPages) == 7)
		{
			smessage("green", "<br/> You may add a <font style='font-style: italic;'>BIOGRAPHY</font>, <font style='font-style: italic;'>IMAGE</font> or details about your <font style='font-style: italic;'>CAREER</font> on this page then, <br/><br/>You are finished with LinkedIn and you may exit this tab.");
			
			var url = "http://"+$("span.public-profile-url").text();//$('[name="webProfileURL"]').attr("href");
			var title = localStorage['firstname']+" "+localStorage['lastname']+" | LinkedIn";
			
			chrome.extension.sendRequest({method: "setLocalStorage", key: "linkedin_sLinkSet1", data: url});
			chrome.extension.sendRequest({method: "setLocalStorage", key: "linkedin_sTitleSet1", data: title});
			
			setInterval(function()
			{
				var experience = document.getElementById("experience-blank-form").style.display;
				var education = document.getElementById("education-blank-form").style.display;
				var summary = document.getElementById("summary-item-edit").style.display;
				var interest = document.getElementById("interests-edit"). style.display;
				var personal = document.getElementById("personal-info-edit").style.display;
				
				if(experience == "block")
				{
					if(i == 0)
					{
						i++;
						
						
						vChange("id", "companyName-positionCompany-position-editPositionForm", "employer");
						vChange("id", "title-position-editPositionForm", "jobtitle");
						vChange("id", "month-startDate-position-editPositionForm", "jobstartmonth");
						vChange("id", "year-startDate-position-editPositionForm", "jobstartyear");
						vChange("id", "summary-position-editPositionForm", "jobdesc");
						
						if(localStorage['presently_employed'] == 'true')
						{
							$("#isCurrent-endDate-position-editPositionForm").click();
						}
						else 
						{
							vChange("id", "month-monthYear-endDate-position-editPositionForm", "jobendmonth");
							vChange("id", "year-monthYear-endDate-position-editPositionForm", "jobendyear");
						}
						
					}	
				}
				else
				{
					i = 0;
				}
				
				if(education == "block")
				{
					if(j == 0)
					{
						j++;
						
						//Job detail
						vChange("id", "schoolText-schoolchoice-editEducationForm", "college");
						vChange("id", "startYear-startEndYear-editEducationForm", "educationstartyear");
						vChange("id", "endYear-startEndYear-editEducationForm", "educationendyear");
						vChange("id", "schoolDegree-editEducationForm", "degree");
						vChange("id", "schoolFieldOfStudy-editEducationForm", "major");
						vChange("name", "employment_city", "city");
						vChange("name", "employment_country", "country");
						vChange("name", "employment_state", "state");
						
						if(localStorage['presently_employed'] == 'true')
						{
							$('#presently_employed').focus().click().blur();
						}
						else
						{
							vChange("name", "employment_end_month", "jobendmonth");
							vChange("name", "employment_end_year", "jobendyear");
						}
					}	
				}
				else
				{
					j = 0;
				}
				
				if(summary == "block")
				{
					if(k == 0)
					{
						k++;
						myvBio("id", "expertise_comments-editExpertiseForm", false);
					}	
				}
				else
				{
					k = 0;
					var elem = document.getElementById("summary-item-edit-clone");
					if(elem != null && sfirst)
					{
						sfirst = false;
						myvBio("id", "expertise_comments-editExpertiseForm", false);
					}
				}
				
				if(interest == "block")
				{
					if(it == 0)
					{
						it++;
						vChange("id", "interestsParam-editAdditionalInformationV2", "interests");
					}	
				}
				else
				{
					it = 0;
					var elem = document.getElementById("interests-edit-clone");
					if(elem != null && itfirst)
					{
						itfirst = false;
						vChange("id", "interestsParam-editAdditionalInformationV2", "interests");
					}
				}
				
				if(personal == "block")
				{
					if(p == 0)
					{
						p++;
						vChange("id", "month-birthdayParam-editAdditionalInformationV2", "birthmonth");
						vChange("id", "day-birthdayParam-editAdditionalInformationV2", "birthday");
						vChange("id", "birthYearParam-editAdditionalInformationV2", "birthyear");
					}	
				}
				else
				{
					p = 0;
					var elem = document.getElementById("personal-info-edit-clone");
					if(elem != null && pfirst)
					{
						pfirst = false;
						vChange("id", "month-birthdayParam-editAdditionalInformationV2", "birthmonth");
						vChange("id", "day-birthdayParam-editAdditionalInformationV2", "birthday");
						vChange("id", "birthYearParam-editAdditionalInformationV2", "birthyear");
					}
				}
				
				
			},500);
		
		
			/*if(vContent("not currently available"))
			{
				smessage("red", "[Step 10 of 17] <br/>The username is not available please choose another then click save.");
			}
			else if(vContent("Your custom URL has been saved."))
			{
				smessage("red", "[Step 11 of 17] <br/>Then click <a href='http://www.linkedin.com/profile/edit-additional-info?locale=en_US&goback=%2Enpe_*1_*1_*1_*1_*1_*1'>here</a> to continue.");
				fn_click("url", null, "http://www.linkedin.com/profile/edit-additional-info?locale=en_US&goback=%2Enpe_*1_*1_*1_*1_*1_*1", 10);
			}
			else
			{
				smessage("red", "[Step 10 of 17] <br/>Click CUSTOMIZE YOUR PUBLIC PROFILE URL directly below. Click SET CUSTOM URL.");
				setInterval('vChange("id", "vanity-name-input", "username");', 1000);
			}*/
		}
		else if(curPage(arrPages) == 16) //removed
		{
			smessage("red", "<br/>Click <i>SKIP THIS STEP</i>");
			//fn_click("a", "html", "Choose Basic", 10);
		}
	
	
  } catch(err) {
		
		
  }	
	
});