import styles from "../../../styles/ProductDrinks.module.css";
import Image from "next/image";
import drink1 from "../../../public/pages/images/pepsi1.webp";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const ProductDrinks = () => {
    const drink = {
        id: 1,
        image: drink1,
        name: "PEPSI",
        price: [29.000],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
    };

    return(
        <div className={styles.containers}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={drink.image} width={600} alt=""/>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{drink.name}</h1>
                    <span className={styles.price}>{drink.price}vnd</span>
                    <p className={styles.desc}>{drink.desc}</p>
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

export default ProductDrinks