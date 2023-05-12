import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MenuMobile from '@components/MenuMobile';
import MyOrder from '@containers/MyOrder.jsx'
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(false);
	const { state } = useContext(AppContext);

	// const handleToggleOrders = () => { setToggleOrders(); };

	const handleMenuMobile = () => {
		setToggleMenu(!toggleMenu)
	}
	

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		<nav>
			<img src={menu} alt="menu" onClick={handleMenuMobile} className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						sebastianurielsantivanez@gmail.com
					</li>
					<li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>



				</ul>
			</div>
			{toggle && <Menu />}	{/*	//toogle se inicializa false y luego "&& Menu" para que se muestre Menu cuando el estado de toogle cambie*/ } 
			{/* {toggleOrders && <MyOrder /> } */}
			{/* {toggleOrders ? <MyOrder setToggleOrders = {setToggleOrders}/> : null} */}
			{toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>}
			{toggleMenu && <MenuMobile/>}


		</nav>
	);
}

export default Header;