'use strict';

/*analizer audio*/
function analizerAudio(){
    if(!jQuery('#main-audio').hasClass('started')){
        jQuery('#main-audio').addClass('started');

        var AudioContext = window.AudioContext || window.webkitAudioContext || false;

        if(AudioContext){
            var audioTag = document.getElementById('main-audio'),
                audioCtx = new AudioContext,
                analyserRight = audioCtx.createAnalyser(),
                analyserLeft = audioCtx.createAnalyser(),
                splitter = audioCtx.createChannelSplitter(),
                source = audioCtx.createMediaElementSource(audioTag);

            analyserRight.smoothingTimeConstant = 0.3;
            analyserRight.fftSize = 32;

            analyserLeft.smoothingTimeConstant = 0;
            analyserLeft.fftSize = 32;

            splitter.connect(analyserRight,1,0);
            splitter.connect(analyserLeft,0,0);

            source.connect(audioCtx.destination);

            source.connect(splitter);

            var frequencyDataRight = new Uint8Array(analyserRight.frequencyBinCount),
                frequencyDataLeft = new Uint8Array(analyserLeft.frequencyBinCount);

            function getAverageVolume(array) {
                var average = 0,
                    values = 0;
                var average;

                for (var i = 0; i < array.length; i++) {
                    values += array[i];
                }

                average = values / array.length;

                return average;
            }

            function renderFrame() {
                if(jQuery('.main-header-player-equalizer').length){
                    var analizerBars = jQuery('.main-header-player-equalizer-elem');

                    analyserLeft.getByteFrequencyData(frequencyDataLeft);

                    jQuery(analizerBars[0]).css('height', (frequencyDataLeft[0] * 100) / 256 + '%');
                    jQuery(analizerBars[1]).css('height', (frequencyDataLeft[1] * 100) / 256 + '%');
                    jQuery(analizerBars[2]).css('height', (frequencyDataLeft[2] * 100) / 256 + '%');
                    jQuery(analizerBars[3]).css('height', (frequencyDataLeft[3] * 100) / 256 + '%');
                    jQuery(analizerBars[4]).css('height', (frequencyDataLeft[4] * 100) / 256 + '%');
                }

                if(jQuery('.home-radio-equalizer').length && jQuery('.main-header-player').attr('data-type') == 'radio'){
                    analyserRight.getByteFrequencyData(frequencyDataRight);
                    analyserLeft.getByteFrequencyData(frequencyDataLeft);

                    var averageRight = getAverageVolume(frequencyDataRight),
                        averageLeft = getAverageVolume(frequencyDataLeft),
                        barRight = jQuery('.home-radio-equalizer-cols .right-block span'),
                        barLeft = jQuery('.home-radio-equalizer-cols .left-block span');

//                    averageRight = Math.floor(38 / 100 * (averageRight * 100 ) / 256);
//                    averageLeft = Math.floor(38 / 100 * (averageLeft * 100 ) / 256);

                    averageRight = Math.floor(19 / 100 * (frequencyDataRight[2] * 100 ) / 256);
                    averageLeft = Math.floor(19 / 100 * (frequencyDataLeft[2] * 100 ) / 256);

                    jQuery(barRight).each(function(){
                        if(!jQuery(this).hasClass('disable')){
                            jQuery(this).removeClass('clear');
                        }
                    });

                    jQuery(barLeft).each(function(){
                        if(!jQuery(this).hasClass('disable')){
                            jQuery(this).removeClass('clear');
                        }
                    });

                    for(var i = 0; i < (19 - averageRight); i++){
                        jQuery(barRight[i]).addClass('clear');
                    }

                    for(var i = 0; i < (19 - averageLeft); i++){
                        jQuery(barLeft[i]).addClass('clear');
                    }
                }else{
                    jQuery('.home-radio-equalizer-cols span').addClass('clear');
                }

                var currentPlayed = jQuery('.main-header-player').attr('data-played');

                if(jQuery('#' +currentPlayed+ ' .media-elem-cover-time').length){
                    var currentMin = parseInt((audioTag.currentTime / 60) % 60),
                        currentSec = parseInt(audioTag.currentTime % 60);

                    jQuery('#' +currentPlayed+ ' .media-elem-cover-time-min').text(currentMin);
                    jQuery('#' +currentPlayed+ ' .media-elem-cover-time-sec').text(currentSec);
                }

                if(jQuery('#' +currentPlayed+ ' .media-elem-cover-progress').length){
                    var maxCircleTime = jQuery('#' +currentPlayed).attr('data-media-duration'),
                        circleTimePos = (((100 / maxCircleTime) * parseInt(audioTag.currentTime)) * 3.6),
                        circleTime = 333 - (((100 / maxCircleTime) * parseInt(audioTag.currentTime)) * 3.33),
                        circleSmall = jQuery('#' +currentPlayed+ ' .media-elem-cover-progress-ring__small').attr('data-pos'),
                        circleBig = jQuery('#' +currentPlayed+ ' .media-elem-cover-progress-ring__big').attr('data-pos');

                    if(!jQuery('#' +currentPlayed+ ' .media-elem-cover-progress-inner').hasClass('moved')){
                        jQuery('#' +currentPlayed+ ' .media-elem-cover-progress-inner').css('transform', 'rotate('+ circleTimePos +'deg)');
                        jQuery('#' +currentPlayed+ ' .media-elem-cover-progress-inner').attr('data-moved', circleTimePos);
                        jQuery('#' +currentPlayed+ ' .media-elem-cover-progress-inner').attr('data-max', maxCircleTime);
                    }

                    jQuery('#' +currentPlayed+ ' .media-elem-cover-progress-ring__time').css('stroke-dashoffset', circleTime);
                    jQuery('#' +currentPlayed+ ' .media-elem-cover-progress-ring__small').attr('transform', 'rotate('+(circleSmall++)+' 54 54)');
                    jQuery('#' +currentPlayed+ ' .media-elem-cover-progress-ring__big').attr('transform', 'rotate(-'+(circleBig++)+' 54 54)');

                    if(circleSmall + 1 > 360){
                        circleSmall = 0
                    }else{
                        circleSmall = circleSmall + 1;
                    }

                    if(circleBig + 1 > 360){
                        circleBig = 0
                    }else{
                        circleBig = circleBig + 1;
                    }

                    jQuery('#' +currentPlayed+ ' .media-elem-cover-progress-ring__small').attr('data-pos', circleSmall);
                    jQuery('#' +currentPlayed+ ' .media-elem-cover-progress-ring__big').attr('data-pos', circleBig);
                }

                if(jQuery('.home-block-content-name-progress-line').length){
                    if(!jQuery('.home-block-content-name-progress').hasClass('moved')){
                        var maxTime = jQuery('#' +currentPlayed).attr('data-media-duration'),
                            currentTime = parseInt(audioTag.currentTime),
                            currentWidth = (100 / maxTime) * currentTime;

                        jQuery('.home-block-content-name-progress-line').css('width', currentWidth + '%');
                    }
                }

                var animRenderFrame = setTimeout(function(){
                    renderFrame();
                }, 50, true);
            }
            renderFrame();
        }else{}
    }
}



