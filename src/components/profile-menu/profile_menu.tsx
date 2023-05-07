import {FC} from 'react'
import Link from 'next/link'
import Image from "next/image";
import classes from './profile_menu.module.css'
const ToggleMenu:FC = () => {
  return (
    
    <>
  
      <div className={classes.wrapper}>
          <h1 className={classes.profile__title}>Войти или зарегистрироваться</h1>
        
        <input className={classes.profile__input} type="text"  placeholder='+998 (_ _ _) _ _ _- _ _-_ _' />
        <button className={classes.profile__btn}>получить код</button>
      </div>
   
     

    </>
  )
}

export default ToggleMenu