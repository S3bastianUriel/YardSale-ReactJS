import { useState  } from 'react';

const initialState = {
    cart: [],
    toggleOrders: false, // Añadimos el toggle Order

}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state, 
            cart: state.cart.filter(items => items.id !== payload.id),
        });
    }



    /*const changeToggle = () => {
        setState({
          ...state,
          toggleOrders: !state.toggleOrders
      })};*/

    return {
        state,
        addToCart,
        removeFromCart,
        // changeToggle
    }
}

export default useInitialState;