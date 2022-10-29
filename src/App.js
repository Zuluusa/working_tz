import Layout from './components/layouts/Layout'
import Home from './components/page/home/Home'
import Address from './components/page/address/Address'
import Tables from './components/page/Tables'
import Calendar from './components/page/Calendar'
import Maps from './components/page/Maps'
import Widgets from './components/page/Widgets'
import Settings from './components/page/Settings'
import Settingsprofile from './components/page/Settingsprofile'
import Financialcontrol from './components/page/Financialcontrol'
import Exit from './components/page/Exit'
import { Routes, Route } from 'react-router-dom'

import './scss/app.scss'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='address' element={<Address />} />
        <Route path='tables' element={<Tables />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='maps' element={<Maps />} />
        <Route path='widgets' element={<Widgets />} />
        <Route path='settings' element={<Settings />} />
        <Route path='settings/settingsprofile' element={<Settingsprofile />} />
        <Route path='settings/financialcontrol' element={<Financialcontrol />} />
        <Route path='exit' element={<Exit />} />
      </Route>
    </Routes>
  );
}

export default App;
