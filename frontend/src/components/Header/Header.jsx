import styles from './Header.module.css'

import Button from '../../components/Button/Button.jsx'

function Header() {
    const logoIconPath = "./src/assets/light/logo-icon-light.svg"
    const logoTextPath = "./src/assets/light/logo-text-light.svg"
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.siteLogo}>
                    <img src={logoIconPath} alt="logo icon" />
                    <img src={logoTextPath} alt="logo text" />
                </div>
                <div className={styles.siteSearchbar}>
                    <input
                        type="text"
                        placeholder="Looking for..."
                        name="searchPrompt"
                        id="searchBox"
                        className={styles.searchBox}
                    />
                    <i className="fa-solid fa-magnifying-glass" />
                </div>
                <div className={styles.siteNavbar}>
                    <Button>
                        <p>Бажане</p>
                        <i className="fa-solid fa-heart"></i>
                    </Button>
                    <Button>
                        <p>Кошик</p>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Button>
                </div>
                <div className={styles.siteUser}>
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>
        </>
    );
}

export default Header;