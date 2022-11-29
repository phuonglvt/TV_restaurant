import styles from "../../styles/Pizza/PizzaCart.module.css";
import Image from "next/image";
import Link from "next/link";

const PizzaCart = ({pizza}) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/pizza/${pizza._id}`} passHref>
                <img src={pizza.img} alt="" width="250" height="200"/>
            </Link>
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>{pizza.prices[0]}vnd</span>
            <p className={styles.desc}>
                {pizza.desc}
            </p>
        </div>
    )
}

export default PizzaCart
