<?php

function ajax_news_get($link){
    echo '                    <!-- block-with-lines -->
                    <div class="block-with-lines container">
                        <!-- block-with-lines-cont -->
                        <div class="block-with-lines-cont">
                            <!-- breadcrumbs-cont -->
                            <div class="breadcrumbs-cont">
                                <a href="./index.html" class="breadcrumbs-cont-back main-icon main-icon__back">
                                    <span>Вернуться</span>
                                </a>
                            </div>
                            <!-- end of breadcrumbs-cont -->

                            <!-- main-content -->
                            <main class="main-content">
                                <!-- news-cont -->
                                <div class="news-cont">
                                    <!-- news-cont-head -->
                                    <h1 class="news-cont-head">НОВОСТИ</h1>
                                    <!-- end of news-cont-head -->

                                    <!-- news-cont-filter -->
                                    <div class="news-cont-filter">
                                        <ul>
                                            <li>
                                                <button class="news-cont-filter-elem main-button current" data-filter="all">ВСЕ</button>
                                            </li>

                                            <li>
                                                <button class="news-cont-filter-elem main-button main-icon main-icon__status-voice" data-filter="voice"></button>
                                            </li>

                                            <li>
                                                <button class="news-cont-filter-elem main-button main-icon main-icon__status-video" data-filter="video"></button>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- end of news-cont-filter -->

                                    <!-- news-cont-prevs -->
                                    <div class="news-cont-prevs">
                                        <!-- news-prev -->
                                        <article class="news-prev" data-filter="voice video">
                                            <!-- news-prev-date -->
                                            <div class="post-date">
                                                <div class="post-date-day">
                                                    <span class="wow slideInRight" data-wow-duration="2s">18</span>
                                                </div>

                                                <div class="post-date-mounth">
                                                    <span>октября</span>
                                                </div>

                                                <div class="post-date-year">
                                                    <span>2</span>
                                                    <span>0</span>
                                                    <span>1</span>
                                                    <span>7</span>
                                                </div>
                                            </div>
                                            <!-- end of news-prev-date -->

                                            <!-- news-prev-inner -->
                                            <div class="news-prev-inner">
                                                <!-- news-prev-cover -->
                                                <div class="news-prev-cover" style="background-image: url(\'content/img(1).jpg\')">
                                                    <img src="content/img(1).jpg" alt="НЕФТЕРАДИО - ЦИФРОВОЕ КРУГЛОСУТОЧНОЕ, ОПЕРАТИВНОЕ">
                                                </div>
                                                <!-- end of news-prev-cover -->

                                                <!-- news-prev-info -->
                                                <div class="news-prev-info">
                                                    <div class="news-prev-info-date">
                                                        <span>18.10.2017</span>
                                                    </div>

                                                    <h2 class="news-prev-info-head">НЕФТЕРАДИО - ЦИФРОВОЕ КРУГЛОСУТОЧНОЕ, ОПЕРАТИВНОЕ</h2>

                                                    <div class="news-prev-info-text">
                                                        <p>Накануне 9 мая легендарное заводское радио Омского нефтезавода с шестидесятилетней историей зазвучало в новом цифровом формате. С этого момента начался отчет новейшей истории радио Омского нефтезавода - Нефтерадио. Полноценную работу радиостанции обеспечивает компания-лидер в сфере бизнес-коммуникаций "Мегаполис Медиа”.</p>
                                                        <p>Благодаря грамотному синтезу радиовещательных традиций легендарного "Заводского" и...</p>
                                                    </div>

                                                    <div class="news-prev-info-bottom float-block">
                                                        <div class="left-block">
                                                            <a href="./news-post.html"
                                                               class="news-prev-info-bottom-more">Подробнее</a>
                                                        </div>

                                                        <div class="right-block">
                                                            <ul class="news-prev-info-bottom-icons">
                                                                <li>
                                                                    <a href="./news-post.html#voice"
                                                                       class="main-icon main-icon__status-voice"></a>
                                                                </li>

                                                                <li>
                                                                    <a href="./news-post.html#video"
                                                                       class="main-icon main-icon__status-video"></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- end of news-prev-info -->
                                            </div>
                                            <!-- end of news-prev-inner -->
                                        </article>
                                        <!-- end of news-prev -->

                                        <!-- news-prev -->
                                        <article class="news-prev" data-filter="voice">
                                            <!-- news-prev-date -->
                                            <div class="post-date">
                                                <div class="post-date-day">
                                                    <span class="wow slideInRight" data-wow-duration="2s" data-wow-delay="0.5s">16</span>
                                                </div>

                                                <div class="post-date-mounth">
                                                    <span>октября</span>
                                                </div>

                                                <div class="post-date-year">
                                                    <span>2</span>
                                                    <span>0</span>
                                                    <span>1</span>
                                                    <span>7</span>
                                                </div>
                                            </div>
                                            <!-- end of news-prev-date -->

                                            <!-- news-prev-inner -->
                                            <div class="news-prev-inner">
                                                <!-- news-prev-cover -->
                                                <div class="news-prev-cover" style="background-image: url(\'content/05(1).jpg\')">
                                                    <img src="content/05(1).jpg" alt="13 часов прямого эфира в честь Дня радио!">
                                                </div>
                                                <!-- end of news-prev-cover -->

                                                <!-- news-prev-info -->
                                                <div class="news-prev-info">
                                                    <div class="news-prev-info-date">
                                                        <span>16.10.2017</span>
                                                    </div>

                                                    <h2 class="news-prev-info-head">13 часов прямого эфира в честь Дня радио!</h2>

                                                    <div class="news-prev-info-text">
                                                        <p>Компания "Мегаполис Медиа" провела для "Ростелекома" праздничный марафон, посвященный Дню радио и связи. В свой профессиональный праздник на одной волне оказались почти 6 тысяч сотрудников. За 13 часов в прямой эфир корпоративного радио "На волне" поступило свыше 500 сообщений и столько же звонков. Сотрудников компании в эфире лично поздравил президент "Ростелеком" Михаил Осеевский. Прямая трансляция осуществлялась на...</p>
                                                    </div>

                                                    <div class="news-prev-info-bottom float-block">
                                                        <div class="left-block">
                                                            <a href="./news-post.html"
                                                               class="news-prev-info-bottom-more">Подробнее</a>
                                                        </div>

                                                        <div class="right-block">
                                                            <ul class="news-prev-info-bottom-icons">
                                                                <li>
                                                                    <a href="./news-post.html#voice"
                                                                       class="main-icon main-icon__status-voice"></a>
                                                                </li>

                                                                <li>
                                                                    <a href="./news-post.html#video"
                                                                       class="main-icon main-icon__status-video"></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- end of news-prev-info -->
                                            </div>
                                            <!-- end of news-prev-inner -->
                                        </article>
                                        <!-- end of news-prev -->

                                        <!-- news-prev -->
                                        <article class="news-prev" data-filter="video">
                                            <!-- news-prev-date -->
                                            <div class="post-date">
                                                <div class="post-date-day">
                                                    <span class="wow slideInRight" data-wow-duration="2s" data-wow-delay="0.5s">18</span>
                                                </div>

                                                <div class="post-date-mounth">
                                                    <span>октября</span>
                                                </div>

                                                <div class="post-date-year">
                                                    <span>2</span>
                                                    <span>0</span>
                                                    <span>1</span>
                                                    <span>7</span>
                                                </div>
                                            </div>
                                            <!-- end of news-prev-date -->

                                            <!-- news-prev-inner -->
                                            <div class="news-prev-inner">
                                                <!-- news-prev-cover -->
                                                <div class="news-prev-cover" style="background-image: url(\'content/img(1).jpg\')">
                                                    <img src="content/img(1).jpg" alt="НЕФТЕРАДИО - ЦИФРОВОЕ КРУГЛОСУТОЧНОЕ, ОПЕРАТИВНОЕ">
                                                </div>
                                                <!-- end of news-prev-cover -->

                                                <!-- news-prev-info -->
                                                <div class="news-prev-info">
                                                    <div class="news-prev-info-date">
                                                        <span>18.10.2017</span>
                                                    </div>

                                                    <h2 class="news-prev-info-head">НЕФТЕРАДИО - ЦИФРОВОЕ КРУГЛОСУТОЧНОЕ, ОПЕРАТИВНОЕ</h2>

                                                    <div class="news-prev-info-text">
                                                        <p>Накануне 9 мая легендарное заводское радио Омского нефтезавода с шестидесятилетней историей зазвучало в новом цифровом формате. С этого момента начался отчет новейшей истории радио Омского нефтезавода - Нефтерадио. Полноценную работу радиостанции обеспечивает компания-лидер в сфере бизнес-коммуникаций "Мегаполис Медиа”.</p>
                                                        <p>Благодаря грамотному синтезу радиовещательных традиций легендарного "Заводского" и...</p>
                                                    </div>

                                                    <div class="news-prev-info-bottom float-block">
                                                        <div class="left-block">
                                                            <a href="./news-post.html"
                                                               class="news-prev-info-bottom-more">Подробнее</a>
                                                        </div>

                                                        <div class="right-block">
                                                            <ul class="news-prev-info-bottom-icons">
                                                                <li>
                                                                    <a href="./news-post.html#voice"
                                                                       class="main-icon main-icon__status-voice"></a>
                                                                </li>

                                                                <li>
                                                                    <a href="./news-post.html#video"
                                                                       class="main-icon main-icon__status-video"></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- end of news-prev-info -->
                                            </div>
                                            <!-- end of news-prev-inner -->
                                        </article>
                                        <!-- end of news-prev -->

                                        <!-- news-prev -->
                                        <article class="news-prev" data-filter="video">
                                            <!-- news-prev-date -->
                                            <div class="post-date">
                                                <div class="post-date-day">
                                                    <span class="wow slideInRight" data-wow-duration="2s" data-wow-delay="0.5s">16</span>
                                                </div>

                                                <div class="post-date-mounth">
                                                    <span>октября</span>
                                                </div>

                                                <div class="post-date-year">
                                                    <span>2</span>
                                                    <span>0</span>
                                                    <span>1</span>
                                                    <span>7</span>
                                                </div>
                                            </div>
                                            <!-- end of news-prev-date -->

                                            <!-- news-prev-inner -->
                                            <div class="news-prev-inner">
                                                <!-- news-prev-cover -->
                                                <div class="news-prev-cover" style="background-image: url(\'content/05(1).jpg\')">
                                                    <img src="content/05(1).jpg" alt="13 часов прямого эфира в честь Дня радио!">
                                                </div>
                                                <!-- end of news-prev-cover -->

                                                <!-- news-prev-info -->
                                                <div class="news-prev-info">
                                                    <div class="news-prev-info-date">
                                                        <span>16.10.2017</span>
                                                    </div>

                                                    <h2 class="news-prev-info-head">13 часов прямого эфира в честь Дня радио!</h2>

                                                    <div class="news-prev-info-text">
                                                        <p>Компания "Мегаполис Медиа" провела для "Ростелекома" праздничный марафон, посвященный Дню радио и связи. В свой профессиональный праздник на одной волне оказались почти 6 тысяч сотрудников. За 13 часов в прямой эфир корпоративного радио "На волне" поступило свыше 500 сообщений и столько же звонков. Сотрудников компании в эфире лично поздравил президент "Ростелеком" Михаил Осеевский. Прямая трансляция осуществлялась на...</p>
                                                    </div>

                                                    <div class="news-prev-info-bottom float-block">
                                                        <div class="left-block">
                                                            <a href="./news-post.html"
                                                               class="news-prev-info-bottom-more">Подробнее</a>
                                                        </div>

                                                        <div class="right-block">
                                                            <ul class="news-prev-info-bottom-icons">
                                                                <li>
                                                                    <a href="./news-post.html#voice"
                                                                       class="main-icon main-icon__status-voice"></a>
                                                                </li>

                                                                <li>
                                                                    <a href="./news-post.html#video"
                                                                       class="main-icon main-icon__status-video"></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- end of news-prev-info -->
                                            </div>
                                            <!-- end of news-prev-inner -->
                                        </article>
                                        <!-- end of news-prev -->
                                    </div>
                                    <!-- end of news-cont-prevs -->
                                </div>
                                <!-- end of news-cont -->
                            </main>
                            <!-- end of main-content -->
                        </div>
                        <!-- block-with-lines-cont -->

                        <!-- block-with-lines-substrate -->
                        <div class="block-with-lines-substrate">
                            <div class="background-line">
                                <span class="background-line-dot"></span>
                                <span class="background-line-dot"></span>
                            </div>

                            <div class="background-line">
                                <span class="background-line-dot"></span>
                                <span class="background-line-dot"></span>
                            </div>

                            <div class="background-line">
                                <span class="background-line-dot"></span>
                                <span class="background-line-dot"></span>
                            </div>

                            <div class="background-line">
                                <span class="background-line-dot"></span>
                                <span class="background-line-dot"></span>
                            </div>

                            <div class="background-line">
                                <span class="background-line-dot"></span>
                                <span class="background-line-dot"></span>
                            </div>

                            <div class="background-line">
                                <span class="background-line-dot"></span>
                                <span class="background-line-dot"></span>
                            </div>
                        </div>
                        <!-- end of block-with-lines-substrate -->
                    </div>
                    <!-- end of block-with-lines -->
';

    die();
}



