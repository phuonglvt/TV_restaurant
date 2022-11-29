import styles from "../../styles/Burger/BurgerCart.module.css";
import burger from "../../public/pages/images/burger.jpeg";
import Image from "next/image";

const BurgerCart = () => {
    return (
        <div className={styles.container}>
            <Image src={burger} alt="" width="300" height="200"/>
            <h1 className={styles.title}>SMOKED MEAT HAMBURGER</h1>
            <span className={styles.price}>49.000vnd</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
}

export default BurgerCart