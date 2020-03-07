import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

export const TransactionList = () => {
    // const context = useContext(GlobalContext);
    // console.log(context);
    const {transactions} = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <li className="minus">
                        {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
                    </li>
                ))}
            </ul>
        </>
    );
};
