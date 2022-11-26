import styles from "../../styles/Order.module.css";
import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import paid from "/pages/images/paid.jpg";
import checked from "/pages/images/checked.jpg";
import preparing from "/pages/images/preparing.jpg";
import on_the_way from "/pages/images/delivery.jpg";
import delivered from "/pages/images/delivered.jpg";

const Orders = () => {

    const status = 0;

    const statusClass = (index) => {
        if(index - status < 1) return styles.done;
        if(index - status === 1) return styles.inProgress;
        if(index - status > 1) return styles.undone;
    };
    return(
        <div className={styles.containers}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.row}>
                        <table className={styles.table}>
                            <tr className={styles.trTitle}>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Address</th>
                                <th>Total</th>
                            </tr>
                            <tr className={styles.tr}>
                                <td>
                                    <span className={styles.id}>12345678</span>
                                </td>
                                <td>
                                    <span className={styles.name}>
                                        Phuong Luu
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.address}>Nguyen Cong Tru</span>
                                </td>
                                <td>
                                    <span className={styles.total}>98.000vnd</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className={styles.row}>
                        <div className={statusClass(0)}>
                            <Image src={paid} width={30} height={30} alt=""/>
                            <span>Payment</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkedIcon} src={checked} width={25} height={20} alt=""/>
                            </div>
                        </div>

                        <div className={statusClass(1)}>
                            <Image src={preparing} width={30} height={30} alt=""/>
                            <span>Preparing</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkedIcon} src={checked} width={25} height={20} alt=""/>
                            </div>
                        </div>

                        <div className={statusClass(2)}>
                            <Image src={on_the_way} width={30} height={30} alt=""/>
                            <span>On the way</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkedIcon} src={checked} width={25} height={20} alt=""/>
                            </div>
                        </div>

                        <div className={statusClass(3)}>
                            <Image src={delivered} width={30} height={30} alt=""/>
                            <span>Delivered</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkedIcon} src={checked} width={25} height={20} alt=""/>
                            </div>
                        </div>

                        
                    </div>
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
                        <button disabled className={styles.button}>PAID</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Orders