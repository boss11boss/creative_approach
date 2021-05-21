let a=document.querySelector('#a')
let b=document.querySelector('#b')
let c=document.querySelector('#c')
let d=document.querySelector('#d')
let e=document.querySelector('#e')
let cross=document.querySelector('#cross')



let tech=document.querySelector('#tech')
let techs=document.querySelector('#techs')
let white=document.querySelector('#white')
let blue=document.querySelector('#blue')
let why=document.querySelector('#why')
let opt=document.querySelector('#opt')

b.addEventListener('click',function(){
    techs.style.transform='translateY(0%)'
    why.style.transform='translateY(0%)'
    white.style.transform='translateY(-100%)'
    blue.style.transform='translateY(-200%)'
    tech.style.transform='translateY(-300%)'
})
c.addEventListener('click',function(){
    tech.style.transform='translateY(0%)'
    blue.style.transform='translateY(0%)'
    white.style.transform='translateY(0%)'
    why.style.transform='translateY(0%)'
    techs.style.transform='translateY(-400%)'
})
d.addEventListener('click',function(){
    tech.style.transform='translateY(0%)'
    blue.style.transform='translateY(0%)'
    white.style.transform='translateY(0%)'
    techs.style.transform='translateY(0%)'
    why.style.transform='translateY(-500%)'
})
a.addEventListener('click',function(){
    tech.style.transform='translateY(0%)'
    blue.style.transform='translateY(0%)'
    white.style.transform='translateY(0%)'
    techs.style.transform='translateY(0%)'
    why.style.transform='translateY(0%)'
})
e.addEventListener('click',function(){
    opt.style.transform='translateX(-100%)'
})

cross.addEventListener('click',function(){
    opt.style.transform='translateX(0%)'
})