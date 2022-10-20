import numpy as np
import json


    # "1": {
    #   "race": 1,
    #   "power": 4,
    #   "shot": 103,
    #   "gas_type": 1,
    #   "lat": 37.412033,
    #   "lng": 127.127079
    # },

res = {}
positions = {}

for i in range(1, 200):
    race     = np.random.randint(1,4)
    power    = np.random.randint(1,10)
    shot     = np.random.randint(100,1000)
    gas_type = np.random.randint(1,3)
    lat      = 37 + np.random.uniform(0.35, 0.5)
    lng      = 127 + np.random.uniform(0.1, 0.2)

    positions[str(i)] = {
        "race":race,
        "power":power,
        "shot":shot,
        "gas_type":gas_type,
        "lat":lat,
        "lng":lng,   
    }
for i in range(200, 300):
    race     = np.random.randint(1,4)
    power    = np.random.randint(1,10)
    shot     = np.random.randint(100,1000)
    gas_type = np.random.randint(1,3)
    lat      = 37 + np.random.uniform(0.3, 0.8)
    lng      = 127 + np.random.uniform(0.0, 0.2)

    positions[str(i)] = {
        "race":race,
        "power":power,
        "shot":shot,
        "gas_type":gas_type,
        "lat":lat,
        "lng":lng,   
    }
res["positions"]=positions
with open("dataset.json", "w") as json_file:
    json.dump(res, json_file)
