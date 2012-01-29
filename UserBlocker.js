var w_sidebar = $('#watch-sidebar ul');
var v_sidebar = $('#video-sidebar ul');

var usersToBlock = { GoogleDevelopers: undefined, lifemichael: undefined, phenom95: undefined };

var userClickHandler = function (e) {
    var user = $('span.yt-user-name', $(this)).text().trim();
    console.log(user);

    if (user in usersToBlock)
    {
	e.stopImmediatePropagation();
	chrome.extension.sendRequest("MF blocked",
		function(response_str) { 
		alert('MF Blocked')
		}
		);
	return false;
    }

    return true;
};

$('li', w_sidebar).live('click', userClickHandler);
$('li', v_sidebar).live('click', userClickHandler);
