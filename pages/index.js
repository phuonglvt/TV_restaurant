import axios from 'axios'
import Head from 'next/head'
import { useEffect } from 'react'
import BurgerList from '../components/Burger/BurgerList'
import DrinksList from '../components/Drinks/DrinksList'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OthersList from '../components/Others/OthersList'
import PizzaList from '../components/Pizza/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home({pizzaList}) {

  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Fast Food Restaurant</title>
        <meta name="description" content="Best Fast Food in Greenwich" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList}/>
      <BurgerList />
      <DrinksList />
      <OthersList />
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3001/api/products");
  return{
    props:{
      pizzaList:res.data,
    }
  }
}