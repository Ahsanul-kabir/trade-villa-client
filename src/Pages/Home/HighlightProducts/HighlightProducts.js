import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Loading from '../../Shared/Loading';

const HighlightProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://trade-villa-server.onrender.com/products')
            .then(res => res.json())
            .then(data => {
                const slice = data.slice(0, 6);
                setProducts(slice)
            })
    }, [])

    if (products.length === 0) {
        return (<>
            <Loading></Loading>
        </>)
    } else {
        return (
            <div className="py-5">
                <Container>
                    <h1 className="text-center text-uppercase pt-5">TOP TRENDING</h1>
                    <div className="d-flex justify-content-center pb-3">
                        <hr style={{ width: '70px', height: '5px', marginTop: '0px', background: 'black' }} />
                    </div>
                    <Row>
                        {
                            products.map(product => <Product
                                key={product?._id}
                                product={product}
                            ></Product>)
                        }
                    </Row>

                </Container>
            </div>
        );
    }
};

export default HighlightProducts;