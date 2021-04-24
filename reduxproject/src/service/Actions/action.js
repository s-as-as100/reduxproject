import  {ADD_TO_CART}from './../Actions/constant'

  export  const addToCart = (data) =>{
    return  {
        type: ADD_TO_CART,
        data:data
    }
}