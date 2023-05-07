import {FC} from 'react'
import { PropsWithChildren } from 'react'
import Header from '../Header/Header'

import classes from './Layout.module.css'
import Image from 'next/image'
import a19 from '../../../public/img/footer/instagram.png'
import a20 from '../../../public/img/footer/wk.png'
const Layout:FC<PropsWithChildren> = ({children}) => {
  return (
    <>
    <Header/>
    <main>{children}</main>
    <footer>
      <div className={classes.wrapper}>
        <b className={classes.footer_text}>Политика конфиденциальности</b>
        <div className={classes.footer__img_wrap}>
        <Image src={a19}  alt='/'/>
        <Image src={a20} style={{marginLeft:'20px'}} alt='/'/>
        </div>
        <b className={classes.footer_text}>Сайт разработан: Slepuhina Natalia </b>
      </div>
    </footer>
    </>
  )
}

export default Layout