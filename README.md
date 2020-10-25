# Michelin Restaurants

**Group Members:**
Rose Inglis, Michael Neustadter, Dan Evans, Paul Siekmeier

**Project Subject:**
Michelin Restaurant Ratings and Details Explored

**Data:**
https://www.kaggle.com/jackywang529/michelin-restaurants

**ETL and Project Setup Instructions:**
To replicate or use this site, follow these steps:

1. Build PostgreSQL database
    * In Postgres make a new DB called "michelin_restaurant_db"
    * Run the schema.sql file from the repo, \\project2-group12\sql\schema.sql
    * Import the .csv's to their corresponding tables

2. Make a config.py with your postgres info, this is used for the flask server
    * Variables are "username" and "password"
    
