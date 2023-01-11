// https://gogoanime.consumet.org/popular
// background: url("john.jpg") no-repeat center center/cover; 


let main = document.querySelector('.main-container') ;
let btn = document.getElementById('btn') ;
let body = document.getElementsByTagName("body")[0] ;

btn.addEventListener('click', ()=>{ 
    let r = Math.floor(Math.random() *100) ;
    console.log(r) ;

    fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) =>  { 
      main.style.background = `url(${data.data.memes[r].url})`
      main.style.backgroundPosition =  `center center`
      main.style.backgroundRepeat =  ` no-repeat`
      main.style.backgroundAttachment=  `fixed`
      main.style.backgroundSize =  `contain`
      main.style.width = `100%`
      main.style.height = `100vh`
    
     
        }) ;
}) ;



