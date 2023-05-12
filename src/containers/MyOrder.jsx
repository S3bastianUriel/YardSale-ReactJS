import React, { useState, useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = ({ setToggleOrders }) => {
	const { state } = useContext(AppContext); 
	// const [toggleOrders, setToggleOrders] = useState(false);

	// const [toggleBack, setToggleBack] = useState(false);

	/*const changeToggleOrders = () => {
		toggleOrders(!setToggleOrders)
		// setToggleOrders(!toggleOrders)
		// {toggleOrders && <MyOrder /> }
	}*/
	
	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">

			{/* <div onClick={() => handleToggleOrders()}> <img src={arrowIcon} alt="arrow"/> </div> */}

			{/* <div className="title-container" onClick={() => changeToggleOrders()}> */}
			{/* <div className="title-container" onClick={() => setToggleOrders(toggleOrders)}> */}
			<div className="title-container" onClick={() => setToggleOrders(false)}>
			{/* onClick={() => setToggleOrders(false)} */}

				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
			{state.cart.map(product => ( 
				<OrderItem product={product} key={`orderItem-${product.id}`} />
			))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
