function capFL(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
$(document).ready(function()
{
	/* setInterval(function()
	{
		$("#fadeImg").fadeToggle(1000);
	}, 1000); */
	
	var o_link = 0;
	var s_link = 0;
	
	for(i=0; i<=localStorage.length-1; i++)  
	{  
		key = localStorage.key(i);  
		val = localStorage.getItem(key);  
		if(key.indexOf("_sLinkSet1") > -1)
		{
			var site = capFL(key.replace("_sLinkSet1", ""));
			$("#setlinks").append("<div class=\"c" + (s_link % 2) + "\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"><tr><td width=\"30%\">" + site + " <br/><span id=\"tlink1\"></span></td><td width=\"65%\"><input type=\"text\" readonly=\"true\" id=\"link1\" style=\"width: 100%\" value=\"" + val + "\"/></td><td width=\"5%\" align=\"center\"><a href=\"" + val + "\" target=\"_blank\"id=\"alink1\">Ø</a></td></tr></table></div>");
			s_link++;
		}
		else if(key.indexOf("_oLinkSet1") > -1)
		{
			var site = capFL(key.replace("_oLinkSet1", ""));
			var splitkey = key.split("_");
			var vl = splitkey[0]+"_oTitleSet1";
			var tagline = localStorage[vl];
			//var tagline = capFL(localStorage[key.replace("_oLinkSet1", "").replace("link", "linktitle")]);
			$("#ownlinks").append("<div class=\"c" + (o_link % 2) + "\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"><tr><td width=\"30%\">" + site + " <br/><span id=\"tlink1\">" + tagline + "</span></td><td width=\"65%\"><input type=\"text\" readonly=\"true\" id=\"link1\" style=\"width: 100%\" value=\"" + val + "\"/></td><td width=\"5%\" align=\"center\"><a href=\"" + val + "\" target=\"_blank\"id=\"alink1\">Ø</a></td></tr></table></div>");
			o_link++;
		}
	}
});