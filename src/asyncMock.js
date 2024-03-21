export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsData = [
                { 
                    id: '1', 
                    name: 'Termo Stanley Azul', 
                    image: 'termo1.jpg', 
                    precio: 89000, 
                    stock: 3, 
                    category: 'Termos',
                    descuento: '$13.000 OFF SUMMER SALE'
                },
                { 
                    id: '2', 
                    name: 'Termo Stanley Rojo Limited', 
                    image: 'termo2.jpg', 
                    precio: 123000, 
                    stock: 2, 
                    category: 'Termos',
                    descuento: '3 Coutas FIJAS'
                },
                { 
                    id: '3', 
                    name: 'Termo Stanley Rosa 3lts', 
                    image: 'termo3.jpg', 
                    precio: 123000, 
                    stock: 1, 
                    category: 'Termos',
                    descuento: '3 Coutas FIJAS'
                },
                { 
                    id: '4', 
                    name: 'Mate Stanley Survival', 
                    image: 'mate1.jpg', 
                    precio: 12000, 
                    stock: 6,
                    category: 'Mates',
                    descuento: '$200 OFF'
                },
                { 
                    id: '5', 
                    name: 'Bombilla Acero Inoxidable', 
                    image: 'bombilla1.jpg', 
                    precio: 4500, 
                    stock: 15, 
                    category: 'Accesorios',
                    descuento: 'Envío Gratis'
                },
                { 
                    id: '6', 
                    name: 'Bombilla Acero Inoxidable Pr', 
                    image: 'bombilla2.jpg', 
                    precio: 4500, 
                    stock: 16, 
                    category: 'Accesorios',
                    descuento: 'Envío Gratis'
                },
                { 
                    id: '7', 
                    name: 'Yerba Verdeflor sin acidez', 
                    image: 'yerba1.jpg', 
                    precio: 2300, 
                    stock: 12, 
                    category: 'Yerbas',
                    descuento: '$13.000 OFF SUMMER SALE',
                    descuento: 'No disponible'
                },
                { 
                    id: '8', 
                    name: 'Yerba Suave Rosamonte', 
                    image: 'yerba2.jpg', 
                    precio: 4000, 
                    stock: 90, 
                    category: 'Yerbas',
                    descuento: 'No disponible'
                },
                { 
                    id: '9', 
                    name: 'Porta Mate XXL EcoCuero', 
                    image: 'portamate.jpg', 
                    precio: 15679, 
                    stock: 2, 
                    category: 'Equipos',
                    descuento: 'No disponible'
                },
                { 
                    id: '10', 
                    name: 'Porta Mate EcoFriendly', 
                    image: 'portamate2.jpg', 
                    precio: 20000, 
                    stock: 1, 
                    category: 'Equipos',
                    descuento: '20% OFF'
                },
                { 
                    id: '11', 
                    name: 'Porta Mate Cuerina', 
                    image: 'portamate3.jpg', 
                    precio: 12000, 
                    stock: 2, 
                    category: 'Equipos',
                    descuento: '50% en la segunda unidad'
                },
                { 
                    id: '12', 
                    name: 'Porta Mate Beige Zara', 
                    image: 'portamate4.jpg', 
                    precio: 12300, 
                    stock: 0, 
                    category: 'Equipos',
                    descuento: 'No disponible'
                },
                { 
                    id: '13', 
                    name: 'Edulcorante Chuker 250cm3', 
                    image: 'chuker.jpg', 
                    precio: 1400, 
                    stock: 135, 
                    category: 'Endulzantes',
                    descuento: 'No disponible'
                },
                { 
                    id: '14', 
                    name: 'Edulcorante Chuker 400cm3', 
                    image: 'chuker2.jpg', 
                    precio: 1890, 
                    stock: 400, 
                    category: 'Endulzantes',
                    descuento: 'No disponible'
                },
                { 
                    id: '15', 
                    name: 'Azúcar Refinada Ledesma 1kg', 
                    image: 'azucar.jpg', 
                    precio: 1200, 
                    stock: 9, 
                    category: 'Endulzantes',
                    descuento: 'No disponible'
                },
                { 
                    id: '16', 
                    name: 'Mate Calabaza XXL', 
                    image: 'mate2.jpg', 
                    precio: 12900, 
                    stock: 2, 
                    category: 'Mates',
                    descuento: '10% OFF VISA DÉBITO'
                },
                { 
                    id: '17', 
                    name: 'Mate Cerámica-Roble', 
                    image: 'mate3.jpg', 
                    precio: 15300, 
                    stock: 2, 
                    category: 'Azucareras',
                    descuento: 'No disponible'
                },
                { 
                    id: '18', 
                    name: 'Azucarera Vidrio', 
                    image: 'azucarera1.jpg', 
                    precio: 5400, 
                    stock: 3, 
                    category: 'Equipos',
                    descuento: '10% OFF VISA DÉBITO'
                },
                { 
                    id: '19', 
                    name: 'Azucarera/yerbero', 
                    image: 'azucarera2.jpg', 
                    precio: 8900, 
                    stock: 5, 
                    category: 'Azucareras',
                    descuento: '10% OFF VISA DÉBITO'
                },
                { 
                    id: '20', 
                    name: 'Azucarera Acero', 
                    image: 'azucarera3.jpg', 
                    precio: 6900, 
                    stock: 6, 
                    category: 'Azucareras',
                    descuento: '10% OFF VISA DÉBITO'
                },
            ];
            resolve(productsData);
        }, 200);
    });
};

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise ((resolve) => {
    setTimeout(() => {
        resolve(products.find(prod => prod.category === category))
    }, 500);
});
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};
