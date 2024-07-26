import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.aboutInfo}>
                <h3>About Us</h3>
                <ul>
                    <li>Sales</li>
                    <li>Delivery</li>
                    <li>Payment</li>
                    <li>Facilities</li>
                </ul>
            </div>
            <div className={styles.socialInfo}>
                <h3>Our Contacts</h3>
                <ul>
                    <li><i className="fa-solid fa-phone"></i> +123456789</li>
                    <li><i className="fa-solid fa-phone"></i> +123456789</li>
                    <li>
                        <div className={styles.socialMedia}>
                            <i className={`${styles.socialMediaIcon} fa-brands fa-instagram`}></i>
                            <i className={`${styles.socialMediaIcon} fa-brands fa-facebook`}></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
