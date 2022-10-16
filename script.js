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
function toggleMenu(anim_load){
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
        size = ball.clientWidth*0.7
        r = 0;
        g = 0;
        b = 0;
        var timer2 = setInterval(myTimer2, 1);
        setTimeout(function(){
            if(anim_load){
                document.querySelector("#menu_content").remove()
            }
        },400)
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
            if(anim_load){
                let test = _("div","",ball,"menu_content")
                let t1 = _("a","HOME",test,"","ahref_menu")
                t1.href="index.html#section_1"
                let t2 = _("a","SKILLS",test,"","ahref_menu")
                t2.href= "index.html#section_3"
                let t3 = _("a","WORKS",test,"","ahref_menu")
                t3.href= "index.html#section_4"
                document.querySelector("#menu_content").addEventListener("click", function(){
                    toggleMenu(true)
                });
            }
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
            r = r+1.2
        }
        if(g<73){
            g = g+1.2
        }
        if(b<229){
            b = b+1.8
        }
        ball.style.borderRadius = size + "px";
        ball.style.padding = size + "px";
        ball.style.backgroundColor = "rgb("+r+ ","+g+ ","+b+ ")"
        if(size <= 0){
            ball.style.padding = "3px"
            ball.style.borderRadius = "3px"
            clearInterval(timer2);
            document.querySelector("body").style.overflow = "visible";
            document.querySelector("body").style.overflowX = "hidden";
            ball.classList.remove("enclenche")
            ball.style.position = "absolute";
        }
    }
}




window.onload = (event) => {
    let body = document.querySelector("body")

     //Curseur purple
     let pointer = _("div", null, body, "pointer")
     let pointer2 = _("div", null, body, "pointer2")
 
     let mouse = { x: 0, y: 0 }
     let p = { x: 0, y: 0, sx: 0, sy: 0 }
 
     let mouse2 = { x: 0, y: 0 }
     let p2 = { x: 0, y: 0, sx: 0, sy: 0 }
 
     body.addEventListener("mousemove", function(event) {
         mouse.x = event.clientX
         mouse.y = event.clientY
         mouse2.x = event.clientX
         mouse2.y = event.clientY
     })
 
     setInterval(function() {
         p.sx = (mouse.x - p.x)
         p.sy = (mouse.y - p.y)
 
         p.x += p.sx
         p.y += p.sy
 
         pointer.style.top = p.y + "px";
         pointer.style.left = p.x +"px";
 
         p2.sx = (mouse2.x - p2.x) / 8
         p2.sy = (mouse2.y - p2.y) / 8
 
         p2.x += p2.sx
         p2.y += p2.sy
 
         pointer2.style.top = p2.y + "px";
         pointer2.style.left = p2.x +"px";
     }, 1)

    // Click animation
    body.addEventListener("mouseup", () => {
        let pad_origine = 20
        pas_pad = 1
        test=false
        let up = setInterval(function(){
            pad_origine = pas_pad + pad_origine;
            pointer2.style.padding = pad_origine + "px";
            if(pad_origine>=30){
                pas_pad = - 1
                test = true
            }
            if (test && pad_origine==20){
                clearInterval(up)
            }
        },5)
    } )


    // Animation dès que l'on arrive sur une page
    body.style.overflow = "hidden";
    let small_ball = document.querySelector("#small_ball");
    let size = document.querySelector("#section_1").clientWidth;
    setTimeout(()=>{
        if (document.querySelector("#section_1").clientHeight > document.querySelector("#section_1").clientHeight){
            size = document.querySelector("#section_1").clientHeight
        }
        else{
            size = document.querySelector("#section_1").clientWidth
        }
        small_ball.style.position="fixed"
        small_ball.style.padding = size + "px";
        small_ball.style.border_radius = size + "px";
        small_ball.style.backgroundColor = "rgb(0,0,0)"
        small_ball.style.zIndex = 3;
        let r = 0;
        let b = 0;
        let g = 0;
        let intervall_start = setInterval(() => {
            size = size-7
            if(r<142)
            {
                r = r+1.7
            }
            if(g<73){
                g = g+1.1
            }
            if(b<229){
                b = b+2
            }
            small_ball.style.borderRadius = size + "px";
            small_ball.style.padding = size + "px";
            small_ball.style.backgroundColor = "rgb("+r+ ","+g+ ","+b+ ")"
            if(size <= 0){
                small_ball.style.backgroundColor = "rgb(142,73,229)"
                small_ball.style.padding = "3px"
                small_ball.style.borderRadius = "3px"
                clearInterval(intervall_start);
                document.querySelector("body").style.overflow = "visible";
                document.querySelector("body").style.overflowX = "hidden";
                small_ball.classList.remove("enclenche")
                small_ball.style.zIndex = 1;
                small_ball.style.position = "absolute";
            }
        }, 3);
    },200)
    
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

    document.addEventListener("scroll", function(){
        var scrollParallax= (window.pageYOffset-document.querySelector("#section_3").clientHeight*2)/document.querySelector("#section_3").clientHeight +0.5
        let paraNewPos1 = scrollParallax*150*2-400
        let paraNewPos2 = -scrollParallax*150*2

        let values = [paraNewPos1,paraNewPos1,paraNewPos1,paraNewPos1,paraNewPos2,paraNewPos2,paraNewPos2,paraNewPos2]

        console.log(scrollParallax)

        let rubs = this.documentElement.querySelectorAll(".ruban_skills span")
        for(i = 0;i <= rubs.length; i+=1){
            rubs[i].style.transform = "translateX("+ values[i] +"%)"
        }
    })


    // Animation sneakers end contact
    let sneaker = document.querySelector("#sneaker")
    sneakerpath = document.querySelector("#sneaker path")
    var length = sneakerpath.getTotalLength();
    var start = 0

    sneakerpath.style.strokeDasharray = "1000px";
    sneakerpath.style.strokeDashoffset = length;

    let drawSneaker = setInterval(function (){
        start +=2
        sneakerpath.style.strokeDashoffset = start + "px"
     },1)

    // Animation laces end contact
    let lace = document.querySelector("#lace")
    let lacepath = document.querySelector("#lace path")
    var length = lacepath.getTotalLength();
    var start = 0

    lacepath.style.strokeDasharray = "1000px";
    lacepath.style.strokeDashoffset = length;

    let drawLace= setInterval(function (){
        start +=2
        lacepath.style.strokeDashoffset = start + "px"
     },1)
}