import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionItem = ({ transactions }) => {
    const { deleteTransaction } = useContext(GlobalContext); // Fixed typo

    const sign = transactions.amount < 0 ? '-' : '+';

    return (
        <li className={transactions.amount < 0 ? 'minus' : 'plus'}>
            {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transactions.id)}>X</button> {/* Fixed typo */}
        </li>
    );
}

export default TransactionItem;



