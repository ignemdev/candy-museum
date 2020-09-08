const nav = $("#mainNavbar");
$(document).scroll(() => nav.toggleClass("scrolled", $(this).scrollTop() > 52));
