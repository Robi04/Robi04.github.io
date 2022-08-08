function toggleMenu(){
    let menu1 = document.querySelector("#menu_first")
    let menu2 = document.querySelector("#menu_second")
    let menu3 = document.querySelector("#menu_third")
    menu1.classList.toggle("menu_first_toggled")
    menu2.classList.toggle("menu_second_toggled")
    menu3.classList.toggle("menu_third_toggled")

    let x = document.querySelector("#big_ball")
    let opa = document.querySelector("#menu_page").style.opacity
    document.querySelector("#menu_page").classList.toggle("triged")
    document.querySelector("#menu_page").classList.toggle("untriged")
}


window.onload = (event) => {
    //Draw the SVG Lines

    //Prepare the variables
    var count = 0;
    var lines = document.querySelectorAll(".rope svg path");
    var length = lines[count].getTotalLength();
    var section = lines[count].parentElement.parentElement.parentElement
    
    // The start position of the drawing
    lines[count].style.strokeDasharray = length;
    // Hide the svg by putting the strokedashoffset
    lines[count].style.strokeDashoffset = length;
    
    // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
    window.addEventListener("scroll", myFunction);
    
    function myFunction() {
        var length = lines[count].getTotalLength();
        var section = lines[count].parentElement.parentElement.parentElement
        if(count==0){
            var scrollpercent = (window.pageYOffset-section.clientHeight*count)*1.5/section.clientHeight
        }
        else if(count==1){
            var scrollpercent = (window.pageYOffset-section.clientHeight*count)*1.8/section.clientHeight +0.59
        }
        else{
            var scrollpercent = (window.pageYOffset-section.clientHeight*count)*1.2/section.clientHeight +0.9
        }
        
        var draw = length * scrollpercent;
        console.log(scrollpercent)

        // Reverse the drawing (when scrolling upwards)
        lines[count].style.strokeDashoffset = length - draw;

        if(draw>=length ){
            lines[count].style.strokeDashoffset = 0
            count+=1;
            var length = lines[count].getTotalLength();
            var section = lines[count].parentElement.parentElement.parentElement
            lines[count].style.strokeDasharray = length;
            lines[count].style.strokeDashoffset = length;
        }
    }    
}


