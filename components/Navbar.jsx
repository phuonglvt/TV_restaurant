import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import logo from "../public/pages/images/logo.jpg"
import phone from "../public/pages/images/phone.png"
import cart from "../public/pages/images/cart.png"
import {useSelector} from "react-redux";
import Link from "next/link"

const Navbar = () => {

    const quantity = useSelector((state)=>state.cart.quantity);

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
                    <Link href="/" passHref>
                        <li className={styles.listItem}>Homepage</li>
                    </Link>
                    <li className={styles.listItem}>Products</li>  
                    <li className={styles.listItem}>Menu</li>
                    <Image src={logo} alt="" width="100" height="69"/>  
                    <li className={styles.listItem}>Events</li>  
                    <li className={styles.listItem}>Blog</li>  
                    <li className={styles.listItem}>Contact</li>  
                </ul>
            </div>

            <Link href="/cart" passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src={cart} alt="" width="30" height="30"/>
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar