import { createContext, useState } from "react";

export const Cart = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const addCart = (product, productQuantity) => {
        const productInCart = isInCart(product.id);
        let cartUpdated = [...cart]

        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {
                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + productQuantity
                    };
                }
                // Ensure we return the cartProduct unchanged for non-matching items
                return cartProduct;
            });
        } else {
            // cartUpdated = [...cart, { ...product, quantity: productQuantity }];
            cartUpdated.push({...product, quantity: productQuantity})
        }

        setCart(cartUpdated);
        // setQuantity(cartUpdated.length);
    };

    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId);
    };

    return (
        <Cart.Provider value={{ cart, addCart, quantity }}>{children}</Cart.Provider>
    );
};

export default CartProvider;