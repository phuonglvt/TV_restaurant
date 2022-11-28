import styles from "../../styles/Pizza/PizzaCart.module.css";
import pizza1 from "../../pages/images/pizza.jpeg";
import Image from "next/image";
// import Image from "react";

const PizzaCart = ({pizza}) => {
    return (
        <div className={styles.container}>
            
            <Image src={require (pizza.img)} alt="" width="300" height="200"/>

            {/* <img src={require (pizza.img)} alt="" width="300" height="200"/> */}
            {/* <img src={require("../../pages/images/pizza.jpeg")} alt="" width="300" height="200"/> */}
            <h1 className={styles.title}>{pizza.img}</h1> 
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>{pizza.prices[0]}vnd</span>
            <p className={styles.desc}> 
                {pizza.desc}
            </p>
        </div>
    )
}

export default PizzaCart