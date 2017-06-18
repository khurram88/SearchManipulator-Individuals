$(document).ready(function()
{

		var arrPages = new Array();
		arrPages[0] = "/#signup";
		arrPages[1] = "/weebly/main.php";
		arrPages[2] = "/weebly/onboarding.php";
		
		console.log("Current page is "+curPage(arrPages));
		if(curPage(arrPages) == 1)
		{	
			//smessage("green","<br/>1. Select 'Use a subdomain of Weebly.com'. Enter your 'firstnamelastname' as your domain, Click Continue.<br/> 2. Click 'BUILD MY SITE'. <br/>3. Build your site by dragging right a 'Title' (a tagline), 'Text' (a bio) and an image (optional).<br/> 4. Click 'SETTINGS' at the top of the page, then 'SEO'. Add a site description (take a sentence from a bio) and metatags (your keywords, for example, 'FirstName LastName, FirstName, LastName').<br/>5. Click 'PUBLISH' at the top right. <br/>6. Click CONTINUE<br/>7. Fill it out with your country and number and verify it with your mobile phone, then you are complete with Weebly.");
			smessage("green","<br/>Click <span style='font-style:italic;'>CONTINUE</span> then, <br/>Click <span style='font-style:italic;'>BUILD MY SITE</span> then, <br/>Build your site by dragging right a '<span style='font-style:italic;'>TITLE</span>' (a tagline), '<span style='font-style:italic;'>TEXT</span>' (a bio) and an <span style='font-style:italic;'>IMAGE</span> (optional) then,<br/>Click <span style='font-style:italic;'>SETTINGS</span> at the top of the page, then <span style='font-style:italic;'>SEO</span>. Add a <span style='font-style:italic;'>SITE DESCRIPTION</span> (take a sentence from a bio) and metatags (your keywords, for example, 'FirstName LastName, FirstName, LastName') then, <br/> Click <span style='font-style:italic;'>SAVE</span> <br/>Click <span style='font-style:italic;'>PUBLISH</span> at the top right then, <br/>Click <span style='font-style:italic;'>CONTINUE</span> then, <br/>Select your <span style='font-style:italic;'>WEBSITE TYPE</span> then, <br/> Enter the <span style='font-style:italic;'>CAPTCHA CODE</span> then,<br/> Click <span style='font-style:italic;'>OK, PUBLISH MY SITE!</span> <br/><br/>Then you are completed with Weebly."); 
			vChange("id", "newSiteTitle","tagline");
			myvBio("id", "setting-seo-description", false);
			vChange("id", "setting-seo-keywords", "keywords");
			setInterval(function()
			{
				try
				{
					$("[class='multiple-choice-box-body']").each(function()
					{
						if($(this).html().indexOf("weebly.com") != -1)
						{
							$( "#domainSubdomain" ).click();
							var id = $(this).find("input").attr("id");
							if($(this).find("input").val().length == 0) vChange("id", id, "username");
							var url = "http://" + $("#weeblyDomain").val() + ".weebly.com";
							var title = $("#weeblyDomain").val()+" | Home";
							chrome.extension.sendRequest({method: "setLocalStorage", key: "weebly_sLinkSet1", data: url});
							chrome.extension.sendRequest({method: "setLocalStorage", key: "weebly_sTitleSet1", data: title});
						}
					});
				}
				catch(ee){}
			}, 1000);
		}	
		//else if(vContent("Full Name") && vContent("Email") && vContent("Password"))
		//{
			/*smessage("red","<br/>Click <span style='font-style:italic'>SIGN UP. IT'S FREE!</span>");
			vChange("id", "weebly-name", "fullname");
			vChange("id", "weebly-email", "useremail");
			vChange("id", "weebly-new-password", "password");*/
		//}
		else if(curPage(arrPages) == 0)
		{	
			smessage("red","<br/>Click <span style='font-style:italic'>SIGN UP FREE</span>");
			vChange("id", "overlay-signup-form-name", "fullname");
			vChange("id", "overlay-signup-form-email", "useremail");
			vChange("id", "overlay-signup-form-pass", "password");
		}
		else if(curPage(arrPages) == 2)
		{
			smessage("red","<br/>Click <span style='font-style:italic; line-height: 23px;'>SITE</span> then, <br/>Choose a <span style='font-style:italic'>THEME</span> for your site.")
		}
	
	
});