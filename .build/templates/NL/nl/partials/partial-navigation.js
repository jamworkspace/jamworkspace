(function(){dust.register("partials/partial-navigation",body_0);function body_0(chk,ctx){return chk.write("<div class=\"container\"><div class=\"header clearfix\"><a class=\"main-logo\" href=\"/\">Jam Workspace</a><div class=\"languages\"><li class=\"lang english\"><a href=\"/setLocale/en-US\"><img src=\"img/United-States.png\"></a></li><li class=\"lang dutch\"><a href=\"/setLocale/nl-NL\"><img src=\"img/Netherlands.png\"></a></li></div><div class=\"home-menu pure-menu pure-menu-open pure-menu-horizontal clearfix\"><ul><li><a href=\"/\">Home</a></li><li><a href=\"/about\">About</a></li><li><a href=\"/memberships\">Memberships</a></li><li><a href=\"/programs\">Corporate Programs</a></li><li><a href=\"/events\">Events</a></li><li><a href=\"/join\">Join</a></li>").section(ctx.get(["user"], false),ctx,{"block":body_1},null).write("</ul></div></div></div>");}function body_1(chk,ctx){return chk.helper("eq",ctx,{"block":body_2},{"key":ctx.get(["role"], false),"value":"admin"});}function body_2(chk,ctx){return chk.write("<li><a href=\"/admin\">Admin</a></li><li><a href=\"/profile\">Profile</a></li><li> <a href=\"/logout\">Logout</a> </li>");}return body_0;})();