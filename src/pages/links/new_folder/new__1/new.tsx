import Head from 'next/head'
import React from 'react'
import classes from './new.module.css'
import Image from 'next/image'
import a2 from '../../../../../public/img/home-img/2.png'
import a3 from '../../../../../public/img/home-img/3.png'
import a4 from '../../../../../public/img/home-img/2.png'
import a5 from '../../../../../public/img/home-img/5.png'
const  Search = () => {
  return (
  <>
    <Head>
        <title>Новинки page</title>
    </Head>
    <div className={classes.wrapper}>
        <b className={classes.new__title}>ТЕБЕ также может понравиться</b>
    <a href="../../links/new_folder/new__1/new" className={classes.home__card1_wrap}>
                   <div className={classes.card1}>
                       <Image className={classes.card1_img1} src={a2} alt="/"/>
                       <b className={classes.card1_info}>Linto beauty, GEL POLISH</b><br />
                       <b className={classes.card1_cena}>520 ₽</b>
                   </div>
                   <div className={classes.card1__none2}>
                       <Image className={classes.card1_img} src={a3} alt="/"/>
                       <b className={classes.card1_info}>Linto beauty, GEL POLISH</b><br />
                       <b className={classes.card1_cena}>520 ₽</b>
                   </div>
                   <div className={classes.card1_none1}>
                       <Image className={classes.card1_img} src={a4} alt="/"/>
                       <b className={classes.card1_info}>Linto beauty, GEL POLISH</b><br />
                       <b className={classes.card1_cena}>520 ₽</b>
                   </div>
                   <div className={classes.card1_none}>
                       <Image className={classes.card1_img} src={a5} alt="/"/>
                       <b className={classes.card1_info}>Linto beauty, GEL POLISH</b><br />
                       <b className={classes.card1_cena}>520 ₽</b>
                   </div>
             </a>
    </div>
  </>
  )
}

export default Search