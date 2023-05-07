import Head from 'next/head'
import React from 'react'
import classes from './chegirma.module.css'
import Image from 'next/image'
import a6 from '../../../../../public/img/home-img/6.png'
const  Акции = () => {
  return (
  <>
    <Head>
        <title>Акции page</title>
    </Head>
    <div className={classes.chegirma__card_wrap}>
    <a  className={classes.card}>
                       <Image className={classes.card_img} src={a6} alt="/"/>
                       <div className={classes.card2__text_wrap1}>
                       <b className={classes.card2_info}>скидка 25% на Mio nails</b><br />
                       <p className={classes.card2_data}>1 ноября - 30 ноября </p>
                       </div>
                     
                   </a>
    </div>
  </>
  )
}

export default Акции