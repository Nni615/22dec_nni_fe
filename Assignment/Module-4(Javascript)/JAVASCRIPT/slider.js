var angle = 0;
var angle1 = 0;
function galleryspin(arrow)
{
    spin = document.querySelector(".spin");
    if(!arrow)
    {
        angle = angle + 45;
        // angle1 = angle1 + 0;

    }
    else{
        angle = angle - 45;
        // angle1 = angle1 - 0;
    }
    // angle = 0;
    spin.setAttribute("style","transform:rotateY("+ angle1+"deg);");
    spin.setAttribute("style","transform:rotateY("+ angle+"deg);");
}