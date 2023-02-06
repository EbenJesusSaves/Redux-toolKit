import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { CartItem } from './CartItem'

export const CartContainer = () => {
    const dispatch = useDispatch()

    const { cartItems, total, amount } = useSelector((store) => store.cart)

    console.log(cartItems)

    if (amount < 1) {
        return (
            <section className='cart'>
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className='cart'>
            {/* cart header */}
            <header>
                <h2>your bag</h2>
            </header>
            {/* cart items */}
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button onClick={() => dispatch(clearCart())} className='btn clear-btn'>clear cart</button>
            </footer>
        </section>)
}
