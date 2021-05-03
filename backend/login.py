import json

from flask import make_response, jsonify, Blueprint, request, flash
from flask_mysql_connector import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
import string
import random

auth_api = Blueprint('auth_api', __name__)
mysql = MySQL()


@auth_api.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        if 'email' not in data or 'password' not in data or 'fullname' not in data:
            flash("Email/password/fullname cannot be empty.")
            print("Email/password/fullname cannot be empty.")
            return make_response("False", 500)
        email = data['email']
        password = data['password']
        role = data['role'] if 'role' in data else 'Tourist'
        fullname = data['fullname'] if 'fullname' in data else ''
        phone = data['phone'] if 'phone' in data else 0000000000
        address = data['address'] if 'address' in data else ''

        conn = mysql.connection
        cursor = conn.cursor(dictionary=True, buffered=True)
        select_one = "SELECT * FROM User WHERE email = %s;"
        cursor.execute(select_one, (email,))
        row = cursor.fetchone()
        if row is not None:
            flash('Email already exists.')
            print('Email already exists.')
            return make_response("Signup Failed", 401)

        insert_data = "Insert into User (role,email,password,fullname,phone,address) values (%s,%s,%s,%s,%s,%s);"
        cursor.execute(insert_data,
                       (role, email, generate_password_hash(password, method='sha256'), fullname, phone, address))
        cursor.execute(select_one, (email,))
        row = cursor.fetchone()
        del row['password']
        conn.commit()
        if addTourist(row['id'], fullname, address, phone, email):
            print('Tourist added')
        cursor.close()
        conn.close()
        return make_response(row, 200)
    except Exception as e:
        print(e)
    return make_response("False", 500)


@auth_api.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        if 'email' not in data or 'password' not in data:
            flash("Email/password cannot be empty.")
            print("Email/password cannot be empty.")
            return make_response("Bad request", 400)
        email = data['email']
        password = data['password']

        select_one = "SELECT * FROM User WHERE email = %s;"

        conn = mysql.connection
        cursor = conn.cursor(dictionary=True, buffered=True)
        cursor.execute(select_one, (email,))
        row = cursor.fetchone()
        if not row or not check_password_hash(row['password'], password):
            flash('Please check your login details and try again.')
            print('Please check your login details and try again.')
            return make_response("Login Failed", 401)
        cursor.close()
        conn.close()
        del row['password']
        return make_response(jsonify(row), 200)
    except Exception as e:
        print(e)
    return make_response("False", 500)


def addUser(email, role):
    try:
        # data = request.json
        # email = data['email']
        # role = data['role']
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True, buffered=True)
        select_one = "SELECT * FROM User WHERE email = %s;"
        cursor.execute(select_one, (email,))
        row = cursor.fetchone()
        if row is not None:
            flash('Email already exists.')
            return "False"

        insert_data = "Insert into User (role,email,password) values (%s,%s,%s);"
        letters = string.ascii_letters
        password = ''.join(random.choice(letters) for i in range(5))
        print(password)
        cursor.execute(insert_data,
                       (role, email, generate_password_hash(password, method='sha256')))
        conn.commit()
        cursor.close()
        conn.close()
        user = {
            "email": email,
            "password": password,
            "role": role
        }
        return json.dumps(user)
    except Exception as e:
        print(e)
    return "False"


def addTourist(tourist_id, name, address, phone, email):
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True, buffered=True)
        insert_data = "Insert into Tourist (`tourist_id`, `name`, `address`, `phone_no`, `email`) " \
                      "VALUES (%s,%s,%s,%s,%s);"
        cursor.execute(insert_data, (tourist_id, name, address, phone, email))
        conn.commit()
        cursor.close()
        conn.close()
        return True
    except Exception as e:
        print(e)
    return False
