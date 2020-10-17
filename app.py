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
one_stars = base.classes.one_star_restaurant

# Flask setup
app = Flask(__name__)

@app.route('/')
def Index():

    webpage = render_template("index.html")
    return webpage

@app.route('/restaurants')
def Restaurants():

    session = Session(engine)
    results = session.query(one_stars.name).all()
    session.close 

    all_restaurants = []
    for one_star in results:
        dict = {}
        dict["name"] = one_star
        all_restaurants.append(dict)

    # Return the jsonified result. 
    return jsonify(all_restaurants)


if __name__ == '__main__':
    app.run(debug=True)    