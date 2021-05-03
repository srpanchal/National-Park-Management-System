from flask import make_response, jsonify, Blueprint, request, flash
from flask_mysql_connector import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
from flask import current_app

auth_api = Blueprint('auth_api', __name__)
mysql = MySQL()


@auth_api.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        if 'email' not in data or 'password' not in data or 'fullname' not in data:
            flash("Email/password/fullname cannot be empty.")
            return make_response("False", 500)
        email = data['email']
        password = data['password']
        role = data['role'] if 'role' in data else 'Tourist'
        fullname = data['fullname'] if 'fullname' in data else ''
        phone = data['phone'] if 'phone' in data else ''
        address = data['address'] if 'address' in data else ''

        conn = mysql.connection
        cursor = conn.cursor(dictionary=True, buffered=True)
        select_one = "SELECT * FROM User WHERE email = %s;"
        cursor.execute(select_one, (email,))
        row = cursor.fetchone()
        if row is not None:
            flash('Email already exists.')
            return make_response("Signup Failed", 401)

        insert_data = "Insert into User (role,email,password,fullname,phone,address) values (%s,%s,%s,%s,%s,%s);"
        cursor.execute(insert_data,
                       (role, email, generate_password_hash(password, method='sha256'), fullname, phone, address))
        current_app.logger.info("User created. Username is %s and role is %s", fullname, role)
        conn.commit()
        cursor.close()
        conn.close()
        return make_response("True", 200)
    except Exception as e:
        current_app.logger.error(e)
    return make_response("False", 500)


@auth_api.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        if 'email' not in data or 'password' not in data:
            flash("Email/password cannot be empty.")
            return make_response("Bad request", 400)
        email = data['email']
        password = data['password']

        select_one = "SELECT * FROM User WHERE email = %s;"

        conn = mysql.connection
        cursor = conn.cursor(dictionary=True, buffered=True)
        cursor.execute(select_one, (email,))
        current_app.logger.info("User %s logging in", email)
        row = cursor.fetchone()
        if not row or not check_password_hash(row['password'], password):
            current_app.logger.error("Login failed")
            flash('Please check your login details and try again.')
            return make_response("Login Failed", 401)

        cursor.close()
        conn.close()
        return make_response(jsonify(row), 200)
    except Exception as e:
        current_app.logger.error(e)
    return make_response("False", 500)
