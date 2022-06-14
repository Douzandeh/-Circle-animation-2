let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext("2d")

let r = 40
let x =randomIntfromInterval(0+r,window.innerWidth-r)
let y =randomIntfromInterval(0+r,window.innerHeight-r)
let vx = (Math.random()- 0.5)*20
let vy = (Math.random()- 0.5)*20

function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight)
    c.beginPath()
    c.arc(x,y,r,0,2 * Math.PI)
    c.fillStyle = "red"
    c.fill()
    if(x+r > window.innerWidth || x-r <0){
        vx = -vx
    }
    if(y+r > window.innerHeight || y-r <0){
        vy = -vy
    }

    x+= vx
    y+= vy
    requestAnimationFrame(animate)
}

animate()

function randomIntfromInterval(min, max){
    return Math.floor(Math.random() * (max - min *1)+ min)
}