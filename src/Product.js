import React from 'react'

const Product = props => {
    return(
         <li>
             <img src={props.imgSrc} alt={props.name}/>
             <p>{props.name}</p>
             <p>{props.price}</p>
             <button onClick = {() => console.log('plus')} >+</button>
             <p>{props.count}</p>
             <button onClick = {() => console.log('minus')}>-</button>
         </li>
    );
}
export default Product; 