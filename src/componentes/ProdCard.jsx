import React, { useState } from 'react';
import './ProdCard.css';
import ItemCount from './ItemCount';

const ProductCard = ({ name, image, description, precio, stock, descuento }) => {
    const [showDescription, setShowDescription] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        console.log(`Agregando ${name} al carrito con cantidad ${quantity}`);
    };

    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="price">Precio: ${precio}</p>
            <p className="descuento">Descuento: {descuento}</p>
            <p className="stock">Disponible: {stock} Unidades</p>
            <div className="description-container">
                {showDescription && (
                    <div className="description">
                        <p>{description}</p>
                    </div>
                )}
                {!showDescription && (
                    <div className="quantity-controls">
                        <button className="quantity-button" onClick={handleDecrement}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantity-button" onClick={handleIncrement}>+</button>
                    </div>
                )}
            </div>
            
            <div class="card-footer">
                <small class="text-body-secondary">
                    {!showDescription && (
                    <button className="add-to-cart-button" onClick={handleAddToCart}>
                        Comprar
                    </button>
                )}
                </small>
            </div>
        </div>
    );
}

export default ProductCard;
