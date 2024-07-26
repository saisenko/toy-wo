import styles from './Categories.module.css'

function Categories() {
    return (
        <>
            <div className={styles.contentContainer}>
                <div className={styles.categoriesDropdown}>
                    <h2 className={styles.options}>Categories <i className="fa-solid fa-list"></i></h2>
                    <div className={styles.categoriesDropdownContent}>
                        <a className={styles.categoriesOption} href="#">Wooden Toys</a>
                        <a className={styles.categoriesOption} href="#">Woolen Toys</a>
                        <a className={styles.categoriesOption} href="#">Plastic Toys</a>
                    </div>            
                </div>
                <div className={styles.latestGoods}>
                    <h2 className={styles.options}>Latest Goods <i className="fa-solid fa-store"></i></h2>
                </div>
                <div className={styles.bestsellerGoods}>
                    <h2 className={styles.options}>Bestsellers <i className="fa-solid fa-meteor"></i></h2>
                </div>
            </div>
        </>
    );
}

export default Categories;