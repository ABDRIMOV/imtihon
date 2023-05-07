import {FC} from 'react'
import classes from './toggleMenu.module.css'
import Link from 'next/link'
import { useState } from "react";
import Image from "next/image";
import img1 from '../../../public/img/header-img/search.png'
import style from './toggleMenu.module.css'
import Katalog_menu from '../katalog_burger/katalog_menu'
const ToggleMenu:FC = () => {


  const [katalogMenu, setkatalogMenu] = useState(false)
  return (
    <>
    <div className={style.burgerMenu}>
      <div className={classes.search_wrap}>
      <Image className={classes.img1} src={img1} alt="search"/>
    <input type="text" className={classes.search_input} />
      </div>
      <hr style={{width:'95%',background:'black'}} />
    <nav className={classes.link__wrap}>
                 <button onClick={()=>setkatalogMenu(!katalogMenu)} className={classes.link1}>Каталог</button>
                <Link className={classes.link2} href={'/brend'}>Бренды</Link><br />
                <Link className={classes.link3} href={'/palitra'}>Палитра</Link><br />
                <Link className={classes.link4} href={'/magazin'}>магазины</Link><br />
                <Link className={classes.link5} href={'/chegirma'}>Акции</Link>
            </nav>
    </div>
    { katalogMenu &&  <Katalog_menu/>} 

    </>
  )
}

export default ToggleMenu