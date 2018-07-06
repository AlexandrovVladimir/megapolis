'use strict';

jQuery('.breadcrumbs-cont-back').on('click', function(e){
    e.preventDefault();

    jQuery.ajax({
        url: 'http://auto.arthur-creek.ru/42/route/route.php',
        type: "POST",
        data: {
            link: jQuery(this).attr('href'),
            action: 'ajax_news_get',
        },
        success: function(data){
            jQuery('.main-section').html(data);

//            console.log(data);
        }
    })

    return false;
});



/*get portfolio content*/
function portfolioContent(idPortfolio){
    jQuery.ajax({
        url: 'http://auto.arthur-creek.ru/42/route/route.php',
        type: "POST",
        data: {
            id_portfolio: idPortfolio,
            action: 'portfolio_content',
        },
        success: function(data){
            jQuery('.home-block-content__portfolio .home-block-content-text').html(data);
        }
    })

    return false;
}