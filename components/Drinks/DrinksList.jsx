import styles from "../../styles/Drinks/DrinksList.module.css";
import DrinksCart from "./DrinksCart";

const DrinksList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>DRINKS</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in 
                pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor sit 
                amet consectetur adipisicing elit. Nemo sequi exercitationem repellendus 
                voluptates consectetur perspiciatis omnis a nostrum perferendis, incidunt 
                laboriosam odit? Fuga, dolore! Impedit corrupti ut minima itaque ullam.
            </p>
            <div className={styles.wrapper}>
                <DrinksCart/>
                <DrinksCart/>
                <DrinksCart/>
                <DrinksCart/>
                <DrinksCart/>
                <DrinksCart/>
                <DrinksCart/>
                <DrinksCart/>
            </div>
        </div>
    )
}

export default DrinksList