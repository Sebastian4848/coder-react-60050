import { createContext, useState } from "react";

export const Cart = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const clearCart = () => {
        setCart([]);
    };

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
            cartUpdated.push({ ...product, quantity: productQuantity })
        }

        setCart(cartUpdated);
        setQuantity(cartUpdated.reduce((acc, item) => acc + item.quantity, 0));
        setPrice(cartUpdated.reduce((acc, item) => acc + item.price, 0));
    };

    const removeFromCart = (productId) => {
        const cartUpdated = cart.filter(cartProduct => cartProduct.id !== productId);
        setCart(cartUpdated);
        setQuantity(cartUpdated.reduce((acc, item) => acc + item.quantity, 0));
        setPrice(cartUpdated.reduce((acc, item) => acc + item.price, 0));
    };

    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId);
    };

    return (
        // <Cart.Provider value={{ cart, addCart, quantity }}>{children}</Cart.Provider>
        <Cart.Provider value={{ cart, addCart, removeFromCart,clearCart, quantity: cart.reduce((acc, item) => acc + item.quantity, 0) }}>
            {children}
        </Cart.Provider>
    );
};

export default CartProvider;