import './Bottle.css'
import PropTypes from 'prop-types'
const Bottle = ({bottle,handleShopingCart}) => {
    const {name,price,img}=bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
              <h3>{name}</h3>
              <p>Price: ${price}</p>
              <button onClick={()=>handleShopingCart(bottle)}>Purchase</button>

        </div>
    );
};

Bottle.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    bottle: PropTypes.array.isRequired,
    handleShopingCart: PropTypes.func.isRequired
}
export default Bottle;