/*play audio*/
function playAudio(src, id, type){
    var audioCont = document.getElementById('main-audio'),
        elemId = jQuery('.main-header-player').attr('data-played');

    if(elemId != id){
        jQuery('#radio .home-radio-list-elem').removeClass('played');
        jQuery('.media-elem').removeClass('played');

        jQuery('.main-header-player').attr('data-played', id);

        audioCont.setAttribute('src', src);
    }else{
        jQuery('.main-header-player').attr('data-played', id);
    }

    jQuery('#' + id).addClass('played');

    audioCont.play();
    audioCont.volume = 1;

    if(type == 'radio'){
        jQuery('.home-radio-equalizer-button').addClass('played');
    }

    jQuery('.main-header-player').removeClass('stoped');
    jQuery('.main-header-player').addClass('started');
    jQuery('.main-header-player').addClass('played');
    jQuery('.main-header-player').attr('data-type', type);

    analizerAudio();
}



/*stop audio*/
function stopAudio(){
    var audioCont = document.getElementById('main-audio'),
        dataType = jQuery('.main-header-player').attr('data-type'),
        elemId = jQuery('.main-header-player').attr('data-played');

    audioCont.pause();

    if(dataType == 'radio'){
        audioCont.currentTime = 0;
    }

    jQuery('.home-radio-equalizer-button').removeClass('played');
    jQuery('.home-radio-volume-list-elem').addClass('scrolled');
    jQuery('.home-radio-volume-list-elem').css('bottom', '');
    jQuery('.main-header-player').removeClass('played');
    jQuery('.main-header-player').addClass('stoped');
    jQuery('.main-header-player').attr('data-type', '');

    if(elemId && elemId.length > 0){
        jQuery('#' + elemId).removeClass('played');
    }

    setTimeout(function(){
        jQuery('.home-radio-volume-list-elem').removeClass('scrolled');
    }, 500);
}



