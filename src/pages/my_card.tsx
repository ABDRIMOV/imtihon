import Head from 'next/head'
import React from 'react'
import classes from '../styles/my_card.module.css'
import Link from 'next/link'
import { useState } from "react";
import Profile_menu from '../components/profile-menu/profile_menu'
import { type } from 'os';
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
            <div className={classes.card1}>
                <p>Бонусная карта</p>
                <b className={classes.card1__title}>Скидка 15%</b>
            </div>
            <div className={classes.my_card__tex_wrap}>
            <h4>Бонусная карта </h4>
            <h4>Сумма накоплений, необходимая для получения скидки</h4>
            <h4>Как получить карту?</h4>
            <p className={classes.text_info}>При совершении покупки от 5000 рублей и при заполнении всех граф анкеты, покупатель имеет возможность получить дисконтную карту и скидку 3%. Дисконтная карта и скидка по ней активируется сразу от даты выдачи карты.</p>
            <p className={classes.text_info}> Скидка на покупку предоставляется только при наличии дисконтной карты. Наличие номера дисконтной карты не является основанием для предоставления скидки. </p>
            <p className={classes.text_info}>Сумму накоплений на дисконтной карте возможно узнать в магазине во время покупки у кассира. Срок действия дисконтной карты не ограничен.</p>
            </div>
           
        </div>
    </div>
    { profileMenu &&  <Profile_menu/>} 
    

  </>
  )
}

export default My_card