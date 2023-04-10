const userBtn = document.querySelector('.userBtn')
const sideElem = document.querySelector('.sidebar')
const toppickElem = document.querySelector('.top-picks')
const allproductsElem = document.querySelector('.all-products')
const sideClose = document.querySelector('.sideClose')
const notifBtn = document.querySelector('.notifBtn')
const cartBtn = document.querySelector('.sideCart')
const sideNotif = document.querySelector('.sideNotif')
const historyBtn = document.querySelector('.sideHistory')


userBtn.addEventListener('click', ()=>{
    sideElem.classList.add('show')
    document.querySelector('.general').classList.add('show')
    document.querySelector('.notifications').classList.remove('show')
    document.querySelector('.cart').classList.remove('show')
    document.querySelector('.history').classList.remove('show')
})

toppickElem.addEventListener('click', ()=>{
    sideElem.classList.remove('show')
})

allproductsElem.addEventListener('click', ()=>{
    sideElem.classList.remove('show')
})

sideClose.addEventListener('click', ()=>{
    sideElem.classList.remove('show')
})

notifBtn.addEventListener('click', ()=>{
    document.querySelector('.general').classList.remove('show')
    document.querySelector('.cart').classList.remove('show')
    document.querySelector('.notifications').classList.add('show')
    document.querySelector('.history').classList.remove('show')
    sideElem.classList.add('show')
})

sideNotif.addEventListener('click', ()=>{
    document.querySelector('.general').classList.remove('show')
    document.querySelector('.cart').classList.remove('show')
    document.querySelector('.notifications').classList.add('show')
    document.querySelector('.history').classList.remove('show')
    // sideElem.classList.add('show')
})

historyBtn.addEventListener('click', ()=>{
    document.querySelector('.general').classList.remove('show')
    document.querySelector('.cart').classList.remove('show')
    document.querySelector('.notifications').classList.remove('show')
    document.querySelector('.history').classList.add('show')
    // sideElem.classList.add('show')
})

cartBtn.addEventListener('click', ()=>{
    document.querySelector('.general').classList.remove('show')
    document.querySelector('.notifications').classList.remove('show')
    document.querySelector('.cart').classList.add('show')
    document.querySelector('.history').classList.remove('show')
    sideElem.classList.add('show')
})

document.querySelector('.flotingcartBtn').addEventListener('click', ()=>{
    document.querySelector('.general').classList.remove('show')
    document.querySelector('.notifications').classList.remove('show')
    document.querySelector('.cart').classList.add('show')
    document.querySelector('.history').classList.remove('show')
    sideElem.classList.add('show')
})