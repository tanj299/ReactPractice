import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({ items, onAddOne, onRemoveOne }) {
    return (
        <div>
            {items.length === 0 ? <span className="CartPage-empty">Your cart is empty. Why not add some products to it?</span> : 
                <ul className="CartPage-items">
                {items.map(item =>
                    <li key={item.id} className="CartPage-item"> 
                        <Item item={item}>
                            <div className="CartItem-controls">
                                <button className="CartItem-removeOne" onClick={() => 
                                onRemoveOne(item)}>
                                    -
                                </button>
                                <span className="CartItem-count">{item.count}</span>
                                <button className="CartItem-addOne" onClick={() => 
                                onAddOne(item)}>
                                    +
                                </button>
                            </div>
                        </Item>
                    </li>
                    )}
            </ul>}
            
        </div>
        
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onRemoveOne: PropTypes.func.isRequired,
    onAddOne: PropTypes.func.isRequired
}

export default CartPage;