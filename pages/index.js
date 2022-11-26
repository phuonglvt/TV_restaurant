import Head from 'next/head'
import BurgerList from '../components/Burger/BurgerList'
import DrinksList from '../components/Drinks/DrinksList'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OthersList from '../components/Others/OthersList'
import PizzaList from '../components/Pizza/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Fast Food Restaurant</title>
        <meta name="description" content="Best Fast Food in Greenwich" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
      <BurgerList />
      <DrinksList />
      <OthersList />
      <Footer />
    </div>
  )
}
