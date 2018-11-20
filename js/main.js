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
        if (currentslide < objectList.lenght - 1) {
            currentslide++;
            let current = objectList[currentslide];
            $(".mainBurger").attr("src", current.src);
            $(".section-title").text(current.BurgerName);
            $(".slider__desc").text(current.title);
        }
    });
});