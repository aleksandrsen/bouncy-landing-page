<h1>Bouncy</h1>
<h4>Используемые в проекте технологии</h4>

Библиотека JavaScript - jQuery, Bootstrap.
<h4>Плагины</h4>

    slick-carousel - карусель;
    slick-nav - мобильное меню;
    parallax - паралакс;
    
<h4>Скрипти</h4>

    scroll-to - перемещение к разделам страницы;
    services-counter - счетчик в секции services
    
<h4>Шрифты и иконки</h4>

Иконки 

    Font-Awesome - иконочный шрифт;

Шрифты:

    Roboto: 300, 400;
    Open Sans: 400, 700;
    Source Sans Pro: 300, 300i, 400;

<h4>Стандартные компоненты и классы</h4>
<hr>
<h5>Компоненты</h5>

1.Секции:

    .default-section - стандартная секция;

2.Контейнери:

    .container - удержание ширини контента страницы;
    .container-fluid - для блоков занимающих всю ширину страницы;
    
3.Стилизируем заголовки:
    
    .section-title-grey 
    .section-title-grey.title-white 

4.Стилизируем стандартную текстовую информацию:

    .default-text 
    .default-text.section-text
    
5.Стандартные кнопки:

    .default-button 
    .form-button 
    .form-button[disabled] 
    
6.Иконки 
 
    .icon 
    .icon-black 
    .icon-black.transparent-icon

<h4>Классы</h4>
<hr>
Выравнивание элементов по горизонтали:

    .text-center
    
Цвета для фона:

    .bg-grey

<hr>
<h3>Основные контрольные точки media-запросов</h3>

    @media (max-width: 1200px) - устройства c разрешением до 1200px;
    @media (max-width: 992px) - устройства c разрешением до 992px;
    @media (max-width: 768px) - устройства c разрешением до 768px;
    @media (max-width: 577px) - мобильные устройства c разрешением до 577px;
    @media (max-width: 479px) - мобильные устройства c разрешением до 479px;
    @media (max-width: 320px) - мобильные устройства c разрешением до 320px;
<hr>
    
<h3>Структура папок</h3>

Название файла                | Содержание файла
------------------------------|----------------------
dist                          | Директория с готовым проектом 
dist/css                      | Готовые стили к продакшену
dist/fonts                    | Шрифты к продакшену
dist/img                      | Готовые изображения к продакшену
dist/js                       | Готовые скрипти к продакшену 
dist/favicon.ico              | Иконка сайта 
dist/index.html               | Индексный файл для продакшена
src/sass/slick.css            | Стили карусели 
src/sass/_mixins.scss         | Примеси sass
src/sass/_variables.scss      | Переменные sass 
src/sass/reset.css            | Сброс стилей
src/sass/slicknav.css         | Стили мобильного меню
src/css/style.css             | Основные стили, применительно к сайту
src/js/parallax.min.js        | Скрипт паралакс 
src/js/init.js                | Инициализация плагинов
src/js/jquery.slicknav.min.js | Скрипт мобильного меню
src/js/scroll-to.js           | Скрипт для перемещения к разделам страници
src/js/services-counter.js    | Скрипт счетчика
src/js/slick.min.js           | Скрипт карусели
index.html                    | Индексный файл для проверки вносимых изменений
guide.html                    | Файл отображающий основные(дефолтные) компоненты страницы
gulpfile.js                   | Файл gulp для сборки проекта
