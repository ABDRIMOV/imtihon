import { FC } from "react";
 import classes from './Home.module.css'
import Image from "next/image";
import a1 from '../../../public/img/home-img/1.png'
import a2 from '../../../public/img/home-img/2.png'
import a3 from '../../../public/img/home-img/3.png'
import a5 from '../../../public/img/home-img/5.png'
import a6 from '../../../public/img/home-img/6.png'
import a7 from '../../../public/img/home-img/7.png'
import a8 from '../../../public/img/home-img/8.png'
import a9 from '../../../public/img/home-img/9.png'
import a10 from '../../../public/img/home-img/10.png'
import a11 from '../../../public/img/home-img/11.png'
import a12 from '../../../public/img/home-img/12.png'
import a13 from '../../../public/img/home-img/13.png'
import a14 from '../../../public/img/home-img/14.png'
import a15 from '../../../public/img/home-img/a15.png'
import a16 from '../../../public/img/home-img/a16.png'
import a17 from '../../../public/img/home-img/a17.png'
import a18 from '../../../public/img/home-img/a18.png'


const Home: FC = () => {
    return (
        <>
        <div className={classes.wrapper}>

        <div className={classes.container}>
           <div className={classes.title_wrap}>
               <h2 className={ classes.title_text}>Скидки на средства для ухода за кожей</h2>
           </div> 
           <Image src={a1} className={classes.a1}  alt="/"/>
           <div className={classes.card1_wrap}>
            <h1 className={classes.title2}>Новинки</h1>

             <a href="../../links/new_folder/new__1/new" className={classes.home__card1_wrap}>
                   <div className={classes.card1}>
                       <Image className={classes.card1_img} src={a2} alt="/"/>
                       <b className={classes.card1_info}>Linto beauty, GEL POLISH</b><br />
                       <b className={classes.card1_cena}>520 ₽</b>
                   </div>
                   <div className={classes.card1}>
                       <Image className={classes.card1_img} src={a3} alt="/"/>
                       <b className={classes.card1_info}>Linto beauty, GEL POLISH</b><br />
                       <b className={classes.card1_cena}>520 ₽</b>
                   </div>
                   <div className={classes.card1_none1}>
                       <Image className={classes.card1_img} src={a2} alt="/"/>
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
           <div className={classes.card2_wrap}>
            <h1 className={classes.title3}>Акции</h1>
             <div className={classes.home__card2_wrap}>
                   <a href="../../links/chegirma_folder/chegirma__first/chegirma" className={classes.card2}>
                       <Image className={classes.card2_img} src={a6} alt="/"/>
                       <div className={classes.card2__text_wrap1}>
                       <b className={classes.card2_info}>скидка 25% на Mio nails</b><br />
                       <p className={classes.card2_data}>1 ноября - 30 ноября </p>
                       </div>
                     
                   </a>
                   <a href="../../links/chegirma_folder/chegirma__second/chegirma" className={classes.card2_none}>
                   <Image className={classes.card2_img2} src={a7} alt="/"/>
                    
                    <div className={classes.card2__text_wrap2}>
                    <b className={classes.card2_info2}>скидка 25% на Mio nails</b><br />
                       <p className={classes.card2_data}>1 ноября - 30 ноября </p>
                    </div>
                   </a>
             </div>
           </div>
           <div className={classes.card3_wrap}>
            <h1 className={classes.title2}>Бестселлеры</h1>

             <a  href="../../links/new_folder/new__2/new" className={classes.home__card1_wrap}>
                   <div className={classes.card1}>
                       <Image className={classes.card1_img} src={a8} alt="/"/>
                       <b className={classes.card1_info}>Linto beauty, GEL POLISH</b><br />
                       <b className={classes.card1_cena}>520 ₽</b>
                   </div>
                   <div className={classes.card1}>
                       <Image className={classes.card1_img} src={a9} alt="/"/>
                       <b className={classes.card1_info}>Linto beauty, GEL POLISH</b><br />
                       <b className={classes.card1_cena}>520 ₽</b>
                   </div>
                   <div className={classes.card1_none1}>
                       <Image className={classes.card1_img} src={a10} alt="/"/>
                       <b className={classes.card1_info}>Linto beauty, GEL POLISH</b><br />
                       <b className={classes.card1_cena}>520 ₽</b>
                   </div>
                   <div className={classes.card1_none}>
                       <Image className={classes.card1_img} src={a11} alt="/"/>
                       <b className={classes.card1_info}>Linto beauty, GEL POLISH</b><br />
                       <b className={classes.card1_cena}>520 ₽</b>
                   </div>
             </a>
           </div>
           <div className={classes.card4_wrap}>
                 <b className={classes.card4_title}>Присоединяйся к нам</b>
                 <div className={classes.card4}>
                    <Image src={a12} className={classes.a12} alt="/"/>
                    <Image src={a13} className={classes.a13} alt="/"/>
                    <Image src={a14} className={classes.a14} alt="/"/>
                 </div>
           </div>
           <div className={classes.card5_wrapper}>
            <h1 className={classes.card5_title}>Бренды</h1>
            <div className={classes.card5}>
                <Image src={a15} className={classes.card5_img1} alt="/"/>
                <Image src={a16} className={classes.card5_img} alt="/"/>
                <Image src={a17} className={classes.card5_img3} alt="/"/>
                <Image src={a18} className={classes.card5_img4} alt="/"/>
            </div>
           </div>
           
        </div>
        </div>
        </>
        
    )
} 
export default Home