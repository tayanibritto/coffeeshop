import styles from "./Footer.module.css";
import React from "react";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy;2026 - CoffeeShop - Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;