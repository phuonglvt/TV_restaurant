import styles from "../../../styles/ProductOthers.module.css";
import Image from "next/image";
import others1 from "../../images/italian-noodles.jpeg";
import { useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const ProductOthers = () => {
    const [size, setSize] = useState(0);
    const other ={
        id: 1,
        image: others1,
        name: "SPAGHETTI",
        price: [59.000, 79.000],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
    };
    return(
        <div className={styles.containers}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={other.image} width={600} alt=""/>
                    </div>
                </div>

                <div className={styles.right}>
                    <h1 className={styles.title}>{other.name}</h1>
                    <span className={styles.price}>{other.price[size]}vnd</span>
                    <p className={styles.desc}>{other.desc}</p>
                    <h3 className={styles.choose}>Choose the size</h3>
                    <div className={styles.sizes}>
                        <div className={styles.size} onClick={()=>setSize(0)}>
                            <span className={styles.number}> Small</span>
                        </div>
                        <div className={styles.size}onClick={()=>setSize(1)}>
                            <span className={styles.number}> Large</span>
                        </div>
                    </div>
                    <h3 className={styles.choose}>Choose addition ingredients</h3>
                    <div className={styles.ingredients}>
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

export default ProductOthers