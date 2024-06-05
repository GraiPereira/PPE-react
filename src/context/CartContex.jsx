import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Asegúrate de importar PropTypes
import Carro from "../components/Carro";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const calcularCantidad = () => {
        return carrito.length;
    };

    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio, 0);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CartContext.Provider
            value={{ Carro, agregarAlCarrito, calcularCantidad, calcularTotal, vaciarCarrito }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Agrega PropTypes para validar la propiedad 'children'
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartProvider;
