from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify

app = Flask(__name__)
api = Api(app)

CORS(app)

@app.route("/record")
def sajt():
    return jsonify('Recording')

@app.route("/check")
def check():
    return jsonify('Checked recording')

if __name__ == '__main__':
   app.run(port=5002)