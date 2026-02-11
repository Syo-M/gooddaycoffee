import React from "react";
import styles from "./MenuSection.module.css";
import { menuList } from "./menuList";

export default function MenuSection() {
    return (
        <section className={styles.section}>
            {menuList.map((item, index) => (
                <div key={index} className={styles.box} style={{ flexDirection: item.direction }}>
                    <div className={styles.menubox}>
                        <h2 className={styles.heading}>{item.title}</h2>

                        <ul className={styles.listbox}>
                            {item.menus.map((menu, i) => (
                                <li key={i}>
                                    <span>{menu.name}</span> <span>{menu.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.imgbox}>
                        <img src={item.image} alt={item.alt} />
                    </div>
                </div>
            ))}
        </section>
    );
}
