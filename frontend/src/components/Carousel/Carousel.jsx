import React, { useState } from 'react';
import Product from '../Product/Product.jsx';
import styles from './Carousel.module.css'; // Create styles for the carousel

function Carousel({ title, products, visibleCount = 4 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + visibleCount >= products.length ? 0 : prevIndex + visibleCount
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - visibleCount < 0 ? products.length - visibleCount : prevIndex - visibleCount
        );
    };

    const visibleProducts = products.slice(
        currentIndex,
        currentIndex + visibleCount
    );

    // Handle edge case where not enough products remain to fill visibleCount
    if (visibleProducts.length < visibleCount) {
        visibleProducts.push(
            ...products.slice(0, visibleCount - visibleProducts.length)
        );
    }

    return (
        <>    
            <h1 id={styles.title}>{title}</h1>
            <div className={styles.carousel}>
                <button className={styles.prevButton} onClick={prevSlide}>
                    &#10094;
                </button>
                <div className={styles.carouselContent}>
                    {visibleProducts.map((product, index) => (
                        <Product
                            key={index}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            rating={product.rating}
                        />
                    ))}
                </div>
                <button className={styles.nextButton} onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </>
    );
}

export default Carousel;