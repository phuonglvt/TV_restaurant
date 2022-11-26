
import styles from "../../../styles/ProductPizza.module.css";
import Image from "next/image";
import pizza1 from "../../images/pizza.jpeg";
import { useState } from "react";
import smallSize from "../../images/pizza/smallSize.png";
import mediumSize from "../../images/pizza/mediumSize.png";
import largeSize from "../../images/pizza/largeSize.png";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";


const ProductPizza = () => {
    const [size, setSize] = useState(0);
    const pizza ={
        id: 1,
        image: pizza1,
        name: "SMOKED MEAT",
        price: [49.000, 59.000, 79.000],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
    };

    return (
        <div className={styles.containers}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={pizza.image} width={600} alt=""/>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{pizza.name}</h1>
                    <span className={styles.price}>{pizza.price[size]}vnd</span>
                    <p className={styles.desc}>{pizza.desc}</p>
                    <h3 className={styles.choose}>Choose the size</h3>
                    <div className={styles.sizes}>
                        <div className={styles.size} onClick={()=>setSize(0)}>
                            <Image src={smallSize} layout='fill' width={30} alt=""/>
                            <span className={styles.number}> Small</span>
                        </div>
                        <div className={styles.size}onClick={()=>setSize(1)}>
                            <Image src={mediumSize} layout="fill" width={40} alt=""/>
                            <span className={styles.number}> Medium</span>
                        </div>
                        <div className={styles.size} onClick={()=>setSize(2)}>
                            <Image src={largeSize} layout="fill" width={50} alt=""/>
                            <span className={styles.number}> Large</span>
                        </div>
                    </div>
                    <h3 className={styles.choose}>Choose addition ingredients</h3>
                    <div className={styles.ingredients}>
                        <div className={styles.option}>
                            <input 
                                type="checkbox"
                                id="double"
                                name="double"
                                className={styles.checkbox}
                            />
                            <label htmlFor="double">Double Ingredients</label>
                        </div>
                        <div className={styles.option}>
                            <input 
                                type="checkbox"
                                id="cheese"
                                name="cheese"
                                className={styles.checkbox}
                            />
                            <label htmlFor="cheese">Extra Cheese</label>
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

export default ProductPizza