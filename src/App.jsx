import React from 'react'
import Header from './componets/Header'
import Balance from './componets/Balance'
import IncomeExpenses from './componets/IncomeExpenses'
import TransactionList from './componets/TransactionList'
import Addtransaction from './componets/Addtransaction'
import { GlobalProvider } from './context/GlobalState'


const App = () => {
  return (
    <GlobalProvider>
   <Header/>
   <div className="container">
    <Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <Addtransaction/>
   </div>
    </GlobalProvider>
  )
}

export default App
