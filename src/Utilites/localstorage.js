// first check the data is availabel 
const getStoredDataCart =()=>{
    const storedCart = localStorage.getItem('cart')
       if(storedCart){
        return JSON.parse(storedCart)
       }
       return []
}

// then save data in cart at the localstorage 

const saveCartToLocalStorage =(cart)=>{
    const cartStringFiled = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringFiled)

}

// add to localStorage by id or any element 

const addToLocalStorage =(id)=>{
    const cart = getStoredDataCart()
    cart.push(id)
    
    // save to localStorage 
    saveCartToLocalStorage(cart)
}

// remove cart 
const removeFromLs =(id)=>{
    const cart = getStoredDataCart()
    const remaining= cart.filter(idx=>idx !==id)
    saveCartToLocalStorage(remaining)
}

// export for recall 

export {addToLocalStorage,getStoredDataCart,removeFromLs}