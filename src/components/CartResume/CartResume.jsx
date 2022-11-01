import React, { useContext } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import "./cartResume.css";
import { cartContext } from "../Context/CartContext";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

function CartResume() {
    
    const { cart, isInCart, addItem, emptyCart, deleteItem, getItemCount, getTotalPrice } = useContext(cartContext);

    let carritoVacio = true; 

    if (cart.length === 0) {  
        return <>
            <div>
                <h2>Tu carrito no tiene compras.</h2>
                <img src="/assets/p/Carrito_Vacio.webp" alt="Carrito vacio" />
                <Link to="/"><p className="link_v">Seguí comprando, no te quedes con las ganas.</p></Link>
            </div>
        </>
    }
    return (
        
        <div>
            <div>Resumen de tu compra</div>
        
            {cart.map ( (item) => {
                return <Card className="cardView" sx={{ display: "flex" }} key={item.id}>
                    <CardMedia component="img"
                        sx={{ width: 150 }}
                        image={item.img}
                        alt={item.title} />
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">{item.title}</Typography>
                        <Typography component="div" variant="subtitle1" color="text.secondary">{item.subtitle} | {item.alc}</Typography>
                        <Typography component="div" vartiant="subtitle2">Precio: ${item.price}</Typography>
                        <Typography component="div" vartiant="subtitle2">Cantidad seleccionada: {item.count}</Typography>
                        <Typography component="div" vartiant="subtitle2">Precio total: ${item.price * item.count}</Typography>
                    </CardContent>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: 'end' }}>
                        <IconButton onClick={() => { deleteItem(item.id) }}>
                            <DeleteOutlineIcon fontSize="medium" />
                        </IconButton>
                    </Box>
                </Box>
            </Card>
        })}
        <div className="divButton">
        <Link className="link" to="/"><button className="button-count">Agregar mas productos</button></Link>
        <button className="button-count" onClick={emptyCart}>Vaciar carrito</button>
      </div>
        <Container fluid>
            <Row className="justify-content-md-end">
            <Col xs="6">
                <h1>Totales</h1>
            </Col>
            </Row>
            <Row className="justify-content-md-end">
            <Col xs="6">
                <h5>Total a pagar: ${getTotalPrice()}</h5>
            </Col>
            </Row>
            <Row className="justify-content-md-end">
            <Col xs="6">
                <Link className="link" to="/FormBuy"><button className="button-count">Continuar con la compra</button></Link>
            </Col>
            </Row>
        </Container>
        </div>
        
    )
}

export default CartResume
