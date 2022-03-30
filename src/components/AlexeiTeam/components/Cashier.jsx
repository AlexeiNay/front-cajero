import React from 'react'
import SideNav from './SideNav'
import Header from './Header'
import Link from './Link';
import { options } from '../helpers/sideoptions';
import Dashboard from './Dashboard';

const Cashier = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <SideNav>
        <div>
        <Link url="/deposit" icon="fa-solid fa-house" text={options[0]}></Link>
        <Link url="/cashout" icon="fa-solid fa-address-card" text={options[1]}></Link>
        <Link url="/replacecard" icon="fa-solid fa-credit-card" text={options[2]}></Link>
        <Link url="/balance" icon="fa-solid fa-money-bill-wave" text={options[3]}></Link>
        </div>
        <div className='Logout'>
        <Link url="#" icon="fa-solid fa-user" text='Log out'></Link>
        </div>
      </SideNav>
      <div style={{flex: 1}}>
        <main>
            
            <Dashboard/>
        </main>
     </div>
    </div>
  )
}

export default Cashier