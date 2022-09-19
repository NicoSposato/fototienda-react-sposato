import React, { useEffect } from "react";
import Card from "./Card";

function ItemListContainer({greeting}) {
    return (
        <div>
            <h1>{greeting}</h1>
            <div className="main container">
                <Card
                    title="Lienzo Canvas"
                    price={990}
                    detail="Una experiencia envolvente y una perspectiva texturizada única."
                    img="https://www.imprimimostusfotos.com.ar/impresion-digital-de-fotos/impresion-foto-lienzo-canvas/Borde_Clonado.jpg"
                    stock={5}
                />
                <Card
                    title="Mural box"
                    price={400}
                    detail="Diseño minimalista, terminaciones limpias y precisas. Con vidrio."
                    img="https://http2.mlstatic.com/D_NQ_NP_798302-MLA50818340145_072022-O.webp"
                    stock={18}
                />
                <Card
                    title="Bastidor simple"
                    price={500}
                    detail="Un bastidor realizado en madera masiza. Sin vidrio."
                    img="https://http2.mlstatic.com/D_938111-MLA44924741132_022021-F.webp"
                    stock={2}
                />
                <Card
                    title="Mural bombe"
                    price={600}
                    detail="Un clásico entre los clásicos, con porte y gracia únicos. Con vidrio."
                    img="https://http2.mlstatic.com/D_NQ_NP_762613-MLA50714483170_072022-O.webp"
                    stock={30}
                />
                <Card
                    title="Mural italiano"
                    price={790}
                    detail="Exquisito, detallado y elegante diseño italiano. Con vidrio."
                    img="https://http2.mlstatic.com/D_NQ_NP_619154-MLA50806559439_072022-V.jpg"
                    stock={15}
                />
                <Card
                    title="Mural chato"
                    price={590}
                    detail="Tradicional mural de varilla chata. Con vidrio."
                    img="https://http2.mlstatic.com/D_NQ_NP_673703-MLA48035972797_102021-O.webp"
                    stock={10}
                />   
            </div>
        </div>
    );
}

export default ItemListContainer;