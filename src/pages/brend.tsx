import Head from 'next/head'
import React from 'react'
import classes from '../styles/brend.module.css'
const  Бренды = () => {
  return (
  <>
    <Head>
        <title>Бренды page</title>
    </Head>
    <div className={classes.wrapper}> 
       <input className={classes.fint__input} placeholder='найти бренд' type="text" />
       <h2 className={classes.h2_title}>0 — 9</h2>
       <div className={classes.find__text_wrap}>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>A</h2>
            <p>Adele</p>
            <p>Archdale</p>
            <p>Arnelle</p>
            <p>Artex</p>
         </div>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>B</h2>
            <p>Badele</p>
            <p>Barchdale</p>
            <p>Barnelle</p>
            <p>Bartex</p>
         </div>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>C</h2>
            <p>Cadele</p>
            <p>Carchdale</p>
            <p>Carnelle</p>
            <p>Cartex</p>
         </div>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>D</h2>
            <p>Dadele</p>
            <p>Darchdale</p>
            <p>Darnelle</p>
            <p>Dartex</p>
         </div>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>E</h2>
            <p>Edele</p>
            <p>Erchdale</p>
            <p>Ernelle</p>
            <p>Ertex</p>
         </div>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>F</h2>
            <p>Fadele</p>
            <p>Farchdale</p>
            <p>Farnelle</p>
            <p>Fartex</p>
         </div> 
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>G</h2>
            <p>Gadele</p>
            <p>Garchdale</p>
            <p>Garnelle</p>
            <p>Gartex</p>
         </div>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>I</h2>
            <p>Idele</p>
            <p>Irchdale</p>
            <p>Irnelle</p>
            <p>Irtex</p>
         </div>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>J</h2>
            <p>Jadele</p>
            <p>Jarchdale</p>
            <p>Jarnelle</p>
            <p>Jartex</p>
         </div>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>K</h2>
            <p>Kadele</p>
            <p>Karchdale</p>
            <p>Karnelle</p>
            <p>Kartex</p>
         </div>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>L</h2>
            <p>Ladele</p>
            <p>Larchdale</p>
            <p>Larnelle</p>
            <p>Lartex</p>
         </div> 
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>M</h2>
            <p>Madele</p>
            <p>Marchdale</p>
            <p>Marnelle</p>
            <p>Martex</p>
         </div>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>N</h2>
            <p>Nadele</p>
            <p>Narchdale</p>
            <p>Narnelle</p>
            <p>Nartex</p>
         </div>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>O</h2>
            <p>Odele</p>
            <p>Orchdale</p>
            <p>Ornelle</p>
            <p>Ortex</p>
         </div>
         <div className={classes.find__text}>
            <h2 className={classes.text_a}>P</h2>
            <p>Padele</p>
            <p>Parchdale</p>
            <p>Parnelle</p>
            <p>Partex</p>
         </div>
       </div>
    </div>
  </>
  )
}

export default Бренды