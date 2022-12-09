import React, { useReducer, createContext } from 'react'

export const Store = createContext();

const initialStates = {
    cart: [],
    fav: []
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FAV': return { ...state, fav: [...state.fav, action.payload] };

        case 'REMOVE_FAV': return { ...state, fav: action.payload };

        case 'ADD_CART': return { ...state, cart: [...state.cart, action.payload] }

        case 'UPDATE_CART':
            const cart = state.cart
            let ct = cart.map(item => {
                if (item.id === action.payload.id) { item.quantity += 1 }
                return item
            })
            return { ...state, cart: [...ct] }


        default: return state;
    }
}



export const StoreProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialStates);

    const value = { state, dispatch }

    return (
        <Store.Provider value={value}>
            {children}
        </Store.Provider>
    )


}