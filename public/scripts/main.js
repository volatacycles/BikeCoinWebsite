$(document).scroll(function() {
    var a = $(document).scrollTop();
    767 < $(window).width() ? 30 < a ? ($(".site-header .navbar-default").addClass("nav-menu"),
    $(".navbar-nav").addClass("navbar-nav-fix"),
    $(".site-header .navbar-brand").addClass("logo-fix")) : ($(".site-header .navbar-default").removeClass("nav-menu"),
    $(".navbar-nav").removeClass("navbar-nav-fix"),
    $(".site-header .navbar-brand").removeClass("logo-fix")) : ($(".navbar-default").addClass("nav-menu"),
    $(".navbar-nav").addClass("navbar-nav-fix"),
    $(".navbar-brand").addClass("logo-fix"))
}),
$(window).width() < 767 && ($(".navbar-default").addClass("nav-menu"),
$(".navbar-nav").addClass("navbar-nav-fix"),
$(".navbar-brand").addClass("logo-fix"));
var lastId, topMenu = $(".navbar-default"), topMenuHeight = topMenu.outerHeight(), menuItems = topMenu.find("a.menu"), scrollItems = menuItems.map(function() {
    var a = $($(this).attr("href"));
    if (a.length)
        return a
});
menuItems.click(function(a) {
    var e = $(this).attr("href")
      , n = "#" === e ? 0 : $(e).offset().top - topMenuHeight + 1;
    $("html, body").stop().animate({
        scrollTop: n
    }, 1e3),
    $(".navbar-collapse").removeClass("in"),
    a.preventDefault()
}),
$("#home .navbar-brand").click(function(a) {
    var e = $(this).attr("href")
      , n = "#" === e ? 0 : $(e).offset().top - topMenuHeight + 1;
    $("html, body").stop().animate({
        scrollTop: n
    }, 1e3),
    a.preventDefault()
}),
timeline(document.querySelectorAll(".timeline")),
$(document).click(function(a) {
    if ($(a.target).parents(".navbar-collapse").length < 1) {
        var e = $(a.target)
          , n = $(".navbar-collapse");
        !0 !== n.hasClass("in") || e.hasClass("navbar-toggle") || n.collapse("hide")
    }
}),
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
}),
$(".dropdown-item").click(function() {
    $(".dropdown-toggle").val($(this).html()),
    $(".dropdown-toggle").html($(this).html())
});
