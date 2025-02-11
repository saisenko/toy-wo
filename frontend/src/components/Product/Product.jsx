import PropTypes from 'prop-types';

import styles from './Product.module.css';

import Button from '../Button/Button.jsx';

function Product({ name, price, image, rating }) {
    return (
        <div id={styles.productContainer}>
            <h1 id={styles.productName}>{name}</h1>
            <img id={styles.productImg} src={image} alt="Product Image" />
            <div className={styles.productInfo}>
                <p id={styles.rating}>{rating}</p>
                <p id={styles.price}>{price + " UAH"}</p>
            </div>
            <Button>Add to cart</Button>
        </div>
    );
}

// Product.propTypes = {
//     name: PropTypes.string,
//     price: PropTypes.number,
//     image: PropTypes.string,
//     rating: PropTypes.number
// }

export default Product;