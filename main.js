document.addEventListener("DOMContentLoaded", () => {
    //Debug
    console.log("robz")
    let body = document.querySelector("body")
    let loading_screen = _("div", "", body, "load")
    let loading_title = _("span", "RB", loading_screen, "s_title")

    //Animation début (effet clignotement animation)
    setInterval(function() {
        loading_title.classList.toggle("test12")
    }, 500)

    //Animation  de lancement (Fade et change de pos)
    setTimeout(function() {
        let x_load = 0
        let opacity = 1.7
        let opacity_title = 0.8
        setTimeout(function() {
            clearInterval(loading_interval);
            loading_title.remove()
            loading_screen.remove()
            body.style.overflow = "visible";
            body.style.position = "absolute"
        }, 1300)
        var loading_interval = setInterval(function() {
            x_load -= 3
            opacity -= 0.01
            opacity_title -= 0.01
            loading_screen.style.top = 0 + "px"
            loading_title.style.top = x_load - loading_title.offsetTop + "px"
            loading_screen.style.backgroundColor = "rgba(22,21,21," + opacity + ")"
            loading_title.style.color = "rgba(255,255,255," + opacity_title + ")"
            console.log(opacity)

        }, 7)
    }, 3000)

    //Cursor = rond + change de couleur quand rentre dans une autre page
    let s1 = document.querySelector("#sect1")
    let s2 = document.querySelector("#sect2")

    let pointer = _("div", null, body, "pointer")

    let mouse = { x: 0, y: 0 }
    let p = { x: 0, y: 0, sx: 0, sy: 0 }

    body.addEventListener("mousemove", function(event) {
        mouse.x = event.clientX
        mouse.y = event.clientY
    })

    setInterval(function() {
        p.sx = (mouse.x - p.x) / 2
        p.sy = (mouse.y - p.y) / 2

        p.x += p.sx
        p.y += p.sy

        pointer.style.top = (p.y - 10) + "px"
        pointer.style.left = (p.x - 10) + "px"
    }, 1)


    //Ajout animation balles
    let balls = []
    let ball_affiche = []
    let w = s1.offsetWidth
    let h = s1.offsetHeight

    for (let i = 0; i < 250; i++) {
        let speedX = Math.floor((Math.random() - 0.5) * 4)
        let speedY = Math.floor((Math.random() - 0.5) * 4)
        if (speedX == 0)
            speedX = Math.floor((Math.random() - 0.5) * 4)
        if (speedY == 0)
            speedY = Math.floor((Math.random() - 0.5) * 4)
        balls.push({
            x: Math.random() * (w) + 10,
            y: Math.random() * (h),
            r: 5,
            sx: speedX,
            sy: speedY,
            color: 'white'
        })
        let ball_unitaire = _("div", "", s1, "", "balls")
        if (i % 2 == 0)
            ball_unitaire.style.backgroundColor = "white"
        else
            ball_unitaire.style.backgroundColor = "black"
        ball_affiche.push(ball_unitaire)
    }

    setInterval(function() {
        for (let i = 0; i < 250; i++) {
            balls[i].x += balls[i].sx
            balls[i].y += balls[i].sy

            if (balls[i].x + balls[i].r > w || balls[i].x - balls[i].r < 0) {
                balls[i].x -= balls[i].sx
                balls[i].sx = -balls[i].sx
            }

            if (balls[i].y + balls[i].r > h || balls[i].y - balls[i].r < 0) {
                balls[i].y -= balls[i].sy
                balls[i].sy = -balls[i].sy
            }

            ball_affiche[i].style.height = balls[i].r + "px"
            ball_affiche[i].style.width = balls[i].r + "px"
            ball_affiche[i].style.left = (balls[i].x - 2) + "px"
            ball_affiche[i].style.top = (balls[i].y - 2) + "px"

        }
    }, 15)
})

//SKILLS-BAR
let skillbars = document.querySelectorAll(".skill_bar_level")
window.addEventListener("scroll", (event) => {
    var element = document.querySelector('#repere');
    var element2 = document.querySelector('#system_skills');
    var position = element.getBoundingClientRect();
    var position2 = element2.getBoundingClientRect();
    let scroll = this.scrollY

    if (position2.bottom >= 0 && position.top <= 0) {
        for (let skillBar of skillbars) {
            let v = skillBar.getAttribute("value")
            skillBar.style.width = v + "%"
        }
    } else {
        for (let skillBar of skillbars) {
            skillBar.style.width = 0 + "%"
        }
    }



});
console.log(document.querySelector(".skill_bar_level").scrollTop)


