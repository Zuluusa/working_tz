import React from 'react'

import logoIcon from '../assets/img/ic_logo.svg'
import personIcon from '../assets/img/ic_person.svg'

function Header() {
   const [header, setHeader] = React.useState(false)

   const changeBackground = () => {
      if(window.scrollY >= 80) {
         setHeader(true)
      } else {
         setHeader(false)
      }
   }

   const handleScroll = () => {
      window.scrollTo(0, 0)
   }

   window.addEventListener('scroll', changeBackground)

   return (
      <header className={header ? 'header active' : 'header'}>
         <div className="header__row">
               <div className="header__logo" onClick={handleScroll}>
                  <img src={logoIcon} alt="Header logo icon"/>
                  <h2>Wrench CRM</h2>
               </div>
               <div className="header__person">
                  <img src={personIcon} alt="Header person icon"/>
                  <p>Имя Фамилия</p>
               </div>
            </div>
      </header>
   )
}

export default Header;