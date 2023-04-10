const generalBtn = document.querySelector('.generalbtn')
const passwordBtn = document.querySelector('.passwordbtn')
const searchBtn = document.querySelector('.searchbtn')
const productBtn = document.querySelector('.productsBtn')
const generalWindow = document.querySelector('.general')
const passwordWindow = document.querySelector('.password-window')
const searchWindow = document.querySelector('.search')
const productWindow = document.querySelector('.products')



generalBtn.addEventListener('click', ()=>{
    generalWindow.classList.add('active')
    passwordWindow.classList.remove('active')
    searchWindow.classList.remove('active')
    generalBtn.classList.add('active')
    passwordBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    productBtn.classList.remove('active')
    productWindow.classList.remove('active')
})

passwordBtn.addEventListener('click', ()=>{
    generalWindow.classList.remove('active')
    passwordWindow.classList.add('active')
    searchWindow.classList.remove('active')
    generalBtn.classList.remove('active')
    passwordBtn.classList.add('active')
    searchBtn.classList.remove('active')
    productBtn.classList.remove('active')
    productWindow.classList.remove('active')
})

searchBtn.addEventListener('click', ()=>{
    generalWindow.classList.remove('active')
    passwordWindow.classList.remove('active')
    searchWindow.classList.add('active')
    generalBtn.classList.remove('active')
    passwordBtn.classList.remove('active')
    searchBtn.classList.add('active')
    productBtn.classList.remove('active')
    productWindow.classList.remove('active')
})

productBtn.addEventListener('click', ()=>{
    generalWindow.classList.remove('active')
    passwordWindow.classList.remove('active')
    searchWindow.classList.remove('active')
    productWindow.classList.add('active')
    generalBtn.classList.remove('active')
    passwordBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    productBtn.classList.add('active')
})


