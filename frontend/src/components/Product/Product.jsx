import styles from './Product.module.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`api/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error fetching product:", error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.productContainer}>
            <img className={styles.productImg} src={product.image} alt="Product 1" />
            <div className={styles.productInfo}>
                <h1 className={styles.productName}>{product.name}</h1>
                <div className={styles.productDetails}>
                    <h2 id={styles.productPrice}>Price: ${product.price}</h2>
                    <h2 id={styles.productCategory}>Category: {product.category}</h2>
                    <h2 id={styles.productStock}>Stock: {product.stock}</h2>
                    <p id={styles.productDescription}>{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Product;