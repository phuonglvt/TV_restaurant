import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import logo from "../pages/images/logo.jpg"
import phone from "../pages/images/phone.png"
import cart from "../pages/images/cart.png"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image
                        src={phone}
                        alt="" 
                        width={32} 
                        height={32}/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER_NOW!</div>
                    <div className={styles.text}>0914 3939 44</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>  
                    <li className={styles.listItem}>Menu</li>
                    <Image src={logo} alt="" width="100" height="69"/>  
                    <li className={styles.listItem}>Events</li>  
                    <li className={styles.listItem}>Blog</li>  
                    <li className={styles.listItem}>Contact</li>  
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src={cart} alt="" width="30" height="30"/>
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar