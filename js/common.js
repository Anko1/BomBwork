$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();

    setInterval(function(){
        $('#logo').toggleClass('magictime puffOut');
    }, 2000 );

    setInterval(function(){
        $('.btn-large').toggleClass('animated shake');
    }, 1000 );

    $('.q-left')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show magictime spaceInLeft',
            classToRemove: 'a-hide',
            offset: 200
        });

    $('.q-right')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show magictime spaceInRight',
            classToRemove: 'a-hide',
            offset: 200
        });
    $('.swashInfo')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show magictime swashIn',
            classToRemove: 'a-hide',
            offset: 200
        });
    $('.popularSpace')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show magictime spaceInLeft',
            classToRemove: 'a-hide',
            offset: 200
        });
    $('.vkFadeIn')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show animated fadeInUp',
            classToRemove: 'a-hide',
            offset: 200
        });
    $('.imgBounce')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show animated bounceInDown',
            classToRemove: 'a-hide',
            offset: 100
        });


});
