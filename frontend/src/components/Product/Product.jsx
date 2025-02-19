import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from './Product.module.css';
import Button from '../Button/Button.jsx';

function Product({ name }) {  // Accept 'name' as a prop for specific product fetching
    const [products, setProducts] = useState([]);  // Array for multiple products

    useEffect(() => {
        const endpoint = name ? `/api/products/${name}` : `/api/products`;

        fetch(endpoint)
            .then(res => res.json())
            .then(data => setProducts(Array.isArray(data) ? data : [data])) // Ensure data is always an array
            .catch(err => console.error('Error fetching products:', err));
    }, [name]);

    return (
        <>
            {products.map(product => (
                <div key={product.id} className={styles.productCard}>
                    <h1 className={styles.productName}>{product.name}</h1>
                    <img
                        className={styles.productImg}
                        src={product.image || "/img/cheporte-sign-owl.png"} // Fallback if no image
                        alt={product.name}
                    />
                    <div className={styles.productInfo}>
                        <p className={styles.rating}>{product.rating || "No rating"}</p>
                        <p className={styles.price}>{product.price} UAH</p>
                    </div>
                    <Button>Add to Cart</Button>
                </div>
            ))}
        </>
    );
}

// ✅ PropTypes for validation
Product.propTypes = {
    name: PropTypes.string // Optional prop for fetching a specific product
};

export default Product;
