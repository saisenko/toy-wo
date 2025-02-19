import styles from "./ProfilePage.module.css";

import Button from "../../components/Button/Button.jsx";
import {useState} from "react";

function ProfilePage() {
    const [userName, setUserName] = useState("John Doe");
    const [userSignUpDate, setUserSignUpDate] = useState("dd.mm.yyyy");
    const [userLocation, setUserLocation] = useState("Bumblefuck");

    const changeUserName = (name) => setUserName(name);
    const changeUserLocation = (location) => setUserLocation(location);

    return (
        <div className={styles.container}>
            <div className={styles.userData}>
                <img id={styles.userProfilePic} src="../../../public/img/cheporte-sign-owl.png" alt="User Profile Pic"/>
                <div className={styles.userStats}>
                    <h1>{userName}</h1>
                    <p>With Us Since: {userSignUpDate}</p>
                    <p>Location: {userLocation}</p>
                </div>
            </div>
            <div className={styles.profileOptions}>
                <Button onClick={changeUserName}>Change User Name</Button>
                <Button>Change Profile Pic</Button>
                <Button onClick={changeUserLocation}>Change Location</Button>
                <Button>View Wishlist</Button>
                <Button>Submit a Feedback</Button>
            </div>
        </div>
    );
}

export default ProfilePage;