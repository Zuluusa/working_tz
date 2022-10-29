import React from 'react'
import { AddressSuggestions } from 'react-dadata'
import searchIcon from '../../../assets/img/Search.svg'

import classes from './Address.module.scss'

function Address () {
   const [value, setValue] = React.useState()

   return (
      <section className={classes.address}>
         <div className={classes.title}>
            <h1>Поиск адресов</h1>
         </div>
         <div className={classes.text}>
            <p>Введите интересующий вас адрес</p>
         </div>
         <div className={classes.search}>
            <AddressSuggestions token="855f912301930f91dbc0dba7b5b1b1f266907807" placeholder="Введите интересующий вас адрес" value={value} onChange={setValue} />
            <button className={classes.btn}>
               <img src={searchIcon} alt="Search address icon" />
               <span>Поиск</span>
            </button>
         </div>
      </section>
   )
}

export default Address