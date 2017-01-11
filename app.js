$(document).ready(function() {
    console.log("salut");
    let list = ["Eat", "Drink", "Breath", "Run", "Laugh", "Playing"];
    draw();
    function draw() {
        for (var i = 0; i < list.length; i++) {
            $('div ul').append('<li>' + list[i] + '</li>')
            $('div ul li').addClass("list");

        }
    };

    function clear() {
        for (var i = 0; i < list.length; i++) {
            console.log("J'AI ETE APPELE");
            $("li").remove();
        }
    };

    function redraw() {
        clear();
        draw();
    };


    $('ul').on('click', 'li', function(index) {
        console.log("HEY");
        console.log("avant: ", list);
        var index = $("li").index(this);
        console.log("this is :", index);
        list.splice(index, 1);
        console.log("après: ", list);
        redraw();
    });

    $('#clearbutton').click(function() {
        console.log("let's delete");
        console.log("avant: ", list);
        clear();
        list = [];
        console.log("après: ", list);
    });

    $("form").submit(function(x) {
        $("input:first").val()
        /*        if (item === null || item === undefined || item === "") {
                    return;
                }*/
        console.log("la valeur entré est", x);
        list.push($("input:first").val());
        console.log("après: ", list);
        redraw();
        return false;
    });

});
