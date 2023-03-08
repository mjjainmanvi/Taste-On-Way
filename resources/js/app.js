import axios from 'axios'
import Noty from 'noty'
import {initAdmin} from './admin'

// when import and when requir?????????

let addtocart=document.querySelectorAll('.function-add')
let cartCounter=document.querySelector('#cartCounter')


function updateCart(dish){
    // ajax call  here we are using axios
axios.post('./update-cart',dish).then(res=>{
    console.log(res)
    cartCounter.innerText=res.data.totalQty
    new Noty({
          type:'success',
          timeout:1000,
        //   bydefault clck krne pr jaaega
        text:'Item added to cart',
        progressBar:false
        // can use layout option for position 
    }).show();
}).catch(err=>{
    new Noty({
        type:'error',
        timeout:1000,
     
      text:'Something went wrong',
      progressBar:false
      
  }).show();
})
}

addtocart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        
        let dish =JSON.parse(btn.dataset.dish);
        // wo loop kaise kaam kr rah ahi like wo lop chlta hai wo saara data store ho jaat ahi dtaset mei and then jb click hota hai toh hume mil jaat ahi??????????????????
        updateCart(dish)
        // console.log(dish)
    })
})

// remove alert message after 2 seconds
const alertMsg=document.querySelector('#success-alert')
if(alertMsg){
    setTimeout(() => {
        alertMsg.remove()
    }, 2000);
}

initAdmin()