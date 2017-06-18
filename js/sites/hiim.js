$(document).ready(function()
{
	var arrPages = new Array();
	arrPages[0] = "/users/sign_up";
	arrPages[1] = "/users/step_two";
	arrPages[2] = "/users";
	
	if(curPage(arrPages) == 0)
	{	
		smessage("red", "<br/>This is your last website of the <br/> SearchManipulator Individuals Set 1.<br/><br/> Fill up the <i>CAPTCHA CODE</i> then, <br/>Click <i>SIGN UP</i>", "line-height:normal;");
		vChange("name", "user[username]", "username");
		vChange("name", "user[email]", "useremail");
		vChange("name", "user[password]", "password");
		vChange("name", "user[password_confirmation]", "password");
		vCustom("id", "user_terms_of_service", true);
	}
	else if(curPage(arrPages) == 1)
	{
		smessage("red", "<br/>Click <i>SAVE</i>");
		vChange("id", "user_email", "useremail");
		vChange("id", "user_username", "username");
		vChange("id", "user_fullname", "fullname");
		$("#user_bio").attr('maxlength','500');
		myvBio("id", "user_bio", false);
		//fn_click("input", "value", "Save", 10);
	}
	else if(vContent("Customize your info and decide wich networks to share"))
	{
		smessagelast("green", "<br/>Click <i>CUSTOMIZE YOUR PROFILE</i> then <i>PROFILE INFO</i><br/><br/>You are now finished with SearchManipulator Individuals Set 1. Visit your inbox to make sure you have confirmed your email for all the accounts.<br/><br/>Please wait 2 weeks and run Set 2. We can send you a reminder via <span id='clickEmail' style='color:blue; cursor:pointer;'>email</span>", "line-height:normal;");
		chrome.extension.sendRequest({method: "setLocalStorage", key: "hiim_sLinkSet1", data: window.location.href});
		var title = "Hi, I'm - "+localStorage['firstname']+" "+localStorage['lastname']+" ("+localStorage['username']+")";
		chrome.extension.sendRequest({method: "setLocalStorage", key: "hiim_sTitleSet1", data: title});
		$('.alignright .update_buttons').show();
		setInterval(function()
		{
			vChange("id", "user_headline", "tagline");
			vChange("id", "user_tag_list", "keywords");
		}, 1000);
	}
	else if(curPage(arrPages) == 2)
	{
		smessage("red", "<br/>Remove the Errors,<br/> Fill up the <i>CAPTCHA CODE</i> then <br/>Click <i>SIGN UP</i>", "line-height:normal;");
		vChange("name", "user[username]", "username");
		vChange("name", "user[email]", "useremail");
		vChange("name", "user[password]", "password");
		vChange("name", "user[password_confirmation]", "password");
		vCustom("id", "user_terms_of_service", true);
	}

function vBioC(type, identifier)
{
	if($("[" + type + "='" + identifier + "']").val() != 0) return false;
	var index = Math.floor(Math.random() * 10) + 1;
	chrome.extension.sendRequest({method: "getLocalStorage", key: "bio" + index}, function(response) 
	{
		if(response.data.length == 0) vBioC(type, identifier);
		else 
		{	
			mLength = 500;
			//var mLength = $("[" + type + "='" + identifier + "']").attr("maxlength");
			var data;
			if(response.data.length > mLength) data = response.data.substring(0, mLength - 3) + "...";
			else data = response.data;
			$("[" + type + "='" + identifier + "']").val(data);
		}
	});
}

});