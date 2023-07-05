let index=1;
showSlide(index);


// function of controls
function plusSlides(n)
{
    showSlide(index +=n);
}

//image control
function currentslide(n)
{
    showSlide(index =n);
}
function showSlide(n)
{
    let i;
    let slides=document.getElementsByClassName("myslide");

    if(n >slides.length)
    {
        index =1;
    }
    if(n <1)
    {
        index=slides.length;
    }
    for(i=0; i<slides.length; i++)
    {
        slides[i].style.display="none";
    }
    slides[index-1].style.display="block";
}