function portfolio_content($id_portfolio){
    if($id_portfolio == 'portfolio-audio-01'){
        $text_cont = 'Больше музыки и хорошего настроения получили клиенты “Пятёрочки” с началом сотрудничества сети продовольственных магазинов с компанией “Мегаполис Медиа”: мы обеспечили производство качественного рекламного и информационного аудиоконтента. Посетители сети магазинов формата «у дома» теперь всегда знают о самых интересных акциях и предложениях.';
    }elseif($id_portfolio == 'portfolio-audio-02'){
        $text_cont = 'Большую семью сотрудников сети ресторанов среднеазиатской кухни “ Чайхона №1” объединило корпоративное радио “Чайхона Family”. Новости компании, результаты корпоративных тренингов и конкурсов, чествование лидеров, дни рождения сотрудников и лучшие кулинарные практики – ежедневно в эфире “Чайхона Faily”.';
    }elseif($id_portfolio == 'portfolio-audio-03'){
        $text_cont = 'Сотрудничество “Мегаполис Медиа” с ПАО “Газпромнефть” началось в 2014 году с создания корпоративного радио “Аэро ФМ” для авиатопливного оператора холдинга – компании “Газпромнефть-Аэро”. За несколько лет успешный опыт внутрикорпоративных коммуникаций оценили и другие дочерние предприятия ПАО “Газпромнефть”: Московский НПЗ, Омский НПЗ и сеть АЗС “Газпромнефть”.';
    }else{
        $text_cont = 'Один из крупнейших пивоваренных заводов России – “Балтика” в Санкт-Петербурге входит в мировой холдинг “Carlsberg”. Компания “Мегаполис Медиа” реализует для “Балтики” кейс “заводское радио”. Работники крупнейшего предприятия получили возможность узнавать о главных событиях прямо на рабочем месте. Радио звучит как в производственных, так и в подсобных помещениях завода: в фойе, на складах, в раздевалках и комнатах отдыха.';
    }

    echo $text_cont;

    die();
}

if($_POST['action'] == 'ajax_news_get'){
    $link = $_POST['link'];

    ajax_news_get($link);
}elseif($_POST['action'] == 'portfolio_content'){
    $id_portfolio = $_POST['id_portfolio'];

    portfolio_content($id_portfolio);
}else{
    echo 'sorry, but this link is not present: '.$_POST['action'];
}