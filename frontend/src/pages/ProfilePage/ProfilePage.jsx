import styles from "./ProfilePage.module.css";

import Button from "../../components/Button/Button.jsx";

function ProfilePage() {
    return (
        <div className={styles.container}>
            <div className={styles.userData}>
                <img id={styles.userProfilePic} src="../../../public/img/cheporte-sign-owl.png" alt="User Profile Pic"/>
                <div className={styles.userStats}>
                    <h1>John Doe</h1>
                    <p>With Us Since: dd.mm.yyyy</p>
                    <p>Location: city name</p>
                </div>
            </div>
            <div className={styles.profileOptions}>
                <Button className={styles.optionBtn}>Change User Name</Button>
                <Button className={styles.optionBtn}>Change Profile Pic</Button>
                <Button className={styles.optionBtn}>View Wishlist</Button>
                <Button className={styles.optionBtn}>Submit a Feedback</Button>
            </div>
        </div>
    );
}

export default ProfilePage;