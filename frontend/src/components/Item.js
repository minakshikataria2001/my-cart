import React from 'react'

export default function Item(props) {
  return (
    
   < div className='row border border-dark  '>
      <div className='mt-2'>
       
      {props.product.name} <span className="badge bg-secondary">  ₹{props.product.price}</span> <span>  Quantity: {props.product.quantity}</span>  <button type="button" className="btn  btn-warning mx-3 mb-2 btn-sm " onClick={()=>{props.remove(props.index,props.product._id)}}>remove</button>      
      </div>
     
      </div>
  
    // </div>
  )
}
