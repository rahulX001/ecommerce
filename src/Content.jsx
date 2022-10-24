import React ,{useState,useEffect} from "react";
import "./content.css";
import product1 from "./image/image-product-1.jpg"
import product2 from "./image/image-product-2.jpg"
import product3 from "./image/image-product-3.jpg"
import product4 from "./image/image-product-4.jpg"
import product1t from "./image/image-product-1-thumbnail.jpg"
import product2t from "./image/image-product-2-thumbnail.jpg"
import product3t from "./image/image-product-3-thumbnail.jpg"
import product4t from "./image/image-product-4-thumbnail.jpg"
import cart from "./icon-cart.svg"
import minus from "./icon-minus.svg"
import plus from "./icon-plus.svg"
import close from "./image/icon-close.svg"
import next from "./image/icon-next.svg"
import previous from "./image/icon-previous.svg"
import Navbar, {Cart} from "./Navbar";

  let Title="Fall Limited Edition Sneakers";
  let Count=0;
  let titlephoto=product1t;
  let bool="";
function Content(){
       
 useEffect(()=>{
    
    <Cart/>
 })
  
   let [value,setvalue] = useState(product1);
   let [count,setcount]= useState(0);
   let [Style,setStyle]= useState({p1:.3,p2:1,p3:1,p4:1});
   let[hide,sethide]= useState(false);
   let array=[product1,product2,product3,product4];
   
function Adding(pro1){

    console.log(pro1+"addi");
    Count=pro1;
    <Cart/>
  
} 
    function Change(e)
    {
        setStyle(
        // (preValue)=>{
        //     console.log(preValue);
        //     return {
        //    ...preValue,
        //    []:.3,
        //     }
        // }
        1);
        setvalue(e);

    }
   

    function addChange(){
        setcount(count+1);
       
    }
    function subchange(){
        if(count<=0){
          setcount(count);
          
        }
        else{
            setcount(count-1);
           
        }
    }
          
    

    return(<>
    <div className="Content_container" onClick={()=>{
        bool=false;
    }}>
        
        <div className="first_sub_container">
           
            <img className="product1" src={value} onClick={()=>{sethide(true)}} alt="product1"
             />

            <div className="smallphoto">
            <img className="product1t pp" name="p1" src={product1t}  alt="product1" onClick = {()=>{Change(product1)}}  style={{opacity:Style.p1}}/>
            <img className="product2t pp" name="p2" src={product2t} onClick = {()=>{Change(product2)}} alt="product2" style={{opacity:Style.p2}} />
            <img className="product3t pp" name="p3" src={product3t} onClick = {()=>{Change(product3)}} alt="product3" style={{opacity:Style.p3}} />
            <img className="product4t pp" name="p4" src={product4t} onClick = {()=>{Change(product4)}} alt="product4" style={{opacity:Style.p4}} />
            </div>
        </div>
        <div className="second_sub_container">
           <p className="sc">SNEAKER COMPANY</p>
           <h1 className="heading">{Title}</h1>
           <p className="detail">These low price sneaker are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
           <span className="price"> $125.00 </span> <span className="discount"> 50%</span>
           <div className="strike"><strike>$250.00</strike></div>
           <div className="cart_detail">
            <div className="cart_element ce1"><img className="minus" src={minus} alt="minus" onClick={subchange}/><span>{count}</span><img src={plus} alt="plus" onClick={addChange}/></div>
            <div className="cart_element ce2" onClick={()=>{
             Adding(count);   
            }}>
                <img src={cart} alt="cart" /> add to cart</div>
           </div>
    
        </div>
        <div className={`model ${ hide?"show":""}`} >
            <img src={hide?value:""} className={`bigimg ${hide?"showibigmg":"hidebigimg"}`} alt="profile" />
            <img src={close} className={`close ${hide?"showibigmg":"hidebigimg"}`} alt="close" onClick={()=>{
                sethide(false);
            }} /> 
            <img src={previous} className={`previous ${hide?"showibigmg":"hidebigimg"}`} alt="previous" onClick={()=>{
                for(let i=0 ;i<array.length;i++)
                {
                    if(value===array[i]&& i>=1)
                    {
                        setvalue(array[i-1])
                        break;
                    }
                    
                }
                
               }} />
            <img src={next} className={`next ${hide?"showibigmg":"hidebigimg"}`} alt="next"  onClick={()=>{
                for( let i=0;i<array.length;i++)
                {
                    if(value===array[i]&& i<array.length-1)
                    {
                        setvalue(array[i+1])
                        break;
                    }
                    
                }
                
               }}/>

            <div className={hide?"showimg":"hideimg"}>
             
            <img className="smallshow" name="p1" src={product1t}  alt="product1" onClick = {()=>{Change(product1)}}  style={{opacity:Style.p1}}/>
            <img className="smallshow" name="p2" src={product2t} onClick = {()=>{Change(product2)}} alt="product2" style={{opacity:Style.p2}} />
            <img className="smallshow" name="p3" src={product3t} onClick = {()=>{Change(product3)}} alt="product3" style={{opacity:Style.p3}} />
            <img className="smallshow" name="p4" src={product4t} onClick = {()=>{Change(product4)}} alt="product4" style={{opacity:Style.p4}} />
            </div>
        </div>

    </div>
    
    </>);


}

export default Content; 
export {Title,Count,titlephoto,bool};