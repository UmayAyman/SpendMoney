import React from "react";

function Counter({ quantity, onChange, price, setTotalMoney, totalMoney }) {
    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        const totalCost = newQuantity * price;

        if (totalMoney >= totalCost) {
            onChange(newQuantity);
            setTotalMoney(totalMoney - price);
        } else {
            alert("You don't have enough money to purchase this item.");
        }
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            const newQuantity = quantity - 1;
            onChange(newQuantity);
            setTotalMoney(totalMoney + price);
        }
    };

    return (
        <div className="counter">
            <button className = "decrement" onClick={handleDecrement}>Sell</button>
            <h2>{quantity}</h2>
            <button className = "increment" onClick={handleIncrement}>Buy</button>
        </div>
    );
}

export default Counter;
