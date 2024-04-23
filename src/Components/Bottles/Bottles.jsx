import { useEffect, useState } from "react";
import './Bottles.css'
import Bottle from "../Bottle/Bottle";
import { addToLocalStorage, getStoredDataCart, removeCart } from "../../Utilites/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles,setBottles]= useState([])
    const [cart,setCart]= useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))

    },[])

    // load cart data from  localStorage 
    useEffect(()=>{
        if(bottles.length){
            const storedCartData = getStoredDataCart()
            console.log('storedcartData',storedCartData)
            const saveStoredCart =[]
            for(const id of storedCartData){
                const bottle = bottles.find(bottle=>bottle.id===id)
                if(bottle){
                    saveStoredCart.push(bottle)
                }
            }
            console.log('savedStoredCart',saveStoredCart)

            setCart(saveStoredCart)
        }
    },[bottles])

    const handleShopingCart =(bottle)=>{
        // console.log(bottle)
        const newCart = [...cart,bottle]
        setCart(newCart)
        // set in local storage 
        addToLocalStorage(bottle.id)
    }

    

    return (
        <div>
            <h3>Bottle :{bottles.length}</h3>
            <Cart cart={cart}></Cart>
            
            <div className="bottles-container">
                {
                    bottles.map(bottle=> <Bottle 
                        handleShopingCart={handleShopingCart}
                        key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
            
            
        </div>
    );
};

export default Bottles;