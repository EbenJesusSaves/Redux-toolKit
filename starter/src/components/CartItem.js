import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, removeItem } from '../features/cart/cartSlice'
import { ChevronDown, ChevronUp } from '../icons'

export const CartItem = ({ id, img, title, price, amount }) => {

    console.log()

    const dispatch = useDispatch()

    const disableBtn = amount === 0 ? true : false;

    console.log(disableBtn)

    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                {/* remove button */}
                <button className='remove-btn' onClick={() => { dispatch(removeItem(id)) }}>remove</button>
            </div>
            <div>
                {/* increase amount */}
                <button className='amount-btn' onClick={() => {



                    dispatch(increment({ id }))
                }}>
                    <ChevronUp />
                </button>
                {/* amount */}
                <p className='amount'>{amount}</p>
                {/* decrease amount */}
                <button className='amount-btn' onClick={() => {
                    if (amount === 1) {

                        dispatch(removeItem(id))
                        return
                    }; dispatch(decrement({ id }))
                }} >
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}
