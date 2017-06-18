
var timer = setInterval(function()
{
	if(window.location.href.indexOf("/sign_up") != -1)
	{
		window.location.href = "https://vimeo.com/home";
		clearInterval(timer);
	}
},100);

function goExecute()
{
    var arrPages = new Array();
	arrPages[0] = "/join";
	arrPages[1] = "/sign_upv";
	arrPages[2] = "/home";
	arrPages[3] = "/settings/profile";
	
	if(curPage(arrPages) == 0)
	{
	    smessage("red", "<br/>Click <i>JOIN</i>.", "margin-top: 15px;");
		
		var f_lname = localStorage['firstname']+" "+localStorage['lastname'];
		$('#name').val(f_lname);
		vChange("id", "email", "useremail");
		vChange("id", "password", "password");
		//fn_click("input", "value", "Join", 10);
		
	}
	else if(curPage(arrPages) == 1)
	{
		smessage("red", "<br/>Click <i>NO THANKS, I'll STICK WITH FREE VIMEO BASIC FOR NOW</i>");
	}
	else if(curPage(arrPages) == 2)
	{
		smessage("red", "<br/>Click <a href='/settings/profile'>here</a> to continue.", "margin-top: 15px;");
	}
	else if(curPage(arrPages) == 3)
	{
		smessage("green", "<br/> Towards the bottom of the page, click <i>ADD A LINK</i> to promote 3 websites then, <br/>Click <i>SAVE CHANGES</i> <br/><br/> You are now finished with vimeo and may close this tab", "margin-top: 15px;");
		myvBio("id", "bio", false);
		
		var location = localStorage['city']+", "+localStorage['country'];
		$('#location').val(location);
		
		if(localStorage['gender'] == 'male')
		{
			$("#gender").val('m');
		}
		else
		{
			$("#gender").val('f');
		}

		$('input[value="Save Changes"]').prop('disabled', false);
		$('.js_new_link').bind("click", function() 
		{
			myVLinks("id", "link_title", "id", "link_url", false);
			
		});
		
		var url = "http://www.vimeo.com/"+$("#url").val();
		var title = localStorage['firstname']+" "+localStorage['lastname']+" on Vimeo";
		chrome.extension.sendRequest({method: "setLocalStorage", key: "vimeo_sLinkSet1", data: url});
		chrome.extension.sendRequest({method: "setLocalStorage", key: "vimeo_sTitleSet1", data: title});
		
	}
	
	
}

$(document).ready(function()
{
	goExecute();
});	