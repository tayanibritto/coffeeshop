import React from "react";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <h1>CoffeeShop</h1>
            <p>Comece seu dia com a gente!</p>
        </header>
    );
}

export default Header;