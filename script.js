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


function sendEmail() 
{
    window.location = "mailto:robin73.bochu@gmail.com";
}


function changeColor(){
    let test_condition = false
    let img_contain = document.querySelector("#img_container")
    let html = document.querySelector("html")
    let root = document.querySelector("#root")
    let title_2_left = document.querySelector("#title_2_left")

    let content_section_5_right = document.querySelector("#content_section_5_right")
    let sneaker = document.querySelector("#sneaker")


    let player_card_left = document.querySelector("#player_card_left")
    let player_card_right = document.querySelector("#player_card_right")

    let resume = document.querySelector("#resume")

    let sun = document.querySelector("#home")

    for (i=0; i< root.classList.length;i++){
        if (root.classList[i] == "font_white"){
            test_condition = true
        }
    }
    if (test_condition ) {

        sun.children[0].children[0].style.fill = "#35355a"

        root.classList.remove("font_white")
        root.classList.add("font_black")

        root.classList.add("bg_white")
        root.classList.remove("bg_black")

        html.classList.add("bg_white")
        html.classList.remove("bg_black")

        img_contain.classList.add("img_black")
        img_contain.classList.remove("img_white")

        title_2_left.classList.remove("font_white")
        title_2_left.classList.add("font_black")

        title_2_left.classList.add("bg_white")
        title_2_left.classList.remove("bg_black")

        player_card_left.classList.remove("bg_white")

        player_card_left.classList.add("player_black")

        for (let i = 0; i < player_card_right.children.length; i++) {
            let childElement = player_card_right.children[i];
    
            childElement.classList.add('player_black')

            childElement.classList.remove('bg_white')
        }

        content_section_5_right.classList.remove("content_section_5_right_white")
        content_section_5_right.classList.add("content_section_5_right_black")

        resume.classList.remove("font_white")
        resume.classList.add("font_black")

        resume.classList.add("bg_white")
        resume.classList.remove("bg_black")

        sneaker.children[0].classList.add('black_svg')
        sneaker.children[0].classList.remove('white_svg')
    }
    else{
        sun.children[0].children[0].style.fill = "#d9ceff"

        root.classList.add("font_white")
        root.classList.remove("font_black")

        root.classList.add("bg_black")
        root.classList.remove("bg_white")

        html.classList.remove("bg_white")
        html.classList.add("bg_black")

        img_contain.classList.add("img_white")
        img_contain.classList.remove("img_black")

        title_2_left.classList.add("font_white")
        title_2_left.classList.remove("font_black")

        title_2_left.classList.add("bg_black")
        title_2_left.classList.remove("bg_white")
        
        player_card_left.classList.add("bg_white")
        player_card_left.classList.add("font_black")

        player_card_left.classList.remove("player_black")

        for (let i = 0; i < player_card_right.children.length; i++) {
            let childElement = player_card_right.children[i];
    
            childElement.classList.remove('player_black')
            
            childElement.classList.add('bg_white')
        }

        content_section_5_right.classList.add("content_section_5_right_white")
        content_section_5_right.classList.remove("content_section_5_right_black")

        resume.classList.add("font_white")
        resume.classList.remove("font_black")

        resume.classList.remove("bg_white")
        resume.classList.add("bg_black")


        // sneaker.children[0].classList.remove('black_svg')
        // sneaker.children[0].classList.add('white_svg')
    }

}


