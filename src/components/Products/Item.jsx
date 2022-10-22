import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

function Item(props) {
    let {title, img, price, detail, id, offer} = props;

    const urlDetail = `/producto/${id}`;
    let classPrice = `priceTag ${offer && "offerTag"}`

    return (
        <div className="card">
            <div onClick={props.onClickImagen} className="card-img">
            <img src={img} alt="card img"></img>
        </div>
        <div className="card-detail">
            <h3>{title}</h3>
            <p>{detail}</p>
            <h4 className={classPrice}>$ {price}</h4>
            { {offer} === true && (<span style={{ color: "#aa0033"}}>OFERTA</span>) }

        </div>

        <Link to={urlDetail}>
            <button>
                Ver
            </button>
        </Link>
    </div>
    );
}

export default Item;