from flask import Flask
from flask import render_template 
from flask import jsonify

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from config import username, password

# Postgresql Database info
database_name = 'michelin_restaurant_db'  
connection_string = f'postgresql://{username}:{password}@localhost:5432/{database_name}'

# Connect to the database
engine = create_engine(connection_string)
base = automap_base()
base.prepare(engine, reflect=True)

# Tables to use
one_star_restaurants = base.classes.one_star_restaurant
two_star_restaurants = base.classes.two_star_restaurant
three_star_restaurants = base.classes.three_star_restaurant

# Flask setup
app = Flask(__name__)

@app.route('/')
def Index():

    webpage = render_template("index.html")
    return webpage

@app.route('/restaurants')
def Restaurants():

    session = Session(engine)
    one_star_results = session.query(one_star_restaurants.name, one_star_restaurants.cuisine).all()
    two_star_results = session.query(two_star_restaurants.name, two_star_restaurants.cuisine).all()
    three_star_results = session.query(three_star_restaurants.name, three_star_restaurants.cuisine).all()
    session.close 

    all_restaurants = []
    for name, cuisine in one_star_results:
        dict = {}
        dict["name"] = name
        dict["cuisine"] = cuisine
        all_restaurants.append(dict)

    for name, cuisine in two_star_results:
        dict = {}
        dict["name"] = name
        dict["cuisine"] = cuisine
        all_restaurants.append(dict)

    for name, cuisine in three_star_results:
        dict = {}
        dict["name"] = name
        dict["cuisine"] = cuisine
        all_restaurants.append(dict)

    # Return the jsonified result. 
    return jsonify(all_restaurants)


if __name__ == '__main__':
    app.run(debug=True)    