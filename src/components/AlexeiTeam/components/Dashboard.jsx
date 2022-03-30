import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Desposit from './Deposit'
import ReplaceCard from './ReplaceCard'
import CashOut from './CashOut'
import Balance from './Balance'
import Header from './Header'

export default function Dashboard() {
  return (
    <>
    <div>
    <Header/>
    </div>
    <Router>
      <Routes>
        <Route exact path='/deposit' element={<Desposit/>}/>
        <Route exact path='/cashout' element={<CashOut/>}/>
        <Route exact path='/replacecard' element={<ReplaceCard/>}/>
        <Route exact path='/balance' element={<Balance/>}/>
      </Routes>
    </Router>
    </>
  )
}