/*main audio player*/
function mainPlayer(){
    jQuery('.main-header-player-button').on('click', function(e){
        e.preventDefault();

        var soundSource = jQuery('#main-audio').attr('src'),
            elemId = jQuery('.main-header-player').attr('data-played');

        if(jQuery(this).parent().hasClass('played')){
            stopAudio();
        }else if(jQuery(this).parent().hasClass('stoped')){
            playAudio(soundSource, elemId);
            player.pauseVideo();
        }
    });
}



/*start audio into news page*/
function newsAudioStart(){
    jQuery('#news-audio-start .media-elem-button').on('click', function(e){
        e.preventDefault();

        var soundSource = jQuery(this).parent().attr('data-source'),
            audioType = jQuery(this).parent().attr('data-type'),
            elemId = jQuery(this).parent().attr('id');

//        jQuery(this).parent().toggleClass('played');

        if(jQuery(this).parent().hasClass('played')){
            jQuery(this).parent().removeClass('played');
            stopAudio();
        }else{
            jQuery(this).parent().addClass('played');
            playAudio(soundSource, elemId, audioType);
        }
    });
}



/*start video into news page*/
function newsVideoStart(){
    jQuery('#news-video-start').on('click', function(e){
        e.preventDefault();

        jQuery(this).toggleClass('played');

        if(jQuery(this).hasClass('played')){
            stopAudio();

            jQuery('.main-wrapper-substrate').css('display', 'block');
            jQuery('.news-cont-post-video').addClass('opened');

            setTimeout(function(){
                jQuery('.main-wrapper-substrate').css('opacity', '1');
            }, 100);

            player.playVideo();
        }else{
            player.pauseVideo();
        }

        jQuery('.main-wrapper-substrate').on('click', function(){
            jQuery('.main-wrapper-substrate').css('opacity', '');
            jQuery('.news-cont-post-video').removeClass('opened');
            jQuery('#news-video-start').removeClass('played');

            player.pauseVideo();

            setTimeout(function(){
                jQuery('.main-wrapper-substrate').css('display', '');
            }, 100);
        });
    });
}



/*autostart media into news page*/
function newsAutoStart(){
    var hashTag = window.location.hash;

    if(hashTag == '#voice'){
        var soundSource = jQuery('#news-audio-start').attr('data-source'),
            audioType = jQuery('#news-audio-start').attr('data-type'),
            elemId = jQuery('#news-audio-start').attr('id');

        jQuery('#news-audio-start').addClass('played');

        playAudio(soundSource, elemId, audioType);
    }else if(hashTag == '#video'){
        var thisElem = jQuery('#news-video-start');

        jQuery('#news-video-start').addClass('played');

        setTimeout(function(){
            if(jQuery(thisElem).hasClass('played')){
                stopAudio();

                jQuery('.main-wrapper-substrate').css('display', 'block');
                jQuery('.news-cont-post-video').addClass('opened');

                setTimeout(function(){
                    jQuery('.main-wrapper-substrate').css('opacity', '1');
                }, 100);

                player.playVideo();
            }else{
                player.pauseVideo();
            }
        },200);

        jQuery('.main-wrapper-substrate').on('click', function(){
            jQuery('.main-wrapper-substrate').css('opacity', '');
            jQuery('.news-cont-post-video').removeClass('opened');
            jQuery('#news-video-start').removeClass('played');

            player.pauseVideo();

            setTimeout(function(){
                jQuery('.main-wrapper-substrate').css('display', '');
            }, 100);
        });
    }
}



