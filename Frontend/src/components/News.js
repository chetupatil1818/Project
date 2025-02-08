import React, { useEffect, useState } from 'react';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/api/news/latest')
            .then(response => response.json())
            .then(data => setNews(data));
    }, []);

    return (
        <div>
            <h2>Latest Agriculture News</h2>
            <ul>
                {news.map((article, index) => (
                    <li key={index}>{article.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default News;
