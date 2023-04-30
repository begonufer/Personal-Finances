"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
#from api.models import db, User
from api.models.user import User
from api.models.db import db
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from datetime import datetime
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
    user = User()
    user.email = request.json.get("email", None)
    user.password = request.json.get("password", None)
    user.name = request.json.get("name", None)
    user.surname = request.json.get("surname", None)
    user.birthdate = request.json.get("birthdate", None)
    user.phone_number = request.json.get("phonenumber", None)
    user.is_active = True
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize()), 200

@api.route('/user/login', methods= ['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })



#Esta ruta obtiene los ingresos
@api.route('/income', methods=['GET'])
@jwt_required()
def get_incomes():
    user_id = get_jwt_identity() 
    incomes = Income.query.filter_by(user_id=user_id).all()
    return jsonify([income.serialize() for income in incomes])

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
    return jsonify(income.serialize()),200


#Esta ruta obtiene los gastos
@api.route('/expense', methods=['GET'])
def get_expenses():
    expenses = Expense.query.all()
    return jsonify([expense.serialize() for expense in expenses])

#Esta ruta va hacer usada para registrar gastos.
@api.route('/expense', methods=['POST'])
@jwt_required()
def add_expense():

    expense = Expense()
    expense.value = request.json.get("value", None)
    expense.category = request.json.get("category", None)
    expense.dateTime = datetime.now()
    expense.description = request.json.get("description", None)
    expense.user_id = get_jwt_identity()
    db.session.add(expense)
    db.session.commit()
    return jsonify(expense.serialize()),200
