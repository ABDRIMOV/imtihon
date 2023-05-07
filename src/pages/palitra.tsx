import Head from 'next/head'
import React from 'react'
import classes from '../styles/palitra.module.css'
import Image from 'next/image'
import palitra_img from '../../public/img/home-img/palitra_img.png'
const  Палитра = () => {
  return (
  <>
    <Head>
        <title>Палитра page</title>
    </Head>
    <div className={classes.wrapper}>
       <h1>Палитра </h1><br />
       <Image src={palitra_img} className={classes.palitra_img} alt='/'/>       
       <div className={classes.card_wrap}>
            <div className={classes.card1}>
               <div className={classes.card1__text_wrap}>
                 <b className={classes.card_title} >beautix</b><br />
                 <p className={classes.card_info}>в палитре 75 цвета </p>
               </div>
            </div>
            <div className={classes.card1}>
               <div className={classes.card1__text_wrap}>
                 <b className={classes.card_title} >beautix</b><br />
                 <p className={classes.card_info}>в палитре 75 цвета </p>
               </div>
            </div>
            <div className={classes.card1}>
               <div className={classes.card1__text_wrap}>
                 <b className={classes.card_title} >beautix</b><br />
                 <p className={classes.card_info}>в палитре 75 цвета </p>
               </div>
            </div>
            <div className={classes.card1}>
               <div className={classes.card1__text_wrap}>
                 <b className={classes.card_title} >beautix</b><br />
                 <p className={classes.card_info}>в палитре 75 цвета </p>
               </div>
            </div>
       </div>
    </div>
  </>
  )
}

export default Палитра