"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#Esta ruta va hacer usada para registrar un nuevo usuario.
@api.route('/user', methods= ['POST'])
def signup():
    pass

@api.route('/user/login', methods= ['POST'])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(username=username, password=password).first()
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

#Esta ruta va hacer usada para registrar ingresos.
@api.route('/income', methods=['POST'])
def add_income():
    pass

#Esta ruta va hacer usada para registrar gastos.
@api.route('/expense', methods=['POST'])
def add_expense():
    pass

