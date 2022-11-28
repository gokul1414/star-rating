const stars=document.querySelectorAll('.star');
const rate=document.querySelector('.crt-rate');

stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{

        let crt_star=index+1;
        rate.innerText=`${crt_star} of 5`;

        stars.forEach((star,i)=>{
            if(crt_star>=i+1){
                star.innerHTML='&#9733;';
                
            }
            else{
                star.innerHTML='&#9734;';
            }
        });
       // alert("Thanks for your rating")
    });
});