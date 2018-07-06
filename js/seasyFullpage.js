/*
easyFullpage is a simple variation of fullpage.js.
License: GPLv2
Source: coming soon
Author: EmgrtE
*/



function easyFullpage(time, cont, section, animation){
    var time = time || 1000,
        cont = cont || '.easy-fullpage',
        count = 0,
        section = section || '.section',
        adaptive = adaptive || 1200,
        animation = animation || 'swing',
        contSection = jQuery(cont).children();

    /* functions */
    /* scroll sections by whell mouse*/
    function mouseEvent(e){
        var currentId = jQuery(e.currentTarget).attr('id'),
            lastId = jQuery(contSection[contSection.length - 1]).attr('id');

        if(e.originalEvent.deltaY > 0){
            if(currentId != lastId && jQuery(e.currentTarget).next().length && !jQuery(e.currentTarget).hasClass('section__normal-down')){
                e.preventDefault();

                if(!jQuery(section).hasClass('mouse-scrolled')){
                    jQuery(section).addClass('mouse-scrolled');

                    var nextBlock = jQuery(e.currentTarget).next().offset().top,
                        nextId = jQuery(e.currentTarget).next().attr('id');

                    jQuery(contSection).removeClass('scrolled');

                    jQuery('body, html').stop().animate({scrollTop: nextBlock}, 500, animation, function(){
                        jQuery(e.currentTarget).next().addClass('scrolled');
                        jQuery(section).removeClass('mouse-scrolled');
                        window.location.hash = '#' + nextId;
                    });
                }
            }
        }else if(e.originalEvent.deltaY < 0){
            var scrollPostion = (window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;

            if(jQuery(e.currentTarget).prev().length && !jQuery(e.currentTarget).hasClass('section__normal-down')){
                e.preventDefault();

                if(!jQuery(section).hasClass('mouse-scrolled')){
                    jQuery(section).addClass('mouse-scrolled');

                    var prevBlock = jQuery(e.currentTarget).prev().offset().top,
                        prevId = jQuery(e.currentTarget).prev().attr('id');

                    jQuery(contSection).removeClass('scrolled');

                    jQuery('body, html').stop().animate({scrollTop: prevBlock}, 500, animation, function(){
                        jQuery(e.currentTarget).prev().addClass('scrolled');
                        jQuery(section).removeClass('mouse-scrolled');
                        window.location.hash = '#' + prevId;
                    });
                }
            }else if(jQuery(e.currentTarget).hasClass('section__normal-down')){
                var sectionPosition = jQuery(e.currentTarget).offset().top;

                if(scrollPostion <= sectionPosition){
                    e.preventDefault();

                    if(!jQuery(section).hasClass('mouse-scrolled')){
                        jQuery(section).addClass('mouse-scrolled');

                        var prevBlock = jQuery(e.currentTarget).prev().offset().top,
                            prevId = jQuery(e.currentTarget).prev().attr('id');

                        jQuery(contSection).removeClass('scrolled');

                        jQuery('body, html').stop().animate({scrollTop: prevBlock}, 500, animation, function(){
                            jQuery(e.currentTarget).prev().addClass('scrolled');
                            jQuery(section).removeClass('mouse-scrolled');
                            window.location.hash = '#' + prevId;
                        });
                    }
                }
            }
        }
    }

    if(cont.length){
        /* init fullpage */
        jQuery(contSection).each(function(){
            var sectionId = jQuery(this).attr('id');

            if(sectionId === undefined){
                jQuery(this).attr('id', 'section_' + count);
            }

            count++;
        });

        if(window.location.hash.length > 0){
            var activeBlock = jQuery(window.location.hash).offset().top,
                activeId = window.location.hash;

            window.location.hash = '';

                    jQuery(activeId).addClass('scrolled');
                    window.location.hash = activeId;
//            setTimeout(function(){
//                jQuery('body, html').stop().animate({scrollTop: activeBlock}, 1000, animation, function(){
//                });
//            }, 200);
        }else{
            var firstBlock = jQuery(contSection[0]).attr('id');

            jQuery(contSection[0]).addClass('scrolled');
            window.location.hash = '#' + firstBlock;
        }

        if(jQuery(window).innerWidth() >= adaptive){
            jQuery(section).each(function(){
                if(!jQuery(this).hasClass('section__normal-down')){
                    jQuery(this).css('height', jQuery(window).innerHeight());
                }
            });

            jQuery(cont).addClass('active');

            jQuery(section).on('wheel onmousewheel', mouseEvent);
        }

        jQuery(window).resize(function(){
            if(jQuery(window).innerWidth() >= adaptive){
                var activeBlock = jQuery(window.location.hash).offset().top,
                    activeId = window.location.hash;

    //            window.location.hash = '';

                jQuery(section).each(function(){
                    if(!jQuery(this).hasClass('section__normal-down')){
                        jQuery(this).css('height', jQuery(window).innerHeight());
                    }
                });

                setTimeout(function(){
                    jQuery('body, html').stop().animate({scrollTop: activeBlock}, 1000, animation);
                }, 200);

                if(!jQuery(cont).hasClass('active')){
                    jQuery(cont).addClass('active');

                    jQuery(section).on('wheel onmousewheel', mouseEvent);
                }
            }else{
                jQuery(section).css('height', '');
                jQuery(cont).removeClass('active');

                jQuery(section).off('wheel onmousewheel', mouseEvent);
            }
        });

        /* scroll sections by keyboard buttons */
        jQuery(document).keydown(function(e){
            var currentClass = section,
                currentClass = currentClass.replace('.', ''),
                currentId = window.location.hash,
                firstId = jQuery(contSection[0]).attr('id'),
                lastId = jQuery(contSection[contSection.length - 1]).attr('id'),
                code = (e.keyCode ? e.keyCode : e.which);

    //        console.log(code);
            if(jQuery(window).innerWidth() > adaptive){
                if(code == 40 || code == 34){
                    e.preventDefault();

                    //  && jQuery(currentId).hasClass(currentClass)
                    if(currentId != ('#' + lastId)){
                        var nextBlock = jQuery(window.location.hash).next().offset().top,
                            nextId = jQuery(window.location.hash).next().attr('id');

                        jQuery(contSection).removeClass('scrolled');

                        jQuery('body, html').stop().animate({scrollTop: nextBlock}, 1000, animation, function(){
                            jQuery(window.location.hash).addClass('scrolled');
                        });

                        window.location.hash = '#' + nextId;
                    }
                }else if(code == 38 || code == 33){
                    e.preventDefault();

                    if(currentId != ('#' + firstId)){
                        var prevBlock = jQuery(window.location.hash).prev().offset().top,
                            prevId = jQuery(window.location.hash).prev().attr('id');

                        jQuery(contSection).removeClass('scrolled');

                        jQuery('body, html').stop().animate({scrollTop: prevBlock}, 1000, animation, function(){
                            jQuery(window.location.hash).addClass('scrolled');
                        });

                        window.location.hash = '#' + prevId;
                    }
                }else if(code == 35){
                    var lastBlock = jQuery('#' + lastId).offset().top;

                    jQuery(contSection).removeClass('scrolled');

                    jQuery('body, html').stop().animate({scrollTop: lastBlock}, 1000, animation, function(){
                        jQuery('#' + lastId).addClass('scrolled');
                        window.location.hash = '#' + lastId;
                    });
                }else if(code == 36){
                    jQuery(contSection).removeClass('scrolled');

                    jQuery('body, html').stop().animate({scrollTop: 0}, 1000, animation, function(){
                        jQuery('#' + firstId).addClass('scrolled');
                        window.location.hash = '#' + firstId;
                    });
                }
            }
        });
    }
}



/*
 ___________________________
 | q w e r t y u i o p [ ] |
 |  a s d f g h j k l ; '  |
 |   z x c v b n m , . /   |
 |=========================|
*/