/*portfolio play*/
function portfolioPlay(){
    jQuery('#portfolio .media-elem-button').on('click', function(e){
        e.preventDefault();

        var soundSource = jQuery(this).parent().attr('data-source'),
            audioType = jQuery(this).parent().attr('data-type'),
            elemId = jQuery(this).parent().attr('id');

        if(!jQuery(this).parent().hasClass('played')){
            jQuery(this).parent().addClass('played');

            jQuery('.home-block-content').removeClass('opened');

            jQuery('.home-block-content__portfolio').addClass('opened');

            if(jQuery(this).parent().hasClass('voice')){
                var maxTime = jQuery(this).parent().attr('data-media-duration');

                jQuery('.home-block-content-name-progress').attr('data-media-duration', maxTime);

                player.pauseVideo();
                playAudio(soundSource, elemId, audioType);
            }else if(jQuery(this).parent().hasClass('video')){
                jQuery('.home-block-content__portfolio').addClass('video');
                jQuery('.home-block-substrate').addClass('opened');
                jQuery('.home-block-video').addClass('opened');

                stopAudio();
//                player.playVideo();
            }
        }else{
            jQuery(this).parent().removeClass('played');

            jQuery('.home-block-content__portfolio').removeClass('opened');

            stopAudio();
        }

        jQuery('.home-radio-equalizer-button').removeClass('played');

        // here need ajax callback
        portfolioContent(elemId);
    });

    jQuery('#portfolio .home-block-content-name-button').on('click', function(e){
        e.preventDefault();

        jQuery('.home-block-content__portfolio').removeClass('opened');
        jQuery('.home-block-content__portfolio').removeClass('video');
        jQuery('.home-block-substrate').removeClass('opened');
        jQuery('#portfolio .media-elem').removeClass('played');
        jQuery('.home-block-video').removeClass('opened');

        player.pauseVideo();
        stopAudio();
    });

    jQuery('#portfolio .home-block-content-back').on('click', function(e){
        e.preventDefault();

        if(jQuery('.home-block-content__portfolio').hasClass('video')){
            jQuery('.home-block-content__portfolio').removeClass('video');
            jQuery('#portfolio .media-elem').removeClass('played');
        }

        jQuery('.home-block-content__portfolio').removeClass('opened');
        jQuery('.home-block-substrate').removeClass('opened');
        jQuery('.home-block-video').removeClass('opened');

        player.pauseVideo();
    });

    jQuery('.home-block-substrate').on('click', function(){
        jQuery('.home-block-content__portfolio').removeClass('opened');
        jQuery('.home-block-content__portfolio').removeClass('video');
        jQuery('.home-block-substrate').removeClass('opened');
        jQuery('#portfolio .media-elem').removeClass('played');
        jQuery('.home-block-video').removeClass('opened');

        player.pauseVideo();
        stopAudio();
    });
}



/*radio play*/
function radioPlay(){
    jQuery('#radio .home-radio-list-elem').on('click', function(e){
        e.preventDefault();

        var soundSource = jQuery(this).attr('data-source'),
            audioType = jQuery(this).attr('data-type'),
            volNumber = jQuery(this).attr('data-number'),
            volumes = jQuery('.home-radio-volume-list-elem'),
            elemId = jQuery(this).attr('id');

        if(!jQuery(this).hasClass('played')){
            jQuery(this).addClass('played');

            jQuery('.home-block-substrate').removeClass('opened');
            jQuery('.home-block-content').removeClass('opened');
            jQuery('.home-block-video').removeClass('opened');

            jQuery('.media-elem.video').removeClass('played');

            jQuery('.home-block-content__radio').addClass('opened');

            jQuery(volumes).removeClass('active');
            jQuery(volumes).addClass('scrolled');
            jQuery(volumes).css('bottom', '');

            jQuery(volumes[volNumber]).addClass('active');
            jQuery(volumes[volNumber]).css('bottom', '100%');

            playAudio(soundSource, elemId, audioType);

            setTimeout(function(){
                jQuery(volumes).removeClass('scrolled');
            }, 500);

            player.pauseVideo();
        }else{
            jQuery(this).removeClass('played');

            jQuery('.home-block-content__radio').removeClass('opened');

            stopAudio();
        }

        // here need ajax callback
    });

    jQuery('#radio .home-block-content-name-button').on('click', function(e){
        e.preventDefault();

        jQuery('#radio .home-radio-list-elem').removeClass('played');
        jQuery('.home-block-content__radio').removeClass('opened');

        stopAudio();
    });

    jQuery('#radio .home-block-content-back').on('click', function(e){
        e.preventDefault();

        jQuery('.home-block-content__radio').removeClass('opened');
    });
}



