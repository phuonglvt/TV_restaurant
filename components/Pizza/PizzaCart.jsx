import styles from "../../styles/Pizza/PizzaCart.module.css";
import pizza from "../../pages/images/pizza.jpeg";
import Image from "next/image";

const PizzaCart = () => {
    return (
        <div className={styles.container}>
            <Image src={pizza} alt="" width="300" height="200"/>
            <h1 className={styles.title}>SMOKED MEAT PIZZA</h1>
            <span className={styles.price}>49.000vnd</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
}

export default PizzaCart