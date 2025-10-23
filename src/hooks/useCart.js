import { useState, useEffect, useMemo } from 'react';
import { db } from '../data/db';

export default function useCart() {

    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    const [data] = useState(db);
    const [cart, setCart] = useState(initialCart());

    const MIN_ITEMS = 1;
    const MAX_ITEMS = 5;

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function addToCart(item) {

        const itemExists = cart.findIndex(guitar => guitar.id === item.id);
        if (itemExists >= 0) { // item exists in cart

            if (cart[itemExists].quantity >= MAX_ITEMS) return;

            const cartUpdated = [...cart];
            cartUpdated[itemExists].quantity += 1;
            setCart(cartUpdated);
        }
        else { // item does not exist in cart
            item.quantity = 1;
            setCart([...cart, item]);
        }
    }

    function removeFromCart(id) {
        setCart(cart.filter(guitar => guitar.id !== id));
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item;
        });
        setCart(updatedCart);
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                if (item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
            }
            return item;
        });
        setCart(updatedCart);
    }

    function clearCart() {
        setCart([]);
    }

    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(() => cart.reduce((total, guitar) => total + guitar.price * guitar.quantity, 0), [cart]);

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}