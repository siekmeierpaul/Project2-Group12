from flask import Flask
from flask import render_template 
from flask import jsonify

app = Flask(__name__)

@app.route('/')
def Index():
    webpage = render_template("index.html")
    return webpage

if __name__ == '__main__':
    app.run(debug=True)    