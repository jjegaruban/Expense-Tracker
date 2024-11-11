import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TransactionItem from './Transaction'; // Import the renamed component

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id} transactions={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;