/*radio stop*/
function radioStop(){
    jQuery('.home-radio-equalizer').on('click', '.home-radio-equalizer-button.played', function(){
        jQuery('.home-block-substrate').removeClass('opened');
        jQuery('.home-block-content').removeClass('opened');
        jQuery('.home-block-video').removeClass('opened');

        jQuery('.media-elem.video').removeClass('played');

        stopAudio();
        player.pauseVideo();
    });
}



/*start radio volume*/
function startRadioVolume(){
    function eventMove(e){
        var elemHeight = jQuery(e.data.elem).height(),
            barHeight = jQuery(e.data.elem).parent().height(),
            audioCont = document.getElementById('main-audio'),
            barTop = jQuery(e.data.elem).parent().offset().top,
            posY = e.originalEvent.pageY - barTop - (barHeight - (elemHeight / 2));

//        console.log(elemHeight, jQuery(e.data.elem), barHeight);
        if(-posY > 0 && -posY < barHeight){
            jQuery(e.data.elem).css('bottom', -posY);

//            console.log(-posY);
            audioCont.volume = (((100 / barHeight) * -posY) / 100);
        }
    }

    function eventUp(e){
        jQuery(document).off('mousemove', eventMove);
        jQuery(document).off('mouseup', eventUp);
    }

    jQuery('.home-radio-volume-list-elem').on('mousedown', function(e){
        e.preventDefault();

        var elem = jQuery(this);

        if(jQuery(this).hasClass('active')){
            jQuery(document).on('mousemove', {elem: elem}, eventMove);
            jQuery(document).on('mouseup', eventUp);
        }
    });
}



/*media progress*/
function mediaProgress(tumbler){
    function eventMove(e){
        var posX = e.originalEvent.pageX - (jQuery(e.data.elem).offset().left + (jQuery(e.data.elem).width() / 2)),
            posY = e.originalEvent.pageY - (jQuery(e.data.elem).offset().top + (jQuery(e.data.elem).height() / 2)),
            rad = Math.atan2(posY, posX) / Math.PI * 180 + 90;

        if(rad < 0){
            rad = 360 + rad;
        }

        if(!jQuery(e.target).hasClass('media-elem-cover-progress-inner-circle')){
            jQuery(e.data.elem).css('transform', 'rotate('+ rad +'deg)');
            jQuery(e.data.elem).addClass('moved');

            var audioCont = document.getElementById('main-audio'),
                audioCur = jQuery(e.data.elem).attr('data-moved'),
                audioMax = jQuery(e.data.elem).attr('data-max');

            audioCont.currentTime = rad / (360 / audioMax);
        }
    }

    function eventUp(e){
        var audioCont = document.getElementById('main-audio');

        jQuery(document).off('mousemove', eventMove);
        jQuery(document).off('mouseup', eventUp);

        jQuery(e.data.elem).removeClass('moved');
        document.body.style.cursor = null;

        audioCont.play();
    }

    jQuery(tumbler).on('mousedown', function(e){
        e.preventDefault();

        var elem = jQuery(this);

        jQuery(document).on('mousemove', {elem: elem}, eventMove);
        jQuery(document).on('mouseup', {elem: elem}, eventUp);
        jQuery(this).on('selectstart', false);
        document.body.style.cursor = 'move';
    });

    jQuery(tumbler).on('click', function(e){
        var posX = e.originalEvent.pageX - (jQuery(this).offset().left + (jQuery(this).width() / 2)),
            posY = e.originalEvent.pageY - (jQuery(this).offset().top + (jQuery(this).height() / 2)),
            rad = Math.atan2(posY, posX) / Math.PI * 180 + 90;

        if(rad < 0){
            rad = 360 + rad;
        }

        if(!jQuery(e.target).hasClass('media-elem-cover-progress-inner-circle')){
            jQuery(this).css('transform', 'rotate('+ rad +'deg)');

            var audioCont = document.getElementById('main-audio');

            var audioCont = document.getElementById('main-audio'),
                audioCur = jQuery(this).attr('data-moved'),
                audioMax = jQuery(this).attr('data-max');

            audioCont.currentTime = rad / (360 / audioMax);
        }
    });

    jQuery(tumbler).on('touchmove', function(e){
        e.preventDefault();

        var posX = e.originalEvent.changedTouches[0].pageX - (jQuery(this).offset().left + (jQuery(this).width() / 2)),
            posY = e.originalEvent.changedTouches[0].pageY - (jQuery(this).offset().top + (jQuery(this).height() / 2)),
            rad = Math.atan2(posY, posX) / Math.PI * 180 + 90;

        if(rad < 0){
            rad = 360 + rad;
        }

        jQuery(this).on('selectstart', false);

        if(!jQuery(e.target).hasClass('media-elem-cover-progress-inner-circle')){
            jQuery(this).css('transform', 'rotate('+ rad +'deg)');

            var audioCont = document.getElementById('main-audio');

            var audioCont = document.getElementById('main-audio'),
                audioCur = jQuery(this).attr('data-moved'),
                audioMax = jQuery(this).attr('data-max');

            audioCont.currentTime = rad / (360 / audioMax);
        }
    });
}



