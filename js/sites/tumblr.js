$(document).ready(function()
{
	var arrPages = new Array();
	arrPages[0] = "/register";
	arrPages[1] = "/new/text";
	arrPages[2] = "/new/link";
	arrPages[3] = "/getting_to_know_tumblr/#follow_some_blogs";
	arrPages[4] = "/dashboard";
	arrPages[5] = "/getting_to_know_tumblr/#create_your_blog"; //This url is found last time is testing. No smessage on this page.
	arrPages[6] = "/getting_to_know_tumblr/#blog_search";
	
	if(curPage(arrPages) == 0)
	{	
		if(vContent("Another person has claimed this"))
		{
			smessage("red", "<br/>Click <span style='font-style: italic;'>SIGN UP</span> then,<br/>Enter your <span style='font-style: italic;'>AGE</span> then, <br/>Click <span style='font-style: italic;'>NEXT</span> then, <br/> Enter the <span style='font-style: italic;'>CAPTCHA CODE</span> then, <br/> Click <span style='font-style: italic;'>ALMOST DONE</span>");
			
			vChange("name", "tumblelog[name]","username");
			vChange("name", "user[password]", "password");
			vChange("name", "user[email]", "useremail");	
			
			
			var timerIDD = setInterval(function()
				{
					if(vContent("Terms of Service"))
					{
						try { vCustom("id", "signup_age", "18"); } catch(e) { }
						try { vCustom("id", "signup_tos", true); } catch(e) { }
						clearInterval(timerIDD);
					}
				}, 1000);
		}
		else
		{
			smessage("red", "<br/>Click <span style='font-style: italic;'>SIGN UP</span> then,<br/>Enter your <span style='font-style: italic;'>AGE</span> then, <br/>Click <span style='font-style: italic;'>NEXT</span> then, <br/> Enter the <span style='font-style: italic;'>CAPTCHA CODE</span> then, <br/> Click <span style='font-style: italic;'>ALMOST DONE</span>");
			
			vChange("name", "tumblelog[name]","username");
			vChange("name", "user[password]", "password");
			vChange("name", "user[email]", "useremail");	
			
			
			var timerIDD2 = setInterval(function()
			{
				try { vCustom("id", "signup_age", "18"); } catch(e) { }
				try { vCustom("id", "signup_tos", true); } catch(e) { }
				clearInterval(timerIDD2);
			
			}, 1000);
		}
	}
	/*else if(curPage(arrPages) == 1)
	{
		smessage("red", "<br/>Click <span style='font-style: italic;'>POST</span>.");
		setTimeout ( function () 
		{
			vChange("id", "post_one", "tagline");
			var bio = myvBio("name", "word_user[about]", true);
			var iframeBody  = $("#post_two_ifr").contents ().find ("body");
			iframeBody.append (bio); 
			
			//document.getElementsByClassName("tinymce").innerHTML = "aasdfsa";
			
		}, 2000);
		
		var time = setInterval(function()
		{
			if(window.location.href.indexOf("/dashboard") != -1)
			{
				window.location.reload(true);
			}
		},2000);
		
	}
	else if(curPage(arrPages) == 2)
	{
		smessage("red", "<br/>Click <span style='font-style: italic;'>POST</span>");
		vChange("id", "tag_editor_input", "keywords");
		var thistimer = setInterval(function() 
		{ 
			//if($("#post_two").length == 1)
			//{
				//myVLinks("id", "post_one", "id", "post_two", false);
				
				$("[aria-label='Paste a link']").attr('class','editor editor-plaintext has-text');
				$("[aria-label='Paste a link']").children(":first").text("Hi I am a link");
				//$('div:contains("Paste a link")').empty();
				console.log("yesss done ittt");
				clearInterval(thistimer);
			//}	
			//else
				//console.log("yesssssssssssss");
			
		}, 1000);
		
		var time = setInterval(function()
		{
			if(window.location.href.indexOf("/dashboard") != -1)
			{
				window.location.reload(true);
			}
		},2000);
	}*/
	else if(curPage(arrPages) == 3)
	{
		smessage("red", "<br/>Click <a href='http://www.tumblr.com/dashboard'>here</a> to continue");
	}
	else if(curPage(arrPages) == 4)
	{
		smessage("green", "<br/>You may add a <span style='font-style: italic;'>BIOGRAPHY</span>, <span style='font-style: italic;'>IMAGE</span> or details about your <span style='font-style: italic;'>SOCIAL WEBSITES LINKS</span> on this page. <br/><br/>If not, you are finished with tumblr and you may exit this tab.");
		var url = $("#open_blog_link").attr('href');
		var title = localStorage['username']+" on Tumblr";
		chrome.extension.sendRequest({method: "setLocalStorage", key: "tumblr_sLinkSet1", data: url});
		chrome.extension.sendRequest({method: "setLocalStorage", key: "tumblr_sTitleSet1", data: title});
		
		/*var time = setInterval(function()
		{
			var urlString = window.location.href;
			if(urlString.indexOf("/new/text") != -1)
			{
				window.location.reload(true);
			}
			else if(urlString.indexOf("/new/link") != -1)
			{
				window.location.reload(true);
			}
		},2000);*/
	}
	else if(curPage(arrPages) == 5)
	{
		smessage("red", "<br/>Click <a href='http://www.tumblr.com/dashboard'>here</a> to continue");
	}
	else if(curPage(arrPages) == 6)
	{
		smessage("red", "<br/>Click <span style='font-style: italic;'>SKIP</span>");
	}
	
});