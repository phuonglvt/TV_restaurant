import styles from "../styles/Cart.module.css";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pizza from "../pages/images/pizza.jpeg";

const Cart = () => {
    return (
        <div className={styles.containers}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.left}>
                    <table className={styles.table}>
                        <tr className={styles.trTitle}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extra</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image src={pizza} layout='fill' objectFit='cover' width={100} alt="" />
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>SMOKED MEAT</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Double ingredient, spicy sauce
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>49.000vnd</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>98.000vnd</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>CART TOTAL</h2>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Subtotal:</b>98.000vnd
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Discount:</b>0
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Total:</b>98.000vnd
                        </div>
                        <button className={styles.button}>CHECKOUT!</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart