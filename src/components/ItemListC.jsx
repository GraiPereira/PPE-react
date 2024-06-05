import { useState, useEffect } from 'react';
import data from '../data/productos.json';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';


export const ItemListC = () => {
    let { categoryId } = useParams();
    let [productos, setProductos] = useState([]);
    console.log(categoryId);

    const pedirProductos = () => {
        // eslint-disable-next-line no-unused-vars
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    };

    useEffect(() => {

        pedirProductos()
          .then((res) => {
            if (categoryId) {
                setProductos(res.filter((prod) => prod.categoria.id === categoryId))
            } else {
              setProductos(res);
            }
        });
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <ItemList productos={productos} />
        </div>
    );
};
