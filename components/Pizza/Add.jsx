import { useState } from "react";
import styles from "../../styles/AddButton.module.css";
import axios from "axios";
import { useRouter } from "next/router";


const Add = ({setClose}) =>{
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extra, setExtra] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);

    const changePrice = (e,index)=>{
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    }

    const handleExtraInput = (e) =>{
        setExtra({...extra, [e.target.name]: e.target.value});
    };

    const handleExtra = (e) =>{
        setExtraOptions(prev=>[...prev, extra]);
    };

    const handleCreate = async () =>{

    };


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={()=>setClose(true)} className={styles.close}>X</span>
                <h1>
                    Add a new Product
                </h1>  
                <div className={styles.item}>
                    <label className={styles.label}>Choose an image</label>
                    <input type="file"
                    onChange={(e)=>setFile(e.target.files[0])}/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input className={styles.input} type="text"
                    onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Desc</label>
                    <textarea 
                        className={styles.textArea}
                        rows={4}
                        type="text"
                        onChange={(e)=>setDesc(e.target.value)}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Prices</label>
                    <label className={styles.priceContainer}>
                    <input 
                        className={`${styles.input} ${styles.inputSmall}`}
                        type="number" 
                        placeholder="Small"
                        onChange={(e)=>changePrice(e,0)}
                    />
                    <input 
                        className={`${styles.input} ${styles.inputSmall}`}
                        type="number" 
                        placeholder="Medium"
                        onChange={(e)=>changePrice(e,1)}
                    />
                    <input 
                        className={`${styles.input} ${styles.inputSmall}`}
                        type="number" 
                        placeholder="Large"
                        onChange={(e)=>changePrice(e,2)}
                    />
                    </label>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Extra</label>
                    <div className={styles.extra}>
                        <input 
                            className={`${styles.input} ${styles.inputSmall}`}
                            type="text"
                            placeholder="Item"
                            name="text"
                            onChange={handleExtraInput}
                        />
                        <input 
                            className={`${styles.input} ${styles.inputSmall}`}
                            type="number"
                            placeholder="Price"
                            name="price"
                            onChange={handleExtraInput}
                        />
                        <button className={styles.extraButton} onClick={handleExtra}>
                            Add
                        </button>
                    </div>
                    <div className={styles.extraItems}>
                        {extraOptions.map(option =>(
                            <span 
                                key={option.text} 
                                className={styles.extraItem}
                            >
                                {option.text}
                            </span>
                        ))}
                    </div>
                    <button className={styles.addButton} onClick={handleCreate}>
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Add
