import styles from './Categories.module.css'

function Categories() {
    return (
        <div className={styles.container}>
            <h1 id={styles.title}>Категорії</h1>
            <div className={styles.categoriesContainer}>
                <button className={styles.category}>
                    <p className={styles.categoryName}>Нічники</p>
                    <i className="fa-solid fa-moon"></i>
                </button>
                <button className={styles.category}>
                    <p className={styles.categoryName}>Сувеніри/Подарунки</p>
                    <i className="fa-solid fa-film"></i>
                </button>
                <button className={styles.category}>
                    <p className={styles.categoryName}>Іграшки</p>
                    <i className="fa-solid fa-rainbow"></i>
                </button>
            </div>
        </div>
    );
}

export default Categories;