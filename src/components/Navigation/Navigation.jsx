// import style from "./Navigation.module.css";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Top</Link>
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
        </>
    );
}
