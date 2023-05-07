import Head from 'next/head'
import React from 'react'
import classes from '../styles/search.module.css'
const  Search = () => {
  return (
  <>
    <Head>
        <title>Search page</title>
    </Head>
    <div className={classes.wrapper}>
        <input type="text" placeholder='хочу купить' className={classes.search__input} />
        <div className={classes.search__text_wrap}>
        <p>Adele</p>
        <p>Акригель и полигель</p>
        <p>Гель-лак</p>
        <p>Инструменты</p>
        <p>Лаки Solar Gel Kinetics</p>
        </div>
    </div>
  </>
  )
}

export default Search