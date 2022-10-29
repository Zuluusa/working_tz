import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'

function Navbar() {
   const [sidebar, setSidebar] = React.useState(false)
   const [subnav, setSubnav] = React.useState(false)
   const showSidebar = () => setSidebar(!sidebar)
   const showSubnav = () => setSubnav(!subnav)


   return (
      <div className="navbar">
         <div className="menu-bars">
            <p onClick={showSidebar}>Меню</p>
         </div>
         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu__list">
               {SidebarData.map((item, index) => {
                  return (
                     <li key={index} className={item.cName}>
                        <Link to={item.path} onClick={item.subNav && showSubnav}>
                           <div className='nav-link'>
                              {item.icon}
                              <span>{item.title}</span>
                           </div>
                           <div className='subnav-show'>{item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}</div>
                        </Link>
                        {subnav && item.subNav?.map((item, index) => {
                           return (
                              <li key={index} className={item.cName}>
                                 <Link to={item.path}>
                                    <div className='icon'>
                                       {item.icon}
                                    </div>
                                    <span>{item.title}</span>
                                 </Link>
                              </li>
                           )
                        })}
                     </li>
                  )
               })}
            </ul>
         </nav>
      </div>
   )
}

export default Navbar;