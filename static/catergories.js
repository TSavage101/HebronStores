let margin = 0;

const scroll =  document.querySelectorAll('.scroll')
// console.log(scroll)

setInterval(function(){
    margin -= 100;
    // console.log('dd')
    // console.log(margin)    
    // console.log(margin + '%')
    if(margin < -200){
        margin = 0
        // console.log(margin)
        scroll.forEach(element => {
            element.style.setProperty('margin-left', margin + '%')
        });
    }else{
        // margin -=100
        // console.log(margin)
        scroll.forEach(element => {
            element.style.setProperty('margin-left', margin + '%')
        });
    }
}, 5000)