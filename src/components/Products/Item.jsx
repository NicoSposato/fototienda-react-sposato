import React from "react";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./item.css";

function Item(props) {
    let {title, img, price, detail, stock} = props; /* destructuring con variables aisladas*/

    return (
        <div className="card">
            <div className="card-img">
            <img src={img} alt="card img"></img>
        </div>
        <div className="card-detail">
            <h3>{title}</h3>
            <p>{detail}</p>
            <h4>$ {price}</h4>
            
        </div>
        <Button>
            Ver
        </Button>
        </div>
    );
}

export default Item;