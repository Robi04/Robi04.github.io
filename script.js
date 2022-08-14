 //Pour créer un element 
 function _(tag, content, parent, id = null, classs = null) {    
    let element = document.createElement(tag)
    if (content)
        element.appendChild(document.createTextNode(content))
    if (id)
        element.id = id
    if (classs)
        element.classList.add(classs)
    parent.appendChild(element)
    return element
}


// QUAND ON ACTIVE LE HAMBURGER
function toggleMenu(){
    let menu = document.querySelector(".menu")
    let ball = document.querySelector("#small_ball")
    let size;
    let r;
    let g;
    let b;

    let menu1 = document.querySelector("#menu_first");
    let menu2 = document.querySelector("#menu_second");
    let menu3 = document.querySelector("#menu_third");

    menu1.classList.toggle("menu_first_toggled");
    menu2.classList.toggle("menu_second_toggled");
    menu3.classList.toggle("menu_third_toggled");

    //REDUCTION DU MENU 
    if (ball.classList.contains("enclenche")){
        size=1070;
        r = 0;
        g = 0;
        b = 0;
        var timer2 = setInterval(myTimer2, 1);
        setTimeout(function(){
            document.querySelector("#menu_content").remove()
        },400)
        setTimeout(function(){
            ball.style.position = "absolute";
        },600)
    }

    //AGRANDISSEMENT DU MENU
    else{
        size=6
        r =142;
        g = 73;
        b = 229;
        ball.style.position = "fixed";
        var timer1 = setInterval(myTimer1, 1);
        setTimeout(function(){
            let test = _("div","",ball,"menu_content")
            let t1 = _("a","HOME",test,"","ahref_menu")
            t1.href="index.html#section_1"
            let t2 = _("a","SKILLS",test,"","ahref_menu")
            t2.href= "index.html#section_3"
            let t3 = _("a","WORKS",test,"","ahref_menu")
            t3.href= "index.html#section_4"

            document.querySelector("#menu_content").addEventListener("click", function(){
                toggleMenu()
            });
        },400)
    }

    function myTimer1() {
        size = size+7
        r = r-1.3
        g = g-1
        b = b-1.5
        ball.style.borderRadius = size + "px";
        ball.style.padding = size + "px";
        ball.style.backgroundColor = "rgb("+r+ ","+g+ ","+b+ ")"
        if(b <= 0){
            ball.style.padding = "1070px"
            ball.style.borderRadius = "1070px"
            clearInterval(timer1);
            document.querySelector("body").style.overflow = "hidden";
            ball.classList.add("enclenche")
        }
    }

    function myTimer2() {
        size = size-7
        if(r<142)
        {
            r = r+1.3
        }
        if(g<73){
            g = g+1
        }
        if(b<229){
            b = b+1.5
        }
        ball.style.borderRadius = size + "px";
        ball.style.padding = size + "px";
        ball.style.backgroundColor = "rgb("+r+ ","+g+ ","+b+ ")"
        if(size <= 0){
            ball.style.padding = "3px"
            ball.style.borderRadius = "40px"
            clearInterval(timer2);
            document.querySelector("body").style.overflow = "visible";
            document.querySelector("body").style.overflowX = "hidden";
            ball.classList.remove("enclenche")
        }
    }
}


window.onload = (event) => {

// let svg_animation = document.querySelector("#line_container_animation svg path")
// let svg_offset = -2000
// svg_animation.style.strokeDasharray = svg_animation.getTotalLength();
// svg_animation.style.strokeDashoffset = svg_animation.getTotalLength();
// setInterval(function(){
//     svg_offset = svg_offset - 100;
//     svg_animation.style.strokeDashoffset = svg_offset + "px"
// },20)

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