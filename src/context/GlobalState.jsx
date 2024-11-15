import React, { createContext, useReducer } from "react";
import Reducer from './AppReducer'; // Ensure this matches the file name

// Initial State
const initialState = {
    transactions: [
        { id: 2, text: 'Salary', amount: 300 },
    ]
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    // Actions
    function deleteTransaction(id) { 
        dispatch({
            type: 'DELETE_TRANSACTION', 
            payload: id
        });
    }

    function addTransaction(transaction) { 
        dispatch({
            type: 'ADD_TRANSACTION', 
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{ 
            transactions: state.transactions, 
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
};


