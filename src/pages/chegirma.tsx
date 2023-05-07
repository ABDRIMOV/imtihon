import Head from 'next/head'
import React from 'react'
import classes from '../styles/chegirma.module.css'
import Image from 'next/image'
import a19 from '../../public/img/home-img/19.png'
import a20 from '../../public/img/home-img/20.png'
import a6 from '../../public/img/home-img/6.png'
import a7 from '../../public/img/home-img/7.png'
const  Акции = () => {
  return (
  <>
    <Head>
        <title>Акции page</title>
    </Head>
    <div className={classes.wrapper}>
      <b className={classes.page_logo}>Акции </b> 
     <div className={classes.wrap}>
         <div className={classes.card}>
          <div className={classes.card__text_wrap}>
          <b>скидка 25% на Mio nails</b><br />
            <b>1 ноября - 30 ноября</b>
          </div>
            <Image className={classes.card__img} src={a6} alt='/'/>
         </div>
         <div className={classes.card}>
          <div className={classes.card__text_wrap}>
          <b>скидка 25% на Mio nails</b><br />
            <b>1 ноября - 30 ноября</b>
          </div>
            <Image className={classes.card__img} src={a7} alt='/'/>
         </div>
         <div className={classes.card}>
          <div className={classes.card__text_wrap}>
          <b>скидка 25% на Mio nails</b><br />
            <b>1 ноября - 30 ноября</b>
          </div>
            <Image className={classes.card__img} src={a19} alt='/'/>
         </div>
         <div className={classes.card}>
          <div className={classes.card__text_wrap}>
          <b>скидка 25% на Mio nails</b><br />
            <b>1 ноября - 30 ноября</b>
          </div>
            <Image className={classes.card__img} src={a20} alt='/'/>
         </div>
     </div>
    </div>
  </>
  )
}

export default Акции