$(function() {
    "use strict";
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
    "use strict";
    $(".scrollDown").click(function() {
        $('html,body').animate({
                scrollTop: $(".scrollto").offset().top
            },
            'slow');
    });

    /*****go to specific div******/
    $(function() {
        // catch all clicks on a tags
        $('a').click(function() {
            // check if has hash
            console.log(this.hash);
            if (this.hash) {
                // get rid of the # sign
                var hash = this.hash.substr(1);

                // get the position of  the <a name>
                var $toElement = $('a[name="' + hash + '"]');
                var $toPosition = $toElement.position().top / 1.0;

                // scroll/animate to that element
                $("body,html").animate({
                    scrollTop: $toPosition
                }, 1000);

                // don't do the jump
                return false;
            }
        });
        $(".fpBtn").click(function() {
            $(".fpBtn.active").removeClass('active');
            $(this).addClass('active');
            $('.fpContainer').hide();
            $("#fpContainer" + $(this).data('target')).fadeIn(400);
        });

        $('.closeForm').click(function() {
            $('.fixed-form').fadeOut(500);
            $('.enquiry-btn').fadeIn(500);
        });
        $('.enquiry-btn').click(function() {
            $('.fixed-form').fadeIn(500);
            $('.enquiry-btn').fadeOut(500);
        });

        if (location.hash) {
            var hash = location.hash;
            window.scroll(0, 0);
            $("a[href=" + hash + "]").click();
        }
    }); /**/
    /*****go to specific div******/

    // var footer_height = $(".footer-area").innerHeight();
    // $(".wrapper").css({'margin-bottom': footer_height});

    $(".menuBtn").click(function() {
        $(this).toggleClass('closeMenuBtn');
        $('.mbMenuContainer').stop().fadeToggle().toggleClass('active');
        $('.header').toggleClass('notfixed');
        $('body').toggleClass('overflow-hidden');
    });

    $(".hasChild").click(function() {
        $(this).toggleClass('hasChild1');
        $(".dropdown").slideUp(500);
        if ($(this).find(".dropdown").is(':hidden') === true) {
            $(this).find(".dropdown").slideDown('normal');
        }
    });

    $(".scroll-up").click(function() {
        var hit = $(this).data('hit');
        var target = $('[data-target=' + hit + ']');
        $("html,body").animate({
            scrollTop: target.offset().top
        }, 500);
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.button-top').animate({
                opacity: 1,
                right: 10
            }, 0);
        } else {
            $('.button-top').animate({
                opacity: 0,
                right: -40
            }, 0);
        }
    });
    $(".button-top").click(function() {
        $("html,body").animate({
            scrollTop: '0px'
        }, 500);
    });

    $('[data-magnify]').magnify({
        //movable: false,
        //resizable: false,
        headToolbar: [
            'close'
        ],
        initMaximized: true
    });
});

$(window).scroll(function() {
    "use strict";

    var wScroll = $(this).scrollTop();
    //var $ht = $(".banner").innerHeight() / 2;

    if (wScroll > 100) {
        $(".header, .fixed-form").addClass("fixed");
    } else {
        $(".header, .fixed-form").removeClass("fixed");
    }
});