$(document).ready(function() {
    console.log("salut");
    let list = ["Eat", "Drink", "Breath", "Run", "Laugh", "Playing"];
    start();
    /*
     $( "input" )
       .keyup(function() {
         var value = $( this ).val();
         list.push(value);
       })
       .keyup();*/
    function start() {
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

    $('li').click(function(x) {
        list.splice(x, 1);
    });

    $('#clearbutton').click(function() {
        console.log("let's delete");
        console.log("avant: ", list);
        clear();
        for (var i = 0; i < list.length; i++) {
            list.splice(0, list.length);
            console.log("après: ", list);
        }
    });

    $("form").submit(function() {
        $("input:first").val()
        /*        if (item === null || item === undefined || item === "") {
                    return;
                }*/
        console.log("WESH");
        list.push($("input:first").val());
        console.log("après: ", list);
        clear();
        start();
        return false;
    });

});
