import React from 'react'

export default function Footer(props) {
    
    return (
  

    <div>
       <footer className='mt-3'><h5>Total Amount : { props.total}</h5></footer>   
       <button type="button" class="btn btn-warning  btn-sm"  >
        <a href="/pay.html">payment</a></button>
   
    </div>
  )
}