/*portfolio mobile media progress*/
function portfolioProgress(){
    function eventMove(e){
        var elemWidth = jQuery(e.data.elem).width(),
            audioCont = document.getElementById('main-audio'),
            barWidth = jQuery(e.data.elem).width(),
            maxTime = jQuery(e.data.elem).attr('data-media-duration'),
            barLeft = jQuery(e.data.elem).offset().left,
            posX = e.originalEvent.pageX - barLeft;

        if(posX > 0 && posX < barWidth){
            jQuery(e.data.elem).children().css('width', posX);

            audioCont.currentTime = (maxTime / 100) * ((100 / barWidth) * posX);
        }

        jQuery(e.data.elem).addClass('moved');
    }

    function eventUp(e){
        jQuery(document).off('mousemove', eventMove);
        jQuery(document).off('mouseup', eventUp);

        jQuery(e.data.elem).removeClass('moved');
    }

    jQuery('.home-block-content-name-progress').on('mousedown', function(e){
        e.preventDefault();

        var elem = jQuery(this);

        jQuery(document).on('mousemove', {elem: elem}, eventMove);
        jQuery(document).on('mouseup', {elem: elem}, eventUp);
    });

    jQuery('.home-block-content-name-progress').on('click', function(e){
        e.preventDefault();

        var elemWidth = jQuery(this).width(),
            audioCont = document.getElementById('main-audio'),
            barWidth = jQuery(this).width(),
            maxTime = jQuery(this).attr('data-media-duration'),
            barLeft = jQuery(this).offset().left,
            posX = e.originalEvent.pageX - barLeft;

        if(posX > 0 && posX < barWidth){
            jQuery(this).children().css('width', posX);

            audioCont.currentTime = (maxTime / 100) * ((100 / barWidth) * posX);
        }
    });

    jQuery('.home-block-content-name-progress').on('touchmove', function(e){
        e.preventDefault();

        var elemWidth = jQuery(this).width(),
            audioCont = document.getElementById('main-audio'),
            barWidth = jQuery(this).width(),
            maxTime = jQuery(this).attr('data-media-duration'),
            barLeft = jQuery(this).offset().left,
            posX = e.originalEvent.changedTouches[0].pageX - barLeft;

        if(posX > 0 && posX < barWidth){
            jQuery(this).children().css('width', posX);

            audioCont.currentTime = (maxTime / 100) * ((100 / barWidth) * posX);
        }
    });
}