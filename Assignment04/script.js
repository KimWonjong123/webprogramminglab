$(document).ready(function () {
    $(".tab-content").hide();
    $(".tab-content:first").show();

    $("ul.tabs li").click(function () {
        var tab_id = $(this).attr("tab");

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content.active").fadeOut(500, () => {
            $(".tab-content.active").removeClass("active");
            $("#" + tab_id).addClass("active").fadeIn(500);
        });
    });
});
