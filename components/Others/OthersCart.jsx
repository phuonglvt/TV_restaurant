import styles from "../../styles/Others/OthersCart.module.css";
import italian_noodles from "../../pages/images/italian-noodles.jpeg";
import Image from "next/image";

const OthersCart = () => {
    return (
        <div className={styles.container}>
            <Image src={italian_noodles} alt="" width="300" height="200"/>
            <h1 className={styles.title}>SPAGHETTI</h1>
            <span className={styles.price}>49.000vnd</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
}

export default OthersCart