import Product from "../../components/Product/Product.jsx";
import Button from "../../components/Button/Button.jsx";

import styles from './ProductPage.module.css'

import { useState } from "react";

function validateInput(num, available) {
    const inputNum = parseInt(num, 10);

    if (isNaN(inputNum)) {
        alert("Please enter a valid number.");
    } else if (inputNum < 1 || !Number.isInteger(inputNum)) {
        alert("Please enter a valid integer greater than 0.");
    } else if (inputNum > available) {
        alert("Sorry, currently we don't have that much :(")
    } else {
        alert("Item(s) added to cart successfully!")
    }
}

function ProductPage() {
    const [inputValue, setInputValue] = useState('');
    const availableStock = 200;

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAdditionToCart = () => {
        validateInput(inputValue, availableStock);
    };

    return (
        <>
            <button className={styles.backBtn}><i className="fa-solid fa-caret-left"></i></button>        
            <div className={styles.container}>
                <Product/>
                <div className={styles.btns}>
                    <form action="">
                        <input
                            type="number"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Number of items..."/>
                    </form>
                    <Button onClick={handleAdditionToCart}>Add to Cart</Button>
                </div>
            </div>
        </>
    );
}

export default ProductPage;