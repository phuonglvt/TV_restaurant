import styles from "../styles/Cart.module.css";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";


const Cart = () => {

    const [open, setOpen] = useState(false);
    const [cash, setCash] = useState(false);
    const cart = useSelector((state)=>state.cart);
    const amount = cart.total;
    const currency = "USD";
    const style = {"layout":"vertical"};
    const dispatch = useDispatch();
    const router = useRouter();

    const createOrder = async (data) =>{
        try{
            console.log(data);
            const res = await axios.post("http:/api/orders", data)
            console.log(res.data);
            console.log(res);

            res.status === 201 && router.push("/orders/"+res.data._id); 
            dispatch(reset());
        }catch(err){
            console.log(err);
        }
    }


    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);    


        return (<>
                { (showSpinner && isPending) && <div className="spinner" /> }
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            const  shipping = details.purchase_units[0].shipping;
                            createOrder({
                                customer:shipping.name.full_name, 
                                address: shipping.addres.addres_line_1,
                                total: cart.total,
                                method: 1,
                            })
                        });
                    }}
                />
            </>
        );
    }


    return (
        <div className={styles.containers}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.left}>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.trTitle}>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Extra</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {cart.products.map((product) => (
                                <tr className={styles.tr} key={product._id}>
                                    <td>
                                        <div className={styles.imgContainer}>
                                            <img src={product.img} layout='fill' objectFit='cover' width={100} alt="" />
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.name}>{product.title}</span>
                                    </td>
                                    <td>
                                        <span className={styles.extras}>
                                            {product.extras.map((extra)=>(
                                                <span key={extra._id}>{extra.text}, </span>
                                            ))}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={styles.price}>{product.price}</span>
                                    </td>
                                    <td>
                                        <span className={styles.quantity}>{product.quantity}</span>
                                    </td>
                                    <td>
                                        <span className={styles.total}>{product.price * product.quantity}vnd</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>CART TOTAL</h2>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Subtotal:</b>{cart.total}vnd
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Discount:</b>0
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Total:</b>{cart.total}vnd
                        </div>
                        {open ? (
                            <div className={styles.paymentMethods}>
                                <button className={styles.payButton} onClick={()=>setCash(true)}>CASH ON DELIVERY</button>
                                <PayPalScriptProvider
                                options={{
                                    "client-id": "AWjPyrDnnifauj7Isc_hiIxRSTgIz2iMFzXfiKw2M2aPc_LMr2CKbnm7IUrWtp_u4VYouA27jKViQ-T3",
                                    components: "buttons",
                                    currency: "USD",
                                    "disable-funding":"credit,card",
                                }}
                                >
                                    <ButtonWrapper
                                        currency={currency}
                                        showSpinner={false}
                                    />
                                </PayPalScriptProvider>
                            </div>
                        ) : (
                            <button onClick={()=>setOpen(true)} className={styles.button}>CHECKOUT!</button>
                        )}
                    </div>
                </div>
                {cash && (
                    <OrderDetail total = {cart.total} createOrder={createOrder}/>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Cart