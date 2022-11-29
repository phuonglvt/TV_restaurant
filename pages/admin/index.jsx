import styles from "../../styles/Admin.module.css"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Image from "next/image"
import pizza from "../../public/pages/images/pizza.jpeg"
import axios from "axios"
import { useState } from "react"

const Index = ({products}) =>{
    const [productList, setProductList] = useState(products)
    // const [orderList, setOrderList] = useState(orders)

    const handleDelete = async(id)=>{
        try{
            const res = await axios.delete("http://localhost:3000/api/products/"+id);
            setProductList(productList.filter(pizza=>pizza._id !== id));
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div className={styles.containers}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Products</h1>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.trTitle}>
                                <th>Image</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </tbody>
                        {productList.map((product)=>(
                            <tbody>  
                                <tr className={styles.trTitle}>
                                    <td>
                                        <img src={product.img} alt="" width={50} height={50} objectFit="cover"/>
                                    </td>
                                    <td>{product._id.slice(0,5)}...</td>
                                    <td>{product.title}</td>
                                    <td>{product.prices[0]}vnd</td>
                                    <td>
                                        <button className={styles.button}>Edit</button>
                                        <button 
                                            className={styles.button} 
                                            onClick={()=>handleDelete(product._id)}
                                    >
                                                Delete
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                <div className={styles.item}>
                <h1 className={styles.title}>Orders</h1>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.trTitle}>
                                <th>Id</th>
                                <th>Customer</th>
                                <th>Total</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </tbody>
                            <tbody>
                                <tr className={styles.trTitle}>
                                    <td>{"123456789234".slice(0,5)}...</td>
                                    <td>Phuong Luu</td>
                                    <td>50.000 vnd</td>
                                    <td>Paid</td>
                                    <td>Preparing</td>
                                    <td>
                                        <button>Next State</button>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const getServerSideProps = async ()=>{
    const productRes = await axios.get("http://localhost:3000/api/products",{headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'application/json',
      },
    });
    // const orderRes = await axios.get(`http://localhost:3000/api/orders/${params}`);
    // const orderRes = await axios.get("http://localhost:3000/api/orders", {headers: {
    //     'Content-Type': 'application/json',
    //     'Accept-Encoding': 'application/json',
    //   },});
    // const orderRes = await axios.get("http://localhost:3000/api/orders")
    return{
        props:{
            // orders: orderRes.data,
            products: productRes.data,
        },
    };
};

export default Index