import React, { useState } from 'react';

const CropPrediction = () => {
    const [formData, setFormData] = useState({
        soil_ph: '',
        rainfall: '',
        temperature: ''
    });
    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/crop-prediction/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => setPrediction(data.predicted_crop));
    };

    return (
        <div>
            <h2>Crop Prediction</h2>
            <form onSubmit={handleSubmit}>
                <input name="soil_ph" type="text" placeholder="Soil PH" onChange={handleChange} />
                <input name="rainfall" type="text" placeholder="Rainfall" onChange={handleChange} />
                <input name="temperature" type="text" placeholder="Temperature" onChange={handleChange} />
                <button type="submit">Predict</button>
            </form>
            {prediction && <p>Recommended Crop: {prediction}</p>}
        </div>
    );
};

export default CropPrediction;
