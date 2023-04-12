const minusBtn = document.querySelector('.minus')
const addBtn = document.querySelector('.plus')
const addReview = document.querySelector('.addReview')
const sellerBtn = document.querySelector('.seller')
const sellerCard = document.querySelector('.seller-card')
const closeSeller = document.querySelector('.close')
const stars = document.querySelectorAll('.star')
const stockNo = 5
const price = 1300

let quantityNo = 1;
let newPrice = quantityNo * price
document.querySelector('.no input').value = quantityNo
document.querySelector('.pay').innerHTML = newPrice;

minusBtn.addEventListener('click', ()=>{
    if(quantityNo == 1){

    }else{
        quantityNo -= 1
        // console.log(quantityNo)
        document.querySelector('.no input').value = quantityNo
        newPrice = quantityNo * price
        document.querySelector('.pay').innerHTML = newPrice;
        document.querySelector('.buyBtn').classList.add('active');
        setTimeout(function(){
            document.querySelector('.buyBtn').classList.remove('active');
        }, 800)
    }
})

addBtn.addEventListener('click', ()=>{
    if(quantityNo == stockNo){
        alert('Out Of Stock')
    }else{
        quantityNo += 1
        // console.log(quantityNo)
        document.querySelector('.no input').value = quantityNo
        newPrice = quantityNo * price
        document.querySelector('.pay').innerHTML = newPrice;
        document.querySelector('.buyBtn').classList.add('active');
        document.querySelector('.buyBtn').classList.add('active');
        setTimeout(function(){
            document.querySelector('.buyBtn').classList.remove('active');
        }, 800)
    }
    
})

addReview.addEventListener('click', ()=>{
    document.querySelector('.write-review-bg').classList.add('active')
})

document.querySelector('.closeBtn').addEventListener('click', ()=>{
    document.querySelector('.write-review-bg').classList.remove('active')
})

document.querySelector('.drop').addEventListener('click', ()=>{
    document.querySelector('.orderBtn').classList.toggle('visible')
    document.querySelector('.drop i').classList.toggle('visible')
})

sellerBtn.addEventListener('click', ()=>{
    sellerCard.classList.add('active')
})

closeSeller.addEventListener('click', ()=>{
    sellerCard.classList.remove('active')
})



// console.log(quantityNo)

// console.log(stars)
let rating
stars.forEach(star =>{
    star.addEventListener('click', ()=>{
        if(star.classList.contains('s1')){
            rating = 1
            console.log(rating)
            stars[0].classList.add('bad-rating')
            stars[0].classList.remove('mid-rating')
            stars[0].classList.remove('good-rating')
            stars[1].classList.remove('bad-rating')
            stars[1].classList.remove('mid-rating')
            stars[1].classList.remove('good-rating')
            stars[2].classList.remove('bad-rating')
            stars[2].classList.remove('mid-rating')
            stars[2].classList.remove('good-rating')
            stars[3].classList.remove('bad-rating')
            stars[3].classList.remove('mid-rating')
            stars[3].classList.remove('good-rating')
            stars[4].classList.remove('bad-rating')
            stars[4].classList.remove('mid-rating')
            stars[4].classList.remove('good-rating')
        }else if(star.classList.contains('s2')){
            rating = 2
            console.log(rating)
            stars[0].classList.add('bad-rating')
            stars[0].classList.remove('mid-rating')
            stars[0].classList.remove('good-rating')
            stars[1].classList.add('bad-rating')
            stars[1].classList.remove('mid-rating')
            stars[1].classList.remove('good-rating')
            stars[2].classList.remove('bad-rating')
            stars[2].classList.remove('mid-rating')
            stars[2].classList.remove('good-rating')
            stars[3].classList.remove('bad-rating')
            stars[3].classList.remove('mid-rating')
            stars[3].classList.remove('good-rating')
            stars[4].classList.remove('bad-rating')
            stars[4].classList.remove('mid-rating')
            stars[4].classList.remove('good-rating')
        }else if(star.classList.contains('s3')){
            rating = 3
            console.log(rating)
            stars[0].classList.remove('bad-rating')
            stars[0].classList.add('mid-rating')
            stars[0].classList.remove('good-rating')
            stars[1].classList.remove('bad-rating')
            stars[1].classList.add('mid-rating')
            stars[1].classList.remove('good-rating')
            stars[2].classList.remove('bad-rating')
            stars[2].classList.add('mid-rating')
            stars[2].classList.remove('good-rating')
            stars[3].classList.remove('bad-rating')
            stars[3].classList.remove('mid-rating')
            stars[3].classList.remove('good-rating')
            stars[4].classList.remove('bad-rating')
            stars[4].classList.remove('mid-rating')
            stars[4].classList.remove('good-rating')
        }else if(star.classList.contains('s4')){
            rating = 4
            console.log(rating)
            stars[0].classList.remove('bad-rating')
            stars[0].classList.remove('mid-rating')
            stars[0].classList.add('good-rating')
            stars[1].classList.remove('bad-rating')
            stars[1].classList.remove('mid-rating')
            stars[1].classList.add('good-rating')
            stars[2].classList.remove('bad-rating')
            stars[2].classList.remove('mid-rating')
            stars[2].classList.add('good-rating')
            stars[3].classList.remove('bad-rating')
            stars[3].classList.remove('mid-rating')
            stars[3].classList.add('good-rating')
            stars[4].classList.remove('bad-rating')
            stars[4].classList.remove('mid-rating')
            stars[4].classList.remove('good-rating')
        }else if(star.classList.contains('s5')){
            rating = 5
            console.log(rating)
            stars[0].classList.remove('bad-rating')
            stars[0].classList.remove('mid-rating')
            stars[0].classList.add('good-rating')
            stars[1].classList.remove('bad-rating')
            stars[1].classList.remove('mid-rating')
            stars[1].classList.add('good-rating')
            stars[2].classList.remove('bad-rating')
            stars[2].classList.remove('mid-rating')
            stars[2].classList.add('good-rating')
            stars[3].classList.remove('bad-rating')
            stars[3].classList.remove('mid-rating')
            stars[3].classList.add('good-rating')
            stars[4].classList.remove('bad-rating')
            stars[4].classList.remove('mid-rating')
            stars[4].classList.add('good-rating')
        }
    })
})