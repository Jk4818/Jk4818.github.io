var slideIndex = 0;
carousel();
vid_carousel();

function vid_carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(vid_carousel, 10000); 
}

function carousel() {
    var i;
    var y = document.getElementsByClassName("image_slide");
    for (i = 0; i < y.length; i++) {
    y[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > y.length) {slideIndex = 1} 
    y[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); 
}