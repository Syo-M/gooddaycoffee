import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-white.svg";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav>
                <ul className={styles.footerNav}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/coffee">Coffee</Link>
                    </li>
                    <li>
                        <Link to="/barista">Barista</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <small className={styles.copyright}>
                <img src={logo} alt="Logo" />
                <br />
                ALL RIGHTS RESERVED.
            </small>
        </footer>
    );
}
