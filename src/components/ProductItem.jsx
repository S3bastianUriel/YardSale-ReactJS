import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
	// const { addToCart } = useContext(AppContext);		//
	const { addToCart, removeFromCart } = useContext(AppContext);		//
	//
	const [ added, setAdded ] = useState(false);

	const handleClick = item => {
		// addToCart(item);
		added ? removeFromCart(item) : addToCart(item);
		// added ? addToCart(item) : removeFromCart(item);

		setAdded(!added)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					{/* <img src={addToCartImage} alt="" /> */}
					{ added 
						? <img src={addedToCartImage} alt="" /> 
						
						: <img src={addToCartImage} alt="" /> 
					}


				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
