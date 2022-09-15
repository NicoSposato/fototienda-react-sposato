import React from "react";
import Card from "./Card";

function ItemListContainer(props) {
    return (
        <div>
            <h1>{greeting}</h1>
            <div className="main container">
                <Card
                    price={300}
                    title="Porta retrato"
                    detail="Detalle descriptivo de producto"
                    img="https://http2.mlstatic.com/D_NQ_NP_652911-MLA31593689697_072019-W.webp"
                />
                <Card
                    price={500}
                    title="Mural retrato"
                    detail="Detalle descriptivo de producto"
                    img="https://http2.mlstatic.com/D_NQ_NP_652911-MLA31593689697_072019-W.webp"
                />
                <Card
                    price={990}
                    title="Porta retrato"
                    detail="Detalle descriptivo de producto"
                    img="https://http2.mlstatic.com/D_NQ_NP_652911-MLA31593689697_072019-W.webp"
                />
            </div>
        </div>

    );
}

export default ItemListContainer;