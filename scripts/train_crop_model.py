import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

# Load dataset (replace with actual dataset path)
data = pd.read_csv("crop_data.csv")  # Ensure you have a dataset named crop_data.csv

# Encode crop labels
label_encoder = LabelEncoder()
data['crop'] = label_encoder.fit_transform(data['crop'])

# Define features and target
X = data[['soil_ph', 'rainfall', 'temperature']]
y = data['crop']

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save model and label encoder
joblib.dump(model, 'crop_model.pkl')
joblib.dump(label_encoder, 'label_encoder.pkl')

print("Model training complete. Model saved as 'crop_model.pkl'.")
