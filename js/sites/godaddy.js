

function goExecute()
{
    var arrPages = new Array();
	arrPages[0] = "/?cvosrc=affiliate";
	arrPages[1] = "/domains/searchresults";
	arrPages[2] = "/domain-configuration";
	arrPages[3] = "/basket.aspx";
	
	if(curPage(arrPages) == 0)
	{
	    smessage("red", "<br/>This is an optional sign-up to buy and implement your own personal website, www.*firstnamelastname*.com, through GoDaddy. No technical skills are required. <br/>Click <i>SEARCH DOMAIN</i> behind this box.");
		var val = localStorage['firstname']+localStorage['lastname']+".com";
		$("#searchDomainName-label").hide();
		vCustom("id", "searchDomainName", val);
		
	}
	else if(curPage(arrPages) == 1)
	{
		smessage("red", "<br/>Select your website in .com or .us or .info, if a .com is not available then, <br/><br/>Click <span style='font-style: italic !important;'>CONTINUE TO CART</span>");
	}
	else if(curPage(arrPages) == 2)
	{
		smessage("red", "<br/>Click <span style='font-style: italic !important;'>CONTINUE TO CART</span>", "width: inherit !important;");
		
		//Website Builder
		var first_elem = $("#websitebuilder-plan").children(":first");
		first_elem.children(":first").text("Personal");
		var thr = first_elem.children( ".price" ).contents();
		var span = thr[1];
		$(span).text("Rs629");
		var textnode = thr[2];
		$(textnode).replaceWith("Rs109");
		
		//Hosting
		var first_elem = $("#hosting-plan").children(":first");
		first_elem.children(":first").text("Economy");
		var thr = first_elem.children( ".price" ).contents();
		var span = thr[1];
		$(span).text("Rs779");
		var textnode = thr[2];
		$(textnode).replaceWith("Rs529");
		
		//Change color of website builder
		
		
		$("#websitebuilderandhosting-dpp_xs_wst_economy").attr("class", "plan-option plan-option-selected");
		$("#websitebuilderandhosting-dpp_xs_wst_deluxe").attr("class", "plan-option");
		
		
		//Change Color of hosting list
		
		$("#websitebuilderandhosting-dpp_xs_hosting_diablo_economy_linux").attr("class", "plan-option plan-option-selected");
		$("#websitebuilderandhosting-dpp_xs_hosting_diablo_deluxe_linux").attr("class", "plan-option");
		
	}
	else if(curPage(arrPages) == 3)
	{
		smessage("green", "<br/> A promo code has automatically been added to save you money. Complete the checkout, and follow the instructions using the 'Website Builder' to create a homepage for yourself. You should use a brand new bio for your new homepage, and add a picture of yourself. Call GoDaddy at 1 (480) 505-8877 with any questions. Wait at least 2 weeks before running Set 2 of this software.", "box-sizing: content-box !important;");
		
		
	}
	
	
}

$(document).ready(function()
{
	goExecute();
});	