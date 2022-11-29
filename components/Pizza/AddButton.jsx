import styles from "../../styles/AddButton.module.css";
import Image from "next/image";
import Navbar from "../Navbar";
import Footer from "../Footer";


const AddButton = ({setClose}) =>{
    return (
        <div onClick={()=> setClose(false)} className={styles.mainAddButton}>
            Add New Product
        </div>
    )
}

export default AddButton