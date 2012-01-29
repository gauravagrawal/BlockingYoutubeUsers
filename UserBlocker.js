/*
   Checks if the user name exist in the dictionary and blocks it
   Copyright (C) 2012  Aaron Boushley, Gaurav Agrawal

   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var w_sidebar = $('#watch-sidebar ul');
var v_sidebar = $('#video-sidebar ul');

var usersToBlock = { chandler123bing: undefined };

var userClickHandler = function (e) {
    var user = $('span.yt-user-name', $(this)).text().trim();
    console.log(user);

    if (user in usersToBlock)
    {
	e.stopImmediatePropagation();
	chrome.extension.sendRequest("User blocked",
		function(response_str) { 
		alert('User Blocked')
		}
		);
	return false;
    }

    return true;
};

$('li', w_sidebar).live('click', userClickHandler);
$('li', v_sidebar).live('click', userClickHandler);
