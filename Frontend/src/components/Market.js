import React, { useEffect, useState } from 'react';

const Market = () => {
    const [marketData, setMarketData] = useState([]);

    useEffect(() => {
        fetch('/api/market/prices')
            .then(response => response.json())
            .then(data => setMarketData(data));
    }, []);

    return (
        <div>
            <h2>Market Prices</h2>
            <ul>
                {marketData.map((item, index) => (
                    <li key={index}>{item.crop} - ₹{item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Market;
