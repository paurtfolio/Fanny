$(document).ready(function(){$input=$('input');$(".nav__hamburger").children().click(function(event){$input.prop("checked",!$input.prop("checked"));event.stopPropagation();});$('.menuToggle a').click(function(){var page=$(this).attr('href');var speed=750;$('html, body').animate({scrollTop:$(page).offset().top-67},speed);});$('.nav__bar a').click(function(){var page=$(this).attr('href');var speed=750;$('html, body').animate({scrollTop:$(page).offset().top-67},speed);return false;});$('.content__subtitle__mobile a').click(function(){var page=$(this).attr('href');var speed=750;$('html, body').animate({scrollTop:$(page).offset().top-67},speed);return false;});$('.submenu__mobile a').click(function(){var page=$(this).attr('href');var speed=750;$('html, body').animate({scrollTop:$(page).offset().top-67},speed);return false;});});