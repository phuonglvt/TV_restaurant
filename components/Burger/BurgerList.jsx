import styles from "../../styles/Burger/BurgerList.module.css";
import BurgerCart from "./BurgerCart";

const BurgerList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>HAMBURGER</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in 
                pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor sit 
                amet consectetur adipisicing elit. Nemo sequi exercitationem repellendus 
                voluptates consectetur perspiciatis omnis a nostrum perferendis, incidunt 
                laboriosam odit? Fuga, dolore! Impedit corrupti ut minima itaque ullam.
            </p>
            <div className={styles.wrapper}>
                <BurgerCart/>
                <BurgerCart/>
                <BurgerCart/>
                <BurgerCart/>
                <BurgerCart/>
                <BurgerCart/>
            </div>
        </div>
    )
}

export default BurgerList