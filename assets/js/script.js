let current_light_index = 0;
let max_index = 8;

let move = "RIGHT"
let lightFunc = null;

function clrChange() {
    $("#box-set> div").removeClass("lightOn1");
    $("#box-set> div").removeClass("lightOn2");
    $("#box-set> div").removeClass("lightOn3");
    $("#box-set> div").eq(current_light_index).addClass("lightOn1");

    if (move === "RIGHT") {
        if (current_light_index != 0) {
            $("#box-set> div").eq(current_light_index - 1).addClass("lightOn2");
        }

        if (current_light_index > 1) {
            $("#box-set> div").eq(current_light_index - 2).addClass("lightOn3");
        }

        ++current_light_index;
        if (current_light_index>max_index - 2) {
            move = "LEFT";
        }
    } else {
        $("#box-set> div").eq(current_light_index + 1).addClass("lightOn2");
        $("#box-set> div").eq(current_light_index + 2).addClass("lightOn3");
        --current_light_index;
        if (current_light_index===0) {
            move = "RIGHT"
        }
    }
}

let btn = $("#btn1");

btn.on('click', () => {
    if (btn.text() === "Start") {
        lightFunc = setInterval(clrChange, 70);
        btn.text("Stop");
        btn.css({backgroundColor: "red"});
        $("#audio")[0].play();
    } else {
        btn.text("Start");
        btn.css({backgroundColor: "#0ace0a"});
        clearInterval(lightFunc);
        $("#audio")[0].pause();
    }
});