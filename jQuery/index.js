$("h1").addClass("big-title");
$(document).keypress((event) => {
    $("h1").text(event.key);
});