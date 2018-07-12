'use strict';

/*load youtube video*/
var tag = document.createElement('script');

tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;


function onYouTubeIframeAPIReady() {
    player = new YT.Player('yPLayer', {
        height: '390',
        width: '640',
//        videoId: yPlayerId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    if(document.getElementById('yPLayer')){
        var yPlayerId = document.getElementById('yPLayer').getAttribute('data-video-id');
    }else{
        var yPlayerId = 'jna2r56EXTg';

        player = {};

        player.pauseVideo = function() {
            console.log('video not available');
        };
    }
}

function onPlayerReady(event) {
//    event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event) {
    if(event.data === 0) {
        jQuery('#news-video-start').removeClass('played');
    }else if(event.data == YT.PlayerState.PLAYING && !done){
        stopAudio();
    }
}

function stopVideo() {
//    player.stopVideo();
}



function blockHeight(){
    if(jQuery(window).innerWidth() >= 1200){
        jQuery('.section').each(function(){
            if(!jQuery(this).hasClass('section__normal-down')){
                jQuery(this).css('height', jQuery(window).innerHeight());
            }
        });
    }else{
        jQuery('.section').css('height', '');
    }
}



function mapHeight(){
    if(jQuery(window).innerWidth() >= 1200){
        var windowHeight = jQuery(window).innerHeight(),
            headerHeight = jQuery('.home-contacts .block-with-lines:first-child').outerHeight();
        jQuery('.home-map').css('height', windowHeight - headerHeight - 80);
    }else{
        jQuery('.home-map').css('height', '');
    }
}



/*strat functions after window load*/
jQuery(window).on('load', function(){
    preloadEnd();
});



/*start functions after document started*/
jQuery(document).ready(function(){
    // console.log(player, 'boo');
    preloadAnim();
    menuOpener();
    menuScroll();
    detectMenu();
    newsClicker();
    scrollToBlock();
    fullpageInit();
//    blockHeight();
    adaptiveNews();
    mapHeight();

    homeSliders('.home-block__portfolio');
    homeSliders('.home-block__persons');
    homeSliders('.home-block__clients');
    homeSliders('.home-block__radio');

    slidesHeight('.home-block__portfolio', 'yes');
    slidesHeight('.home-block__persons', 'yes');
    slidesHeight('.home-block__clients', 'yes');
    slidesHeight('.home-block__radio', 'no');

    newsSliders();
    substrateDotsAnim();
    startRadioVolume();
    portfolioScroll();
    portfolioProgress();
    scrollToPortfolio();
    mediaboxScrollAnim();
    mediaboxPrev();
    mediaProgress('.media-elem-cover-progress-inner');
    servBack();
    echoHover();
    filterNews();
    mainPlayer();
    clientsStart();
    portfolioPlay();
    newsAudioStart();
    newsVideoStart();
    changeFeatures();
    typewriterFunc();
    newsAutoStart();
    radioPlay();
    radioStop();
    wowAnim();

    // disable scroll event from body
    jQuery('.main-header').hover(function(e){
        $('body').on('wheel.modal mousewheel.modal', function () {
          return false;
        });
    }, function(e){
        $('body').off('wheel.modal mousewheel.modal');
    });
});



/*start functions when window resized*/
jQuery(window).resize(function(){
    menuScroll();
//    blockHeight();
    mapHeight();
    adaptiveNews();
    substrateDotsAnim();
    mediaboxPrev();
    servBack();

    slidesHeight('.home-block__portfolio', 'yes');
    slidesHeight('.home-block__persons', 'yes');
    slidesHeight('.home-block__clients', 'yes');
    slidesHeight('.home-block__radio', 'no');
});



/*start functions when window scrolled*/
jQuery(window).scroll(function(){
    wowAnim();
    menuScroll();
    portfolioScroll();
    mediaboxScrollAnim();

    clearTimeout(jQuery.data(this, 'scrollTimer'));
    jQuery.data(this, 'scrollTimer', setTimeout(function() {
        detectMenu();
    }, 250));
});