import axios from 'axios';

import styles from "../../../styles/ProductPizza.module.css";
import Image from "next/image";
import { useState } from "react";
import {useDispatch} from "react-redux";
import smallSize from "../../../public/pages/images/pizza/smallSize.png";
import mediumSize from "../../../public/pages/images/pizza/mediumSize.png";
import largeSize from "../../../public/pages/images/pizza/largeSize.png";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { addProduct } from '../../../redux/cartSlice';


const ProductPizza = ({pizza}) => {
    const [price, setPrice] = useState(pizza.prices[0]);
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState([]);
    const dispatch = useDispatch();

    const changePrice = (number) =>{
        setPrice(price + number);
    };

    const handleSize = (sizeIndex) =>{
        const difference = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    };

    const handleChange=(e,option) =>{
        const checked = e.target.checked;

        if(checked){
            changePrice(option.price);
            setExtras(prev=>[...prev,option])
        }else{
            changePrice(-option.price);
            setExtras(extras.filter(extra=>extra._id !== option._id));
        }
    };

    const handleClick = () =>{
        dispatch(addProduct({...pizza, extras, price, quantity}));
    };

    return (
        <div className={styles.containers}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                    <img src={pizza.img} alt="" width="600"/>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{pizza.title}</h1>
                    <span className={styles.price}>{price}vnd</span>
                    <p className={styles.desc}>{pizza.desc}</p>
                    <h3 className={styles.choose}>Choose the size</h3>
                    <div className={styles.sizes}>
                        <div className={styles.size} onClick={()=>handleSize(0)}>
                            <Image src={smallSize} layout='fill' width={30} alt=""/>
                            <span className={styles.number}> Small</span>
                        </div>
                        <div className={styles.size}onClick={()=>handleSize(1)}>
                            <Image src={mediumSize} layout="fill" width={40} alt=""/>
                            <span className={styles.number}> Medium</span>
                        </div>
                        <div className={styles.size} onClick={()=>handleSize(2)}>
                            <Image src={largeSize} layout="fill" width={50} alt=""/>
                            <span className={styles.number}> Large</span>
                        </div>
                    </div>
                    <h3 className={styles.choose}>Choose addition ingredients</h3>
                    <div className={styles.ingredients}>
                        {pizza.extraOptions.map(option=>(
                            <div className={styles.option} key={option._id}>
                                <input 
                                    type="checkbox"
                                    id={option.text}
                                    name={option.text}
                                    className={styles.checkbox}
                                    onChange={(e)=>handleChange(e,option)}
                                />
                                <label htmlFor="double">{option.text}</label>
                            </div>
                        ))}
                    </div>
                    <div className={styles.add}>
                        <input onChange={(e)=> setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity}/>
                        <button className={styles.button} onClick={handleClick}>Add Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/pizza/${params.id}`);
    return{
      props:{
        pizza:res.data,
      },
    };
};

export default ProductPizza