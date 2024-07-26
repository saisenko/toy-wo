import styles from './Carousel.module.css'
import Button from '../Button/Button.jsx';

import PropTypes from 'prop-types';

function Carousel({ header }) {
    return (
        <>
            <h1>{header}</h1>
            <div className={styles.imgContainer}>
                <img src="/img1.jpg" alt="img1" />
                <img src="/img1.jpg" alt="img2" />
                <img src="/img1.jpg" alt="img3" />
                <img src="/img1.jpg" alt="img4" />
                <Button>Show More</Button>
            </div>
        </>
    );
}

Carousel.propTypes = {
    header: PropTypes.string,
}

export default Carousel;