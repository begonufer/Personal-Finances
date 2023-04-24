"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
#from api.models import db, User
from api.models.user import User
from api.models.db import db
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

@api.route('/user', methods= ['POST'])
def signup():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    user = User()
    user.email = username
    user.password = password
    user.is_active = True
    db.session.add(user)
    db.session.commit()
    return jsonify(user), 200

@api.route('/user/login', methods= ['POST'])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(username=username, password=password).first()
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route('/user/logout', methods=['POST'])
def logout():
    pass

#Esta ruta obtiene los ingresos
@api.route('/income', methods=['GET'])
def get_incomes():
    pass

#Esta ruta va hacer usada para registrar ingresos.
@api.route('/income', methods=['POST'])
def add_income():
    pass

#Esta ruta obtiene los gastos
@api.route('/expense', methods=['GET'])
def get_expenses():
    pass

#Esta ruta va hacer usada para registrar gastos.
@api.route('/expense', methods=['POST'])
def add_expense():
    pass
