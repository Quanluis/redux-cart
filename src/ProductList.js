import React from 'react';

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

const productList = props => {
    const ProductItems = props.products.map((product, index) => <Product {...product} key={index} />);
                 
    return (
        <ul>
            {ProductItems}
        </ul>
    )
}
export default productList;
