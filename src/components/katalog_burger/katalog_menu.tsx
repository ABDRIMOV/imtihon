import {FC} from 'react'
import classes from './katalog_menu.module.css'
import Link from 'next/link'
import Image from "next/image";
import img1 from '../../../public/img/header-img/search.png'
import style from './katalog_menu.module.css'
const ToggleMenu:FC = () => {
  return (
    <>
    <div className={style.katalog_menu}>
       <div className={classes.k__menu_wrap1}>
        <b className={classes.k__menu_title}>Распродажа</b> <br />
       <div className={classes.footer__text_wrap}>
       <b className={classes.footer__info_text}>Акрил</b> <br /><br />
        <b className={classes.footer__info_text}>Акригель и полигель</b> <br /><br />
        <b className={classes.footer__info_text}>Аппараты</b> <br /><br />
        <b className={classes.footer__info_text}>Аксессуары</b> <br /><br />
        <b className={classes.footer__info_text}>Боры, фрезы и колпачки</b> <br /><br />
        <b className={classes.footer__info_text}>Гель</b> <br /><br />
        <b className={classes.footer__info_text}>Гель-лак</b> <br /><br />
        <b className={classes.footer__info_text}>Жидкости</b> <br /><br />
        <b className={classes.footer__info_text}> бафы и шлифовщики</b> <br />
       </div>
       </div>
       <div className={classes.k__menu_wrap2}>
        <b className={classes.k__menu_title}>Распродажа</b> <br />
       <div className={classes.footer__text_wrap}>
       <b className={classes.footer__info_text}>Акрил</b> <br /><br />
       <b className={classes.footer__info_text}>Аппараты</b> <br /><br />
        <b className={classes.footer__info_text}>Акригель и полигель</b> <br /><br />
        <b className={classes.footer__info_text}>Гель-лак</b> <br /><br />
        <b className={classes.footer__info_text}>Боры, фрезы и колпачки</b> <br /><br />
        <b className={classes.footer__info_text}>Аксессуары</b> <br /><br />
        <b className={classes.footer__info_text}>Гель</b> <br /><br />
        <b className={classes.footer__info_text}>Жидкости</b> <br /><br />
        <b className={classes.footer__info_text}>Полировщики, бафы и шлифовщики</b> <br />
       </div>
       </div>
       <div className={classes.k__menu_wrap3}>
        <b className={classes.k__menu_title}>Распродажа</b> <br />
       <div className={classes.footer__text_wrap}>
       <b className={classes.footer__info_text}>Аксессуары</b> <br /><br />
        <b className={classes.footer__info_text}>Боры, фрезы и колпачки</b> <br /><br />
        <b className={classes.footer__info_text}>Гель</b> <br /><br />
        <b className={classes.footer__info_text}>Гель-лак</b> <br /><br />
       <b className={classes.footer__info_text}>Акрил</b> <br /><br />
        <b className={classes.footer__info_text}>Акригель и полигель</b> <br /><br />
        <b className={classes.footer__info_text}>Аппараты</b> <br /><br />

        <b className={classes.footer__info_text}>Жидкости</b> <br /><br />
        <b className={classes.footer__info_text}>Полировщики</b> <br />
       </div>
       </div>
     </div>
    </>
  )
}

export default ToggleMenu