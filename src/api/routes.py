"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
#from api.models import db, User
from api.models.user import User
from api.models.db import db
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import datetime
from api.models.income import Income
from api.models.expense import Expense
from api.models.reserved import Reserved

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
    name = request.json.get("name", None)
    surname = request.json.get("surname", None)
    birthdate = request.json.get("birthdate", None)
    phonenumber = request.json.get("phonenumber", None)
    user = User()
    user.email = username
    user.password = password
    user.name = name
    user.surname = surname
    user.birthdate = birthdate
    user.phone_number = phonenumber
    user.is_active = True
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize()), 200

@api.route('/user/login', methods= ['POST'])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(username=username, password=password).first()
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })



#Esta ruta obtiene los ingresos
@api.route('/income', methods=['GET'])
def get_incomes():
    pass

#Esta ruta va hacer usada para registrar ingresos.
@api.route('/income', methods=['POST'])
@jwt_required()
def add_income():
    
    income = Income()
    income.value = request.json.get("value",None)
    income.category = request.json.get("category",None)
    income.dateTime = datetime.now()
    income.description = request.json.get("description",None)
    income.user_id = get_jwt_identity()
    db.session.add(income)
    db.session.commit()
    return jsonify(income),200


#Esta ruta obtiene los gastos
@api.route('/expense', methods=['GET'])
def get_expenses():
    pass

#Esta ruta va hacer usada para registrar gastos.
@api.route('/expense', methods=['POST'])
def add_expense():
    value = request.json.get("value", None)
    expense = Expense()
    expense.value = value
    expense.category = category
    expense.dateTime = datetime.now()
    expense.description = description
    expense.user_id = get_jwt_identity()
    db.session.add(expense)
    db.session.commit()
    return jsonify(expense),200
