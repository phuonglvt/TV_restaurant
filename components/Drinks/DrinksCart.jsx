import styles from "../../styles/Drinks/DrinksCart.module.css";
import pepsi from "../../pages/images/pepsi.jpg";
import Image from "next/image";

const DrinksCart = () => {
    return (
        <div className={styles.container}>
            <Image src={pepsi} alt="" width="400" height="300"/>
            <h1 className={styles.title}>PEPSI</h1>
            <span className={styles.price}>29.000vnd</span>
        </div>
    )
}

export default DrinksCart