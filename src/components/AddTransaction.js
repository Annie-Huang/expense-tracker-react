import React from 'react';

export const AddTransaction = () => {
    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form">
                <div class="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..."/>
                </div>
                <div class="form-control">
                    <label htmlFor="amount"
                    >Amount <br/>
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" placeholder="Enter amount..."/>
                </div>
                <button class="btn">Add transaction</button>
            </form>
        </>
    );
};
