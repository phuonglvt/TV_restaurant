import styles from "../styles/Footer.module.css";
import Image from "next/image";
import background from "../public/pages/images/background.jpeg";


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src={background} objectFit="cover" width="600" height="400" alt=''/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID. TV FAST FOOD, WELL BAKED PIZZA, HAMBURGER AND OTHERS
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
                    <p className={styles.text}>
                        279 Nguyen Cong Tru
                        <br/> Danang, Vietnam
                        <br/> 0914393944
                    </p>
                    <p className={styles.text}>
                        482 Ton Duc Thang
                        <br/> Danang, Vietnam
                        <br/> 0914393944
                    </p>
                    <p className={styles.text}>
                        93 Phan Dinh Phung
                        <br/> Danang, Vietnam
                        <br/> 0914393944
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br/> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        WEEDKEND AND HOLIDAYS
                        <br/> 9:00 - 24:00
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer