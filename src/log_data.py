from sense_hat import SenseHat
from datetime import datetime
import csv
import os

sense = SenseHat()

# File to save data
data_file = "/home/nicko/environment-monitor/public/data.csv"

def log_sensor_data():
    # Get sensor data from the Sense HAT
    temperature = sense.get_temperature()
    pressure = sense.get_pressure()
    humidity = sense.get_humidity()

    # Round the values for consistency
    temperature = round(temperature, 2)
    pressure = round(pressure, 2)
    humidity = round(humidity, 2)
    
    # Get the current timestamp
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    
    # Check if file exists and write headers if it doesn't
    if not os.path.exists(data_file):
        with open(data_file, 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(["Timestamp", "Temperature", "Pressure", "Humidity"])
    
    # Append the data to the CSV file
    with open(data_file, 'a', newline='') as f:
        writer = csv.writer(f)
        writer.writerow([timestamp, temperature, pressure, humidity])
        
if __name__ == "__main__":
    log_sensor_data()