window.addEventListener("resize", function() {
        console.log(window.matchMedia("(min-height: 932px) and (max-height: 1000px) and (min-width: 843px) and (max-width: 1921px)"))
    })
    //PROJETS ANIM
let reso_full_hd = window.matchMedia("(min-height: 932px) and (max-height: 1000px) and (min-width: 844px) and (max-width: 1921px)")
let reso_hd = window.matchMedia("(min-height: 600px) and (max-height: 620px) and (min-width: 1100px) and (max-width: 1281px)")


let projets = document.querySelectorAll(".container_proj")
let paragraphe1 = ["This project is the last I did and means a lot to me. It allow me to show you my personnality, my projects and also my ability",
    "This project is a game I've done thanks to what my University taught me during a special week of game development",
    "I this this project with 2 of my classmates, The purpose was to recreate the website tripadvisor. This project helped us learning new technologies and how to work as a team",
    "I'm currently developping my favorite mobile game because it was banned in my country. I'd like to implement an AI that will learn to play and become a bit better each"
]
let paragraphe2 = ["HTML / CSS / JS", "Unity / C#", "Laravel / PHP / CSS / JS", "Python / PyGame"]
let bg_img = document.querySelector("#img_proj")
for (let proj of projets) {
    proj.addEventListener("click", function() {
        if (reso_full_hd.matches || reso_hd.matches) {
            proj.style.transform = "scale(1.7)"
            proj.style.position = "relative"
            console.log(proj.id)
            proj.style.zIndex = "2"

            switch (proj.id) {
                case "portfolio":
                    document.querySelector("#description1").innerText = paragraphe1[0]
                    document.querySelector("#description2").innerText = paragraphe2[0]
                    document.querySelector("#description2").style.color = "white"
                    document.querySelector("#description2").style.backgroundColor = "black"
                    document.querySelector("#description2").style.padding = 30 + "px"
                    proj.style.left = 200 + "px"
                    proj.style.top = 143 + "px"
                    break;
                case "unity":
                    document.querySelector("#description1").innerText = paragraphe1[1]
                    document.querySelector("#description2").innerText = paragraphe2[1]
                    document.querySelector("#description2").style.color = "white"
                    document.querySelector("#description2").style.backgroundColor = "black"
                    document.querySelector("#description2").style.padding = 30 + "px"
                    proj.style.left = -210 + "px"
                    proj.style.top = 143 + "px"
                    break;
                case "sprint":
                    document.querySelector("#description1").innerText = paragraphe1[2]
                    document.querySelector("#description2").innerText = paragraphe2[2]
                    document.querySelector("#description2").style.color = "white"
                    document.querySelector("#description2").style.backgroundColor = "black"
                    document.querySelector("#description2").style.padding = 30 + "px";
                    proj.style.left = 200 + "px"
                    proj.style.top = -175 + "px"
                    break;
                case "flappy":
                    document.querySelector("#description1").innerText = paragraphe1[3]
                    document.querySelector("#description2").innerText = paragraphe2[3]
                    document.querySelector("#description2").style.color = "white"
                    document.querySelector("#description2").style.backgroundColor = "black"
                    document.querySelector("#description2").style.padding = 30 + "px";
                    proj.style.left = -223 + "px"
                    proj.style.top = -175 + "px"
                    break;
                default:
                    console.log("FUCK");
            }
        }
    })
    proj.addEventListener("mouseleave", function() {
        document.querySelector("#description1").innerText = "HOVER TO DISCOVER THE COL0RS :"
        document.querySelector("#description2").innerText = "CLICK TO SEE THE DESCRIPTION : "
        document.querySelector("#description2").style.color = "black"
        document.querySelector("#description2").style.backgroundColor = "whitesmoke"
        document.querySelector("#description2").style.padding = 0 + "px";
        proj.style.transform = "scale(1)"
        proj.style.position = "relative"
        proj.style.left = "auto"
        proj.style.top = "auto"
        proj.style.zIndex = "0"
    })
}




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