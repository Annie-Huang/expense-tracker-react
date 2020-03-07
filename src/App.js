import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Balance} from "./components/Balance";

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Balance/>
            </div>
        </>
    );
}

export default App;
