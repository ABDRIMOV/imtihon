import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import classes from '../styles/profile.module.css'
import Link from 'next/link'
import { useState } from "react";
import Profile_menu from '../components/profile-menu/profile_menu'

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
       <div >
       <h1>Анна <br /> Иванова</h1>
           <div className={classes.wrap}>
              <div>

                <b className={classes.profile__title1}>Личные данные</b><br />
                <input placeholder='Анна' className={classes.profile__input2} type="text" />
                <input placeholder='Иванова' type="text" className={classes.profile__input} />
                <input placeholder='Отчество' type="text" className={classes.profile__input} />
                <input placeholder='01 / 12 / 1993' type="text" className={classes.profile__input} />
                <button className={classes.profile__btn}>сохранить</button>
              
              </div>
              <div>
                <b>Адрес</b><br />
                <input placeholder='Город' className={classes.profile__input1} type="text" />
                <input placeholder='Улица и дом' className={classes.profile__input} type="text" />
                <input placeholder='Квартира / Офис' className={classes.profile__input} type="text" />
                <input placeholder='Подъезд' className={classes.profile__input} type="text" />
                
              </div>
           </div>
       </div>
           
    
    </div>
    { profileMenu &&  <Profile_menu/>} 

  </>
  )
}

export default My_card