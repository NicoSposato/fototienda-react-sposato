import React from "react";
import Button from "../Button/Button";
import "./item.css";
import { Link } from "react-router-dom";

function Item(props) {
    let {title, img, price, detail, id} = props;

    const urlDetail = `/producto/${id}`;

    return (
        <div className="card">
            <div onClick={props.onClickImagen} className="card-img">
            <img src={img} alt="card img"></img>
        </div>
        <div className="card-detail">
            <h3>{title}</h3>
            <p>{detail}</p>
            <h4>$ {price}</h4>    
        </div>

        <Link to={urlDetail}>
            <Button>
                Ver
            </Button>
        </Link>
    </div>
    );
}

export default Item;