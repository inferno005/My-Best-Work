var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x- 12.5 +"px"
    crsr.style.top = dets.y- 12.5 +"px"
})
document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x - 50 +"px"
    blur.style.top = dets.y - 50 +"px"
})




gsap.to("#nav",{
    backgroundColor: "white",
    duration: 1,
    height: "80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:"true",
        start:"top -15%",
        end:"top -20%",
        scrub:1,
        marginRadius:"10px",
        color: "white",
    }
})

gsap.to("#main",{
    backgroundColor:"white",
    duration:1,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:"true",
        start:"top -25%",
        end:"top -70%",
        scrub:1,
    }
})
gsap.to("#pg2",{
    opacity:1,
    scale: 1.34,
    duration:1,
    scrollTrigger:{
        trigger:"#pg2",
        scroller:"body",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 2,
    }
})

