document.querySelector('.image1').addEventListener('change', e=>{
    const file = e.target.files[0];				
    console.log(file)
    if(file.type == 'image/jpeg' || file.type == 'image/png'){
        console.log('correct'); 
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
        let fileURL = fileReader.result;
        console.log(fileURL)
        document.querySelector('.main-img').src = fileURL;
        document.querySelector('.main-img').style.setProperty('pointer-events', 'all')
        document.querySelector('.dummy').style.display = 'none'
        // showFile(fileURL)
    }
    fileReader.readAsDataURL(file)	
    }else{
        console.log('incorrect')
        alert('File must be an Image')
        document.querySelector('.picArea .fa-image').style.display = 'flex'
    }
})

document.querySelector('.image2').addEventListener('change', e=>{
    const file = e.target.files[0];				
    console.log(file)
    if(file.type == 'image/jpeg' || file.type == 'image/png'){
        console.log('correct'); 
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
        let fileURL = fileReader.result;
        console.log(fileURL)
        document.querySelector('.img2 img').src = fileURL;
        document.querySelector('.img2 img').style.setProperty('pointer-events', 'all')
        // document.querySelector('.dummy').style.display = 'none'
        // showFile(fileURL)
    }
    fileReader.readAsDataURL(file)	
    }else{
        console.log('incorrect')
        alert('File must be an Image')
        document.querySelector('.picArea .fa-image').style.display = 'flex'
    }
})

document.querySelector('.image3').addEventListener('change', e=>{
    const file = e.target.files[0];				
    console.log(file)
    if(file.type == 'image/jpeg' || file.type == 'image/png'){
        console.log('correct'); 
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
        let fileURL = fileReader.result;
        console.log(fileURL)
        document.querySelector('.img3 img').src = fileURL;
        document.querySelector('.img3 img').style.setProperty('pointer-events', 'all')
        // document.querySelector('.dummy').style.display = 'none'
        // showFile(fileURL)
    }
    fileReader.readAsDataURL(file)	
    }else{
        console.log('incorrect')
        alert('File must be an Image')
        document.querySelector('.picArea .fa-image').style.display = 'flex'
    }
})