$(function() {
    $.scrollify({
        section:".panel",
        scrollbars:false,
        interstitialSection:"#header",
        easing: "easeOutExpo",
        updateHash: false,
        scrollSpeed: 100,
        overflowScroll: false,
        touchScroll:false,
        before:function(i,panels) {
            var ref = panels[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender:function() {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function(i) {
                activeClass = "";
                if(i===$.scrollify.currentIndex()) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";
            $("#panel0").append(pagination);
            $(".pagination a").on("click",$.scrollify.move);
        }
    });
});
$('.link0').click(function(){
    $.scrollify.move("#Top");
});
$('.link1').click(function(){
    $.scrollify.move("#About");
});
$('.link2').click(function(){
    $.scrollify.move("#Projects");
});
$('.link3').click(function(){
    $.scrollify.move("#Publications");
});
$('.publink').click(function(){
    window.location.href = 'publications.html';
});

$('.plink0').click(function(){
    window.location.href = 'index.html';
});
$('.plink1').click(function(){
    window.location.href = 'index.html#About';
});
$('.plink2').click(function(){
    window.location.href = 'index.html#Projects';
});
$('.plink3').click(function(){
    window.location.href = 'publications.html';
});

