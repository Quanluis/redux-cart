import React from 'react';

const productList = props => {
    const ProductItems = props.products.map(product => product.name).map(name => <li>{name}</li>);
    return (
        <ul>
            {ProductItems}
        </ul>
    )
}
export default productList;
