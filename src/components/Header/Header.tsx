import React  from "react";
import Link from "next/link";
import { FC } from "react";
import ToggleMenu from '../toggleMenu/toggleMenu'
import classes from './Header.module.css';
import Profile_menu from '../profile-menu/profile_menu'
import Image from "next/image";
import { useState } from "react";
import Katalog_menu from '../katalog_burger/katalog_menu'
import { useRouter } from 'next/router'
import img1 from '../../../public/img/header-img/search.png'
import img from '../../../public/img/logo-img/logo.png'
import img2 from '../../../public/img/header-img/profile.png'
import img3 from '../../../public/img/header-img/like.png'
import img4 from '../../../public/img/header-img/market.png'
import Menu from '../../../public/img/menu-img/menu.png'
const Header:FC = () => {
    const {push} = useRouter()
    const [showToogleMenu, setShowToogleMenu] = useState(false)
    const [katalogMenu, setkatalogMenu] = useState(false)
    const [profileMenu, setprofileMenu] = useState(false)
    return(
        <>
        <header className={classes.container}>
          <div className={classes.wrapper}>
            <Image onClick={()=>push('/')} className={classes.img} src={img} alt="logo"/>
            <nav className={classes.link__wrap}>
                <button onClick={()=>setkatalogMenu(!katalogMenu)} className={classes.link1}>Каталог</button>
                <Link className={classes.link2} href={'/brend'}>Бренды</Link>
                <Link className={classes.link3} href={'/palitra'}>Палитра</Link>
                <Link className={classes.link4} href={'/market'}>магазины</Link>
                <Link className={classes.link5} href={'/chegirma'}>Акции</Link>
            </nav>
            <div className={classes.wrap}>
           <a href="/search"><Image className={classes.img1} src={img1} alt="search"/></a> 
           <a  className={classes.profile_link} href="/profile">
               <Image className={classes.img2} src={img2} alt="profile"/></a>
           <a href="/sevimli" ><Image className={classes.img3} src={img3} alt="like"/></a>
           <a href="/my_card"><Image className={classes.img4} src={img4} alt="market"/></a>
            
            
            </div>
          </div>
           
        </header>
    <button onClick={()=>setShowToogleMenu(!showToogleMenu)} className={classes.Burger__Menu}>
        <Image className={classes.burger__img} src={Menu} alt="burger-menu" />
        </button>
    { showToogleMenu &&  <ToggleMenu/>} 
    { katalogMenu &&  <Katalog_menu/>} 
    { profileMenu &&  <Profile_menu/>} 
  </>
    )
}
export default Header