// QUAND ON ACTIVE LE HAMBURGER
function toggleMenu(anim_load){
    let menu = document.querySelector("#header")
    let small_ball = document.querySelector("#small_ball")

    let menu1 = document.querySelector("#menu_first");
    let menu2 = document.querySelector("#menu_second");
    let menu3 = document.querySelector("#menu_third");

    menu1.classList.toggle("menu_first_toggled");
    menu2.classList.toggle("menu_second_toggled");
    menu3.classList.toggle("menu_third_toggled");

    //REDUCTION DU MENU 
    if (small_ball.classList.contains("enclenche")){
        // size = small_ball.clientWidth*0.7
        // r = 0;
        // g = 0;
        // b = 0;
        // var timer2 = setInterval(myTimer2, 1);
        small_ball.style.backgroundColor = "rgb(142, 73, 229)";
        small_ball.style.padding = "3px"
        small_ball.style.borderRadius = "100%"

        document.querySelector("body").style.overflow = "visible";
        document.querySelector("body").style.overflowX = "hidden";

        setTimeout(function(){
            if(anim_load){
                document.querySelector("#menu_content").remove()
            }
        },200)

        setTimeout(function(){
            if(anim_load){
                small_ball.style.position = "absolute"
            }
        },1500)

        document.querySelector("body").style.overflowX = "hidden";
        small_ball.classList.remove("enclenche")
    }

    //AGRANDISSEMENT DU MENU
    else{

        small_ball.style.position = "fixed";


        small_ball.style.padding = 140 + "vw";


        if(root.classList.contains("bg_white")){
            small_ball.style.backgroundColor = "#d9ceff"
        }
        else{
            small_ball.style.backgroundColor = "#35355a"
        }
        document.querySelector("body").style.overflow = "hidden";
        small_ball.classList.add("enclenche")
        menu.style.zIndex = 100
        setTimeout(function(){
            if(anim_load){
                let test = _("div","",small_ball,"menu_content")
                let t1 = _("a","HOME",test,"","ahref_menu")
                t1.href="index.html#section_1"
                let t2 = _("a","SKILLS",test,"","ahref_menu")
                t2.href= "index.html#section_3"
                let t3 = _("a","WORKS",test,"","ahref_menu")
                t3.href= "index.html#section_4"
                test.style.transition= "all 0.5s ease" 
                t1.style.transition= "all 0.5s ease" 
                t2.style.transition= "all 0.5s ease" 
                t3.style.transition= "all 0.5s ease" 
                document.querySelector("#menu_content").addEventListener("click", function(){
                    toggleMenu(true)
                    small_ball.position = "absolute"
                });
            }
        },700)
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
    small_ball.style.backgroundColor = "rgb(255, 255, 255)";
    



    setTimeout(() => {
    // small_ball.style.border_radius = size + "px";
    small_ball.style.padding = 3 + "px";
    small_ball.style.backgroundColor = "rgb(142, 73, 229)";
    }, 1);

    setTimeout(() => {
        body.style.removeProperty('overflow');
        small_ball.style.position = 'absolute';
    },1500)
    
       
    
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
        try{
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
        catch(e){

        }
    }   

    document.addEventListener("scroll", function(){
        var scrollParallax= (window.pageYOffset-document.querySelector("#section_3").clientHeight*2)/document.querySelector("#section_3").clientHeight +0.5
        let paraNewPos1 = scrollParallax*150*1.5-400
        let paraNewPos2 = -scrollParallax*150*1.5

        let values = [paraNewPos1,paraNewPos1,paraNewPos1,paraNewPos1,paraNewPos2,paraNewPos2,paraNewPos2,paraNewPos2]

        console.log(scrollParallax)
        try{
            let rubs = this.documentElement.querySelectorAll(".ruban_skills span")
            for(i = 0;i <= rubs.length; i+=1){
                if(scrollParallax<1.3){
                    rubs[i].style.transform = "translateX("+ values[i] +"%)"
                }
            }
        }
        catch(e){
            
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

// Y axis scroll speed
var velocity = 0.5;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('.portfolio_img').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-1200;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
    }); 
};

$(window).bind('scroll', update);

let can_be_developped = document.querySelectorAll(".canBeDevelopped")
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
    text = target.textContent || target.innerText; 

    if (e.target.classList.contains("canBeDevelopped")){
        const styles = window.getComputedStyle(e.target);
        const image = styles.backgroundImage;
        const url = image.slice(5, -2);

        console.log(url)  


        const styles2 = window.getComputedStyle(e.target);
        const image2 = styles2.transition;


        prevwidth = styles2.width
        prevheight =styles2.height
        prevbackgroundImage = styles2.backgroundImage
        prevbackgroundSize = styles2.backgroundSize
        prevbackgroundRepeat = styles2.backgroundRepeat
        prevbackgroundPosition = styles2.backgroundPosition
        prevposition = styles2.position
        prevtop = styles2.top
        prevleft = styles2.left
        prevzIndex = styles2.zIndex 
        
        console.log(image2)

        x = _("div","",document.querySelector("body"),"zoom-" + url,"picture_developped")
        x.style.transition = "1s all linear"
        x.style.position = 'fixed'
        x.style.top = "0px"
        x.style.left = '0px'
        x.style.width = '100vw'
        x.style.height = '100vh'
        x.style.backgroundColor= 'rgba(24,25,23,0.5)'
        x.style.backgroundImage = 'url('+url+")"
        x.style.backgroundPosition = 'center'
        x.style.backgroundSize = 'contain'
        x.style.backgroundRepeat = 'no-repeat'
        x.style.zIndex = 3


        x.addEventListener("click",()=>{
            e.target.style.transition = "0s all ease"
            e.target.style.transition = "1s all ease"
            e.target.style.position = prevposition
            e.target.style.width = prevwidth
            e.target.style.height = prevheight
            e.target.style.backgroundSize = prevbackgroundSize
            e.target.style.backgroundRepeat = prevbackgroundRepeat
            e.target.style.backgroundPosition = prevbackgroundPosition
            e.target.style.top = prevtop
            e.target.style.left = prevleft
            e.target.style.top = prevtop
            e.target.style.left = prevleft
            e.target.style.zIndex = prevzIndex
            x.remove()
        })
    }
}, false);