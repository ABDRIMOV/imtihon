import Head from 'next/head'
import React from 'react'
import classes from '../styles/izobrajeniya.module.css'
import Link from 'next/link'
import { useState } from "react";
import Profile_menu from '../components/profile-menu/profile_menu'
import Image from 'next/image';
import a8 from '../../public/img/home-img/8.png'
import a10 from '../../public/img/home-img/10.png'
const  My_card = () => {
    const [profileMenu, setprofileMenu] = useState(false)

  return (
  <>
    <Head>
        <title>My card page</title>
    </Head>
    <div className={classes.wrapper}>
        <div className={classes.vlink_wrap}>
        <Link className={classes.vlink1} href={'/my_card'}>моя карта</Link><br />
        <Link className={classes.vlink2} href={'/profile'}>профиль</Link><br />
        <Link className={classes.vlink3} href={'/sevimli'}>избранное</Link><br />
        <Link className={classes.vlink4} href={'/market'}>мои покупки</Link><br />
        <Link onClick={()=>setprofileMenu(!profileMenu)} className={classes.vlink5} href={''}>выйти</Link>
        </div>
        <div>
            <h1>Анна <br /> Иванова</h1>
            <div className={classes.card_wrap}>
              <div className={classes.card}>
                 <Image className={classes.card__img} src={a8} alt='/'/>
                 <div className={classes.card__text_wrap}>
                    <b>TM Grape, Sculpture gel, pink № 10 (50g) </b><br /><br />
                    <b>1 800 ₽</b>
                 </div>
              </div>
              <div className={classes.card}>
                 <Image className={classes.card__img} src={a10} alt='/'/>
                 <div className={classes.card__text_wrap}>
                    <b>TM Grape, Sculpture gel, pink № 10 (50g) </b><br /><br />
                    <b>1 800 ₽</b>
                 </div>
              </div>
            </div>
          
           
        </div>
    </div>
    { profileMenu &&  <Profile_menu/>} 
    

  </>
  )
}

export default My_card