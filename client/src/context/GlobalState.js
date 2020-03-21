import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';

// Initial state
// const initialState = {
//     // transactions: [
//     //     { id: 1, text: 'Flower', amount: -20 },
//     //     { id: 2, text: 'Salary', amount: 300 },
//     //     { id: 3, text: 'Book', amount: -10 },
//     //     { id: 4, text: 'Camera', amount: 150 }
//     // ]
//     transactions: []
// };
const initialState = {
    transactions: [],
    error: null,
    loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    async function getTransactions() {
        try {
            // Because we have the proxy of http://localhost:5000 in client/package.json, you don't need to add it here.
            const res = await axios.get('/api/v1/transactions');

            dispatch({
                type: 'GET_TRANSACTION',
                payload: res.data.data
            });

        } catch (err) {
            // The error in Note13 - Postman on POST with backend connected to mongoose with error output in resp.jpg
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

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
            error: state.error,
            loading: state.loading,
            getTransactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
};
