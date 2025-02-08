import joblib
import numpy as np
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load the trained model
model = joblib.load('scripts/crop_yield_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    soil_ph = data.get('soil_ph')
    rainfall = data.get('rainfall')
    temperature = data.get('temperature')

    features = np.array([[soil_ph, rainfall, temperature]])
    prediction = model.predict(features)

    return jsonify({'predicted_crop': prediction[0]})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
