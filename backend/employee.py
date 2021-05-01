import simplejson as json
import config
from flask import Flask, make_response, jsonify, Blueprint,request
from flask_mysql_connector import MySQL

mysql = MySQL()


get_all_employees = "SELECT * FROM Employee"

emp_api = Blueprint('emp_api', __name__)


@emp_api.route('/employees', methods = ['GET', 'POST', 'DELETE','PUT'])
def employees():
    if(request.method == 'GET'):
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            if 'emp_id' in request.args:
                get_emp = """SELECT * FROM Employee  \
                          WHERE emp_id = %s"""
                cursor.execute(get_emp,(request.args.get('emp_id'),))
                rows = cursor.fetchone()
            else:
                get_emp = "SELECT * FROM Employee"
                cursor.execute(get_emp)
                rows = cursor.fetchall()

            return make_response(json.dumps(rows), 200)
        except Exception as e:
            print(e)
            return make_response("false", 500)
    if request.method == 'POST':
        try:
            body = request.json
            post_employee = """INSERT INTO employee (emp_id,salary,emp_name, role,emp_dept,age, gender)
            VALUES ( %s, %s, %s, %s, %s, %s, %s )"""
            data =(body['emp_id'], body['salary'], body['emp_name'],body['role'], body['emp_dept'], body['age'],  body['gender'])
            print(post_employee,data)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(post_employee,data)
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            return make_response("false", 500)

    if request.method == 'DELETE':
        try:
            delete_employee = """DELETE FROM Employee where emp_id = %s"""
            data = request.args.get('emp_id')
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(delete_employee,data)
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            return make_response("false", 500)
    if request.method == 'PUT':
        try:
            body = request.json
            delete_employee = """UPDATE employee set emp_id = %s,salary = %s,emp_name= %s, role= %s,emp_dept= %s,
            age = %s, gender = %s WHERE emp_id = %s"""
            data = (body['emp_id'], body['salary'], body['emp_name'], body['role'], body['emp_dept'], body['age'],
                    body['gender'],body['emp_id'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(delete_employee,data)
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            print(e)
            return make_response("false", 500)
