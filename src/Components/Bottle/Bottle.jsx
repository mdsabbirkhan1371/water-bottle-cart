import './Bottle.css'

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

export default Bottle;