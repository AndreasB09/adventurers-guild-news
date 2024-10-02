import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>2024 Adventurers Guild</p>
            <p>The Vault giveth and the Vault taketh away... mostly taketh away</p>
        </footer>
    );
}

export default Footer;