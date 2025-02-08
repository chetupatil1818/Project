import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Market from './components/Market';
import Weather from './components/Weather';
import News from './components/News';
import Profile from './components/Profile';
import CropPrediction from './components/CropPrediction';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/market" element={<Market />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/news" element={<News />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/predict" element={<CropPrediction />} />
            </Routes>
        </Router>
    );
}

export default App;
