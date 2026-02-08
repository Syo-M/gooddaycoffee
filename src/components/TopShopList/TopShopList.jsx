import styles from "./TopShopList.module.css";
import { shopList } from "./shoplist.js";

export default function TopShopList() {
    return (
        <section className={styles.shopListWrapper}>
            <h2 className={styles.shopListHeading}>Shop</h2>

            <div className={styles.shopListContainer}>
                {shopList.map((shop) => (
                    <section key={shop.id} className={styles.shopListSection}>
                        <img src={shop.imgSrc} alt={shop.imgAlt} />

                        <div className={styles.shopListItemWrap}>
                            <h3 className={styles.shopListNameHeadings}>{shop.name}</h3>
                            <dl className={styles.shopListInfo}>
                                {shop.info.map((row) => (
                                    <div key={row.label}>
                                        <dt>{row.label}</dt>
                                        <dd>{row.value}</dd>
                                    </div>
                                ))}
                            </dl>

                            <a
                                className={styles.googleMapLink}
                                href={shop.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>GOOGLE MAP</span>
                            </a>
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
}
