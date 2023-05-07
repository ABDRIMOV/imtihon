import Head from 'next/head'
import React from 'react'
import classes from '../styles/Market.module.css'
const  магазины = () => {
  return (
  <>
    <Head>
        <title>магазины page</title>
    </Head>
    <div className={classes.wrapper}>
          <div className={classes.wrap}>
       <b className={classes.logo}>Market</b>
       <p className={classes.map}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13635.616387764598!2d60.356781846656844!3d41.38609179367557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfa411a8e50c73%3A0x3920d4663f44b9c6!2sIchan%20Qa&#39;la!5e0!3m2!1suz!2s!4v1682961689388!5m2!1suz!2s" width="100%" height="500" loading="lazy" ></iframe></p>
          </div>
   

    </div>
  </>
  )
}

export default магазины