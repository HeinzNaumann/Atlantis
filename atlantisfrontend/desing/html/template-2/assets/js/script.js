/* ************************************************************
:: Template Name: Nookx - Multivendor Marketplace HTML Template.
:: Template Author Dreamguys
:: Version: 1.3
*************************************************************/

(function($) {
    "use strict";


    // Slimscroll 
    var $slimScrolls = $('.slimscroll');


    //sidebar open and close
    $(document).on('click', '#open_navSidebar', function() {
        $('#offcanvas_menu').css('width', '100%');
    });

    $(document).on('click', '#close_navSidebar', function() {
        $('#offcanvas_menu').css('width', '0px');
    });

    //DataTables
    if ($('#forum-summary').length > 0) {
        $('#forum-summary').DataTable();
    }

    if ($('#trans-summary').length > 0) {
        $('#trans-summary').DataTable();
    }

    if ($('#order-cancel').length > 0) {
        $('#order-cancel').DataTable();
    }

    if ($('#order-return').length > 0) {
        $('#order-return').DataTable();
    }

    if ($('#order-summary').length > 0) {
        $('#order-summary').DataTable();
    }


    //Add product - gallery image & video
    if ($('#add-img-video-gallery').length > 0) {

        $("#add-img-video-gallery").fileinput({
            theme: "fa",
            previewClass: "custom-style p-3",
            mainClass: "ss",
            layoutTemplates: "preview",
            allowedFileTypes: ["image", "video"],
            previewFileType: ["image", "video"],
            browseClass: "btn btn-style",
            browseLabel: "Upload",
            removeClass: "btn btn-style-danger",
            removeLabel: "Delete",
        });

    }



    // Add shop - banner image
    if ($('#cover-photo').length > 0) {

        $("#cover-photo").fileinput({
            theme: "fa",
            previewClass: "custom-style p-3",
            mainClass: "ss",
            layoutTemplates: "preview",
            allowedFileTypes: ["image"],
            previewFileType: ["image"],
            browseClass: "btn btn-style",
            browseLabel: "Upload",
            maxImageWidth: 1920,
            maxImageHeight: 500,
            removeClass: "btn btn-style-danger",
            removeLabel: "Delete",
        });
    }

    // Add shop - avatar image
    if ($('#shop-avatar').length > 0) {

        var btnCust = '<button type="button" class="btn btn-secondary" title="Add picture tags" ' +
            'onclick="alert(\'Call your custom code here.\')">' +
            '<i class="fa fa-tag"></i>' +
            '</button>';

        $("#shop-avatar").fileinput({
            overwriteInitial: true,
            maxFileSize: 1500,
            showClose: false,
            showCaption: false,
            theme: "fa",
            browseLabel: '',
            removeLabel: '',
            browseIcon: '<i class="fa fa-folder-open"></i>',
            removeIcon: '<i class="fa fa-remove"></i>',
            removeTitle: 'Cancel or reset changes',
            elErrorContainer: '#kv-avatar-errors-1',
            msgErrorClass: 'alert alert-block alert-danger',
            defaultPreviewContent: '<img src="assets/img/default-avatar-male.png" alt="Your Avatar">',
            layoutTemplates: {
                main2: '{preview} ' + btnCust + ' {remove} {browse}'
            },
            allowedFileExtensions: ["jpg", "png", "gif"]
        });

    }



    //Single product zoom feature
    if ($('.zoom-style').length > 0) {
        $(function() {
            $('.zoom-style').okzoom({
                width: 200,
                height: 200,
                border: "1px solid black",
                shadow: "0 0 5px #000"
            });
        });
    }

    //Count - quality
    if ($('.count').length > 0) {

        $('.count').prop('disabled', true);
        $(document).on('click', '.plus', function() {
            $('.count').val(parseInt($('.count').val()) + 1);
        });
        $(document).on('click', '.minus', function() {
            $('.count').val(parseInt($('.count').val()) - 1);
            if ($('.count').val() == 0) {
                $('.count').val(1);
            }
        });
    }


    // jquery ui range - price range
    var $priceFrom = $('.price-ranges .from'),
        $priceTo = $('.price-ranges .to');

    if ($('.price-range').length > 0) {
        $(".price-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [30, 300],
            slide: function(event, ui) {
                $priceFrom.text("$" + ui.values[0]);
                $priceTo.text("$" + ui.values[1]);
            }
        });
    }




    // Modal video
    if ($('.js-modal-btn').length > 0) {

        new ModalVideo('.js-modal-btn', {
            channel: 'youtube'
        });

    }

    //Formwizard 
    $(document).ready(function() {

        var current_fs, next_fs, previous_fs; //fieldsets
        var opacity;
        var current = 1;
        var steps = $(".wizard-content-blk").length;

        setProgressBar(current);

        $(".next").click(function() {

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            //Add Class Active
            $("#progressbar li").eq($(".wizard-content-blk").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function(now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    next_fs.css({
                        'opacity': opacity
                    });
                },
                duration: 500
            });
            setProgressBar(++current);
        });

        $(".previous").click(function() {

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

            //Remove class active
            $("#progressbar li").eq($(".wizard-content-blk").index(current_fs)).removeClass("active");

            //show the previous fieldset
            previous_fs.show();

            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function(now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    previous_fs.css({
                        'opacity': opacity
                    });
                },
                duration: 500
            });
            setProgressBar(--current);
        });

        function setProgressBar(curStep) {
            var percent = parseFloat(100 / steps) * curStep;
            percent = percent.toFixed();
            $(".progress-bar")
                .css("width", percent + "%")
        }

        $(".submit").click(function() {
            return false;
        })

    });

    //Single Product Slider  
    if ($('.single-pdt-slider').length > 0) {

        $('.single-pdt-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            adaptiveHeight: true,
            infinite: false,
            useTransform: true,
            speed: 400,
            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
            asNavFor: '.slider-thumb'
        });
        $('.slider-thumb').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.single-pdt-slider',
            dots: false,
            focusOnSelect: true,
            prevArrow: $(".nav-left"),
            nextArrow: $(".nav-right"),
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }]
        });
    }


    //Similar Ads Slider
    $('.services-slider').each(function() {
        $(this).slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: $(".arrow-left"),
            nextArrow: $(".arrow-right"),
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });



    //Users Products Slider
    $('.products-slider').each(function() {
        $(this).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            dots: true,
            autoplaySpeed: 6000,
            variableWidth: false,
            adaptiveHeight: true,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });

    // Manually refresh positioning of slick
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $('.products-slider').slick('setPosition');
    });


    //Services Slider
    $('.pdt-sidebar-slider').each(function() {
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: $(".arrow-left"),
            nextArrow: $(".arrow-right"),
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });


    //Home page pdt grid slider
    $('.pdt-grid-slider-1').each(function() {
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: $(".pdt-grid-slider-blk-1 .arrow-left"),
            nextArrow: $(".pdt-grid-slider-blk-1 .arrow-right"),
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });



    $('.pdt-grid-slider-2').each(function() {
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: $(".pdt-grid-slider-blk-2 .arrow-left"),
            nextArrow: $(".pdt-grid-slider-blk-2 .arrow-right"),
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });



    $('.recent-pdt-grid-slider').each(function() {
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: $(".pdt-grid-slider-blk-2 .arrow-left"),
            nextArrow: $(".pdt-grid-slider-blk-2 .arrow-right"),
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });


    $('.pdt-grid-slider-3').each(function() {
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: $(".pdt-grid-slider-blk-3 .arrow-left"),
            nextArrow: $(".pdt-grid-slider-blk-3 .arrow-right"),
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });

    //Single Product Slider
    if ($('.single-pdt-vertical-slider').length > 0) {
        $('.single-pdt-vertical-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            vertical: true,
            adaptiveHeight: false,
            infinite: false,
            useTransform: true,
            speed: 400,
            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
            asNavFor: '.vertical-thumb'
        });
        $('.vertical-thumb').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.single-pdt-vertical-slider',
            dots: false,
            vertical: true,
            focusOnSelect: true,
            prevArrow: $(".nav-left"),
            nextArrow: $(".nav-right"),
            infinite: false
        });
    }



    // Sidebar Slimscroll
    if ($slimScrolls.length > 0) {
        $slimScrolls.slimScroll({
            height: 'auto',
            width: '100%',
            position: 'right',
            size: '5px',
            color: '#000000',
            allowPageScroll: false,
            wheelStep: 10,
            alwaysVisible: false
        });
        var wHeight = $(window).height() - 60;
        $slimScrolls.height(wHeight);
        $('.slidebar-menu .scroll-style').height(wHeight);
        $(window).resize(function() {
            var rHeight = $(window).height() - 60;
            $slimScrolls.height(rHeight);
            $('.slidebar-menu .scroll-style').height(rHeight);
        });
    }


    // Feather icon
    feather.replace()


    //ShieldUI Chart

    $(function() {

        if ($('#chart1').length > 0) {

            $("#chart1").shieldChart({
                theme: "bootstrap",
                exportOptions: {
                    image: false,
                    print: false
                },
                primaryHeader: {
                    text: "Sales Based on Category"
                },
                chartLegend: {
                    enabled: true
                },
                seriesSettings: {
                    pie: {
                        enablePointSelection: true
                    }
                },
                dataSeries: [{
                    seriesType: "pie",
                    collectionAlias: "Usage",
                    data: [
                        ["IE", 9.0],
                        {
                            collectionAlias: "Jewellary",
                            y: 26.8,
                            selected: true
                        },
                        ["Bags & Luggages", 55.8],
                        ["Computers", 3.8],
                        ["Laptops", 1.9]
                    ]
                }]
            });

        }

        if ($('#chart2').length > 0) {

            $("#chart2").shieldChart({
                theme: "bootstrap",
                axisX: {
                    categoricalValues: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
                },
                axisY: {
                    max: 100
                },
                primaryHeader: {
                    text: "Purchased Orders"
                },
                chartLegend: {
                    align: "center",
                    verticalAlign: "top"
                },
                dataSeries: [{
                    seriesType: "polarbar",
                    collectionAlias: "Purchased Orders",
                    data: [5, 1, 14, 50, 23, 77, 14, 41, 95, 32, 59, 5]
                }]
            });

        }

        if ($('#salesChart').length > 0) {

            $("#salesChart").shieldChart({
                theme: "bootstrap",
                primaryHeader: {
                    text: "Sales overview"
                },
                exportOptions: {
                    image: false,
                    print: false
                },
                axisX: {
                    categoricalValues: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"]
                },
                tooltipSettings: {
                    chartBound: true,
                    axisMarkers: {
                        enabled: true,
                        mode: 'xy'
                    }
                },
                dataSeries: [{
                        seriesType: 'area',
                        collectionAlias: "Regular - Sales in USD",
                        data: [100, 680, 453, 234, 770, 860, 500, 320, 590, 680, 770, 345, 332, 456, 234]
                    },
                    {
                        seriesType: 'area',
                        collectionAlias: "Worldwide - Sales in USD",
                        data: [50, 500, 320, 410, 680, 770, 500, 230, 410, 590, 770, 410, 230, 410, 500]
                    }
                ]
            });

        }

    });


    //tooltip
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });


    // Home Slider  
    if ($('#home-slider').length > 0) {
        $("#home-slider").owlCarousel({
            loop: true,
            items: 1,
            singleItem: true,
            dots: false,
            nav: true,
            autoplayTimeout: 10000,
            smartSpeed: 2000,
            autoHeight: false,
            touchDrag: true,
            mouseDrag: true,
            margin: 0,
            autoplay: false,
            slideSpeed: 600,
            navText: ['<i class="lnr lnr-chevron-left" aria-hidden="true"></i>', '<i class="lnr lnr-chevron-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false,
                },
                600: {
                    items: 1,
                    nav: false,
                    dots: false,
                },
                768: {
                    items: 1,
                    nav: false,
                    dots: false,
                },
                1100: {
                    items: 1,
                    nav: true,
                    dots: false,
                }
            }
        });
    }

    // User Profile - prduct slider  
    if ($('#users-pdt-slider').length > 0) {
        $("#users-pdt-slider").owlCarousel({
            loop: true,
            items: 4,
            singleItem: true,
            dots: false,
            nav: true,
            autoplayTimeout: 10000,
            smartSpeed: 2000,
            autoHeight: false,
            touchDrag: true,
            mouseDrag: true,
            margin: 14,
            autoplay: false,
            slideSpeed: 600,
            navText: ['<i class="lnr lnr-chevron-left" aria-hidden="true"></i>', '<i class="lnr lnr-chevron-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 3,
                    nav: true,
                    dots: false,
                },
                767: {
                    items: 3,
                    nav: true,
                    dots: false,
                },
                992: {
                    items: 3,
                    nav: true,
                    dots: false,
                },
                1200: {
                    items: 4,
                    nav: true,
                    dots: false,
                }
            }
        });
    }


    if ($('.append').length > 0) {

        // DOM ready
        $(function() {

            // Create the dropdown base
            $("<select />").appendTo(".append");

            // Create default option "Go to..."
            $("<option />", {
                "selected": "selected",
                "value": "",
                "text": "Go to..."
            }).appendTo(".append select");

            // Populate dropdown with menu items
            $(".append a").each(function() {
                var el = $(this);
                $("<option />", {
                    "value": el.attr("href"),
                    "text": el.text()
                }).appendTo(".append select");
            });

            // To make dropdown actually work
            $(".append select").change(function() {
                window.location = $(this).find("option:selected").val();
            });

        });

    }



    //Navbar set active class
    $('.navbar-nav li').click(function() {
        $('.navbar-nav li').removeClass('active');
        $(this).addClass('active');
    })


})(jQuery);