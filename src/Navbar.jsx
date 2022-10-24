import React,{useState} from 'react';
import "./navbar.css";
import cart from "./icon-cart.svg";
import del from "./image/icon-delete.svg"
import avatar from "./avatar.png";
import {Title,Count,titlephoto } from "./Content";
  
console.log(Count+"eke");

function Cart(props){
    
    console.log(props.Count +"Cart");
    if(props.Count===0)
    {
     return(<>
     <div style={{fontSize:"1.5rem",fontWeight:"600"}}>cart</div>
     <hr />
     <div>{props.Count} Not added anythings</div>
     </>)
    }
    else {
        return(<>
    <div style={{fontSize:"1.5rem",fontWeight:"600"}}>cart</div>
    <hr />
    <div>
       <img src={props.titlephoto} style={{borderRadius:".5rem"}} alt=""/>
       <div className='detail_title'>{props.title}
       <div>
        $125.00✕{props.Count} <span style={{fontWeight:"900"}}>{125*props.Count+".00"}</span>
       </div>
       {/* <img src={del} alt="del" /> */}
       </div>
       
    </div>
    <div className='checkout'>checkout</div>
   </>)
   }
}
function Navbar(){
       
     
    let [show,setshow]=useState(false);
    
//   window.addEventListener("click",()=>{
//     show?setshow(true):setshow(false);
//     let i=0
//     console.log(i++);
//   })
// let abc=document.getElementsByClassName("Content_container");
// abc.addEventListener("click",()=>{
//     setshow(false);
// })
return(
<>
<div className="Navbar_container">
    <div className='Sneaker'>sneakers </div>
    <div className='items'> Collections </div>
    <div className='items'> Men </div>
    <div className='items'> Women </div>
    <div className='items'> About </div>
    <div className='items contact'> Contact </div>
    <div  className='cart' onClick={()=>{
    show?setshow(false):setshow(true);
    

    
 }} ><img src={cart} alt="cart" />
    </div>
    <div className='avatar'><img src={avatar} alt="profile" /></div>

    <div className={show?"navshow":"navhide"} >
      
   <Cart Count={Count} title={Title}  titlephoto={titlephoto}/>

</div>
</div>


</>
); 
}

export default Navbar ;
export {Cart};