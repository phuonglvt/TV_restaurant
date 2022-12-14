import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Add from '../components/Pizza/Add'
import AddButton from '../components/Pizza/AddButton'
import BurgerList from '../components/Burger/BurgerList'
import DrinksList from '../components/Drinks/DrinksList'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OthersList from '../components/Others/OthersList'
import PizzaList from '../components/Pizza/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home({pizzaList}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Fast Food Restaurant</title>
        <meta name="description" content="Best Fast Food in Greenwich" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList}/>
      {!close && <Add setClose={setClose}/>}
      <BurgerList />
      {!close && <Add setClose={setClose}/>}
      <DrinksList />
      {!close && <Add setClose={setClose}/>}
      <OthersList />
      {!close && <Add setClose={setClose}/>}
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products", {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'application/json',
    },
  });
  return{
    props:{
      pizzaList:res.data,
    }
  }
}