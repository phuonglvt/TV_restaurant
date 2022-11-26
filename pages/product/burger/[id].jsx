import styles from "../../../styles/ProductBurger.module.css";

import Image from "next/image";
import burger1 from "../../images/burger.jpeg";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const ProductBurger = () => {
    const burger ={
        id: 1,
        image: burger1,
        name: "BURGER ZINGER",
        price: [49.000],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
    };

    return(
        <div className={styles.containers}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={burger.image} width={600} alt=""/>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{burger.name}</h1>
                    <span className={styles.price}>{burger.price}vnd</span>
                    <p className={styles.desc}>{burger.desc}</p>
                    <h3 className={styles.choose}>Choose addition ingredients</h3>
                    <div className={styles.ingredients}>
                        <div className={styles.option}>
                            <input 
                                type="checkbox"
                                id="tomato"
                                name="tomato"
                                className={styles.checkbox}
                            />
                            <label htmlFor="tomato">Extra Tomatoes</label>
                        </div>
                        <div className={styles.option}>
                            <input 
                                type="checkbox"
                                id="lettuce"
                                name="lettuce"
                                className={styles.checkbox}
                            />
                            <label htmlFor="lettuce">Extra Lettuce</label>
                        </div>
                        <div className={styles.option}>
                            <input 
                                type="checkbox"
                                id="spicy"
                                name="spicy"
                                className={styles.checkbox}
                            />
                            <label htmlFor="spicy">Spicy Sauce</label>
                        </div>
                        <div className={styles.option}>
                            <input 
                                type="checkbox"
                                id="garlic"
                                name="garlic"
                                className={styles.checkbox}
                            />
                            <label htmlFor="garlic">Garlic Sauce</label>
                        </div>
                    </div>
                    <div className={styles.add}>
                        <input type="number" defaultValue={1} className={styles.quantity}/>
                        <button className={styles.button}>Add Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductBurger