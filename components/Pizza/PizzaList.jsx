import styles from "../../styles/Pizza/PizzaList.module.css";
import PizzaCart from "./PizzaCart";

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PIZZA</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in 
                pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor sit 
                amet consectetur adipisicing elit. Nemo sequi exercitationem repellendus 
                voluptates consectetur perspiciatis omnis a nostrum perferendis, incidunt 
                laboriosam odit? Fuga, dolore! Impedit corrupti ut minima itaque ullam.
            </p>
            <div className={styles.wrapper}>
                <PizzaCart/>
                <PizzaCart/>
                <PizzaCart/>
                <PizzaCart/>
                <PizzaCart/>
                <PizzaCart/>
            </div>
        </div>
    )
}

export default PizzaList