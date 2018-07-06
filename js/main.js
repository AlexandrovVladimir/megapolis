'use strict';

/*main functions*/
/*simple unwraper*/
function simpUnwrap(wrap,elem,cont){
    //settings
    var wrap=document.querySelectorAll(wrap),
        elements=document.querySelectorAll(elem),
        container=document.querySelector(cont);

    //remove all wrapped containers
    for(var i=0;i<wrap.length;i++){
        wrap[i].parentNode.removeChild(wrap[i]);
    }

    //add elements to container
    for(var a=0;a<elements.length;a++){
        container.appendChild(elements[a]);
    }
};

/*simple wraper*/
function simpWrap(calc,elem,cont){
    //settings
    var elements=document.querySelectorAll(elem),
        container=document.querySelector(cont),
        elPerPage=calc;

//    //wrapped elements
    if(elPerPage<1){
        var wrap=document.createElement('div');

        wrap.className='home-slide home-block-list';

        for(var i=0;i<elements.length;i++){
            wrap.appendChild(elements[i]);
        }

        container.appendChild(wrap);
    }else{
        var pages=Math.ceil(elements.length/elPerPage);

        for(var i=0;i<pages;i++){
            var res=i*elPerPage,res2=(i+1)*elPerPage;
            //console.log(res,res2);

            var wrap=document.createElement('div');

            wrap.className='home-slide home-block-list';

            for(var a=res;a<res2;a++){
                if(a<elements.length){
                    //console.log(elements[a]);
                    wrap.appendChild(elements[a]);
                }else{
                    false
                }
            }

            container.appendChild(wrap);
        }
    }
};



/*preload start*/
function preloadStart(){
    jQuery('.main-wrapper-preloader').css('display', '');
    jQuery('body').css('overflow', 'hidden');

    setTimeout(function(){
        jQuery('.main-wrapper-preloader').css('opacity', 1);

        preloadAnim();
    }, 200);
}




/*preload end*/
function preloadEnd(){
    jQuery('.main-wrapper-preloader').css('opacity', 0);
    jQuery('body').css('overflow', 'auto');

    setTimeout(function(){
        jQuery('.main-wrapper-preloader').css('display', 'none');
        jQuery('.main-wrapper-preloader-logo-ring').removeClass('start');
    }, 500);
}




/*preload animation*/
function preloadAnim(){
    jQuery('.main-wrapper-preloader-logo-ring').addClass('start');
}




/*menu opener*/
function menuOpener(){
    jQuery('.main-header-menu-button').on('click', function(e){
        jQuery(this).toggleClass('opened');

        jQuery('.main-header-bottom').toggleClass('opened');

        if(jQuery(this).hasClass('opened')){
            jQuery('.main-wrapper-substrate').addClass('opened');

            setTimeout(function(){
                jQuery('.main-wrapper-substrate').css('opacity', 1);
            }, 100);
        }else{
            jQuery('.main-wrapper-substrate').removeClass('opened');

            setTimeout(function(){
                jQuery('.main-wrapper-substrate').css('opacity', 0);
            }, 100);
        }
    });
}



/*scroll menu*/
function menuScroll(){
    var scrollPostion = (window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,
        menuHeight = jQuery('.main-header-top').height();

    if(jQuery(window).innerWidth() > 1200) {
        if(scrollPostion > menuHeight){
            if(!jQuery('.main-header-inner').hasClass('crolled')){
                jQuery('.main-header-inner').addClass('crolled');

                jQuery('.main-header-inner').css({'position': 'fixed', 'top': '-60px'});
            }
        }else{
            jQuery('.main-header-inner').css({'position': 'absolute', 'top': 0});
            jQuery('.main-header-inner').removeClass('crolled');
        }
    }else{
        jQuery('.main-header-inner').css({'position': 'fixed', 'top': 0});
    }
}



/*detect menu*/
function detectMenu(){
    if(jQuery('body').hasClass('home-page')){
        var scrollPostion = (window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,
            contactsPos = jQuery('#contacts').offset().top,
            blockId = window.location.hash;

        jQuery('.main-header-menu a').removeClass('current');

        if(scrollPostion >= contactsPos){
            jQuery('.main-header-menu a[href="#contacts"]').addClass('current');
        }else{
            jQuery('.main-header-menu a').each(function(){
                var linkId = jQuery(this).attr('href');

                if(blockId == linkId){
                    jQuery(this).addClass('current');
                }
            });
        }
    }
}



/*scroll to block*/
function scrollToBlock(){
    var bodyCont = jQuery("html, body");

    if(jQuery('body').hasClass('home-page')){
        var getIdBlock = window.location.hash;

        if(getIdBlock.length > 0){
            var topOfBlock = jQuery(getIdBlock).offset().top;

//            bodyCont.stop().animate({scrollTop: topOfBlock}, 1500, 'swing');
        }

        jQuery('.main-header-menu a, .home-block-scroll').on('click', function(e){
            if(jQuery(this).attr('data-type') != 'simple-link'){
                e.preventDefault();

                var getIdBlock = jQuery(this).attr('href'),
                    topOfBlock = jQuery(getIdBlock).offset().top;

                jQuery('.main-section .section').removeClass('scrolled');

                bodyCont.stop().animate({scrollTop: topOfBlock}, 1500, 'swing', function(){
                    jQuery(getIdBlock).addClass('scrolled');
                    window.location.hash = getIdBlock;

                    jQuery('.main-header-menu-button').removeClass('opened');
                    jQuery('.main-wrapper-substrate').removeClass('opened');
                    jQuery('.main-header-bottom').removeClass('opened');

                    setTimeout(function(){
                        jQuery('.main-wrapper-substrate').css('opacity', 0);
                    }, 100);
                });
            }
        });
    }

    jQuery('.main-footer-to-top').on('click', function(e){
        e.preventDefault();

        var bodyCont = $("html, body");

        bodyCont.stop().animate({scrollTop: 0}, 2500, 'swing', function(){
            jQuery('#services').addClass('scrolled');
            window.location.hash = '#services';
        });
    });
}



/*adaptive news block and home blocks*/
function adaptiveNews(){
    if(jQuery(window).innerHeight() < 840 && jQuery(window).innerWidth() > 1200){
        var newsPrevHeadHeight = jQuery('.news-prev-info-head').height(),
            newsContHeight = jQuery(window).innerHeight() - 100,
            newsHeadHeight = jQuery('.news-cont-head').height() + 20,
            newsBotHeight = jQuery('.news-cont-bottom').height(),
            calcNews = ((newsContHeight - newsHeadHeight - newsBotHeight) / 2) - 15,
            calcText = calcNews - newsPrevHeadHeight - 10 - 80;
        jQuery('.home-block').addClass('small');

        jQuery('.home-block__news .news-prev-info-text').css('max-height', Math.floor(calcText / 20) * 20);
        jQuery('.home-block__news .news-prev-info').css('height', calcNews);
    }else{
        jQuery('.home-block').removeClass('small');

        jQuery('.home-block__news .news-prev-info-text').css('max-height', '');
        jQuery('.home-block__news .news-prev-info').css('height', '');
    }

    if(jQuery(window).innerHeight() < 740 && jQuery(window).innerWidth() > 1200){
        jQuery('.home-block').addClass('ex-small');
    }else{
        jQuery('.home-block').removeClass('ex-small');
    }
}



/*news clicker*/
function newsClicker(){
    jQuery('.news-prev-inner').on('click', function(){
        var link = jQuery(this).find('.news-prev-info-bottom-more').attr('href');

        window.location.href = link;
    });
}



/*substrate dots anim*/
function substrateDotsAnim(){
    function calcTopRand(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    if(jQuery(window).innerWidth() > 1050){
        if(!jQuery('body').hasClass('anim-lines')){
            jQuery('body').addClass('anim-lines');

            jQuery(".background-line-dot").each(function(){
                var thisElem = jQuery(this);

                thisElem.addClass('started');
                thisElem.css('top', calcTopRand(1, 100) + '%');

                setInterval(function(){
                    thisElem.css('top', calcTopRand(1, 100) + '%');
                }, 5000);
            });
        }
    }
}



/*fullpage init*/
function fullpageInit(){
    if(jQuery('body').hasClass('home-page')){
        easyFullpage(1000, '.main-section');
    }
}



/*slides height*/
function slidesHeight(sliderCont, refresh){
    if(jQuery(sliderCont).length){
        if(jQuery(window).innerWidth() > 1200){
            if(jQuery(sliderCont).hasClass('desktop') && refresh == 'yes'){
                var sliderHeight = jQuery(window).innerHeight() - (jQuery(window).innerHeight() / 100 * 18.51);

                jQuery(sliderCont + ' .slick-track').css('height', sliderHeight * jQuery(sliderCont + ' .home-slide').length);
                jQuery(sliderCont + ' .slick-list').css('height', sliderHeight);
                jQuery(sliderCont + ' .home-slide').css('height', sliderHeight);
            }else if(!jQuery(sliderCont).hasClass('desktop') && refresh == 'yes'){
                var sliderHeight = jQuery(window).innerHeight() - (jQuery(window).innerHeight() / 100 * 18.51);

                jQuery(sliderCont).removeClass('mobile');
                jQuery(sliderCont).addClass('desktop');

                jQuery(sliderCont + ' .home-block-slider-slides')[0].slick.unslick();

                simpUnwrap(sliderCont + ' .home-slide', sliderCont + ' .home-block-list-elem', sliderCont + ' .home-block-slider-slides');

                simpWrap(6, sliderCont + ' .home-block-list-elem', sliderCont + ' .home-block-slider-slides');

                homeSliders(sliderCont);

                jQuery(sliderCont + ' .slick-track').css('height', sliderHeight * jQuery(sliderCont + ' .home-slide').length);
                jQuery(sliderCont + ' .slick-list').css('height', sliderHeight);
                jQuery(sliderCont + ' .home-slide').css('height', sliderHeight);
            }else if(refresh == 'no'){
                jQuery(sliderCont).removeClass('mobile');
                jQuery(sliderCont).addClass('desktop');

                var sliderHeight = jQuery(window).innerHeight() - (jQuery(window).innerHeight() / 100 * 18.51);

                jQuery(sliderCont + ' .slick-track').css('height', sliderHeight * jQuery(sliderCont + ' .home-slide').length);
                jQuery(sliderCont + ' .slick-list').css('height', sliderHeight);
                jQuery(sliderCont + ' .home-slide').css('height', sliderHeight);
            }
        }else{
            if(!jQuery(sliderCont).hasClass('mobile') && refresh == 'no'){
                var sliderHeight = 0;

                jQuery(sliderCont).removeClass('desktop');
                jQuery(sliderCont).addClass('mobile');

                jQuery(sliderCont + ' .home-block-slider-slides')[0].slick.refresh();

                setTimeout(function(){
                    jQuery(sliderCont + ' .home-slide').each(function(){
                        var slidePaddingBottom = jQuery(this).css('padding-bottom'),
                            slidePaddingTop = jQuery(this).css('padding-top'),
                            slideHeight = 0;

                        jQuery(this).children('.home-block-list-elem').each(function(){
                            var elemMargin = jQuery(this).css('margin-bottom'),
                                elemHeight = jQuery(this).height();

                            slideHeight = slideHeight + elemHeight + parseInt(elemMargin.replace('px', ''));
                        });

                        slideHeight = slideHeight + parseInt(slidePaddingBottom.replace('px', '')) + parseInt(slidePaddingTop.replace('px', ''));

                        jQuery(this).css('height', slideHeight);

                        if(slideHeight > sliderHeight){
                            sliderHeight = slideHeight;
                        }
                    });

                    jQuery(sliderCont + ' .slick-track').css('height', sliderHeight * jQuery(sliderCont + ' .home-slide').length);
                    jQuery(sliderCont + ' .slick-list').css('height', sliderHeight);
                }, 200);
            }else if(!jQuery(sliderCont).hasClass('mobile') && refresh == 'yes'){
                var sliderHeight = 0;

                jQuery(sliderCont).removeClass('desktop');
                jQuery(sliderCont).addClass('mobile');

                jQuery(sliderCont + ' .home-block-slider-slides')[0].slick.unslick();

                simpUnwrap(sliderCont + ' .home-slide', sliderCont + '.home-block-list-elem', sliderCont + ' .home-block-slider-slides');

                jQuery(sliderCont + ' .home-block-slider-slides')[0].slick.unslick();

                simpUnwrap(sliderCont + ' .home-slide', sliderCont + ' .home-block-list-elem', sliderCont + ' .home-block-slider-slides');

                simpWrap(3, sliderCont + ' .home-block-list-elem', sliderCont + ' .home-block-slider-slides');

                homeSliders(sliderCont);
            }
        }
    }
}



/*home page sliders*/
function homeSliders(sliderCont){
    jQuery(sliderCont + ' .home-block-slider-slides').slick({
//        adaptiveHeight: true,
//        variableWidth: true,
        slidesToScroll: 1,
        focusOnSelect: true,
        slidesToShow: 1,
        draggable: false,
        infinite: false,
        vertical: true,
        arrows: false,
        dots: false,
    });

    jQuery(sliderCont + ' .home-block-slider-nav-arrow__up').click(function(e){
        e.preventDefault();

        jQuery(sliderCont + ' .home-block-slider-slides').slick('slickPrev');
    });

    jQuery(sliderCont + ' .home-block-slider-nav-arrow__down').click(function(e){
        e.preventDefault();

        jQuery(sliderCont + ' .home-block-slider-slides').slick('slickNext');
    });

    jQuery(sliderCont + ' .home-block-slider-slides').on('afterChange', function (slickSlide, i) {
        if(i.currentSlide == 0){
            jQuery(sliderCont + ' .home-block-slider-nav-arrow__up').addClass('inactive');
            jQuery(sliderCont + ' .portfolio-date__up').addClass('inactive');
        }else{
            jQuery(sliderCont + ' .home-block-slider-nav-arrow__up').removeClass('inactive');
            jQuery(sliderCont + ' .portfolio-date__up').removeClass('inactive');
        }

        if(i.currentSlide == jQuery(sliderCont + ' .home-slide').length - 1){
            jQuery(sliderCont + ' .home-block-slider-nav-arrow__down').addClass('inactive');
            jQuery(sliderCont + ' .portfolio-date__down').addClass('inactive');
        }else{
            jQuery(sliderCont + ' .home-block-slider-nav-arrow__down').removeClass('inactive');
            jQuery(sliderCont + ' .portfolio-date__down').removeClass('inactive');
        }
    });

    if(jQuery(sliderCont).hasClass('mobile')){
        var maxHeight = -1;

        jQuery(sliderCont + ' .slick-slide').each(function() {
            if (jQuery(this).height() > maxHeight) {
                maxHeight = jQuery(this).height();
            }
        });

        jQuery(sliderCont + ' .slick-slide').each(function() {
            if (jQuery(this).height() < maxHeight) {
                jQuery(this).css('margin-bottom', Math.ceil((maxHeight-jQuery(this).height())) + 'px');
            }
        });
    }else{
        jQuery(sliderCont + ' .slick-slide').css('margin-bottom', '');
    }
}



/*news page slider*/
function newsSliders(){
    jQuery('.news-cont-post-prev-slides').slick({
        adaptiveHeight: true,
        slidesToScroll: 1,
        focusOnSelect: true,
        slidesToShow: 1,
        infinite: false,
        arrows: false,
        dots: true,
    });
}



/*home services background*/
function servBack(){
    if(jQuery(window).innerWidth() > 1050){
        if(jQuery('.home-block__services').attr('data-window') != 'desktop'){
            var imageSrc = jQuery('.home-services-elem:nth-child(1)').attr('data-image'),
                echoElem = jQuery('.home-services-elem'),
                count = 0;

            jQuery('.home-block__services').attr('data-window', 'desktop');
            jQuery('.home-block__services').css('background-image', 'url('+imageSrc+')');

            function echoAnim(){
                if(jQuery('.home-block__services').attr('data-window') == 'desktop'){
                    var imageSrc = jQuery(echoElem[count]).attr('data-image'),
                        newImg = new Image();

                    jQuery('.home-block__services').css('background-image', 'url('+imageSrc+')');
                    jQuery('.home-services-elem').removeClass('active');
                    jQuery(echoElem[count]).addClass('active');

                    if(count == (jQuery(echoElem).length - 1)){
                        count = 0;
                    }else{
                        count++;
                    }

                    setTimeout(function(){
                        echoAnim();
                    }, 5000);
                }
            }

            setTimeout(function(){
                echoAnim();
            }, 5000);
        }
    }else{
        if(jQuery('.home-block__services').attr('data-window') != 'mobile'){
            var imageSrc = jQuery('.home-block__services').attr('data-image');

            jQuery('.home-block__services').attr('data-window', 'mobile');
            jQuery('.home-block__services').css('background-image', 'url('+imageSrc+')');
        }
    }
}



/*home services echo anim*/
function echoHover(){
    jQuery('.home-services-elem-inner').hover(function(){
        if(jQuery(window).innerWidth() > 1050){
            var imageSrc = jQuery(this).parent().attr('data-image');

            jQuery('.home-services-elem-inner').parent().removeClass('active');
            jQuery(this).parent().addClass('active');

            jQuery('.home-block__services').css('background-image', 'url('+imageSrc+')');
        }
    });
}



/*filter news*/
function filterNews(){
    jQuery('.news-cont-filter-elem').on('click', function(e){
        e.preventDefault();

        var filterName = jQuery(this).attr('data-filter');

        jQuery('.news-cont-filter-elem').removeClass('current');
        jQuery(this).addClass('current');

        if(filterName == 'all'){
            jQuery('.news-prev').css('display', '');
        }else{
            jQuery('.news-prev').each(function(){
                var filterElemNames = jQuery(this).attr('data-filter'),
                    filterElems = filterElemNames.split(' '),
                    filterCount = 0;

                for(var i = 0; i < filterElems.length; i++){
                    if(filterElems[i] == filterName){
                        filterCount = 1;
                    }
                }

                if(filterCount == 0){
                    jQuery(this).css('display', 'none');
                }else{
                    jQuery(this).css('display', '');
                }
            });
        }
    });
}



/*portfolio scroll*/
function portfolioScroll(){
    if(jQuery('.home-radio-volume-list').length){
        var scrollPostion = (window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,
            windowHeight = jQuery(window).innerHeight(),
            volumeHeight = jQuery('.home-radio-volume-list').height(),
            volumePos = jQuery('.home-radio-volume-list').offset().top;

        if(scrollPostion + windowHeight >= volumePos + volumeHeight){
            jQuery('.home-radio-volume-list').addClass('animed');
        }
    }
}



/*clients start*/
function clientsStart(){
    jQuery('.client-elem').on('click', function(e){
        e.preventDefault();

        jQuery('.home-block-content__clients').toggleClass('opened');

        // here need ajax callback
    });

    jQuery('#clients .home-block-content-back').on('click', function(e){
        e.preventDefault();

        jQuery('.home-block-content__clients').removeClass('opened');
    });
}



/*wow elements anim*/
function wowAnim(){
    var scrollPostion = (window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,
        windowHeight = jQuery(window).innerHeight();

    jQuery('.wow').each(function(){
        var scrollBlock = jQuery(this).offset().top,
            blockHeight = jQuery(this).height();

        var current_pull = parseInt(jQuery(this).css('transform').split(',')[5]);

        if(isNaN(current_pull)){
            current_pull = 0;
        }

        if(jQuery(this).hasClass('slideInRight')){
            var translate = 'translateX(0)';
        }else if(jQuery(this).hasClass('bounceInUp')){
            var translate = 'translateY(0)';
        }else{
            var translate = 'translateY(0)';
        }

        if(!jQuery(this).hasClass('home-block-list-elem') && !jQuery(this).hasClass('main-details-elem') && !jQuery(this).hasClass('person-anim-elem')){
            if(scrollBlock - current_pull < scrollPostion + windowHeight && scrollBlock - current_pull + blockHeight > scrollPostion){
                jQuery(this).css({'opacity': 1, 'transform': translate, 'visibility': 'visible'});
            }
        }
    });

    jQuery('.main-details').each(function(){
        var scrollBlock = jQuery(this).offset().top,
            blockHeight = jQuery(this).height();

        if(!jQuery(this).hasClass('home-block-list-elem') && !jQuery(this).hasClass('main-details-elem')){
            if(scrollBlock < scrollPostion + windowHeight && scrollBlock + blockHeight > scrollPostion){
                jQuery(this).addClass('animated');
            }
        }
    });

    jQuery('.person-anim').each(function(){
        var scrollBlock = jQuery(this).offset().top,
            blockHeight = jQuery(this).height();

        if(!jQuery(this).hasClass('home-block-list-elem') && !jQuery(this).hasClass('main-details-elem')){
            if(scrollBlock < scrollPostion + windowHeight && scrollBlock + blockHeight > scrollPostion){
                jQuery(this).addClass('animated');
            }
        }
    });

    jQuery('.home-block').each(function(){
        var scrollBlock = jQuery(this).offset().top,
            blockHeight = jQuery(this).height();

        if(!jQuery(this).hasClass('home-block-list-elem') && !jQuery(this).hasClass('main-details-elem')){
            if(scrollBlock < scrollPostion + windowHeight && scrollBlock + blockHeight > scrollPostion){
                jQuery(this).addClass('animated');
            }
        }
    });
}