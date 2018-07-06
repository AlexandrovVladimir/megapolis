/*mediabox prev background*/
function mediaboxPrev(){
    if(jQuery(window).innerWidth() > 1050){
        if(jQuery('.mediabox-block__preview').attr('data-window') != 'desktop'){
            var imageSrc = jQuery('.mediabox-block__preview').attr('data-image-desktop');

            jQuery('.mediabox-block__preview').attr('data-window', 'desktop');
            jQuery('.mediabox-block__preview').css('background-image', 'url('+imageSrc+')');
        }

        if(jQuery('.mediabox-block__feedback').attr('data-window') != 'desktop'){
            var imageSrc = jQuery('.mediabox-block__feedback').attr('data-image-desktop');

            jQuery('.mediabox-block__feedback').attr('data-window', 'desktop');
            jQuery('.mediabox-block__feedback').css('background-image', 'url('+imageSrc+')');
        }

        if(jQuery('.mediabox-block__tagline').attr('data-window') != 'desktop'){
            var imageSrc = jQuery('.mediabox-block__tagline').attr('data-image-desktop');

            jQuery('.mediabox-block__tagline').attr('data-window', 'desktop');
            jQuery('.mediabox-block__tagline').css('background-image', 'url('+imageSrc+')');
        }
    }else{
        if(jQuery('.mediabox-block__preview').attr('data-window') != 'mobile'){
            var imageSrc = jQuery('.mediabox-block__preview').attr('data-image-mobile');

            jQuery('.mediabox-block__preview').attr('data-window', 'mobile');
            jQuery('.mediabox-block__preview').css('background-image', 'url('+imageSrc+')');
        }

        if(jQuery('.mediabox-block__feedback').attr('data-window') != 'mobile'){
            var imageSrc = jQuery('.mediabox-block__feedback').attr('data-image-mobile');

            jQuery('.mediabox-block__feedback').attr('data-window', 'mobile');
            jQuery('.mediabox-block__feedback').css('background-image', 'url('+imageSrc+')');
        }

        if(jQuery('.mediabox-block__tagline').attr('data-window') != 'mobile'){
            var imageSrc = jQuery('.mediabox-block__tagline').attr('data-image-mobile');

            jQuery('.mediabox-block__tagline').attr('data-window', 'mobile');
            jQuery('.mediabox-block__tagline').css('background-image', 'url('+imageSrc+')');
        }
    }
}



/*scroll to portfolio block*/
function scrollToPortfolio(){
    jQuery('.mediabox-feedback-scroll').on('click', function(e){
        e.preventDefault();

        var getIdBlock = jQuery(this).attr('href'),
            topOfBlock = jQuery(getIdBlock).offset().top;

        jQuery('.main-section .section').removeClass('scrolled');

        jQuery('html, body').stop().animate({scrollTop: topOfBlock}, 1500, 'swing');
    });
}



/*scroll animation*/
function mediaboxScrollAnim(){
    var scrollPostion = (window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,
        windowHeight = jQuery(window).innerHeight();

    jQuery('.mediabox-anim-elem').each(function(){
        var scrollBlock = jQuery(this).offset().top,
            blockHeight = jQuery(this).height();

        var current_pull = parseInt(jQuery(this).css('transform').split(',')[5]);

        if(isNaN(current_pull)){
            current_pull = 0;
        }

        if(scrollBlock - current_pull < scrollPostion + windowHeight && scrollBlock - current_pull + blockHeight > scrollPostion){
            jQuery(this).css({'opacity': 1, 'transform': 'translateY(0)'});
        }
    });

    jQuery('.mediabox-anim-cont, .features-block-circle, .scheme-man').each(function(){
        var scrollBlock = jQuery(this).offset().top,
            blockHeight = jQuery(this).height();

        if(!jQuery(this).hasClass('home-block-list-elem') && !jQuery(this).hasClass('main-details-elem')){
            if(scrollBlock < scrollPostion + windowHeight && scrollBlock + blockHeight > scrollPostion){
                jQuery(this).addClass('animated');
            }
        }
    });
}



/*change features mobile status*/
function changeFeatures(){
    var elements = jQuery('.features-elem'),
        count = 0;

    function setText(){
        if(count == 10){
            count = 0;
        }

        jQuery('.features-block-text').css('opacity', 0);

        setTimeout(function(){
            jQuery('.features-block-text').children('span').text(jQuery(elements[count]).children('.features-elem-text').text());
            jQuery('.features-block-text').css('opacity', 1);

            jQuery(elements).removeClass('active');
            jQuery(elements[count]).addClass('active');

            count++;

            setTimeout(function(){
                setText();
            }, 3000);
        }, 1000);
    }

    setText();
}

/*typewriter function*/
function typewriterFunc(){
    if(jQuery('.mediabox-feedback-text').length){
        var str = jQuery('.mediabox-feedback-text').text(),
            len = str.length + 1,
            i = 0;

        jQuery('.mediabox-feedback-text').text('');

        function writeChar(){
            var currentText = jQuery('.mediabox-feedback-text').text();

            jQuery('.mediabox-feedback-text').text(currentText + str[i++]);

            if(i == len){
                jQuery('.mediabox-feedback-text').text('');
                i = 0;
            }

            if(str[i] == ' '){
                setTimeout(function(){
                    writeChar();
                }, 75);
            }else{
                setTimeout(function(){
                    writeChar();
                }, 75);
            }
        }

        writeChar();
    }
}