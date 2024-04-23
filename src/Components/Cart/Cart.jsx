import './Cart.css'
import PropTypes from 'prop-types'

const Cart = ({cart}) => {
    
    return (
        <div className='cart-contianer'>
            <h4>Cart :{cart.length}</h4>
            {
                cart.map(bottle=><div key={bottle.id}>
                    
                    <img src={bottle.img}></img>
                    <button>Remove</button>
                </div>)
            }
        </div>
    );
};

Cart.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    cart: PropTypes.object.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;