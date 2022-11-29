import styles from "../styles/Feature.module.css";
import Image from "next/image";
import arrow_left from "../public/pages/images/arrl.png";
import arrow_right from "../public/pages/images/arrow_right.png";
import feature_1 from "../public/pages/images/feature.png";
import feature_2 from "../public/pages/images/feature_2.jpg";
import feature_3 from "../public/pages/images/feature_3.png";
import { useState } from "react";

const Featured = () => {
    const [index, setIndex] = useState(0)
    const images = [
        feature_3, feature_2, feature_1,
    ];

    const handleArrow = (direction) => {
        if(direction==="l"){
            setIndex(index !== 0 ? index-1: 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1: 0)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
                <Image src={arrow_left} layout='fill' objectFit="contain" alt="" width={100}/>
            </div>
            
            <div className={styles.wrapper} style={{transform:'translateX(${-100*index}vw)'}}>
                {images.map((images, i) => (
                    <div className={styles.imgContainer} key={i} >
                        <Image src={images} alt="" layout='fill' objectFit="contain"/>
                    </div>   
                ))}
            </div>
            <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")}> 
                <Image src={arrow_right} layout='fill' alt="" objectFit="contain" width={100}/>
            </div>
        </div>
    )
}

export default Featured