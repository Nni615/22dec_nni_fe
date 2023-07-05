let btn_bgc = document.getElementById("bg");
let btn_color = document.getElementById("co");
let btn_font = document.getElementById("ft");

btn_bgc.addEventListener('click', background)

function background()
{
    document.getElementById("para").style.backgroundColor="orange";
}

btn_color.addEventListener('click', colors)

function colors()
{
    document.getElementById("para").style.color="white";
}

btn_font.addEventListener('click', font)

function font()
{
    document.getElementById("para").style.fontFamily="monospace";
}