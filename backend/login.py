# SJSU CMPE 138Spring2021TEAM8
import json

from flask import make_response, jsonify, Blueprint, request, flash
from flask_mysql_connector import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
import string
import random
from flask import current_app

auth_api = Blueprint('auth_api', __name__)
mysql = MySQL()


@auth_api.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        if 'email' not in data or 'password' not in data:
            flash("Email/password/fullname cannot be empty.")
            current_app.logger.info("Email/password cannot be empty.")
            return make_response("False", 500)
        email = data['email']
        password = data['password']
        role = data['role'] if 'role' in data else 'Tourist'
        fullname = data['fullname'] if 'fullname' in data else ''
        phone = data['phone'] if 'phone' in data else 0000000000
        address = data['address'] if 'address' in data else ''
        isEmployee = bool(data['isEmployee']) if 'isEmployee' in data else False
        emp_id = None

        conn = mysql.connection
        cursor = conn.cursor(dictionary=True, buffered=True)
        select_one = "SELECT * FROM User WHERE email = %s;"
        cursor.execute(select_one, (email,))
        row = cursor.fetchone()
        if row is not None:
            flash('Email already exists.')
            current_app.logger.info('Email already exists.')
            return make_response("Signup Failed", 401)

        select_one_emp = "SELECT * FROM Employee WHERE email = %s;"
        cursor.execute(select_one_emp, (email,))
        row = cursor.fetchone()
        if isEmployee:
            if row is None:
                flash('User is not registered as employee.')
                print('User is not registered as employee.')
                current_app.logger.info('User is not registered as employee.')
                return make_response("Signup Failed", 401)
            else:
                role = row['role']
                emp_id = row['emp_id']
                print('Employee logged in with role ' + role)
                current_app.logger.info('Employee logged in with role ' , role)

        insert_data = "Insert into User (role,email,password,fullname,phone,address,emp_id) values (%s,%s,%s,%s,%s," \
                      "%s,%s); "
        cursor.execute(insert_data,
                       (role, email, generate_password_hash(password, method='sha256'), fullname, phone, address, emp_id))
        cursor.execute(select_one, (email,))
        current_app.logger.info("Creating user. User name is %s and role is %s", fullname, role)
        row = cursor.fetchone()
        del row['password']
        conn.commit()
        if addTourist(row['id'], fullname, address, phone, email):
            current_app.logger.info('Tourist added')
        cursor.close()
        conn.close()
        return make_response(row, 200)
    except Exception as e:
        current_app.logger.error(e)
    return make_response("False", 500)


@auth_api.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        if 'email' not in data or 'password' not in data:
            flash("Email/password cannot be empty.")
            current_app.logger.info("Email/password cannot be empty.")
            return make_response("Bad request", 400)
        email = data['email']
        password = data['password']

        select_one = "SELECT * FROM User WHERE email = %s;"

        conn = mysql.connection
        cursor = conn.cursor(dictionary=True, buffered=True)
        cursor.execute(select_one, (email,))
        row = cursor.fetchone()
        current_app.logger.info("User %s is logging in", email)
        if not row or not check_password_hash(row['password'], password):
            flash('Please check your login details and try again.')
            current_app.logger.error('Login failed')
            return make_response("Login Failed", 401)
        cursor.close()
        conn.close()
        del row['password']
        return make_response(jsonify(row), 200)
    except Exception as e:
        current_app.logger.error(e)
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
        current_app.logger.info("Adding user  %s ", email)
        row = cursor.fetchone()
        if row is not None:
            flash('Email already exists.')
            return "False"

        insert_data = "Insert into User (role,email,password) values (%s,%s,%s);"
        letters = string.ascii_letters
        password = ''.join(random.choice(letters) for i in range(5))
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
        current_app.logger.error(e)
    return "False"


def addTourist(tourist_id, name, address, phone, email):
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True, buffered=True)
        insert_data = "Insert into Tourist (`tourist_id`, `name`, `address`, `phone_no`, `email`) " \
                      "VALUES (%s,%s,%s,%s,%s);"
        cursor.execute(insert_data, (tourist_id, name, address, phone, email))
        current_app.logger.info("Adding tourist  %s ", tourist_id)
        conn.commit()
        cursor.close()
        conn.close()
        return True
    except Exception as e:
        current_app.logger.error(e)
    return False
