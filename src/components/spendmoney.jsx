import React from 'react';
import './spendmoney.css';

const SpendMoneyCounter = ({ totalMoney }) => {
const formatMoney = (number) => {
    return number.toLocaleString();
};

return (
    <div className="spend-money-container">
    {totalMoney <= 0 ? (
        <span>$0</span>
    ) : (
        <span>${formatMoney(totalMoney)}</span>
    )}
    </div>
);
};

export default SpendMoneyCounter;
