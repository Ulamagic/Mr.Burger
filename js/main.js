$().ready(function (){
    let currentslide = 0;
    let objectList = [
        {
            src: "./img/BlakBurger.png",
            BurgerName: "Black beef burger",
            title: "Ваш старый добрый знакомый, с рубленым бифштексом из 100% говядины, тремя кусочками нежнейшего сыр эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско."
        },
        {
            src: "./img/burger_sandwich.png",
            BurgerName: "Sandwich burger",
            title: "Ваш старый добрый знакомый, с рубленым бифштексом из 100% говядины, тремя кусочками нежнейшего сыр эмменталь."
        },
        {
            src: "./img/Diner-Bacon-Cheeseburger.png",
            BurgerName: "Bacon cheeseburger",
            title: "Ваш старый добрый знакомый, с рубленым бифштексом из 100% говядины, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско."
        },
        {
            src: "./img/Spicy_Shrimp_Burger.png",
            BurgerName: "Spicy shrimp burger",
            title: "Ваш самый вкусный с криветульками и специями. Нямка!"
        }

    ]

    $("#moveback").on("click", function () {
        console.log("backward");
        if (currentslide > 0) {
            currentslide--;
            let current = objectList[currentslide];
            $(".mainBurger").attr("src", current.src);
            $(".section-title").text(current.BurgerName);
            $(".slider__desc").text(current.title);
        }    
    });

    $("#movefoward").on("click", function () {
        console.log("forward");
        if (currentslide < objectList.length - 1) {
            currentslide++;
            let current = objectList[currentslide];
            $(".mainBurger").attr("src", current.src);
            $(".section-title").text(current.BurgerName);
            $(".slider__desc").text(current.title);
        }
    });
});

$().ready(function(){

    let activeClass = "menu-list__item_active";
 
    let btn = $('.menu-list__title');
 
    btn.click(function(event){
      event.preventDefault();
 
 
      var parent = $(this).parent();
 
      if (parent.hasClass(activeClass)){
        parent.remove(activeClass)
      }else{
        btn.parent().removeClass(activeClass);
        parent.addClass(activeClass);
      }
 
    });
});

$().ready(function(){

    let activeClass = "team-acco__item_active";
 
    let btn = $('.team-acco__trigger');
 
    btn.click(function(event){
      event.preventDefault();
 
 
      var parent = $(this).parent();
 
      if (parent.hasClass(activeClass)){
        parent.remove(activeClass)
      }else{
        btn.parent().removeClass(activeClass);
        parent.addClass(activeClass);
      }
 
    });
});

$().ready(function(){
    ymaps.ready(init);    
    function init(){ 
       var myMap = new ymaps.Map("map", {
          center: [59.94, 30.32],
         zoom: 12,
         controls: ['zoomControl'],
         behaviors: ['drag']
        });

        var placemark = new ymaps.Placemark ([59.93, 30.33], {
            hintContent: '<div class="map__hint"> Это Питер, детка! </div>',
            balloonContent: [
                '<div class=map__balloon>',
                '<img class=map__nich src = "./img/nichosi.png alt="mem">',
                'Ничего себе! Это Питер!',
                '</div>'
            ].join('')
        });

        var placemark1 = new ymaps.Placemark ([59.94, 30.31], {
            hintContent: '<div class="map__hint"> Это Дворцовка, Детка!! </div>',
            balloonContent: [
                '<div class=map__balloon>',
                '<img class=map__nich src = "./img/nichosi.png alt="mem">',
                'Лучшее место для бургерной!',
                '</div>'
            ].join('')
        });

        var placemark2 = new ymaps.Placemark ([59.90, 30.29], {
            hintContent: '<div class="map__hint"> Это Питерское гетто, детка! </div>',
            balloonContent: [
                '<div class=map__balloon>',
                '<img class=map__nich src = "./img/nichosi.png alt="mem">',
                'Лучшие жирные бургеры!',
                '</div>'
            ].join('')
        });

        var placemark3 = new ymaps.Placemark ([59.97, 30.34], {
            hintContent: '<div class="map__hint"> Это Выборгская, детка! </div>',
            balloonContent: [
                '<div class=map__balloon>',
                '<img class=map__nich src = "./img/nichosi.png alt="mem">',
                'Ветренно и вкусно!',
                '</div>'
            ].join('')
        });

        var placemark4 = new ymaps.Placemark ([59.98, 30.21], {
            hintContent: '<div class="map__hint"> Возле парка 300 летия СПб! </div>',
            balloonContent: [
                '<div class=map__balloon>',
                '<img class=map__nich src = "./img/nichosi.png alt="mem">',
                'Самые жирные бургеры, жаренные на жиру, впитавшие в себя весь жир!',
                '</div>'
            ].join('')
        });

        myMap.geoObjects.add (placemark);
        myMap.geoObjects.add (placemark1);
        myMap.geoObjects.add (placemark2);
        myMap.geoObjects.add (placemark3);
        myMap.geoObjects.add (placemark4);
    };
});


